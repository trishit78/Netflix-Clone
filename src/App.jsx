import "./App.css";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useState } from "react";
function App() {
  
  const [user, setUser] = useState(null);
  
  useEffect(()=>{
   const unsubscribe =  auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
       // console.log(userAuth)
      setUser(userAuth) ;
  //    console.log(user)
      
       
       }
      else{
       
      }
    })
    return unsubscribe;
  },[])


console.log(user)

  
  return (
    <>
      <div className="app">
        <BrowserRouter>
        {
          !user ? (
            <Login/>
          ) : (

            <Routes>
            <Route path="/" Component={HomeScreen} />
            <Route path="/profile" element={<Profile setUser={setUser}  user={user}/>} />
            
          </Routes>
            )}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
