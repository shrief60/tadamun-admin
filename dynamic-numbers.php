<?php require("config.php");
//check if admin
session_start();
if ($_SESSION['username'] != 'ad-min') {
    echo "<script>window.location.href = './';</script>";
}
$GLOBALS['x'] = '1';
// create EXIST query
$query = 'SELECT * FROM dynamic_numbers';
//get result
$result = mysqli_query($conn, $query);
// Fetch Data
//$posts = mysqli_fetch_all($result, MYSQLI_ASSOC);
$posts = array();
while ($row = $result->fetch_assoc()) {
    $posts[] = $row;
}
// FREE THE RESULT
mysqli_free_result($result);
//check query
if (!$result) {
    exit('<p>Error performing query: ');
}

if (isset($_POST['confirm'])) {

    $delete = $_POST['delete'];

    $sql = "DELETE FROM `dynamic_numbers` WHERE id='$delete'";
    if ($conn->query($sql) === False) {
        echo "Error: " . $sql . "<br>" . $conn->error;
    } else {
        header("Refresh:0");
    }
}
// close connection
mysqli_close($conn);
?>


<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <title>Altadamun</title>
    <style>
        #loader {
            transition: all .3s ease-in-out;
            opacity: 1;
            visibility: visible;
            position: fixed;
            height: 100vh;
            width: 100%;
            background: #fff;
            z-index: 90000
        }

        #loader.fadeOut {
            opacity: 0;
            visibility: hidden
        }

        .spinner {
            width: 40px;
            height: 40px;
            position: absolute;
            top: calc(50% - 20px);
            left: calc(50% - 20px);
            background-color: #333;
            border-radius: 100%;
            -webkit-animation: sk-scaleout 1s infinite ease-in-out;
            animation: sk-scaleout 1s infinite ease-in-out
        }

        @-webkit-keyframes sk-scaleout {
            0% {
                -webkit-transform: scale(0)
            }

            100% {
                -webkit-transform: scale(1);
                opacity: 0
            }
        }

        @keyframes sk-scaleout {
            0% {
                -webkit-transform: scale(0);
                transform: scale(0)
            }

            100% {
                -webkit-transform: scale(1);
                transform: scale(1);
                opacity: 0
            }
        }
    </style>
    <link href="style.css" rel="stylesheet">
    <link rel="icon" href="assets/static/images/tadamunlogo-blue.png">
</head>
</head>

