<!DOCTYPE html>
<html>
<head>
    <title></title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script>
	var run_id = "live";
	<?php if(isset($_REQUEST['run_id'])) { ?>run_id = "<?php print $_REQUEST['run_id']; } ?>";
	</script>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Play:700,400">
    <script src="./js/remote/progressbar.js"></script>
    <script src="./js/remote/progressbar.min.js"></script>
    <script src="./js/remote/gauge.min.js"></script>
    <script type="text/javascript" src="./js/remote/highcharts.js"></script>
    <script type="text/javascript" src="./js/remote/highcharts-more.js"></script>
    <script type="text/javascript" src="./js/remote/exporting.js"></script>
    <script type="text/javascript" src="./js/remote/solid-gauge.js"></script>


    <script type="text/javascript" src="./js/remote/progressbar2.js"></script>
    <script type="text/javascript" src="./js/remote/progressbar2.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,300,600,800,900" rel="stylesheet" type="text/css">

    <!-- Ignite UI Required Combined CSS Files -->
    <link href="./css/remote/infragistics.theme.css" rel="stylesheet" />
    <link href="./css/remote/infragistics.css" rel="stylesheet" />

    <!-- Used to style the API Viewer and Explorer UI -->
    <link href="./css/remote/apiviewer.css" rel="stylesheet" type="text/css" />

    <script src="./js/remote/modernizr-2.8.3.js"></script>
    <script src="./js/remote/jquery-1.11.3.min.js"></script>
    <script src="./js/remote/jquery-ui.min.js"></script>

    <!-- Ignite UI Required Combined JavaScript Files -->
    <script src="./js/remote/infragistics.core.js"></script>
    <script src="./js/remote/infragistics.dv.js"></script>
    <script type="text/javascript" src="./js/remote/d3.v3.min.js"></script>
    <script type="text/javascript" src="./js/remote/pointerevents.js"></script>
    <script type="text/javascript" src="./js/remote/iopctrl.js"></script>
<!--
    <script type="text/javascript" src="./js/remote/pointergestures.js"></script>
 <script type="text/javascript" src="https://iop.io/js/vendor/d3.v3.min.js"></script>
    <script type="text/javascript" src="https://iop.io/js/vendor/polymer/PointerEvents/pointerevents.js"></script>
-->
    <script type="text/javascript" src="https://iop.io/js/vendor/polymer/PointerGestures/pointergestures.js"></script>
<!--
    <script type="text/javascript" src="https://iop.io/js/iopctrl.js"></script>
-->
<style>
.nm
{
	display: none;
}
</style>
</head>
<body>
<div class="container">
    <div class="main-pane">
        <div id="speedometer"> </div>
        <div id="fuel"></div>
        <div id="rpm"  class="nm"></div>
        <div id="rocket"  class="nm"></div>
        <div id="machno"></div>
        <div id="aj"></div>
        <div id="nl"></div>
<div class="tbt-percentage">
  100
  %TBT<br />
</div>
<div class="nh-percentage">
  100
  %NH<br />
</div>
    </div>    
    <div class="right-pane nm">
    <div id="voltagegauge" style="float: left"></div>
        <div id="fronttempgauge" style=" float: left; left: 12%"></div>
        <div id="reartempgauge" style=" float: left; left: 21%;"></div>
        <div class="voltage-text">
      VOLTAGE 
      (V)<br /> </div>
    <div class="fronttempgauge-text">
      FRONT BRAKE TEMP 
      (°C)<br /> </div>
    <div class="reartempgauge-text">
      REAR BRAKE TEMP 
       (°C)<br /> </div>
    </div>
        </div>
    <div class="footer-pane nm">
        <div style="width:30%" id="distancegauge">
  </div>
    <div class="distance-text">
      DISTANCE TRAVELED 
        (KM)<br /> </div>
</div>
    
    
    <script src="js/index.js?a=111"></script>
</body>
</html>