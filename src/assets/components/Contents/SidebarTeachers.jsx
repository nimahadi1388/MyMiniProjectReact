import { useContext } from "react";
import { TeacherContext } from "../../context/TeacherContext";

const SidebarTeacher = ({ openTeacherList, setOpenTeacherList }) => {
  const { teacherList, setTeacherList } = useContext(TeacherContext);
  const handleDeleteTeacher = (id) => {
    let deleteTeacher = teacherList.filter((teacher) => teacher.id !== id);
    setTeacherList(deleteTeacher);
  };
  return (
    <>
      <div
        className={`teacher-boxes mx-auto text-center p-4 bg-black overflow-y-auto top-0 ${openTeacherList ? "start-0" : ""}`}
      >
        <img
          width={80}
          className={`btnTeacherList ${openTeacherList ? "active" : ""}`}
          src="../../../../public/image/TeacherListBtn.png"
          alt=""
          onClick={() => setOpenTeacherList(!openTeacherList)}
        />
        <table>
          <thead className="d-flex justify-content-center align-items-center position-fixed ">
            <tr>
              <th className="p-3">عکس</th>
              <th className="p-3" scope="col">
                نام
              </th>
              <th className="p-3" scope="col">
                نام خانوادگی
              </th>
              <th className="p-3" scope="col">
                نام درس
              </th>
              <th className="p-4" scope="col">
                جنسیت
              </th>
              <th className="p-1" scope="col">
                وضعیت
              </th>
            </tr>
          </thead>
          <tbody>
            {teacherList.map((teacher) => (
              <tr className="box-teachers d-flex justify-content-between align-items-center text-center border-top p-3">
                {teacher.Gender ? (
                  <img
                    width={50}
                    src="../../../../public/image/TeacherM.png"
                    alt=""
                  />
                ) : (
                  <img width={50} src="../../../../public/image/TeacherF.png" />
                )}
                <td className="px-3">{teacher.firstName}</td>
                <td className="px-3">{teacher.lastName}</td>
                <td className="px-3">{teacher.WhatGrade}</td>
                {teacher.Gender ? (
                  <td className="px-3">اقا</td>
                ) : (
                  <td className="px-3">خانم</td>
                )}
                {teacher.IsOnline ? (
                  <td className="dot online rounded-circle mx-4"></td>
                ) : (
                  <td className="dot offline rounded-circle mx-4"></td>
                )}
                <td
                  onClick={() => handleDeleteTeacher(teacher.id)}
                  className="btn btn-danger px-3 py-2 me-3"
                >
                  اخراج
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default SidebarTeacher;
