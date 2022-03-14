import './App.css';
import './myCSS/body.css';
import { Navbar } from "./myComponents/Navbar";
import { Content1 } from "./myComponents/Content1";
import { Content2 } from "./myComponents/Content2";
import { Content3 } from "./myComponents/Content3";

function App() {
  return (
    <div className='mainBody'>
      <Navbar/>
      <Content1/>
      <Content3/>
      <Content2/>
    </div>
  );
}

export default App;
