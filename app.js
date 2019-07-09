const express = require('express');

const app = express();


//Routes 




app.get('/', (req, res) => {
    res.send('we are on home page');
});

app.get('/posts', ( req , res ) => {
    res.send('we are on posts ');
})



// listener on server 
app.listen(3000);
