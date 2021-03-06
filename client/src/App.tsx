import './style.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignUp } from './components/SignUp';
import { Dashboard } from './components/Dashboard';
import { SignUpPoster } from './components/SignUpPoster';
import { Admin } from './components/Admin';
import { PostJob } from './components/PostJob';
import { JobDetails } from './components/JobDetails';
import { Index } from './components/Index';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Index />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/signup-poster' element={<SignUpPoster />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/admin' element={<Admin />} />
                    <Route path='/post-job' element={<PostJob />} />
                    <Route path='/job/:id' element={<JobDetails />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
