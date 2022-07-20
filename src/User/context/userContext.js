import { auth } from "../../Config/firebase";
import { Auth } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { createContext, useContext, useState } from "react";

const UserContext = createContext({});
export const useUserContext =()=>useContext(UserContext)
export const UserContextProvider =({children}) =>{

const [user,setUser] =useState(null);
const [loading,setLoading] =useState();
const[error,setError] = useState('');

const logout =() =>{
}
const forgotPassword =(email) =>{
    return sendPasswordResetEmail(auth,email);
}
const contextValue ={
    user,
    loading,
    error,
    logout,
    forgotPassword,
};

return
<UserContext.Provider value={contextValue}></UserContext.Provider>
}
