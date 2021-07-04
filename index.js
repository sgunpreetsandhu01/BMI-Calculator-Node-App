const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("<h1>Hello, World!</h1> Hello");
});
app.get("/contact",(req,res)=>{
    res.send("Contact me at: sgunpreetsandhu01@gmail.com");
});
app.get("/about",(req,res)=>{
    res.send("My name is Gunpreet Singh. I'm 20. I'm currently studying at VIT Vellore.");
});
app.listen(3000,()=>{
    console.log("The server is running....");
});