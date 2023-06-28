import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './QuizStyle.css';
import QuizHome from './QuizHome.js';
import VocabLight from './VocabLight.js';
import VocabDifficult from './VocabDifficult.js';
import ToFLight from './ToFLight.js';
import ToFDifficult from './ToFDifficult.js';
import NTTLight from './NTTLight.js';
import NTTDifficult from './NTTDifficult.js';
import LoaderHandler from './LoaderHandler';
import swDev from './swDev.js';

function START() {
    return(
        <>
            <div id="Loader">QU<span id="LoaderI">:</span>Z</div>
            <LoaderHandler/>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<QuizHome/>}/>
                    <Route path="/VocabLight" element={<VocabLight />} />
                    <Route path="/VocabDifficult" element={<VocabDifficult />} />
                    <Route path="/ToFLight" element={<ToFLight />} />
                    <Route path="/ToFDifficult" element={<ToFDifficult />} />
                    <Route path="/NTTLight" element={<NTTLight />} />
                    <Route path="/NTTDifficult" element={<NTTDifficult />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}
swDev();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<START/>);

