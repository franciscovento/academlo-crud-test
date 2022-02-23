import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const token = localStorage.getItem('token')
  const [ userLogged, setUserLogged ] = useState(token);
  const [ toggle, setToggle ] = useState(false);

  const userInfo = {
    userLogged, 
    setUserLogged,
    toggle, 
    setToggle
  }

  return (
    <UserContext.Provider value={userInfo}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;