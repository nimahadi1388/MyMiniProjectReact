import { useContext, useState } from "react";
import { ModalToggleContext } from "../../../context/ModalContext";
import { StudentsContext } from "../../../context/StudentsContext";

const AddStudentM = ({ titleModal }) => {
  const { modalToggle, setModalToggle, setMessage } =
    useContext(ModalToggleContext);
  const { students, setStudents } = useContext(StudentsContext);
  const [inputValueN, setInputValueN] = useState("");
  const [inputValueL, setInputValueL] = useState("");
  const handleChangeValueN = (e) => {
    let valName = e.target.value;
    setInputValueN(valName);
  };
  const handleChangeValueL = (e) => {
    let valLastName = e.target.value;
    setInputValueL(valLastName);
  };

  const handleAddStudent = () => {
    if (inputValueL.trim() && inputValueN.trim()) {
      let newStudent = {
        id: students.length + 1,
        firstname: inputValueN,
        lastname: inputValueL,
        isOnline: false,
        score: 0,
      };
      setStudents([...students, newStudent]);
      setMessage("messageSuccessStudent");
      setInputValueL("");
      setInputValueN("");
      setTimeout(() => {
        setMessage(false);
      }, 4000);
    } else {
      setMessage("messageErr");
      setTimeout(() => {
        setMessage(false);
      }, 4000);
      return false;
    }
  };
  return (
    <div
      className={`modal-tem-css ${modalToggle == "Modal-1" ? "" : "hidden"}`}
    >
      <div
        className={`bg-dark w-50 rounded-5 inner-modal p-5 text-center position-relative ${modalToggle == "Modal-1" ? "animation-modal" : "close"}`}
      >
        <img
          onClick={() => {
            setModalToggle(false);
            document.body.style.overflow = "auto";
          }}
          width={35}
          className="object-fit-cover text-end position-absolute end-0 me-5 top-0 mt-4"
          src="../../../../../public/image/closeBtn.png"
          alt=""
        />
        <h2>{titleModal}</h2>
        <form className="w-75 mx-auto mt-5">
          <div className="d-flex gap-2 mt-3">
            <label className="fs-5" htmlFor="nameStudent">
              نام:
            </label>
            <input
              id="nameStudent"
              className="form-control"
              type="text"
              placeholder="نام دانش اموز را وارد کنید..."
              value={inputValueN}
              onChange={handleChangeValueN}
            />
          </div>
          <div className="d-flex gap-2 mt-3 text-nowrap">
            <label className="fs-5" htmlFor="lNameStudent">
              نام خانوادگی:
            </label>
            <input
              id="lNameStudent"
              className="form-control"
              value={inputValueL}
              onChange={handleChangeValueL}
              type="text"
              placeholder="نام خانوادگی دانش اموز را وارد کنید..."
            />
          </div>
          {/* <div className="d-flex gap-2 mt-3 text-nowrap text-end d-flex align-items-center">
            <label className="fs-5 text-wrap w-25">لطفا عکس را وارد کنید</label>
             <div className=" d-flex justify-content-center align-items-center">
              <label className="text-black" htmlFor="upload-image">
                 <img
                  src="../../../../../public/image/addImagebtn.png"
                  width={60}
                  alt=""
                /> 
              </label>
              <input
                id="upload-image"
                type="file"
                accept="image/x-png, image/jpeg"
                className="form-control"
              />
            </div>
             <p>پیش نمایش عکس:</p>
             <img width={60} className="object-fit-cover" src="" alt="" /> 
            <div></div>
          </div> */}
        </form>
        <button
          onClick={handleAddStudent}
          className="btn btn-success mt-4 w-100 py-3"
        >
          اضافه کردن
        </button>
      </div>
    </div>
  );
};
export default AddStudentM;
