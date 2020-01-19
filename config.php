<?php
 
    $conn = mysqli_connect('localhost', 'root', '', 'altadamon');
    // $conn = mysqli_connect('localhost', 'rfevmnuva93x', 'Am@n2020', 'aman_branches_admin_db');
    
    if (mysqli_connect_errno()) {
        //connection failed
        echo "connection Failed";
    }
    mysqli_set_charset($conn, 'utf8');
