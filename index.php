<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Altadamun - ADMIN PANAL FOR BRANCHES</title>
    <link href="style.css" rel="stylesheet" type="text\css">
    <style>
        #loader {
            transition: all 0.3s ease-in-out;
            opacity: 1;
            visibility: visible;
            position: fixed;
            height: 100vh;
            width: 100%;
            background: #fff;
            z-index: 90000;
        }

        #loader.fadeOut {
            opacity: 0;
            visibility: hidden;
        }

        .spinner {
            width: 40px;
            height: 40px;
            position: absolute;
            top: calc(50% - 20px);
            left: calc(50% - 20px);
            background-color: #333;
            border-radius: 100%;
            -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
            animation: sk-scaleout 1.0s infinite ease-in-out;
        }

        @-webkit-keyframes sk-scaleout {
            0% {
                -webkit-transform: scale(0)
            }

            100% {
                -webkit-transform: scale(1.0);
                opacity: 0;
            }
        }

        @keyframes sk-scaleout {
            0% {
                -webkit-transform: scale(0);
                transform: scale(0);
            }

            100% {
                -webkit-transform: scale(1.0);
                transform: scale(1.0);
                opacity: 0;
            }
        }

        #logo {
            width: 100px;
            height: auto;
        }
    </style>
</head>

<body class="app">
    <div id="loader">
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
    <div class="peers ai-s fxw-nw h-100vh">
        <div class="d-n@sm- peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv" style="background-image:url(assets/static/images/adult-architect-blueprint-business-416405.jpg)">
            <div class="pos-a centerXY">
                <div class="bg-white bdrs-50p pos-r" style="width:160px;height:160px">
                    <img class="pos-a centerXY" id="logo" src="assets/static/images/tadamunlogo-blue.png" alt="">
                </div>
            </div>
        </div>
        <div class="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style="min-width:320px">
            <h4 class="fw-300 c-grey-900 mB-40">Al TADAMUN ADMIN LOGIN</h4>
            <form method="POST" action="signin.php">
                <div class="form-group">
                    <label class="text-normal text-dark">Username</label>
                    <input type="text" class="form-control" name="username" placeholder="username"></div>
                <div class="form-group">
                    <label class="text-normal text-dark">Password</label>
                    <input type="password" class="form-control" name="password" placeholder="Password">
                </div>
                <div class="form-group">
                    <div class="peers ai-c jc-sb fxw-nw">
                        <div class="peer">

                        </div>
                        <div class="peer">
                            <button class="btn btn-primary" name="submit">Login</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <script src="./vendor.js"></script>
    <script src="./bundle.js"></script>
</body>

</html>