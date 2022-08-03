const app = require('./app');
const connectWithDB = require('./config/db');
const cloudinary = require('cloudinary');

//connect with database
connectWithDB();

//cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port: ${process.env.PORT}`);
});
