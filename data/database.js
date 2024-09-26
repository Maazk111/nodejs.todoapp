import mongoose from "mongoose";

// Database Connection

export const connectDB = () => {

        mongoose
        .connect(process.env.MONGO_URI , {
            dbName:"backendapi",
        }).then((c) => console.log(`DataBase Connected with ${c.connection.host}`))
        .catch( (e) => { console.log(e)});

}
