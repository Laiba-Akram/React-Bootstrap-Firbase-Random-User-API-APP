import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Protected from './components/Protected';
import {UserAuthContextProvider} from './context/UserAuthContext';
function App() {
  return (
<>
        <UserAuthContextProvider>
          <Routes>
          <Route path='/Home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path='/Login' exact element={<Login/>}/>
          <Route path='/Signup' element={<Protected><Signup/></Protected>}/>
        </Routes>
        </UserAuthContextProvider>
        </>
  );
}

export default App;
