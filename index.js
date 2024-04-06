const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path"); // Import the path module

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.gwvnoc2.mongodb.net`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
    })
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.error("Failed to connect to MongoDB:", error);
    });

const Registration = mongoose.model("Registration", {
    name: String,
    email: String,
    password: String
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the "pages" directory
app.use(express.static(path.join(__dirname, "pages")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/index.html")); // Use path.join to build the file path
});

app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await Registration.findOne({ email: email });
        if (existingUser) {
            res.redirect("/error?message=User already exists");
        } else {
            res.redirect("/error?message=Incorrect password");
        }

    } catch (error) {
        console.error("Error during registration:", error);
        res.redirect("/error");
    }
});

app.get("/error", (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/error.html")); // Use path.join to build the file path
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
