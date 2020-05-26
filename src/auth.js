import auth0 from 'auth0-js'


export default class Auth{
    auth0=new auth0.WebAuth({
        domain:"dev-6488szax.auth0.com",
        clientID:"7XoUtkt4VmPCbxnEWc897Vqh58I3ORMw",
        redirectUri:"http://localhost:3000/callback",
        audience:"https://dev-6488szax.auth0.com/userinfo",
        responseType:'token id_token',
        scope:"openid"
 
   })

   constructor(){
        this.login = this.login.bind(this)
   }

   login(){
       this.auth0.authorize();
   }



}