import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Movie Streaming API",
            version: "1.0.0",
            description: "API documentation for Movie Streaming API"
        },
        servers: [
            {
                url: "http://localhost:3000/api/v1"
            }
        ]
    },
    apis: ["./src/routes/*.ts"]
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;