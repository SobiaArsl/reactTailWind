import { useState } from 'react'

import Home from './components/Home';
import Work from './components/Work';
import Navbar from './components/resturent/Navbar';
import Down1 from './components/resturent/Down1';
// import './App.css'

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>{/* <Home /> */} {/* <Work /> */}


<Navbar />
<Down1 />
    </div>
  );
}

