import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Blog, Cafe, Illustration, Main, Sns, Twitch, Youtube } from "./pages";
import { Gnb, LocationUpdater } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Gnb />

      <main id="main">
        <Routes>
          <Route path="/" element = { <Main /> } />

          <Route path="/Twitch" element = { <Twitch /> } />
          <Route path="/Blog" element = { <Blog /> } />
          <Route path="/Cafe" element = { <Cafe /> } />
          <Route path="/Youtube" element = { <Youtube /> } />
          <Route path="/Sns" element = { <Sns /> } />
          <Route path="/Illustration" element = { <Illustration /> } />
          
          <Route path='*' element={<Navigate to = "/" />} />
        </Routes>
      </main>

      <LocationUpdater />
    </BrowserRouter>
  );
}

export default App;
