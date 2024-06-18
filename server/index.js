const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors({
    origin: "*"
}))


app.use(express.json())

app.post('/api', (req, res) => {
    console.log('body', req.body)
    const body = req.body.data
    res.send({data: body.toLowerCase()})
})

app.listen(PORT, (error) =>{
    if(!error)
        console.log(`Server is Successfully Running on PORT`, PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);