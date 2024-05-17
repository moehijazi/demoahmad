import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const AuthContext = createContext();

const setCookie = (name, value) => {
     const d = new Date();
     d.setTime(d.getTime() + 3 * 24 * 60 * 60 * 1000);
     const expires = "expires=" + d.toUTCString();
     document.cookie = name + "=" + value + ";" + expires + ";path=/";
   };

const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
     const [token, setToken] = useState(localStorage.getItem("site") || "");
     const navigate = useNavigate();
     const loginAction = async (inp) => {
          try {
               // const resp = await Axios({
               //      method: "POST",
               //      url: 'http://localhost:9000/api/auth/login',
               //      headers: {
               //           "Content-Type": "application/json",
               //      },
               //      data: inp
               // });
               
               if(inp.login === "test" && inp.password === "test"){
                    setUser({full_name:"test user", admin: false});
                    setToken("token");
                    localStorage.setItem("site", token)
                    localStorage.setItem("user", JSON.stringify(user))
               

               }
               else {
                    <Alert severity="error">This is an error Alert.</Alert>
               }
               
               navigate("/"); 
          } catch (error) {
               console.log(error.message);
          }
     };

     const logout = () => {
          setUser(null);
          setToken("");
          localStorage.removeItem("site");
          localStorage.removeItem("user");
          navigate("/login");
     };

     return (
          <AuthContext.Provider value= {{token, user, loginAction, logout}}>
               {children}
          </AuthContext.Provider>
     )
};

export default AuthProvider;

export const useAuth = () => {
     return useContext(AuthContext);
};