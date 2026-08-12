import { useContext, useState } from "react";
import { ModalToggleContext } from "../../../context/ModalContext";
import { TeacherContext } from "../../../context/TeacherContext";

const AddTeacherM = ({ titleModal }) => {
  const { modalToggle, setModalToggle, setMessage } =
    useContext(ModalToggleContext);
  const { teacherList, setTeacherList } = useContext(TeacherContext);
  const [inputValueN, setInputValueN] = useState();
  const [inputValueL, setInputValueL] = useState();
  const [inputValueC, setInputValueC] = useState();
  const handleChangeValueN = (e) => {
    setInputValueN(e.target.value);
  };
  const handleChangeValueL = (e) => {
    setInputValueL(e.target.value);
  };
  const handleChangeValueC = (e) => {
    setInputValueC(e.target.value);
  };
  const handleAddTeacher = () => {
    if (inputValueN && inputValueL && inputValueC) {
      setInputValueC("");
      setInputValueL("");
      setInputValueN("");
      let newTeacher = {
        id: teacherList.length + 1,
        firstName: inputValueN,
        lastName: inputValueL,
        WhatGrade: inputValueC,
        IsOnline: false,
      };
      setTeacherList([...teacherList, newTeacher]);
      setMessage("messageSuccessTeacher");
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
      className={`modal-tem-css ${modalToggle == "Modal-2" ? "" : "hidden"}`}
    >
      <div
        className={`bg-dark w-50 rounded-5 inner-modal p-5 text-center position-relative ${modalToggle == "Modal-2" ? "animation-modal" : "close"}`}
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
              onChange={handleChangeValueN}
              placeholder="نام معلم را وارد کنید..."
            />
          </div>
          <div className="d-flex gap-2 mt-3 text-nowrap">
            <label className="fs-5" htmlFor="lNameStudent">
              نام خانوادگی:
            </label>
            <input
              id="lNameStudent"
              className="form-control"
              onChange={handleChangeValueL}
              type="text"
              placeholder="نام خانوادگی معلم را وارد کنید..."
            />
          </div>
          <div className="d-flex gap-2 mt-3 text-nowrap">
            <label className="fs-5" htmlFor="lNameStudent">
              نام درس:
            </label>
            <input
              id="lNameStudent"
              className="form-control"
              onChange={handleChangeValueC}
              type="text"
              placeholder="نام درس معلم را وارد کنید..."
            />
          </div>
          {/* <div className="d-flex gap-2 mt-3 text-nowrap text-end d-flex align-items-center">
            <label className="fs-5 text-wrap w-25">لطفا عکس را وارد کنید</label>
            <div className=" d-flex justify-content-center align-items-center">
              <label className="text-black" htmlFor="upload-image">
                {/* <img
                  src="../../../../../public/image/addImagebtn.png"
                  width={60}
                  alt=""
                />
              </label>
              <input
                id="upload-image"
                type="file"
                accept="image/x-png, image/jpeg"
                className="d-block"
              />
            </div>
             <p>پیش نمایش عکس:</p>
             <img width={60} className="object-fit-cover" src="" alt="" /> 
             <div></div>
          </div> */}
        </form>
        <button
          onClick={handleAddTeacher}
          className="btn btn-success mt-4 w-100 py-3"
        >
          اضافه کردن
        </button>
      </div>
    </div>
  );
};
export default AddTeacherM;
