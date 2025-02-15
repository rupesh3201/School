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
// post api students
app.post("/students", (req, res)=>{
    const {id , name , city} =req.body;
    // validation
    if (!id)
    {
        return res.json({
            sucess:false,
            msg : "id must required"
        });
    }
    if (!name)
    {
            return res.json({
                sucess:false,
                msg : "name must required"
            });
    }
    if (!city)
    {
            return res.json({
                sucess:false,
                msg : "city must required"
            });
    }
    const student = {
        id ,
        name,
        city,
    };
    res.json({
        sucess: true,
        data: student , 
        msg : " Students  added  sucessfully"
        
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