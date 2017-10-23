var gauges = [];
var lgauges = [];
var bgauges = [];
var tbtvalue = Number($('.tbt-percentage').data()); //tbt percentage websocket hookup

var nhvalue = Number($('.nh-percentage').data()); //nh percentage websocket hookup

var $linearGauge3 = $("#distancegauge");

            $linearGauge3.igLinearGauge({
                width: '70%',
                height: '5vw',
                backingBrush: 'black',
                backingOutline: 'black',
                fontBrush: 'white',
                transitionDuration: 500,
                ranges: [
                    {
                        brush: '#131A57',
                        name: 'bad',
                        startValue: 0,
                        endValue: 250
                    },
                    {
                        brush: '#131A57',
                        name: 'acceptable',
                        startValue: 250,
                        endValue: 500
                    },
                    {
                        brush: '#131A57',
                        name: 'good',
                        startValue: 500,
                        endValue: 1000
                    }
                ],
                minimumValue: 0,
                maximumValue: 100,
                value: 0, //The value that changes the pointer for the distance gauge
                tickBrush: '#F79646',
                minorTickBrush: '#F79646',
                needleShape:'triangle',
                needleBrush:'#F79646',
                needleOutline:'#fff',
                needleStrokeThickness: 1,
                formatLabel: function (evt, ui) {
                    ui.label += "";
                }
            });

var $linearGauge1 = $("#voltagegauge");

            $linearGauge1.igLinearGauge({
                width: '22%',
                height: '35vw', 
                backingBrush: 'black',
                backingOutline: 'black',
                orientation: "vertical",
                fontBrush: 'white',
                ranges: [
                    { 
                        name: 'bad',
                        brush: '#131A57',
                        startValue: 0,
                        endValue: 10
                    },
                    { 
                        name: 'acceptable',
                        brush: '#131A57',
                        startValue: 10,
                        endValue: 35
                    },
                    { 
                        name: 'good',
                        brush: '#131A57',
                        startValue: 35,
                        endValue: 100
                    }
                ], 
                minimumValue: 0,
                maximumValue: 50,
                value: 0, //value that changes that pointer for the voltage
                tickBrush: '#F79646',
                minorTickBrush: '#F79646',
                needleShape:'triangle',
                needleBrush:'#F79646',
                needleOutline:'#fff',
                needleStrokeThickness: 1,
                formatLabel: function (evt, ui) {
                    ui.label = ui.value + "V";
                }
            });

lgauges["distance"] = $linearGauge3;
lgauges["volt"] = $linearGauge1;
			
$(function () {
            /*----------------- Instantiation -------------------------*/
            var $lineargaugefront = $("#fronttempgauge");
lgauges["ftemp"] = $lineargaugefront;

            $lineargaugefront.igLinearGauge({
                width: '22%',
                height: '35vw',
                orientation: "vertical",
                backingBrush: 'black',
                backingOutline: 'black',
                fontBrush: 'white',
                ranges: [
                   {
                       name: 'Cold',
                       startValue: 0,
                       endValue: 20,
                       brush: '#2788B1',
                       outerStartExtent: .2,
                       outerEndExtent: .3
                   },
                   {
                       name: 'Mild',
                       startValue: 20,
                       endValue: 40,
                       brush: '#A4BA29',
                       outerStartExtent: .3,
                       outerEndExtent: .4
                   },
                   {
                       name: 'Warm',
                       startValue: 40,
                       endValue: 70,
                       brush: '#FDBD48',
                       outerStartExtent: .4,
                       outerEndExtent: .5
                   },
                   {
                       name: 'Hot',
                       startValue: 70,
                       endValue: 120,
                       brush: '#D3404B',
                       outerStartExtent: .5,
                       outerEndExtent: .6
                   }
                ],
                showToolTip: true,
                minimumValue: 0,
                maximumValue: 120,
                value: 0, //value that changes the pointer for the front brake temp  
                interval: 10,
                tickEndExtent:0.2,
                minorTickEndExtent:0.15 
            });

        });


