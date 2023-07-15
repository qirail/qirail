import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import NoPage from "./pages/NoPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<App />}></Route>
  //         {/* <Route index element={<App />} /> */}
  //         <Route path="*" element={<NoPage />} />
  //     </Routes>
  //   </BrowserRouter>
    <App />
);
