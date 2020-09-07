import React from "react";
import {Jumbotron} from "react-bootstrap";

function Header() {
    return(
        <Jumbotron className="mt-4">
          <h1>React Google Books Search</h1>
          <h3> Search and save books of interest!</h3>
        </Jumbotron>
    )
}

export default Header;