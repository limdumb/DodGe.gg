import OPList from "../OPList/OPList";
import "./Modal.css";
import { SearchInput } from "./SearchInput";

export default function Modal({ modalCheck, setModalCheck, darkMode }) {
  return (
    <>
      {modalCheck.includes(true) ? (
        <div className="Modal_Container">
          <div className="Modal_Contents">
            {modalCheck[0] ? (
              <div className={darkMode ? "Modal_Search_Box Dark_Modal_Search_Box" : "Modal_Search_Box"}>
                <SearchInput
                  modalCheck={modalCheck[0]}
                  setModalCheck={setModalCheck}
                />
              </div>
            ) : null}
            {modalCheck[1] ? <OPList setModalCheck={setModalCheck} position={"modal"} darkMode={darkMode}/> : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
