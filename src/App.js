import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {useState} from'react'
function App() {
    const [value,setValue] = useState(0)
    const increment = () => {
        setValue((previous)=>previous+1)
        // setValue((previous)=>previous+1)
        console.log(value);
        
    }
 return(<>
 {value}
 <div onClick={increment}>Click ME </div>
 <div>gwjhfjhwe</div>
  
  </>)
}

export default App;
