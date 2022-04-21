import './style.css';
import { Home } from './components/Home';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignUp } from './components/SignUp';
import { Dashboard } from './components/Dashboard';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// const darkTheme = createTheme({
//     palette: {
//         mode: 'dark',
//     },
// });

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
