import "./App.css";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { login,logout,selectUser } from "./features/userSlice";
function App() {
  
  // const user=null;
  //const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  useEffect(()=>{
   const unsubscribe =  auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        console.log(userAuth)
      setUser(userAuth) ;
      console.log(user)
      
        //   dispatch(login({
      //     uid:userAuth.uid,
      //     email:userAuth.email,
      //   }))
       }
      else{
       // dispatch(logout);
      }
    })
    return unsubscribe;
  },[])



//   const user=useSelector(selectUser);
//   const dispatch = useDispatch();
 
//  const [logged,setLogged]=useState(false)

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((userAuth) => {
//       if (userAuth) {
//         dispatch(login({
//           uid: userAuth.uid,
//           email: userAuth.email,
         
//         }))
//         setLogged(true); 
//       }else{
//         dispatch(logout());
//       }
//     });
  
//     return unsubscribe; }, [dispatch]);

  
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
            <Route path="/profile" Component={Profile} />
            
          </Routes>
            )}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
