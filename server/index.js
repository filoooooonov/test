const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors({
    origin: "*"
}))


app.use(express.json())


module.exports = (req, res) => {
    //set header first to allow request or origin domain (value can be different)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS, DELETE');

//---- other code


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

 //Preflight CORS handler
 if(req.method === 'OPTIONS') {
    return res.status(200).json(({
        body: "OK"
    }))
}

}