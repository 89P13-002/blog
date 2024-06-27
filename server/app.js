const express = require("express"); 
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const blogRouter = require("./route/blog-router.js");
const cors = require('cors');
const path = require('path');

dotenv.config();

const app = express();

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// middlewares
app.use(cors());
app.use(express.json());
app.use("/blogs", blogRouter);


mongoose.connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.dgigfpo.mongodb.net/your_database_name?retryWrites=true&w=majority`,
    {   
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
.then(() => app.listen(3000, () => {
    console.log("Connected to localhost 3000");
}))
.catch((err) => {
    console.log(err);
});
