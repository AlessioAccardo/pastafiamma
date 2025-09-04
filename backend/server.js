require('dotenv').config();
const cors = require('cors');

const express = require('express');
const app = express();

app.use(cors());


app.use(express.json());




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`);
})
