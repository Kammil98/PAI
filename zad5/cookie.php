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
			if(isSet($_GET["utworzCookie"])){
				setcookie("moj_czas", $_GET["czas"], time() + 10, "/");
				echo "Z powodzeniem wykradłem Twoje dane :)";
			}
		?><br/>
		<a href="index.php">Wstecz</a>
	</body>
</html>