$(function () {
            /*----------------- Instantiation -------------------------*/
            var $lineargaugerear = $("#reartempgauge");
			lgauges["rtemp"] = $lineargaugerear;

            $lineargaugerear.igLinearGauge({
                width: '22%',
                height: '35vw',
                orientation: "vertical",
                backingBrush: 'black',
                backingOutline: 'black',
                fontBrush: 'white',
                ranges: [
                   {
                       name: 'Cold',
                       startValue: 0,
                       endValue: 20,
                       brush: '#2788B1',
                       outerStartExtent: .2,
                       outerEndExtent: .3
                   },
                   {
                       name: 'Mild',
                       startValue: 20,
                       endValue: 40,
                       brush: '#A4BA29',
                       outerStartExtent: .3,
                       outerEndExtent: .4
                   },
                   {
                       name: 'Warm',
                       startValue: 40,
                       endValue: 70,
                       brush: '#FDBD48',
                       outerStartExtent: .4,
                       outerEndExtent: .5
                   },
                   {
                       name: 'Hot',
                       startValue: 70,
                       endValue: 120,
                       brush: '#D3404B',
                       outerStartExtent: .5,
                       outerEndExtent: .6
                   }
                ],
                showToolTip: true,
                minimumValue: 0,
                maximumValue: 120,
                value: 0, //value that changes the pointer for the rear brake temp 
                interval: 10,
                tickEndExtent:0.2,
                minorTickEndExtent:0.15 
            });

        });

Highcharts.chart('speedometer', {

        chart: {
            type: 'gauge',
            plotBackgroundColor: '#b3b3b3',
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [
                {
                    className: 'outer-pane',
                    outerRadius: '115%',
                   
        }, {
                    className: 'middle-pane',
                    outerRadius: '105%'
        }, {
                    // default background
        }, {
                    className: 'inner-pane',
                    outerRadius: '105%',
                    innerRadius: '103%'
        }]
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 300,
            minorTickInterval: 'auto',
            minorTickWidth: 3,
            minorTickLength: 8,
            minorTickPosition: 'inside',
            minorTickColor: '#fff',

            tickPixelInterval: 35,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 13,
            tickColor: '#fff',
            labels: {
                step: 2,
                rotation: 'auto',
                style: {
                    color: '#fff',
                    font: '11px Trebuchet MS, Verdana, sans-serif'
                }
                
            },
            title: {
                text: "MPH",
                style: {
                    color: '#fff',
                    font: '11px Trebuchet MS, Verdana, sans-serif'
                }
            },
            plotBands: {
                from: 260,
                to: 300,
                className: 'red-band'
            }
        },
        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        series: [{
            data: [0], //when page is loaded this value is set onto the speedometer gauge 
            dataLabels: {
	        	format: '<div style="text-align:center"><span style="font-size:0%;color:' + 
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'white') + '">{y}</span><br/>' + 
                   	'</div>'
	        },
    }]

    },
    // This code pretty much randomises the pointer for the gauge
    function (chart) {
        if (!chart.renderer.forExport) {
		    gauges["speedometer"] = chart.series[0].points[0];
            /*setInterval(function () {
              gauges["speedometer"] = chart.series[0].points[0];
              var point = chart.series[0].points[0],
                    newVal,
                    inc = Math.round((Math.random() - 0.5) * 20);

                newVal = point.y + inc;
                if (newVal < 0 || newVal > 200) {
                    newVal = point.y - inc;
                }

                point.update(newVal);

            }, 3000);*/
        }
    });

Highcharts.chart('rpm', {

        chart: {
            type: 'gauge',
            plotBackgroundColor: '#b3b3b3',
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [
                {
                    className: 'outer-pane',
                    outerRadius: '115%'
        }, {
                    className: 'rpmmiddle-pane',
                    outerRadius: '112%'
        }, {
                    // default background
        }, {
                    className: 'inner-pane',
                    outerRadius: '105%',
                    innerRadius: '103%'
        }]
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 200,

            minorTickInterval: 'auto',
            minorTickWidth: 3,
            minorTickLength: 8,
            minorTickPosition: 'inside',
            minorTickColor: '#fff',

            tickPixelInterval: 35,
            tickWidth: 10,
            tickPosition: 'inside',
            tickLength: 13,
            tickColor: '#fff',
            labels: {
                step: 2,
                rotation: 'auto',
                style: {
                    color: '#fff',
                    font: '11px Trebuchet MS, Verdana, sans-serif'
                }
            },
            title: {
                text: "ACCEL.",
                style: {
                    color: '#fff',
                    font: '11px Trebuchet MS, Verdana, sans-serif'
                }
            },
            plotBands: {
                from: 160,
                to: 200,
                className: 'red-band' // red
            }
        },
        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        series: [{
            name: 'ACCELERATION',
            data: [0], //when page is loaded this value is set onto the rpm gauge, hookup data stream for websocket
            dataLabels: {
	        	format: '<div style="text-align:center"><span style="font-size:100%;color:' + 
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'white') + '">{y}</span><br/>' + 
                   	'</div>'
	        },
    }]

    },
    // Add some life
    function (chart) {
        if (!chart.renderer.forExport) {
            gauges["rpm"] = chart.series[0].points[0];
			/*setInterval(function () {
                var point = chart.series[0].points[0],
                    newVal,
                    inc = Math.round((Math.random() - 0.5) * 20);

                newVal = point.y + inc;
                if (newVal < 0 || newVal > 200) {
                    newVal = point.y - inc;
                }

                point.update(newVal);

            }, 3000);*/
        }
    }
	);

