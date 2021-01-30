import React from "react";
import Anime from './anime';
import { Fade } from "react-reveal";
import {Container} from "react-bootstrap";

function App() {
  return (
    <Container className="text-center" fluid>
    <div className="center-left">
    <Fade up>
      <h1 className="heading" style={{"font-size":"80px"}}>
        <Anime />
      </h1>
      <h2 style={{"font-size":"50px","font-weight":"600"}}>
      I create value through design <br></br>
and illustration to elevate your<br></br> company to a new level.
      </h2>
    </Fade>
  </div>
</Container>
    
  );
}

export default App;
