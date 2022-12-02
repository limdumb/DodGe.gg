import { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [activate, setActivate] = useState(false);
  return (
    <>
      {activate ? (
        <div className="Modal_Container">
          <div className="Modal_Contents"></div>
        </div>
      ) : null}
    </>
  );
}
