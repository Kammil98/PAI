//most important links 
/*
Udemy :https://www.udemy.com/course/nodejs-web-scraping/?utm_source=adwords&utm_medium=udemyads&utm_campaign=WebDevelopment_v.PROF_la.EN_cc.ROW_ti.8322&utm_content=deal4584&utm_term=_._ag_80385735995_._ad_389663848491_._kw__._de_c_._dm__._pl__._ti_dsa-774930029169_._li_1011615_._pd__._&matchtype=b&gclid=Cj0KCQjwjoH0BRD6ARIsAEWO9Ds8aMllhmQpFjBdTOGrFfNRvDe-TPXGLITk56Jzs9qURtpJgY7TotYaAiKYEALw_wcB
Iterating over table:
https://medium.com/@stefanhyltoft/scraping-html-tables-with-nodejs-request-and-cheerio-e3c6334f661b
*/
//imports
const request = require('request-promise');
//const req = require('request');//just to force online compiler to install requset
const cheerio = require('cheerio');

//save URL addres to variable
const URL = 'https://www.gsmmaniak.pl/ranking-telefonow/';

class Phone {
  constructor(phoneName, price, econo, unitVal) {
    this.phoneName = phoneName;
    this.price = price;
    this.econo = econo;
    this.unitVal = unitVal;//better to keep it, than calculate in sort function
  }
  display(ranking){
    console.log("");
    console.log(String(ranking).padEnd(10), this.phoneName.trim().padEnd(40), 
      String(this.price).padEnd(5) + " zł", String(this.econo).padEnd(15), 
      this.unitVal, "zł");
    /*
    console.log("nazwa komórki:", this.phoneName);
    console.log("cena:", this.price, "zł");
    console.log("ekonomia:", this.econo);
    console.log("cena za punkt ekonomii:", this.unitVal, "zł");*/
  };
}

//function, which will launch
(async () => {
  //load html context of this page
  //await mean wait for 'request' function to finish
  const response = await request(URL);

  //prepare html context to be processed by cheerio library
  //save html context to $ variable
  let $ = cheerio.load(response);

  var phones = [];
  //for every tr in this table
  $('table[id="sort-cols-1287091163"] > tbody > tr').each((index, element) => {
    //take fourth "td" element from this tr
    let price = $(element).find('td:nth-child(4)').text();
    //process only phones with knonw price
    if(price != " "){
      //take data frome tds
      let priceNumeric = parseFloat(price.replace(/\./g, ''));
      let econo = $(element).find('td:nth-child(10)').text();
      let econoNumeric = parseFloat(econo.replace(/,/g, '.'));
      let phoneName = $(element).find('td[class="pname"]').text();
      let unitVal = Math.round((priceNumeric/econoNumeric) * 100) / 100;
      phones.push(new Phone(phoneName, priceNumeric, econoNumeric, unitVal));
    }
  });

  //sort phones by unitVal
  phones.sort((a, b) => (a.unitVal > b.unitVal) ? 1 : -1)
  //display phones
  var phonesNo = phones.length;
  console.log("pozycja".padEnd(10), "nazwa".padEnd(40), 
      "cena".padEnd(8), "punkty ekonomii", "cena za punkt ekonomii");
  for (i = 0; i < phonesNo; i++) {
    phones[i].display(i + 1);
  }
})()