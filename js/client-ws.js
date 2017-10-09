var ws = new WebSocket('ws://localhost:4200');
window.onload = function () {
    
    ws.onopen = function () {
        setTitle("Connected to Bloodhound Dashboard");
    };

    ws.onclose = function () {
        setTitle("Disconnected from Bloodhound Dashboard");
    };

    ws.onmessage = function (payload) {
        console.log("This is the payload received by the client");
        console.log(payload);
        //var bhdata = "[" + payload + "]";
        var data = JSON.parse(payload.data); 
        //var DistanceTravelled = JSON.parse(bhdata.data.CLAC_Distance_Travelled);
        //if(DistanceTravelled === "CLAC_Distance_Travelled"){
        //    console.log("Distance Travelled is present");
        //    document.getElementById('MPH').innerHTML = DistanceTravelled.sensorValue;
        //};
        
        switch(data["sensor_name"]){
            case "CLAC_Distance_Travelled" : //Distance travelled in Meters
                document.getElementById('DistTrav').innerHTML = data["sensorCalculatedValue"];
                document.querySelector('#DistTrav2').innerHTML = data["sensorCalculatedValue"];
                break;
            case "RS232_P2_FUEL_GPS_mph": //Speedo in MPH
                document.querySelector('#MPH').innerHTML =  data["sensorCalculatedValue"];
                break;
            case "CALC_DECUJetTBTPercent": //Jet Turbine Blade Temperature (percentage of measurement range)
                document.querySelector('#TurbineTemp').innerHTML = data["sensorCalculatedValue"];
                break;
            case "MILBUS_DECUJetNozArea": //The nozzle exhaust area (Area Jet)
                document.querySelector('#AJ').innerHTML = data["sensorCalculatedValue"];
                break;
            case "MILBUS_DECUJetNL": //Low pressure spool area
                document.querySelector('#NL').innerHTML = data["sensorCalculatedValue"];
                break;
            case "MILBUS_DECUJetNH": //High pressure spool area 
                document.querySelector('#NH').innerHTML = data["sensorCalculatedValue"];
                break;
            case "CALC_JetFuelRemaining": //Fuel Level
                document.querySelector('#FuelLevel').innerHTML = data["sensorCalculatedValue"];
                break;
            case "A1_20_FL_ACC_Z": //Lateral side-to-side G
                document.querySelector('#LateralG').innerHTML = data["sensorCalculatedValue"];
                break;
            case "A2_2_FR_TC2_OUTER_BRK_PAD_TEMP": //Brake pad temps front 
                document.querySelector('#BreakPadTemp').innerHTML = data["sensorCalculatedValue"];
                break;
            case "A2_2_BR_TC2_OUTER_BRK_PAD_TEMP": //Break pads temp back
                 document.querySelector('#BreakPadTempBack').innerHTML = data["sensorCalculatedValue"];
                break;
            case "A2_26_POWER_BUS_VOLTAGE_SIG": //Power Bus Voltage
                document.querySelector('#PowerBusVoltage').innerHTML = data["sensorCalculatedValue"];
                break;
            case "CALC_MachNo": //Mach No.
                document.querySelector('#MachNo').innerHTML = data["sensorCalculatedValue"];
                break;
            case "CALC_SpeedOfSound": //Speed Of Sound
                document.querySelector('#SpeedOfSound').innerHTML = data["sensorCalculatedValue"];
                break;
        };
   
        document.querySelector('p').innerHTML = payload.data;
        console.log("This is the onmessage function");
    };

    function setTitle(title) {
        console.log("This will set the Title of the page");
        document.querySelector('h1').innerHTML = title;
    }

    function printMessage(payload) {
        var p = document.createElement('p');
        //var p = message.data;
        
        console.log(p);
        //document.querySelector('data').innerHTML = p;
        //document.getElementById("data").innerHTML = p + "<br/>" + document.getElementById("data").innerHTML;
    }
};