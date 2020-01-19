<?php require("config.php");
//check if admin
session_start();
if ($_SESSION['username'] != 'ad-min') {
    echo "<script>window.location.href = './';</script>";
}
$GLOBALS['x'] = '1';
$row = $_GET["row"];

// create EXIST query
$query = 'SELECT * FROM dynamic_numbers WHERE id =' . $row;

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

/* $value = 0;
for ($i = 0; $i < count($posts); $i++) {
    if ($posts[$i]['id'] == $row) {
        $value = $i;
        break;
    }
} */

if (isset($_POST['submit'])) {

    $years = $_POST['years'];
    $clients = $_POST['clients'];
    $employees_num = $_POST['employees_num'];
    $branches_num = $_POST['branches_num'];
    $cities_num = $_POST['cities_num'];
    $years_ar = $_POST['years_ar'];
    $clients_ar = $_POST['clients_ar'];
    $employees_num_ar = $_POST['employees_num_ar'];
    $branches_num_ar = $_POST['branches_num_ar'];
    $cities_num_ar = $_POST['cities_num_ar'];

    $Current_year = $_POST['Current_year'];

    $row = $_GET["row"];
    $sql = "UPDATE `dynamic_numbers` SET `years`='$years', `clients`='$clients', `employees_num`='$employees_num', `branches_num`='$branches_num', `cities_num`='$cities_num', `years_ar`='$years_ar', `Current_year`='$Current_year', `clients_ar`='$clients_ar', `employees_num_ar`='$employees_num_ar', `branches_num_ar`='$branches_num_ar', `cities_num_ar`='$cities_num_ar' WHERE `id`=$row";
    if ($conn->query($sql) === False) {
        echo "Error: " . $sql . "<br>" . $conn->error;
    } else {
        echo "<script> window.onload = function(){window.location.href = './dynamic-numbers.php';}</script>";
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
                    <div class="row gap-20 masonry">
                        <div class="masonry-sizer col-md-8"></div>
                        <div class="masonry-item col-md-8">
                            <div class="bgc-white p-20 bd">

                                <div class="mT-30">
                                    <form method="POST" id="form" class="form-horizontal">
                                        <section class="panel">
                                            <header class="panel-heading">
                                                <div class="panel-actions">
                                                    <a href="#" class="fa fa-caret-down"></a>
                                                    <a href="#" class="fa fa-times"></a>
                                                </div>
                                                <h2 class="panel-title">Edit Year Statistics</h2>
                                            </header>
                                            <div class="panel-body">
                                                <div class="form-group">
                                                    <label class="col-sm    -6 control-label">Number of years <span class="required">*</span></label>
                                                    <div class="col-sm-9">
                                                        <input type="text" name="years" class="form-control" placeholder="مثال :  2019" value="<?php echo $posts[0]['years'] ?>" required />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-sm-6 control-label">clients Number<span class="required">*</span></label>
                                                    <div class="col-sm-9">
                                                        <input type="text" name="clients" class="form-control" placeholder="eg.: 1000000" value="<?php echo $posts[0]['clients'] ?>" required />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-sm-3 control-label">employees number <span class="required">*</span></label>
                                                    <div class="col-sm-9">
                                                        <input type="text" name="employees_num" class="form-control" placeholder="eg.:1500" value="<?php echo $posts[0]['employees_num'] ?>" required />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-sm-3 control-label">branches number <span class="required">*</span></label>
                                                    <div class="col-sm-9">
                                                        <input type="text" name="branches_num" class="form-control" placeholder="eg.:71" value="<?php echo $posts[0]['branches_num'] ?>" required />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-sm-3 control-label">cities number <span class="required">*</span></label>
                                                    <div class="col-sm-9">
                                                        <input type="text" name="cities_num" class="form-control" placeholder="eg.:12" value="<?php echo $posts[0]['cities_num'] ?>" required />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-sm-3 control-label">years number in arabic<span class="required">*</span></label>
                                                    <div class="col-sm-9">
                                                        <input type="text" name="years_ar" class="form-control" placeholder="eg.:12" value="<?php echo $posts[0]['years_ar'] ?>" required />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-sm-3 control-label">clients number in arabic<span class="required">*</span></label>
                                                    <div class="col-sm-9">
                                                        <input type="text" name="clients_ar" class="form-control" placeholder="eg.:12" value="<?php echo $posts[0]['clients_ar'] ?>" required />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-sm-3 control-label">employees number in arabic<span class="required">*</span></label>
                                                    <div class="col-sm-9">
                                                        <input type="text" name="employees_num_ar" class="form-control" placeholder="eg.:12" value="<?php echo $posts[0]['employees_num_ar'] ?>" required />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-sm-3 control-label">branches number in arabic<span class="required">*</span></label>
                                                    <div class="col-sm-9">
                                                        <input type="text" name="branches_num_ar" class="form-control" placeholder="eg.:12" value="<?php echo $posts[0]['branches_num_ar'] ?>" required />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-sm-3 control-label">cities number in arabic<span class="required">*</span></label>
                                                    <div class="col-sm-9">
                                                        <input type="text" name="cities_num_ar" class="form-control" placeholder="eg.:12" value="<?php echo $posts[0]['cities_num_ar'] ?>" required />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-sm-3 control-label">Current year<span class="required">*</span></label>
                                                    <div class="col-sm-9">
                                                        <input type="text" name="Current_year" class="form-control" placeholder="eg.:12" value="<?php echo $posts[0]['Current_year'] ?>" required />
                                                    </div>
                                                </div>

                                            </div>
                                            <footer class="panel-footer">
                                                <div class="row">
                                                    <div class="col-sm-9 col-sm-offset-3">
                                                        <button name="submit" class="btn btn-primary">Submit</button>
                                                        <button type="reset" class="btn btn-default">Reset</button>
                                                    </div>
                                                </div>
                                            </footer>
                                        </section>
                                    </form>
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

    <script type="text/javascript" src="vendor.js"></script>
    <script type="text/javascript" src="bundle.js"></script>

    <script>
        let messege = <?php echo $messeges; ?>;
        if (messege == "1") {
            console.log("sssssssss");
            document.getElementById("alertAdded").setAttribute("style", "width:50%;display:block");

        } else {
            document.getElementById("alertAdded").setAttribute("style", "width:50%;display:none");
        }
    </script>
</body>

</html>