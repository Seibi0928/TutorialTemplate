import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    BrowserRouter,
    Link,
    Outlet,
    Route,
    Routes,
} from "react-router-dom";
import { Game } from './components/Game';
import '../stylesheet/app.scss';
import { Hello } from './components/Hello';
import { useState } from 'react';
import { Other } from './Other';
import { App } from './UISSU';


const container = document.getElementById('root');
if (!container) {
    throw new Error('The element (id=root) does not exist.');
}
createRoot(container).render(<App />);
    //     <Routes>
    //         <Route path="/" element={<App />}>
    //             <Route path="/game" element={<Game />} />
    //             <Route path="/hello" element={<Game />} />
    //         </Route>
    //     </Routes>
    // </BrowserRouter>
