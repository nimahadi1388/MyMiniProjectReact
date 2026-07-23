import { memo } from "react";

const BoxStudent = ({
  firstname,
  lastname,
  isOnline,
  score,
  setStudent,
  students,
  id,
}) => {
  let handlemMinutScore = (id) => {
    setStudent(
      students.map((student) => {
        if (student.id === id && score !== 0) {
          return {
            ...student,
            score: student.score - 1,
          };
        }
        return student;
      }),
    );

    if (score == 0) {
      alert("امتیاز کمتر از صفر نمیشود");
    }
  };
  let handleAddScore = (id) => {
    setStudent(
      students.map((student) => {
        if (student.id === id) {
          return {
            ...student,
            score: student.score + 1,
          };
        }
        return student;
      }),
    );
  };
  let handleDeleteStudent = (id) => {
    let deleteStudent = students.filter((student) => student.id !== id);

    setStudent(deleteStudent);
  };
  return (
    <div className=" box-hover bg-black me-3 p-3 text-center rounded-4 box-student">
      <img width={150} src="../../../public/image/studentBox.png" alt="" />
      <div>
        <h3 className="d-inline-block">{`${firstname} ${lastname}`}</h3>
        <div
          className={`dot rounded-circle d-inline-block me-2 mt-2 ${isOnline ? "online" : "offline"}`}
        ></div>
      </div>
      <p className="text-end">
        امتیاز: <span>{score}</span>
      </p>
      <div
        className={`d-flex justify-content-around  ${isOnline ? "" : "d-none"}`}
      >
        <button
          onClick={() => handleAddScore(id)}
          className="btn btn-success rounded-circle fs-6"
        >
          +
        </button>
        <button
          onClick={() => handleDeleteStudent(id)}
          className="btn btn-danger rounded-circle fs-6"
        >
          x
        </button>
        <button
          onClick={() => handlemMinutScore(id)}
          className="btn btn-secondary rounded-circle fs-6"
        >
          -
        </button>
      </div>
    </div>
  );
};
export default memo(BoxStudent);
