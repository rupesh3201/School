// setup done
import express from 'express';

const app = express();

app.use(express.json());

app.get("/health", (req, res)=>{
res.json({
    sucess: true,
    msg : "server is running"
})
}
)
const Port = 5003 ;
app.listen(Port, ()=>
{
    console.log(`server is running on https//localhost:${Port}`);

});