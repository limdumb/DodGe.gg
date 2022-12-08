import OPList from "../OPList/OPList";
import "./Modal.css";
import SerchInput from "./SerchInput"

export default function Modal({modalCheck}) {
  return (
    <>
      {modalCheck.includes(true) ? (
        <div className="Modal_Container">
          <div className="Modal_Contents">
            {modalCheck[0] ? <SerchInput/> : null}
            {modalCheck[1] ? <OPList/>: null}
          </div>
        </div>
      ) : null}
    </>
  );
}
