const express = require('express');
// const PORT = require('./config/server.port');

const PORT = 3535

const app = express();

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});