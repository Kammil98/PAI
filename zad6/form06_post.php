<?php
	session_start();
?>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	</head>
	<body>
		<a href="form06_get.php">lista pracowników</a>
		
		<!--Wstawianie pracownika-->
		<fieldset>
			<legend>Logowanie:</legend>
			<form action="form06_redirect.php" method="POST">
				id_prac <input type="text" name="id_prac">
				nazwisko <input type="text" name="nazwisko">
				<input type="submit" value="Wstaw">
				<input type="reset" value="Wyczysc">
		</form>
		</fieldset>
	
		<?php
			if (isSet($_SESSION["result"]))
			{
				printf("Query failed: %s\n", $_SESSION["result"]);
				unset($_SESSION["result"]);
			}
		?>
	</body>
</html>