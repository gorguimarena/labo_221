import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'LABO 221 API',
      version: '1.0.0',
      description: 'Documentation des routes de l API LABO 221',
    },
    servers: [
      { url: process.env.SWAGGER_SERVER_URL || 'http://localhost:3000', description: process.env.ENV || 'environment' }
    ],
    components: {
      schemas: {
      }
    }
  },
  apis: ['./src/swagger/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;   