Highcharts.chart('fuel', {

        chart: {
            type: 'gauge',
            plotBackgroundColor: '#b3b3b3',
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [
                {
                    className: 'outer-pane',
                    outerRadius: '115%'
        }, {
                    className: 'rpmmiddle-pane',
                    outerRadius: '112%'
        }, {
                    // default background
        }, {
                    className: 'inner-pane',
                    outerRadius: '105%',
                    innerRadius: '103%'
        }]
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 100,

            minorTickInterval: 'auto',
            minorTickWidth: 3,
            minorTickLength: 8,
            minorTickPosition: 'inside',
            minorTickColor: '#fff',

            tickPixelInterval: 35,
            tickWidth: 10,
            tickPosition: 'inside',
            tickLength: 13,
            tickColor: '#fff',
            labels: {
                step: 2,
                rotation: 'auto',
                style: {
                    color: '#fff',
                    font: '11px Trebuchet MS, Verdana, sans-serif'
                }
            },
            title: {
                text: "FUEL %",
                className: 'fueltitle',
                style: {
                    color: '#fff',
                    font: '11px Trebuchet MS, Verdana, sans-serif'
                }
            },
            plotBands: {
                from: 20,
                to: 0,
                className: 'red-band' // red
            }
        },
        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        series: [{
            name: 'FUEL',
            data: [100], //when page is loaded this value is set onto the rpm gauge, hookup data stream for websocket
            dataLabels: {
	        	format: '<div style="text-align:center"><span style="font-size:100%;color:' + 
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'white') + '">{y}</span><br/>' + 
                   	'</div>'
	        }
    }]

    },
    // Add some life
    function (chart) {
        if (!chart.renderer.forExport) {
            gauges["fuel"] = chart.series[0].points[0];
            /*setInterval(function () {
                var point = chart.series[0].points[0],
                    newVal,
                    inc = Math.round((Math.random() - 0.5) * 20);

                newVal = point.y + inc;
                if (newVal < 0 || newVal > 200) {
                    newVal = point.y - inc;
                }

                point.update(newVal);

            }, 3000);*/
        }
    });


var startColor = '#ff33cc';
var endColor = '#ff33cc';

var circle = new ProgressBar.Circle(rocket, {
    color: startColor,
    easing: 'easeInOut',
    strokeWidth: 8,
    trailWidth: 1,
    duration: 3000,
    text: {
       autoStyleContainer: false,
    },
    
    step: function(state, bar) {

        bar.setText((bar.value() * 100).toFixed(0));
        bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    }
});

// This will get the number from the page
    var value = (0 / 100);
    

// This will determine the circumference of the circle
circle.animate(value, {
    from: {color: startColor},
    to: {color: endColor}, 
    step: function(state, circle, bar) {
            circle.path.setAttribute('stroke', state.color);
        //console.log(circle);
          if (value === 0) {
      circle.setText('ROCKET');
    } else {
      circle.setText((circle.value() * 100).toFixed(0) + "%" + " ROCKET");
    }

  }
});
bgauges["rocket"] = bar;

var startColor = '#ff33cc';
var endColor = '#ff33cc';

var circle = new ProgressBar.Circle(machno, {
    color: startColor,
    easing: 'easeInOut',
    strokeWidth: 8,
    trailWidth: 1,
    duration: 3000,
    text: {
       autoStyleContainer: false,
    },
    
    step: function(state, bar) {

        bar.setText((bar.value() * 100).toFixed(0));
        bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
        bar.text.style.fontSize = '1vw';
    }
});

