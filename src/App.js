import SignUp from "./components/SingUp";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import TodoList from "./components/TodoList";
import Form1 from "./components/Form1";
import SingUp2 from "./components/SingUp2";
import SingUp3 from "./components/SignUp3";
import RadioBtn from "./components/RadioBtn";
import SelectOption from "./components/Selectoption";
import Checkbox1 from "./components/Checkbox1";
import File1 from "./components/File";
import Form2 from "./components/Form2";
import Date1 from "./components/Date1";
function App() {
  return (
    <div >
      <Router>
      <Navbar/>
      
        <Routes>
          <Route path="/" element={<SignUp/>}/>
          <Route path="/todolist" element={<TodoList/>}/>
          <Route path="/form1" element={<Form1/>}/>
          <Route path="/signup2" element={<SingUp2/>}/>
          <Route path="/signup3" element={<SingUp3/>}/>
          <Route path="/radiobtn" element={<RadioBtn/>}/>
          <Route path="/selectoption" element={<SelectOption/>}/>
          <Route path="/checkbox1" element={<Checkbox1/>}/>
          <Route path="/file" element={<File1/>}/>
          <Route path="/form2" element={<Form2/>}/>
          <Route path="/Date1" element={<Date1/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
