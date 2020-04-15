<?php session_start(); ?>
<?php
	if (isSet($_POST["id_prac"]) &&
		is_numeric($_POST["id_prac"]) &&
		is_string($_POST["nazwisko"]))
	{
		$link = mysqli_connect("localhost", "scott", "tiger", "instytut");
		$sql = "INSERT INTO pracownicy(id_prac,nazwisko) VALUES(?,?)";
		$stmt = $link->prepare($sql);
		$stmt->bind_param("is", $_POST["id_prac"], $_POST["nazwisko"]);
		$result = $stmt->execute();
		if (!$result) {
			$_SESSION["result"] = mysqli_error($link);
			header("Location: form06_post.php");
		}
		else{
			$_SESSION["result"] = "zatrudniono ".$_POST["id_prac"]." ".$_POST["nazwisko"];
			header("Location: form06_get.php");
		}
		$stmt->close();
		$link->close();
	}
?>