// This will get the number from the page
    var value = (0 / 100);
    

// This will determine the circumference of the circle
circle.animate(value, {
    from: {color: startColor},
    to: {color: endColor}, 
    step: function(state, circle, bar) {
            circle.path.setAttribute('stroke', state.color);
          if (value == 0) {
      circle.setText('MACH NO.');
    } else {
      circle.setText((circle.value() * 100).toFixed(0) + ' MACH NO.');
    }
        }
});
bgauges["mach"] = circle;

var bar = new ProgressBar.Circle(nl, { //this gauge is for NL within the speedometer which is visible on dashboard 
  color: '#00ccff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 2,
  easing: 'easeInOut',
  duration: 7250,
  text: {
    autoStyleContainer: false,
  },
  from: { color: '#00ccff', width: 7 },
  to: { color: '#00ccff', width: 7 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 133); //here value for gauge is being set
    if (value === 0) {
      circle.setText('<span>'+"NL"+'</span>');
    } else {
      circle.setText('<span>'+value+"NL"+'</span>');
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '1vw';

var stopvalue = 0; // websocket integration
bar.animate(0.75 * stopvalue/100);  // scale for bar on gauge
bgauges["nl"] = bar;

var bar = new ProgressBar.SemiCircle(aj, { //this gauge is for AJ within the speedometer which is visible on dashboard 
  strokeWidth: 7,
  color: '#ff33cc',
  trailColor: '#fff',
  trailWidth: 2,
  easing: 'easeInOut',
  duration: 7250,
  svgStyle: null,
  text: {
    alignToBottom: false
  },
  from: {color: '#ff33cc'},
  to: {color: '#ff33cc'},
  // Set default step function for all animate calls
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
    var value = Math.round(bar.value() * 200); //here value for gauge is being set
    if (value === 0) {
      bar.setText('AJ');
    } else {
      bar.setText(value + "AJ");
    }

    bar.text.style.color = state.color;
  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '1vw';

var stopvalue = 0; //here value for gauge is being set
bar.animate(0.5 * stopvalue/100);  // scale for bar on gauge 
bgauges["aj"] = bar;



// segDisplay.value(56749);

function updateGauges(msg)
{
	
	msg = JSON.parse(msg);
	console.log(msg);
	if (msg.RS232_P1_GPS_mph)
		gauges["speedometer"].update(msg.RS232_P1_GPS_mph); //RS232_P2_FUEL_GPS_mph

	if (msg.CALC_GPS_Accel)
		gauges["rpm"].update(msg.CALC_GPS_Accel);

	if (msg.CALC_JetFuelRemainingPerc)
		gauges["fuel"].update(msg.CALC_JetFuelRemainingPerc);

	if (msg.CLAC_Distance_Travelled)
	{
		var distance_percent = msg.CLAC_Distance_Travelled/3200*100;
		lgauges["distance"].igLinearGauge({value: distance_percent});
	}
	if (msg.A2_26_POWER_BUS_VOLTAGE_SIG)
		lgauges["volt"].igLinearGauge({value: msg.A2_26_POWER_BUS_VOLTAGE_SIG});

	if (msg.A2_1_FR_TC1_INNER_BRK_PAD_TEMP)
		lgauges["ftemp"].igLinearGauge({value: msg.A2_1_FR_TC1_INNER_BRK_PAD_TEMP});

	if (msg.A2_1_BR_TC1_INNER_BRK_PAD_TEMP)
		lgauges["rtemp"].igLinearGauge({value: msg.A2_1_BR_TC1_INNER_BRK_PAD_TEMP}); 
	
	if (msg.CALC_MachNo)
		bgauges["mach"].setText(msg.CALC_MachNo+ ' MACH NO.');//animate(msg.CALC_MachNo);

	//if (msg.)
		//bgauges["rocket"].animate(0.1);

	if (msg.MILBUS_DECUJetNL)
		bgauges["nl"].animate(msg.MILBUS_DECUJetNL);

	if (msg.MILBUS_DECUJetNozArea)
		bgauges["aj"].animate(msg.MILBUS_DECUJetNozArea);

	if (msg.CALC_DECUJetTBTPercent)
		$('.tbt-percentage').text(msg.CALC_DECUJetTBTPercent+" %TBT"); 

	if (msg.MILBUS_DECUJetNH)
		$('.nh-percentage').text(msg.MILBUS_DECUJetNH+" %NH"); 
	
}

function updateGaugesSim(msg)
{	
	arr = JSON.parse(msg);
	arr = arr.data;
	
	for (i = 0; i < arr.length; i++)
	{
		msg = arr[i];
		if (msg.RS232_P1_GPS_mph)
			gauges["speedometer"].update(Math.round(msg.RS232_P1_GPS_mph)); //RS232_P2_FUEL_GPS_mph

		if (msg.CALC_GPS_Accel)
			gauges["rpm"].update(Math.round(msg.CALC_GPS_Accel));

		if (msg.CALC_JetFuelRemainingPerc)
			gauges["fuel"].update(Math.round(msg.CALC_JetFuelRemainingPerc));

		if (msg.CLAC_Distance_Travelled)
		{
			var distance_percent = msg.CLAC_Distance_Travelled/3200*100;
			lgauges["distance"].igLinearGauge({value: Math.round(distance_percent)});
		}
		if (msg.A2_26_POWER_BUS_VOLTAGE_SIG)
			lgauges["volt"].igLinearGauge({value: Math.round(msg.A2_26_POWER_BUS_VOLTAGE_SIG)});

		if (msg.A2_1_FR_TC1_INNER_BRK_PAD_TEMP)
			lgauges["ftemp"].igLinearGauge({value: Math.round(msg.A2_1_FR_TC1_INNER_BRK_PAD_TEMP)});

		if (msg.A2_1_BR_TC1_INNER_BRK_PAD_TEMP)
			lgauges["rtemp"].igLinearGauge({value: Math.round(msg.A2_1_BR_TC1_INNER_BRK_PAD_TEMP)}); 
		
		if (msg.CALC_MachNo)
			bgauges["mach"].setText(Math.round(msg.CALC_MachNo)+ ' MACH NO.');//animate(msg.CALC_MachNo);

		//if (msg.)
			//bgauges["rocket"].animate(0.1);

		if (msg.MILBUS_DECUJetNL)
			bgauges["nl"].animate(Math.round(msg.MILBUS_DECUJetNL));

		if (msg.MILBUS_DECUJetNozArea)
			bgauges["aj"].animate(Math.round(msg.MILBUS_DECUJetNozArea));

		if (msg.CALC_DECUJetTBTPercent)
			$('.tbt-percentage').text(Math.round(msg.CALC_DECUJetTBTPercent)+" %TBT"); 

		if (msg.MILBUS_DECUJetNH)
			$('.nh-percentage').text(Math.round(msg.MILBUS_DECUJetNH)+" %NH"); 
	}
}

document.body.onload = function() {

	//create_socket();
	// simulated_data(2002);
	if (run_id == "live")
		create_socket();
	else
		simulated_data(run_id);
}
var prev_ts = -1;
var socket = null;
function close_socket()
{
	if (socket)
		socket.close();
	socket = null;
}
function create_socket()
{
	// First the socket requesta
	console.log('Creating socket');
	socket = new WebSocket('ws://129.146.69.162:8282/');

	socket.onopen = function() {

	  console.log('Socket open.');
	  socket.send(JSON.stringify({message: 'Client connected '}));
	  console.log('Message sent.')
	};
	socket.onmessage = function(message) {
	  if (message && message.data)
	  {
		  msg = JSON.parse(message.data);
		  if (prev_ts == -1)
			prev_ts = msg.currentEPOC;
		  
		  var offset = msg.currentEPOC - prev_ts;
		  window.setTimeout("updateGauges('"+message.data+"')", offset);
	  }
	};
}
var payload = null;
var speed = "200"; //ms
function simulated_data(run_id)
{
	$.ajax({
	  type: "GET",
	  dataType: "json",
	  async: true,
	  url: "http://data.bloodhoundssc.com/api/dashboard/?func_name=get_data&run_id="+run_id,	  
	  success: function(data) 
	  {
		  payload=data.PAYLOAD;
		  run_simulator(0);
	  }
	});
}

function run_simulator(idx)
{
	if (payload)
	{
		//console.log(idx);
		updateGaugesSim(payload[idx++]);
		if (idx < payload.length)
			window.setTimeout("run_simulator("+idx+")", speed);
	}
}