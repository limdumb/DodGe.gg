import OPList from "../OPList/OPList";
import "./Modal.css";

export default function Modal({modalCheck}) {
  return (
    <>
      {modalCheck.includes(true) ? (
        <div className="Modal_Container">
          <div className="Modal_Contents">
            {modalCheck[0] ? 'input창' : null}
            {modalCheck[1] ? <OPList/>: null}
          </div>
        </div>
      ) : null}
    </>
  );
}
