const express = require('express');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const contactRoute = require('./routes/contact');
const connectDB = require('./config/db');
const app = express();

const port = process.env.port || 5000;
//DB connected
connectDB();
//Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to my app',
  });
});
//Routes
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/contacts', contactRoute);

app.listen(port, () => console.log(`App running on port ${port}`));
