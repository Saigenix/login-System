const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const createError = require('http-errors');
require("dotenv").config();
const bcrypt = require("bcryptjs");
const { json } = require("body-parser");
const jwt = require("../utils/jwt");

class authService {
  static async register(data) {
    // email username password name
    const { email, username , password , name} = data;
    if(!email || !username ||!password ||!name){
      throw createError.NotFound("enter valid details");
    }
    data.password = bcrypt.hashSync(data.password, 8);
    //console.log(data.name)
    // let user = await prisma.user.create({
    //   data:{
    //     name:data.name,
    //     password:data.password,
    //     username:data.username,
    //     email :data.email,
    //   },
    // });
    try{
    let user  = await prisma.user.create({
      data:data
    })}
    catch(e){
      throw createError(405,"already have data")
    }
    console.log(user)
    // user.then((c)=>{
    //   console.log(c)
    // }).catch(err =>{
    //   console.log(err)
    // })
    data.accessToken = await jwt.signAccessToken(user);
    return data;
  }

  static async login(data) {
    const { email, password } = data;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw createError.NotFound("User not registered");
    }
    const checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword)
      throw createError.Unauthorized("Email address or password not valid");
    delete user.password;
    const accessToken = await jwt.signAccessToken(user);
    return { ...user, accessToken };
  }

  static async all() {
    const allUsers = await prisma.user.findMany();
    return allUsers;
  }
}

module.exports = authService;
