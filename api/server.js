import express from 'express';
import "dotenv/config"
import router from './routes/index.routes.js';
import { mongoAtlasConnect } from './config/mongo.config.js';
import cors from 'cors';


const app = express();

app.use(cors({origin:"*"}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  }); 
  
const PORT = process.env.PORT || 8080
mongoAtlasConnect();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api", router)

app.listen(PORT, () => {
    console.log(`Server up in ${PORT}!!!`);
})