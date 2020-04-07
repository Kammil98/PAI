<?php 
	session_start();
	require ("funkcje.php");
	if($osoba1->login == test_input($_POST["login"])
		and $osoba1->haslo == test_input($_POST["haslo"]))
	{
		$_SESSION["zalogowanyImie"] = $osoba1->imieNazwisko;
		$_SESSION["zalogowany"] = 1;
		header("Location: user.php");
	}
	else{
		if($osoba2->login == test_input($_POST["login"])
			and $osoba2->haslo == test_input($_POST["haslo"])){
			$_SESSION["zalogowanyImie"] = $osoba2->imieNazwisko;
			$_SESSION["zalogowany"] = 1;
			header("Location: user.php");
		}
		else{
			header("Location: index.php");
		}
	}
	
	
	
?>