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







