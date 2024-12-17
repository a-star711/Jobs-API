require('dotenv').config();
require('express-async-errors');

//  security packages 

const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit')
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./docs/swagger'); // Reference the swagger.js file

const express = require('express')
const app = express();

//connect DB
const connectDB = require('./db/connect')
const authMiddleware = require('./middleware/authentication');
// router
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.set('trust proxy', 1)
app.use(rateLimit({
  windowsMs: 15*60*1000,  // 15 minutes
  max: 100, // limit each IP to 100 requests per windowsMs
}))
app.use(express.json());
app.use(helmet())
app.use(cors())
app.use(xss())

// extra packages
app.get('/', (req, res) => {
  res.send('Welcome to the Jobs API! Use /api-docs for API documentation.');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// routes

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authMiddleware, jobsRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
