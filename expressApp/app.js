const express = require('express');
const app = express();

app.set('view engine', 'ejs');



app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index..html');
});

app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/about.html');
});



// template engin

student=[
    {
        name : 'ahmad',
        age : 22
    },
    {
        name : 'Qasem',
        age : 27
    },
    {
        name : 'mohammad',
        age : 33
    }
]

app.get('/student',(req,res)=>{

    res.render('student',{student:student})
})

app.get('/test',(req,res)=>{

    res.render('test',{student:student})
})









app.listen(3000, function(req, res) {
    console.log('Serer is running on port 3000');
})