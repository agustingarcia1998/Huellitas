import express from 'express';
import "dotenv/config"

const app = express();
const PORT = process.env.PORT || 8080

app.use('/test', (req, res) => {
    res.json("Hola mundo")
})

app.listen(PORT, () => {
    console.log(`Server up in ${PORT}!!`);
})