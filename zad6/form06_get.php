<?php
	session_start();
	$link = mysqli_connect("localhost", "scott", "tiger", "instytut");
	if (!$link) {
		printf("Connect failed: %s\n", mysqli_connect_error());
		exit();
	}
	
	printf("<a href=\"form06_post.php\">Dodaj nowego pracownika</a>");
	
	
	$result = mysqli_query($link,"SELECT * FROM pracownicy");
	if (!$result) {
		printf("Query failed: %s\n", mysqli_error($link));
	}
	
	printf("<h1>PRACOWNICY</h1>");
	printf("<table border=\"1\">");
	printf("<tr><th>ID_PRAC</th><th>NAZWISKO</th><th>ETAT</th><th>ZATR.</th></tr>");
	if (isSet($_SESSION["result"]))
	{
		printf("%s\n", $_SESSION["result"]);
		unset($_SESSION["result"]);
	}
	while ($obj = mysqli_fetch_object($result))
		printf("<tr><td>%d</td><td>%s</td><td>%s</td><td>%s</td></tr>",
			$obj->ID_PRAC, $obj->NAZWISKO, $obj->ETAT, $obj->ZATRUDNIONY);
			
	printf("</table>");
	mysqli_free_result($result);
	mysqli_close($link);
	
?>