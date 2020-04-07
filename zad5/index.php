<?php session_start(); ?>
<?php 
require ("funkcje.php");
?>
<!DOCTYPE html>
<html>
	<head>
		<title>PHP</title>
		<meta charset='UTF-8' />
	</head>
	<body>
		<h1>Nasz system</h1><br/>
		<a href="user.php">strona użytkownika</a>
		<?php
		if(isSet($_GET["wyloguj"])){
			$_SESSION["zalogowany"] = 0;
		}
		
		//zadanie nr 6
		/*if(isSet($_POST["zaloguj"])){
			echo "Przesłany login: " . test_input($_POST["login"]) . "<br/>";
			echo "Przesłane haslo: " . test_input($_POST["haslo"]);
		}*/
		?>
		
		<!--Logowanie do user.php-->
		<fieldset>
			<legend>Logowanie:</legend>
			<form action="logowanie.php" method="POST">
				Login: <input type=text name="login"/><br/>
				Hasło: <input type=password name="haslo"/><br/>
				<input type=submit name="zaloguj" value="Zaloguj"/>
			</form>
		</fieldset>
		
		<!--Przekierowanie do cookie.php-->
		<fieldset>
			<legend>Pliki Cookie:</legend>
			<form action="cookie.php" method="GET">
				Czas[s]: <input type=number name="czas"/><br/>
				<input type=submit name="utworzCookie" value="utworzCookie"/>
			</form>
		</fieldset>
		
		<!--//Wyświetlanie wartości cookie-->
		<?php
			if(isSet($_COOKIE["moj_czas"])){
				echo "Wykradnięty czas: " . $_COOKIE["moj_czas"];
			}
		?>
	</body>
</html>
