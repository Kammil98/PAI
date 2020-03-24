function isEmpty(text) {
  return text.length == 0;   
}

function isWhiteSpaceOrEmpty(str) {
 return /^[\s\t\r\n]*$/.test(str);
}

function isEmailValid(str) {
	let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
	if (email.test(str))
		return false;
	
	else {
		return true;
	}
}

function checkStringAndFocus(obj, msg, validateFunc) {
	 let str = obj.value;
	 let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
	 if (validateFunc(str)) {
		 document.getElementById(errorFieldName).innerHTML = msg;
		 obj.focus();
		 return false;
	 }
	 else {
		document.getElementById(errorFieldName).innerHTML = "";
		return true;
	 }
}

function showElement(e) {
	document.getElementById(e).style.visibility = 'visible';
}

function hideElement(e) {
	document.getElementById(e).style.visibility = 'hidden';
}

function validate(formHandler) {
	return (
		checkStringAndFocus(formHandler.elements["f_email"], "Podaj właściwy e-mail", isEmailValid) &&
		checkStringAndFocus(formHandler.elements["f_imie"], "Podaj imię!", isWhiteSpaceOrEmpty) &&
		checkStringAndFocus(formHandler.elements["f_nazwisko"], "Podaj nazwisko!", isWhiteSpaceOrEmpty) &&
		checkStringAndFocus(formHandler.elements["f_kod"], "Podaj kod!", isWhiteSpaceOrEmpty) &&
		checkStringAndFocus(formHandler.elements["f_ulica"], "Podaj ulicę!", isWhiteSpaceOrEmpty) &&
		checkStringAndFocus(formHandler.elements["f_miasto"], "Podaj miasto!", isWhiteSpaceOrEmpty)
		
	);
}

function alterRows(i, e) {
	 if (e) {
		 e = e[0].getElementsByTagName("tr");   
		 for(i = 0; i < e.length; i+=2) {
			e[i].setAttribute("style", "background-color: Aqua;");
		}
	 }
}

function nextNode(e) {
 while (e && e.nodeType != 1) {
 e = e.nextSibling;
 }
 return e;
}

function prevNode(e) {
 while (e && e.nodeType != 1) {
 e = e.previousSibling;
 }
 return e;
}

function swapRows(b) {
 let tab = prevNode(b.previousSibling);
 let tBody = nextNode(tab.firstChild);
 let lastNode = prevNode(tBody.lastChild);
 tBody.removeChild(lastNode);
 let firstNode = nextNode(tBody.firstChild);
 tBody.insertBefore(lastNode, firstNode);
}

function cnt(form, msg, maxSize) {
 if (form.value.length > maxSize)
 form.value = form.value.substring(0, maxSize);
 else
 msg.innerHTML = maxSize - form.value.length;
}



