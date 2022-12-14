import OPList from "../OPList/OPList";
import "./Modal.css";
import { SearchInput } from "./SearchInput";

export default function Modal({ modalCheck, setModalCheck }) {
  return (
    <>
      {modalCheck.includes(true) ? (
        <div className="Modal_Container">
          <div className="Modal_Contents">
            {modalCheck[0] ? <SearchInput /> : null}
            {modalCheck[1] ? <OPList /> : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
