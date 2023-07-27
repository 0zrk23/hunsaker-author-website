const jwt = require('jsonwebtoken');
const { Admin } = require('../models');
const {GraphQLError} = require('graphql');
require('dotenv').config();

const secret = process.env.SECRET;
const expiration = '2h';

const authMiddleware = function({req}){
  //pull the token body, query
  // console.log(req.body);
  // console.log(req.query);
  // console.log(req.headers);
  let token = req.body.token || req.query.token || req.headers.Authorization;

  if(!token){
    return req;
  }

  try {
    const {data} = jwt.verify(token, secret , {maxAge: expiration})
    req.user = data
  } catch (err) {
    console.log(err);
  }

  return req;
}

const signToken = function ({ email, username, _id }) {
  const payload = { email, username, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}

const validToken = async function (token){
  const decodedToken = jwt.verify(token,secret);
  const admin = await Admin.findById(decodedToken.data._id);
  if(decodedToken.exp < Date.now()/1000 || !admin){
    return false;
  }
  return true;
}

const checkAuth = async function(context,errorMessage){
  // console.log(context.headers);
  const {authorization} = context.headers;
  if(authorization === "empty"){
    console.log(errorMessage);
    throw new GraphQLError('Unauthorized to make this request',{
      extensions: {
        code: 'UNAUTHORIZED',
        http: '401'
      }
    })
  }
  console.log('hit');
  if(!(await validToken(authorization))){
    console.log(errorMessage);
    throw new GraphQLError('Unauthorized to make this request',{
      extensions: {
        code: 'UNAUTHORIZED',
        http: '401'
      }
    })
  }
}

module.exports = {
  authMiddleware,
  signToken,
  validToken,
  checkAuth
};
