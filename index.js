// setup done
import express from 'express';

const app = express();

app.use(express.json());

const Students = [
    {
        id : 1 ,
        name : "Rupesh ", 
        city :  "pune"
    },
    {
        id : 2 ,
        name : "nilesh ", 
        city :  "nanded"
    }, 
    {
        id : 3 ,
        name : "harish ", 
        city :  "Hingoli"
    },
    {
        id : 4 ,
        name : "Ganesh  ", 
        city :  "Sangola"
    }


]
// student api 
app.get("/students", (req, res)=>{
    res.json({
        sucess: true,
        data: Students , 
        msg : " Students  fetch sucessfully"
        
    })
    }
    )
    
// working api 
app.get("/health", (req, res)=>{
res.json({
    sucess: true,
    msg : "server is running"
})
}
)

app.get("*", (req, res)=>{
    res.json({
        sucess: false,
        msg : "Path not found"
    })
    }
    )
const Port = 5003 ;
app.listen(Port, ()=>
{
    console.log(`server is running on https//localhost:${Port}`);

});