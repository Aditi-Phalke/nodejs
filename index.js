/*const http = require('http');
const data = require('./data');


http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000);
let a=20;
let b=0;
let waitingData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    },2000)
})

waitingData.then((data)=>{
    b=data;
    console.log(a+b);
})
const express=require('express');
const app=express();
app.get('',(req,res)=>{
res.send('Welcome, to Home Page <br> <a href="/about">Go to about page </a>');
//console.log('data sent by browser =>>',req.query.name);
});
app.get('/about',(req,res)=>{
    res.send('<input type="text" placeholder="Username" value="${req.query.name}" /> <button type="submit">Click Here</button><br> <a href="/">Go to Home Page</a>');
    
    });
    app.get('/help',(req,res)=>{
        res.send('Welcome, this is Help Page');
        
        });
        
        const express=require('express');
        const path=require('path');

        const app=express();
        app.set('view engine','ejs');
        const publicPath=path.join(__dirname,'public');
        //app.use(express.static(publicPath));
        app.get('/profile',(_,res)=>{
            const user={
                name:'Aditi Phalke',
                email:'aditi@gmail.com',
                city:'satara',
                Skills:['php','js','c++']
            }
            res.render('profile',{user});
        });
        app.get('/login',(req,res)=>{
            res.render('login');

        })
        app.get('',(_,res)=>{
            res.sendFile(publicPath+ '/index.html');
        });
        app.get('/about',(_,res)=>{
            res.sendFile(publicPath+ '/about.html');
        });
        app.get('/help',(_,res)=>{
            res.sendFile(publicPath+ '/help.html');
        });
        app.get('*',(_,res)=>{
            res.sendFile(publicPath+ '/NoPage.html');
        });*/
        const express=require('express');
        const app=express();
        const reqFilter=(req,res,nest)=>{
            if(!req.query.age){
                res.send('Please provide the age');
            }
            else if(req.query.age<18){
                res.send('You are under age');

            }
            else{
                next();
            }
        }
        app.use(reqFilter);
        app.get('/',(req,res)=>{
            res.send('Welcome to home page');

        });
        app.get('/user',(req,res)=>{
            res.send('Welcome to user page');
        });
        
app.listen(5000);   