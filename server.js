const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

mongoose.connect("mongodb://localhost/google_books", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(PORT, function(){
    console.log(`App listening on port ${PORT}`);
});