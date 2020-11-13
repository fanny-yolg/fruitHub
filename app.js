const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
const mongoose = require('mongoose');

//middleware parser
app.use(express.json()); //req.body
app.use(express.urlencoded({ extended: true })); // encoded
app.use(cors());

//db config
const mongoURI = process.env.MONGO_URI; // panggil mongo connection
mongoose.Promise = global.Promise; // Pakai promise node
const options = {
  useNewUrlParser: true, //biar tidak ada error
  useUnifiedTopology: true, //enable feture sebelumnya
  useFindAndModify: false,
};
mongoose.connect(mongoURI, options); //connect db

//Database connection show in console
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error'));
db.once('open', () => console.log('Connected to mongoDB!'));

//routers
const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

app.use(router);
app.use(errorHandler);

// server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
