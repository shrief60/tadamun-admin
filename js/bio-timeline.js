//Sample dates
var dates = ["6/12/2015", "7/15/2015", "8/15/2015", "9/15/2015", "10/15/2015", "11/15/2015"];
//For the purpose of stringifying MM/DD/YYYY date format
var monthSpan = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var titles = ["Consulting", "Factory & Process Design", "Technology Transfer", "Staff Training", "Process Optimization","Support for Certification"];


var titles1 = ["<div class=\"details\"><p>Strategy development. </p> <p>Introducing new opportunities (business lines) to biotech, pharma, nutraceutical, and cosmeceutical organizations</p><p>Performing feasibility studies<p>Providing products’ portfolio & technical reports</p></div>",

"<div class=\"details\"><p>Stepwise project planning, launching/implementation. </p> <p>Facility design and construction.</p><p> Equipment and raw materials’ specification & business deal setting<p> Facility, equipment and process qualification/validation.</p></div>",

"<div class=\"details\"><p>Applying innovative industrial technologies </p> <p>Upgrading current manufacturing processes</p><p>Smart solutions for improving quality and productivity</p></div>",

"<div class=\"details\"><p> Technical support for recruitment processes. </p> <p>On-job training</p><p>Technical facility management.<p>Periodic training courses for compliance checking and continuous improvement</p></div>",

"<div class=\"details\"><p>Advanced Trial Batch Management. </p> <p>Manufacturing process close monitoring</p><p>Detecting points of improvement.<p>Providing solutions for optimizing & stabilizing quality and productivity</p></div>",

"<div class=\"details\"><p>Product registration </p> <p>Technical support to comply with international accreditation standards/requirements/guidelines</p><p> Benchmarking and Auditing<p>Preparing for certification bodies’ audits.</p><p> ISO 9001, ISO 13485, ISO 17025, FDA, EMA, OECD GLP, CE.</p></div>"];

//Format MM/DD/YYYY into string
function dateSpan(date) {
  var month = date.split('/')[0];
  month = monthSpan[month - 1];
  var day = date.split('/')[1];
  if (day.charAt(0) == '0') {
    day = day.charAt(1);
  }
  var year = date.split('/')[2];

  //Spit it out!
  return month + " " + day + ", " + year;
}

//Main function. Draw your circles.
function makeCircles() {
  //Forget the timeline if there's only one date. Who needs it!?
  if (dates.length < 2) {
    $("#line").hide();
    $("#span").show().text(dateSpan(dates[0]));
    //This is what you really want.
  } else if (dates.length >= 2) {
    //Set day, month and year variables for the math
    var first = dates[0];
    var last = dates[dates.length - 1];

    var firstMonth = parseInt(first.split('/')[0]);
    var firstDay = parseInt(first.split('/')[1]);

    var lastMonth = parseInt(last.split('/')[0]);
    var lastDay = parseInt(last.split('/')[1]);

    //Integer representation of the last day. The first day is represnted as 0
    var lastInt = ((lastMonth - firstMonth) * 30) + (lastDay - firstDay);

    //Draw first date circle
    $("#line").append('<div class="circle" id="circle0" style="left: ' + 0 + '%;"><div class="popupSpan">' + titles[0] + '</div></div>');
    
    $("#mainCont").append('<span id="span0" class="center">' + titles[0] + titles1[0] + '</span>' );

    //Loop through middle dates
    for (i = 1; i < dates.length - 1; i++) {
      var thisMonth = parseInt(dates[i].split('/')[0]);
      var thisDay = parseInt(dates[i].split('/')[1]);

      //Integer representation of the date
      var thisInt = ((thisMonth - firstMonth) * 30) + (thisDay - firstDay);

      //Integer relative to the first and last dates
      var relativeInt = thisInt / lastInt;

      //Draw the date circle
      $("#line").append('<div class="circle" id="circle' + i + '" style="left: ' + relativeInt * 100 + '%;"><div class="popupSpan">' + titles[i] + '</div></div>');
      
      $("#mainCont").append('<span id="span' + i + '" class="right">' + titles[i] + titles1[i] + '</span>' );
    }

    //Draw the last date circle
    $("#line").append('<div class="circle" id="circle' + i + '" style="left: ' + 99 + '%;"><div class="popupSpan">' + titles[dates.length - 1] + '</div></div>'); 
    
    $("#mainCont").append('<span id="span' + i + '" class="right">' + titles[i] + titles1[i] + '</span>');
  }

  $(".circle:first").addClass("active");
}

makeCircles();

$(".circle").mouseenter(function() {
  $(this).addClass("hover");
});

$(".circle").mouseleave(function() {
  $(this).removeClass("hover");
});

$(".circle").click(function() {
  var spanNum = $(this).attr("id");
  selectDate(spanNum);
});

function selectDate(selector) {
  $selector = "#" + selector;
  $spanSelector = $selector.replace("circle", "span");
  var current = $selector.replace("circle", "");
  
  $(".active").removeClass("active");
  $($selector).addClass("active");
  
  if ($($spanSelector).hasClass("right")) {
    $(".center").removeClass("center").addClass("left")
    $($spanSelector).addClass("center");
    $($spanSelector).removeClass("right")
  } else if ($($spanSelector).hasClass("left")) {
    $(".center").removeClass("center").addClass("right");
    $($spanSelector).addClass("center");
    $($spanSelector).removeClass("left");
  }; 
};

