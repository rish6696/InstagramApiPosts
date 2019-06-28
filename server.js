const express=require('express');
const app=express();

const accessToken="1123367083.90e137f.0a6a9cd37b4e4aca80269899cec2e2ce";





app.use(express.urlencoded({extended:true}));
app.use(express.json());

const CLIENT_ID='90e137f22cab4d5385f066d42c9af72d';
const REDIRECT_URL="http://localhost:1234/redirectUri";

//927a5b8df365489a80b7ec075a82147d


app.get('/getAuth',(req,res)=>{
    console.log('triggered get auth api');
    res.redirect("https://api.instagram.com/oauth/authorize/?client_id="+CLIENT_ID+"&redirect_uri="+REDIRECT_URL+"&response_type=code");
})

app.get('/redirectUri',(req,res)=>{
    console.log('redirect url hit');
    res.send('redirect url has been hit')
})
app.use('/public',express.static(__dirname+'/public'));

app.listen(1234,()=>{
    console.log('server started at 1234')
})


