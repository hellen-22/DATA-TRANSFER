require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT


app.use(cors());
app.use(express.json());

app.use("/transferData", require("./transferData/transferRouter"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
}
);