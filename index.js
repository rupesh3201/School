// setup done
import express from 'express';

const app = express();

app.use(express.json());

const Students = []
// student api 
app.get("/students", (req, res)=>{
    res.json({
        sucess: true,
        data: Students , 
        msg : "server is running"
        
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