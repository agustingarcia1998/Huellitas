import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose.set("strictQuery", false);

 export const mongoAtlasConnect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Se ha conectado exitosamente a MongoAtlas");
    }catch(error){
        console.log("Se ha presentado el siguiente error al intentar conectarse a MongoAtlas: ", error);
    }
}