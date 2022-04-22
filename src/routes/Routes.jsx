import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Login from '../components/Login';

//   COMPONENTS
import Layout from '../containers/Layout';
import Favorites from '../pages/Favorites';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';


const RoutesComponent = () => {
    return (
        <div className='Routes'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout>
                            <Home/>
                        </Layout>}>
                    </Route>
                    <Route path="/favorites" element={<Layout>
                            <Favorites/>
                        </Layout>}>
                    </Route>
                    <Route path='/login' element={<Layout>
                        <LoginPage>
                            <Login/>
                        </LoginPage>
                    </Layout>}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RoutesComponent
