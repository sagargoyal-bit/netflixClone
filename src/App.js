import { useEffect } from "react";
import Body from "./Components/Body";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Utils/firebase";
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "./Store/userSlice";

function App() {
  
  const dispatch = useDispatch()

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        console.log("user",user)
        dispatch(addUser({ id:uid, email:email, displayName:displayName }))
      } else {
        dispatch(removeUser())
      }
    });
  },[]);
  return (
    <div className="App">
      <Body/>
    </div>
  );

}

export default App;
