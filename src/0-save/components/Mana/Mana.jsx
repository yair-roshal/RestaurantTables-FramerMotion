import { useState, useRef, useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import * as React from "react";
import "animate.css";
import "./Mana.scss";

export function Mana(props) {
  return (
    <div className="row middle-on-small center-on-small">
      <div className="column small-12 medium-6 large-4">
        <a href="#!" className="c-button c-button--gooey">
          Need mana
          <div className="c-button__blobs">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </a>
      </div>
    </div>
  );
}
