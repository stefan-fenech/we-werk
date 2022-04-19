import './App.css';
import { Home } from './components/Home';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignUp } from './components/SignUp';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/signup' element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
