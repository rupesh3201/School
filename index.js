// setup done
import express from 'express';

const app = express();
app.use(express.json());
const Port = 5003 ;
app.listen(Port, ()=>
{
    console.log(`server is running on https//localhost:${Port}`);

});