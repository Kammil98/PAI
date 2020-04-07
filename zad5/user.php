<?php session_start(); ?>
<!DOCTYPE html>
<html>
	<head>
		<title>PHP</title>
		<meta charset='UTF-8' />
	</head>
	<body>
		
		<?php
			require_once("funkcje.php");
			if(!isSet($_SESSION["zalogowany"]) or $_SESSION["zalogowany"] != 1){
				header("Location: index.php");
			}
			 echo "Zalogowano" . "<br/>";
			 echo "Imię i nazwisko: " . test_input($_SESSION["zalogowanyImie"]) . "<br/>";
		?><br/>
		<a href="index.php">Strona główna</a>
		
		<!--Ładowanie obrazka-->
		<fieldset>
			<legend>Wyświetlanie obrazka:</legend>
			<form action="user.php" method="POST" enctype="multipart/form-data">
				Plik: <input type=file name="myfile"/><br/>
				<input type=submit name="pokaz" value="pokaz"/>
			</form>
		</fieldset>
		
		<!--Wyświetlanie obrazka-->
		<?php
			if(isSet($_POST["pokaz"])){
				echo "<img src=\"IMG_0430.JPG\" width=\"200\" height=\"150\">";
			}
			else{
				echo "Nie załadowano obrazka" . "<br/>";
			}
		?>
		
		<!--//Wylogowanie-->
		<fieldset>
			<legend>Wylogowanie:</legend>
			<form action="index.php" method="GET">
				<input type=submit name="wyloguj" value="wyloguj"/>
			</form>
		</fieldset>
	</body>
</html>
