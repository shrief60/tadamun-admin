<?php require("config.php");
//check if admin
session_start();
if ($_SESSION['username'] != 'ad-min') {
    echo "<script>window.location.href = './';</script>";
}
$GLOBALS['x'] = '1';
// create EXIST query
/* $query = 'SELECT cities.*,branches.* FROM cities join branches on cities.id =branches.government_id ';
*/
$query2 = 'SELECT * FROM dynamic_numbers where id = 1 ';

//get result
$result = mysqli_query($conn, $query2);

// Fetch Data
$posts = array();
while ($row = $result->fetch_assoc()) {
    $posts = $row;
}
/* echo $posts['years'];
die(); */
// FREE THE RESULT
 echo '<pre>';
print_r($posts);
echo '</pre>'; 
/* foreach ($posts as $key => $value) {
    echo "=============================";
    echo "<p>" . $value[0]['government_ar'] . " </p>";
    echo "=============================";
    foreach ($value as $br_key => $br_value) {
        # code...
        echo '<pre>';
        echo ($br_value['name']);
        echo '</pre>';
    }
} */
mysqli_free_result($result);
//check query
if (!$result) {
    exit('<p>Error performing query: ');
}

if (isset($_POST['confirm'])) {

    $delete = $_POST['delete'];

    $sql = "DELETE FROM `cities` WHERE id='$delete'";
    if ($conn->query($sql) === False) {
        echo "Error: " . $sql . "<br>" . $conn->error;
    } else {
        header("Refresh:0");
    }
}
// close connection
mysqli_close($conn);
?>



<script>
    Object.keys(cities).forEach(function(key) {
        console.log(key, cities[key]);
    });
</script>