import React from "react";
import Anime from './anime';
import { Fade } from "react-reveal";
import {Container } from "react-bootstrap";
function App() {
  return (
    <Container className="text-center" fluid>
      <div style={{"background-image": "url('https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg')",
      "width":"100%","height":"80%","position":"absolute"}}>
    <div className="center-left">
    <Fade up>
      <h1 className="heading" style={{"font-size":"80px","color":"white"}}>
        <Anime />
      </h1>
      <h2 style={{"font-size":"50px","font-weight":"600","color":"white"}}>
      I create value through design <br></br>
and illustration to elevate your<br></br> company to a new level.
      </h2>
    </Fade>
  </div>
  </div>
</Container>
    
  );
}

export default App;
