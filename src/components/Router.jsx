import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import HomePage from './HomePage'
import Signup from './Signup/Signup'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router