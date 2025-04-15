require("dotenv").config();
const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

const usersRoutes = require("./routes/usersRoutes");
const postsRoutes = require("./routes/postsRoutes");
const setupSwagger = require('./config/swagger');

app.use(express.json());
setupSwagger(app);

app.use("/api/users", usersRoutes);
app.use("/api/posts", postsRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

