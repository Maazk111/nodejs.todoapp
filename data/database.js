import mongoose from "mongoose";

// Database Connection

export const connectDB = () => {

        mongoose
        .connect(process.env.MONGO_URI , {
            dbName:"backendapi",
        }).then(() => console.log("DataBase Connected"))
        .catch( (e) => { console.log(e)});

}
