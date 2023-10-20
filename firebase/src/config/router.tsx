import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "../screens/login"
import Signup from "../screens/signup"
import Task from "../screens/task"
import Protected from "../screens/protected"




export default function Approuter() {

  return <>

    <Router>
      <Routes>
        <Route path="/" element={<Protected Screen={Task} />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>

    </Router>
  </>
}