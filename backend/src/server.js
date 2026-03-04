const express = require("express");
const notesRoutes = require("./routes/notesRoutes");
const connectDB = require("./config/db");
const rateLimiter = require("./middleware/rateLimiter");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

if(process.env.NODE_EVV ==="production"){
    app.use(cors());

}
app.use(express.json());
app.use(rateLimiter);
app.use(morgan("dev"));


app.use("/api/notes", notesRoutes);

if(process.env.NODE_ENV ==="production"){
    
app.use(express.static(path.join(__dirname, "../../frontend/dist")));


app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, "../../frontend/dist/index.html"));
});
}


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on port:", PORT);
  });
});