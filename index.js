// setup done
import express from 'express';

const app = express();

app.use(express.json());

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