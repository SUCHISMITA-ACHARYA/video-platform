const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const http = require("http")
const { Server } = require("socket.io")

const app = express()

const server = http.createServer(app)
const io = new Server(server, { cors: { origin: "*" } })

app.use(cors())
app.use(express.json())
app.use("/uploads", express.static("uploads"))

mongoose.connect("mongodb+srv://admin:5lp59FldtPGAibs2@cluster0.gwh7aw2.mongodb.net/?appName=Cluster0")



app.use("/auth", require("./routes/auth"))
app.use("/video", require("./routes/video")(io))
app.use("/auth", require("./routes/auth"))

server.listen(5000)
