import decode from 'jwt-decode'

class AuthService{
  login(token){
    localStorage.setItem('token',token)
    window.location.assign('/#/')
    // window.location.reload();
  }
  logout(){
    localStorage.removeItem('token');
    // window.location.reload();
  }
  getToken(){
    return localStorage.getItem('token');
  }
  loggedIn(){
    const token = this.getToken();
    if(!token){
      return false;
    }
    const decodedToken = decode(token);
    if(decodedToken.exp < Date.now()/1000){
      this.logout();
      return false;
    }
    return true
  }
}

export const Auth = new AuthService();