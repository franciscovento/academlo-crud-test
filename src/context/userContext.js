import { createContext, useEffect, useState } from "react";
import { fetchData } from "../utlis/fetchData";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const token = localStorage.getItem('token')
  
  const [tasks, setTaks] = useState([]);
  const [ userLogged, setUserLogged ] = useState(token);
  const [ toggle, setToggle ] = useState(false);
  const [ getApiInfo, setApiInfo ] = useState(false);

  useEffect(() => {
    const getInfo = async () =>{
      const data = await fetchData(userLogged);
      setTaks(data)
    }
    getInfo()
  },[getApiInfo, userLogged])

  const userInfo = {
    userLogged, 
    setUserLogged,
    toggle, 
    setToggle,
    tasks,
    setTaks, 
    getApiInfo, 
    setApiInfo
  }

  return (
    <UserContext.Provider value={userInfo}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;