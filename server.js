const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes =  require('./routes/productRoutes');
const cors = require('cors');
var bodyParser = require('body-parser')
const app = express();
// Load environment variables from .env file
dotenv.config();
console.log(process.env.MONGO_URI)
// Connect to MongoDB
connectDB();
const allowedOrigins = [
    'http://localhost:4500', "http://localhost:5173",
    // other allowed origins can be added here
  ];
  
  const corsOptions = {
  
  
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
    optionsSuccessStatus: 200, // For legacy browser support
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
  };

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json());
app.use(productRoutes)





// Basic route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
