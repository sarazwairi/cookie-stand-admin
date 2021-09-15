import CookieStandAdmin from '../components/CookieStandAdmin';
import LoginForm from '../components/LoginForm';
import { useState } from 'react';
import { getToken } from '../data';
export default function Home() {

  const [token, setToken] = useState();
  const [username, setUsername] = useState('');

  async function loginHandler(values) {
  //  values.preventDefault();
   const fetchedToken=await getToken(values);
   setToken(fetchedToken);
   setUsername(values.username);
  }
  function logoutHandler(){
    setToken(null);
  }
 

  if (!token) return <LoginForm onSubmit={loginHandler} />

  return <CookieStandAdmin token={token} onlogout = { logoutHandler }username = { username } />

}
