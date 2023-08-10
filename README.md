
# Login System 
---
> 🎛️ create **Email/Google** SignUp In *seconds*
>

---

### How To Use 

| URL  | METHOD  | USE  | Response
|---|---|------|---|
| http://localhost:3000/  | GET  |  get user details and login status | User Object |
|  http://localhost:3000/auth |  GET | Nothing | NAN |
| http://localhost:3000/auth  | POST  |  To Register the user | Created User Object |
|  http://localhost:3000/auth/login |  POST | To login the user | User object |
| http://localhost:3000/google |  GET | To Login Using Google  | User Objet |
| http://localhost:3000/profile | GET  | To get Details Of Current logged user  | User Object |
| http://localhost:3000/logout  | GET  |  To Logout | Status |


* Send Data in this Format

```
{
     "name":"USER NAME",
     "password":"PASS",
     "username":"USERNAME",
     "email" :"Email",
}

```






=======
# EasyAuth - Rapid Authentication System

EasyAuth is a versatile authentication system that allows developers to add authentication to their applications in seconds. Built using Node.js, Express, Passport, and Prisma (a backend ORM), EasyAuth simplifies the process of integrating user authentication into web applications. It provides a secure and seamless user authentication experience, supporting various authentication methods such as username/password, social media logins, and more.

## Features

- **Easy Integration**: EasyAuth can be seamlessly integrated into any web application or framework, including React, Vue.js, Angular, etc.
- **Secure Authentication**: Utilizes industry-standard security practices to ensure the safety of user data and authentication processes.
- **Multiple Authentication Methods**: Supports various authentication methods, including username/password, social media logins (OAuth), and more.
- **Flexible and Customizable**: Can be easily customized and extended to fit the specific authentication requirements of different applications.
- **API Documentation**: Provides comprehensive documentation and code snippets for straightforward integration and usage.

## Technologies Used

- Node.js: Server-side runtime environment.
- Express: Web framework for handling routing and server-side logic.
- Passport: Authentication middleware and strategies (e.g., local, OAuth, etc.).
- Prisma: Backend ORM for database operations (using SQLite as the database).
- API: APIs to handle user registration, login, and authentication processes.
- Front-end Integration: Client-side code snippets and documentation for seamless integration into websites and applications.

## Usage

To use EasyAuth in your application, follow these steps:

1. Install the required dependencies by running the following command:

   ```shell
   Coming Soon 
   ```
   
  For detailed usage instructions and examples, please refer to the documentation included in this repository.
  
 ## License
This project is licensed under the MIT License.

## Acknowledgements
This project utilizes the following open-source libraries and frameworks:

* Node.js
* Express
* Passport
* Prisma