<body class="app">
    <!-- @TOC -->
    <!-- =================================================== -->
    <!--
      + @Page Loader
      + @App Content
          - #Left Sidebar
              > $Sidebar Header
              > $Sidebar Menu

          - #Main
              > $Topbar
              > $App Screen Content
    -->

    <!-- @Page Loader -->
    <!-- =================================================== -->
    <div id='loader'>
        <div class="spinner"></div>
    </div>

    <script>
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            setTimeout(() => {
                loader.classList.add('fadeOut');
            }, 300);
        });
    </script>

    <!-- @App Content -->
    <!-- =================================================== -->
    <div>
        <!-- #Left Sidebar ==================== -->
        <div class="sidebar">
            <div class="sidebar-inner">
                <!-- ### $Sidebar Header ### -->
                <div class="sidebar-logo">
                    <div class="peers ai-c fxw-nw">
                        <div class="peer peer-greed">
                            <a class="sidebar-link td-n" href="#">
                                <div class="peers ai-c fxw-nw">
                                    <div class="peer">
                                        <div class="logo">
                                            <img src="assets/static/images/tadamunlogo-blue.png" style="margin-top : 20px; margin-left : 25px; width:25px;height:25px;" alt="">
                                        </div>
                                    </div>
                                    <div class="peer peer-greed">
                                        <h5 class="lh-1 mB-0 logo-text">Al TADAMUN ADMIN</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="peer">
                            <div class="mobile-toggle sidebar-toggle">
                                <a href="" class="td-n">
                                    <i class="ti-arrow-circle-left"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ### $Sidebar Menu ### -->
                <ul class="sidebar-menu scrollable pos-r">
                    <li class="nav-item mT-30 active">
                        <a class="sidebar-link" href="Admin-cities.php">
                            <span class="icon-holder">
                                <i class="c-orange-500 ti-layout-list-thumb"></i>
                            </span>
                            <span class="title">Govrnorates/المحافظات</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class='sidebar-link' href="Admin-branches.php">
                            <span class="icon-holder">
                                <i class="c-teal-500 ti-view-list-alt"></i>
                            </span>
                            <span class="title"> branches/الفروع</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class='sidebar-link' href="dynamic-numbers.php">
                            <span class="icon-holder">
                                <i class="c-red-500 ti-view-list-alt"></i>
                            </span>
                            <span class="title"> Year Statistics/أرقام السنة</span>
                        </a>
                    </li>



                </ul>
            </div>
        </div>


        <!-- #Main ============================ -->
        <div class="page-container">
            <!-- ### $Topbar ### -->
            <div class="header navbar">
                <div class="header-container">
                    <ul class="nav-left">
                        <li>
                            <a id='sidebar-toggle' class="sidebar-toggle" href="javascript:void(0);">
                                <i class="ti-menu"></i>
                            </a>
                        </li>
                        <li class="search-box">
                            <a class="search-toggle no-pdd-right" href="javascript:void(0);">
                                <i class="search-icon ti-search pdd-right-10"></i>
                                <i class="search-icon-close ti-close pdd-right-10"></i>
                            </a>
                        </li>
                        <li class="search-input">
                            <input class="form-control" type="text" placeholder="Search...">
                        </li>
                    </ul>
                    <ul class="nav-right">
                        <li class="dropdown">
                            <a href="" class="dropdown-toggle no-after peers fxw-nw ai-c lh-1" data-toggle="dropdown">
                                <div class="peer mR-10">
                                    <img class="w-2r bdrs-50p" src="https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg" alt="">
                                </div>
                                <div class="peer">
                                    <span class="fsz-sm c-grey-900"><?php echo $_SESSION['logname'] ?></span>
                                </div>
                            </a>
                            <ul class="dropdown-menu fsz-sm">
                                <li>
                                    <a href="./logout.php" class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                                        <i class="ti-power-off mR-10"></i>
                                        <span>Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- ### $App Screen Content ### -->
            <main class='main-content bgc-grey-100'>
                <div id='mainContent'>
                    <div class="container-fluid">
                        <h4 class="c-grey-900 mT-10 mB-30">Admin Year Statistics</h4>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="bgc-white bd bdrs-3 p-20 mB-20">
                                    <h4 class="c-grey-900 mB-20">Year Statistics</h4>
                                    <div class="row" style="margin-bottom:10px;">
                                        <div class="col-sm-6">
                                            <div class="mb-md">
                                                <a href="./dynamic-numbers-add.php">
                                                    <button id="addToTable" class="btn btn-primary">Add Year Statistics <i class="fa fa-plus"></i></button>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                    <table class="table table-bordered table-striped mb-none" id="id_table">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Current Year</th>
                                                <th>Years</th>
                                                <th>clients</th>
                                                <th>employees_num</th>
                                                <th>branches_num</th>
                                                <th>cities_num</th>
                                                <th>years in Arabic</th>
                                                <th>clients in Arabic</th>
                                                <th>employees in Arabic</th>
                                                <th>branches in Arabic</th>
                                                <th>cities in Arabic</th>
                                                <th>actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                            if ($posts) {
                                                for ($row = 0; $row < count($posts); $row++) { ?>
                                                    <tr>
                                                        <td> <?php echo $posts[$row]['id']; ?></td>
                                                        <td> <?php echo $posts[$row]['Current_year']; ?></td>
                                                        <td> <?php echo $posts[$row]['years']; ?></td>
                                                        <td> <?php echo $posts[$row]['clients']; ?></td>
                                                        <td> <?php echo $posts[$row]['employees_num']; ?></td>
                                                        <td> <?php echo $posts[$row]['branches_num']; ?></td>
                                                        <td> <?php echo $posts[$row]['cities_num']; ?></td>
                                                        <td> <?php echo $posts[$row]['years_ar']; ?></td>
                                                        <td> <?php echo $posts[$row]['clients_ar']; ?></td>
                                                        <td> <?php echo $posts[$row]['employees_num_ar']; ?></td>
                                                        <td> <?php echo $posts[$row]['branches_num_ar']; ?></td>
                                                        <td> <?php echo $posts[$row]['cities_num_ar']; ?></td>

                                                        <td class="actions">
                                                            <a href="#" class="on-default edit-row" onclick="replace(this)"><i class="fa fa-pencil"></i></a>
                                                            <a href="#" class="on-default remove-row" onclick="dlt(this)"><i class="fa fa-trash-o"></i></a>
                                                        </td>
                                                    </tr>
                                                <?php }
                                        } ?>
                                        </tbody>
                                    </table>
                                    <div class="modal" id="myModal" role="dialog">
                                        <div class="modal-dialog modal-sm">
                                            <!-- Modal content -->
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h2>Are you sure ?!</h2>
                                                </div>
                                                <div class="modal-body">
                                                    <p>Are you sure you want to delete this row ?!</p>
                                                </div>
                                                <div class="modal-footer">
                                                    <form method="POST" id="form" class="form-horizontal">
                                                        <input type="hidden" id="custId" name="delete">
                                                        <button id="confirm" name="confirm" class="btn btn-primary">Confirm</button>
                                                    </form>
                                                    <button id="cancel" class="btn btn-default" onclick="cancel()">Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <!-- ### $App Screen Footer ### -->
            <footer class="bdT ta-c p-30 lh-0 fsz-sm c-grey-600">

            </footer>
        </div>
    </div>
    <script>
        var table2 = document.getElementById("id_table");
        var msg = document.getElementById("msg");
        var modal = document.getElementById('myModal');
        modal.style.display = "none";

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        function cancel() {
            modal.style.display = "none";
        }
        // delete user
        //	var del = 0;
        function dlt(r) {
            //open confirmation panel
            modal.style.display = "block";
            var i = r.parentNode.parentNode.rowIndex;
            var tr = table2.getElementsByTagName("tr");
            var td = tr[i].getElementsByTagName("td")[0];
            document.getElementById('custId').value = td.innerHTML;
        }
        //edit user function
        function replace(r) {
            var i = r.parentNode.parentNode.rowIndex;
            var tr = table2.getElementsByTagName("tr");
            var td = tr[i].getElementsByTagName("td")[0];
            window.location.href = "./dynamic-numbers-edit.php" + "?row=" + td.innerHTML;
        }
    </script>
    <script type="text/javascript" src="vendor.js"></script>
    <script type="text/javascript" src="bundle.js"></script>
</body>

</html>