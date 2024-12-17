const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Jobs API',
      version: '1.0.0',
      description: 'API for managing jobs and authentication.',
    },
    servers: [
    
      {
        url: 'https://jobs-api-3azw.onrender.com',
        description: 'Production server',
      },
        {
        url: 'http://localhost:3000',
        description: 'Local development server',
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ BearerAuth: [] }],
  },
  apis: ['./routes/*.js'], // Path to route files
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);
module.exports = swaggerSpecs;
