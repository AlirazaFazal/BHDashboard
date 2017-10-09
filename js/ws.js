var kafka = require('kafka-node');
var Consumer = kafka.Consumer,
        client = new kafka.Client('129.146.69.162:9092'),
        consumer = new Consumer(
        client, [{topic: 'bhdata', partition: 0}], {autoCommit: false});

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var BHDATA;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("./public_html"));
app.use(cors());

consumer.on('connection', function(){
   console.log('Connection to Kafka established'); 
});

consumer.on('message', function(message){
    var bhdata = JSON.parse(message.value);
    console.log("KAFKA SAYS");
    console.log(bhdata);
    this.BHDATA = bhdata;
    sendData(this.BHDATA);
});

consumer.on('error', function(err){
    console.log('error', err);
});

//app.post('/bhdata', function (request, response, next) {
//    console.log("Data received");
//    var bhdata = request.body;
//    this.BHDATA = bhdata;
    //console.log(bhdata);
//    response.send("OK");
    
//    sendData(this.BHDATA);
//    next();
//});

function sendData(bhdata) {
    wss.broadcast(JSON.stringify(bhdata));
};

//const StreamAPort = 4201;
//app.listen(StreamAPort);
console.log("Server is listening for a kafka topic");

const clientPort = 4200;
WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: clientPort});

wss.on("connection", function (ws) {
    ws.send("Welcome to the Bloodhound Dashboard");
    console.log("Client Connected");
});

wss.broadcast = function (bhdata) {
    wss.clients.forEach(function (client) {
        client.send(bhdata);
        console.log("Data sent");
    });
};