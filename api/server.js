import express from 'express';
import "dotenv/config"
import router from './routes/index.routes.js';
import { mongoAtlasConnect } from './config/mongo.config.js';


const app = express();
const PORT = process.env.PORT || 8080
mongoAtlasConnect();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api", router)

app.listen(PORT, () => {
    console.log(`Server up in ${PORT}!!`);
})