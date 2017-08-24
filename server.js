let express = require('express')
let app = express()
let path = require('path')
var mime = require('mime');
var fs = require('fs')
var Nexmo = require('nexmo');

let port = process.env.PORT || 8080
app.use(express.static(path.join(__dirname)))

app.get("/",(request,response)=>{


    response.sendFile(__dirname+"/client/index.html")
})

app.get("/portfolio",(request,response)=>{


    response.sendFile(__dirname+"/client/views/p.html")
})

app.get('/resumeDownload',(req,res)=>{

    var file = __dirname + '/client/assets/files/resume.doc';
    var filename = path.basename(file);
    var mimetype = mime.lookup(file);


  res.setHeader('Content-disposition', 'attachment; filename=' + filename);
  res.setHeader('Content-type', mimetype);

  var filestream = fs.createReadStream(file);
  filestream.pipe(res);

  console.log("downloading resume")
})


app.post('/contact',(req,res)=>{

let name = req.param("name");
let email =req.param("email");
let message = req.param("message");


let msg = "Name :"+name+"\nEmail:"+email+"\nText:"+message

// Twilio Credentials 
var accountSid = 'ACc02bfd85494d1460ef5da2ead5b1a21f'; 
var authToken = '6fcae255abf37bc3d8844b48e2d1a050'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
    to: "+16196067338", 
    from: "+18588796953", 
    body: msg, 
}, function(err, message) { 
    console.log("message"+message); 
});


res.send("your message have been send on +1 619-606-7338")

})



app.get('/sendMsg',(req,res)=>{


// Twilio Credentials 
var accountSid = 'ACc02bfd85494d1460ef5da2ead5b1a21f'; 
var authToken = '6fcae255abf37bc3d8844b48e2d1a050'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
    to: "+16196067338", 
    from: "+18588796953", 
    body: "hie dex", 
}, function(err, message) { 
    console.log("message"+message); 
});

})

app.listen(port,()=>{

    console.log("server is running on port: "+port)
})