const { PrismaClient } = require("@prisma/client");
const express = require("express");

const app = express();

const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.send("Error Handlin Hello World");
});

app.listen(8001);
