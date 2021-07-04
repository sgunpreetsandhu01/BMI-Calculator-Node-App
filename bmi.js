const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
   res.sendFile(__dirname+"/bmi.html");
});

app.post("/bmicalculator",(req,res)=>{
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);

    var temp=height*height;
    var bmi=weight/temp;
    if(bmi<18.5)
    {
        res.send("Time to gain weight. Your BMI is "+bmi.toFixed(2));
    }
    else if(bmi>18.5 && bmi<24.9)
    {
        res.send("You are in perfect shape. Your BMI is"+bmi.toFixed(2));
    }
    else if(bmi>25 && bmi<29.9)
    {
        res.send("Time to lose weight. Your BMI is"+bmi.toFixed(2));
    }
    else
    {
        res.send("Hey bean bag. Your BMI is"+bmi.toFixed(2));
    }
});

app.listen(3000,()=>{
    console.log("Server is running on PORT 3000...");
});