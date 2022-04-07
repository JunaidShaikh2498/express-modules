console.log("Server at 6969 port");
const express= require("express")

const app=express();
    app.get("/",(req,res)=>{
        let student={
            name:"Junaid",
            age:24,
            batch:"October"
        }
        res.send(JSON.stringify(student));
    })

    const midd1=(req,res,next)=>{
        console.log("Middleware 1");
        next();
    }
    const midd2=(req,res,next)=>{
        console.log("Middleware 2");
        next();
    }
    app.use(midd1);
    app.get("/yeah",midd2,(req,res)=>{
        res.send("Yeah,Bruh");
    })
app.listen(6969);