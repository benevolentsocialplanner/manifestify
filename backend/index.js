const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const initializeApp = require('firebase/app')
const getAnalytics = require('firebase/analytics')
const dbc = require('./utils/dbConfig')

app.use(cookieParser())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) 
require('dotenv').config();
app.use(cors({
    origin: 'http://localhost:8000',
    credentials: true
}));

dbc();
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin',  '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});
  
const authRoutes = require('./routes/authRoutes.js')
app.use('/auth', authRoutes);
const eventRoutes = require('./routes/eventRoutes.js')
app.use('/api', eventRoutes);

const port = process.env.PORT || 8000

/* const firebaseConfig = {
  apiKey: process.env.NODE_FIREBASE_API_KEY,
  authDomain: process.env.NODE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NODE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NODE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NODE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NODE_FIREBASE_APP_ID,
  measurementId: process.env.NODE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); */

//SERVER SETUP
app.listen(port, ()=>{
    console.log(`port : ${port}`)
})