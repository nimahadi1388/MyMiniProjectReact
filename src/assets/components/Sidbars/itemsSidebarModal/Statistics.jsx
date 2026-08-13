import { useContext } from "react";
import { ModalToggleContext } from "../../../context/ModalContext";
import { NumberStaticits } from "../../../context/NumberStaticits";
import { StudentsContext } from "../../../context/StudentsContext";
import { TeacherContext } from "../../../context/TeacherContext";

const Statistics = ({ titleModal }) => {
  const { modalToggle, setModalToggle } = useContext(ModalToggleContext);
  const { studentsExp, teacherExp } = useContext(NumberStaticits);
  const { students } = useContext(StudentsContext);
  const { teacherList } = useContext(TeacherContext);
  const totalScore = students.reduce((total, student) => {
    return total + student.score;
  }, 0);
  totalScore / students.length;
  const avrScore = totalScore / students.length;
  const offlineStudent = students.filter((student) => {
    return student.isOnline == false;
  }).length;
  const offlineTeacher = teacherList.filter((teacher) => {
    return teacher.IsOnline == false;
  }).length;

  return (
    <div
      className={`overflow-auto modal-tem-css ${modalToggle == "Modal-3" ? "" : "hidden"}`}
    >
      <div
        className={`bg-dark w-75 container rounded-5 inner-modal p-5 text-center position-relative ${modalToggle == "Modal-3" ? "animation-modal" : "close"}`}
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
        <div className="d-flex gap-1 stats-parent justify-content-between mx-auto flex-wrap align-items-center mt-5">
          <div className="box-stats rounded-4">
            <img
              width={60}
              src="../../../../../public/image/expulsion.png"
              alt=""
            />
            <h5 className="my-2">دانش اموز های اخراجی</h5>
            <p className="fs-5">{studentsExp}</p>
          </div>
          <div className="box-stats rounded-4">
            <img
              width={60}
              src="../../../../../public/image/scoreAverage.png"
              alt=""
            />
            <h5 className="my-2">میانگین امتیاز ها</h5>
            <p className="fs-5">{avrScore}</p>
          </div>
          <div className="box-stats rounded-4">
            <img
              width={60}
              src="../../../../../public/image/fierdTeacher.png"
              alt=""
            />
            <h5 className="my-2">معلم های اخراجی</h5>
            <p className="fs-5">{teacherExp}</p>
          </div>
          <div className="box-stats rounded-4">
            <img
              width={60}
              className="bg-white rounded-circle p-2"
              src="../../../../../public/image/offline.svg"
              alt=""
            />
            <h5 className="my-2">دانش اموز های افلاین</h5>
            <p className="fs-5">{offlineStudent}</p>
          </div>
          <div className="box-stats rounded-4">
            <img
              width={60}
              className="bg-white rounded-circle p-2"
              src="../../../../../public/image/offline.svg"
              alt=""
            />
            <h5 className="my-2">معلم های افلاین</h5>
            <p className="fs-5">{offlineTeacher}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Statistics;
