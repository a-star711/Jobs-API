🚀 **Jobs API**  
A Node.js RESTful API for managing job applications, user authentication, and CRUD operations with MongoDB.


🌐 **Live Demo**  
- Deployed on Render: https://jobs-api-3azw.onrender.com/api-docs/
- Access the Swagger documentation for testing and exploring endpoints.

🎯 **Features**  
- User registration and login (JWT-based authentication).  
- Secure CRUD operations for job postings.  
- Swagger UI integration for easy API testing and documentation.  
- Built with MVC architecture for clean and scalable code.  
- Security features like CORS, helmet, rate-limiting, and input sanitization.

🛠 **Tech Stack**  
- **Back-End:** Node.js, Express.js  
- **Database:** MongoDB (Atlas)  
- **Security:** JWT, helmet, CORS, rate-limiting  
- **Documentation:** Swagger UI  


| **Endpoint**              | **Method** | **Description**               | **Auth Required** |
|---------------------------|------------|-------------------------------|------------------|
| `/api/v1/auth/register`   | POST       | Register a new user           | ❌ No            |
| `/api/v1/auth/login`      | POST       | Login and get JWT token       | ❌ No            |
| `/api/v1/jobs`            | GET        | Get all job postings          | ✅ Yes           |
| `/api/v1/jobs`            | POST       | Create a new job posting      | ✅ Yes           |
| `/api/v1/jobs/:id`        | GET        | Get a single job by ID        | ✅ Yes           |
| `/api/v1/jobs/:id`        | PATCH      | Update a job posting          | ✅ Yes           |
| `/api/v1/jobs/:id`        | DELETE     | Delete a job posting          | ✅ Yes           |


📄 **License**  
This project is open-source and available under the MIT License.
