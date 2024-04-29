const express = require('express'); 

const app = express();

app.get('/', (req, res) => {
    res.send({ 
        "id": 1,
        "name": "Manit" 
    });
});

app.listen(7000, () => {
    console.log('Express Server is Running at Port No 7000..'); 
});