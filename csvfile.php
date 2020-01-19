<?php require ("config.php");
        require "PHPMailer\PHPMailerAutoload.php" ;
     //check if admin
     session_start();
  if( $_SESSION['username'] != 'ad-min'){
   echo "<script>window.location.href = './';</script>";		
  }
  $GLOBALS ['x']='1';
  $messeges = "0";
  
  if(isset($_GET["table"])){
      $table = $_GET["table"];
      echo $table ; 
  }
  /*
  include "simple_html_dom.php";
  $html = str_get_html($table);

    header('Content-type: application/ms-excel');
    header('Content-Disposition: attachment; filename=sample.csv');
    $fp = fopen("php://output", "w");
    foreach($html->find('tr') as $element)
    {
    $td = array();
    foreach( $element->find('th') as $row)  
    {
        $td [] = $row->plaintext;
    }
    fputcsv($fp, $td);

    $td = array();
    foreach( $element->find('td') as $row)  
    {
        $td [] = $row->plaintext;
    }
    fputcsv($fp, $td);
    }


    fclose($fp);*/
?>