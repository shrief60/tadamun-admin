<?php 
require ("config.php");
	if(isset($_POST['submit'])){
    
		$username = $_POST['username'];
		$password = $_POST['password'];
		
		$query = 'SELECT * FROM users where name="'.$username .'" and password = "'.$password.'";';
		$result = mysqli_query($conn, $query);
		$row = $result->fetch_assoc();
		mysqli_free_result($result);
		if ($password==$row['password']&&$username==$row['name'])
		{
			// set admin		
			session_start();
			$_SESSION['username'] = 'ad-min';
			$_SESSION['logname'] = $row['name'];			
			echo "<script> window.onload = function(){window.location.href = './Admin-branches.php';}</script>";
		}
		else
		{
			 echo "<script> window.onload = function(){window.location.href = './index.php';}</script>";
		}
   	}
	mysqli_close($conn);
?>
