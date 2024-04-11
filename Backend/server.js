import app from "./app.js"
import db from "./database/db.js"
app.listen(process.env.PORT,()=>{
    console.log(`Server is Running on port ${process.env.PORT}`);
})
