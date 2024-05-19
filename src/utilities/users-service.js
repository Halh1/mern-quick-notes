import * as userAPI from "./users-api";

export async function signUp(userData) {

    const token = await userAPI.signUp(userData);
    localStorage.setItem('token', token);
    return getUser();
        
}

export async function login(userData) {

  const token = await userAPI.login(userData);
  localStorage.setItem('token', token);
  return getUser();
      
}

export function logOut() {
  localStorage.removeItem('token');
}

export function getToken() {
    // getItem returns null if there's no string
    const token = localStorage.getItem('token');
    if (!token) return null;
    // Obtain the payload of the token
    const payload = JSON.parse(atob(token.split('.')[1]));
    // A JWT's exp is expressed in seconds, not milliseconds, so convert
    if (payload.exp * 1000 < Date.now()) {
      // Token has expired - remove it from localStorage
      localStorage.removeItem('token');
      return null;
    }
    return token;
}
  
export function checkToken(){
  alert('clicked');
}

  export function getUser() {
    const token = getToken();
    // If there's a token, return the user in the payload, otherwise return null
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}