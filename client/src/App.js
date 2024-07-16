

import './App.css';
import Editor from './components/Editor';
import NavBar from './components/NavBar';
import About from './components/About'; // Import the About component

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

function App() {
    return (
        <Router>
            <NavBar /> {/* Add the NavBar component here */}
            <Routes>
                <Route path='/' element={<Navigate replace to={`/docs/${uuid()}`} />} />
                <Route path='/docs/:id' element={<Editor />} />
                <Route path='/about' element={<About />} /> {/* Add About Route */}
            </Routes>
        </Router>
    );
}

export default App; 

// import './App.css';
// import Editor from './components/Editor';
// import {BrowserRouter as Router , Routes ,Route, Navigate} from 'react-router-dom';
// import {v4 as uuid}from 'uuid';

// function App() {
//   return (
    
//     <Router>
//       <Routes>
//         <Route path='/' element={<Navigate replace to={`/docs/${uuid()}`}/>}/>
//         <Route path='/docs/:id' element={<Editor/>}/>
//       </Routes>
//     </Router>

    
//   );
// }

// export default App;
