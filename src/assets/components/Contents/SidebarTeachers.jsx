import { useContext } from "react";
import { TeacherContext } from "../../context/TeacherContext";

const SidebarTeacher = ({ openTeacherList, setOpenTeacherList }) => {
  const { teacherList, setTeacherList } = useContext(TeacherContext);
  const handleDeleteTeacher = (id) => {
    let deleteTeacher = teacherList.filter((teacher) => teacher.id !== id);
    setTeacherList(deleteTeacher);
  };
  return (
    <div
      className={`teacher-boxes mx-auto text-center p-4 bg-black top-0 ${openTeacherList ? "start-0" : ""}`}
    >
      <img
        width={80}
        className={`btnTeacherList mx-4 ${openTeacherList ? "active" : ""}`}
        src="../../../../public/image/TeacherListBtn.png"
        alt=""
        onClick={() => setOpenTeacherList(!openTeacherList)}
      />
      <section>
        <div className="top-0 position-sticky bg-black border-bottom ">
          <u><h2 className="pt-3">معلم ها</h2></u>
          <div className="d-flex align-items-center">
            <h5 className="px-2 py-2">ردیف</h5>
            <h5 className="px-2 py-2">عکس</h5>
            <h5 className="px-2 py-2" scope="col">
              نام
            </h5>
            <h5 className="px-2 py-2" scope="col">
              نام خانوادگی
            </h5>
            <h5 className="px-2 py-2" scope="col">
              نام درس
            </h5>
            <h5 className="px-2 py-2" scope="col">
              جنسیت
            </h5>
            <h5 className="px-2 py-2" scope="col">
              وضعیت
            </h5>
          </div>
        </div>
        <div className="scroll-table">
          {teacherList.map((teacher) => (
            <div
              key={teacher.id}
              className="box-teachers text-center w-100 d-flex justify-content-between align-items-center text-center border-top p-2"
            >
              <p className="px-3">{teacher.id}</p>
              {teacher.Gender ? (
                <img
                  width={50}
                  src="../../../../public/image/TeacherM.png"
                  alt="" className="mx-3 text-text-center"
                />
              ) : (
                <img width={50} src="../../../../public/image/TeacherF.png" className="mx-3 text-text-center" />
              )}
              <p className="mx-3">{teacher.firstName}</p>
              <p className="mx-3">{teacher.lastName}</p>
              <p className="mx-3">{teacher.WhatGrade}</p>
              {teacher.Gender ? (
                <p className="mx-3">اقا</p>
              ) : (
                <p className="mx-3">خانم</p>
              )}
              {teacher.IsOnline ? (
                <p className="dot d-flex online rounded-circle mx-4"></p>
              ) : (
                <p className="dot d-flex offline rounded-circle mx-4"></p>
              )}
              <button
                onClick={() => handleDeleteTeacher(teacher.id)}
                className="btn btn-danger px-3 me-4"
              >
                اخراج
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default SidebarTeacher;
