const express = require('express'); 

const app = express();

app.get('/', (req, res) => {
    res.send({ 
        "id": 1,
        "name": "Manit",
        "id": 2,
        "name": "Mana" 
    });
});

app.listen(5000, () => {
    console.log('Express Server is Running at Port No 5000..'); 
});