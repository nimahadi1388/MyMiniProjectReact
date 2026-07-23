import { useContext } from "react";
import { StudentsContext } from "../context/StudentsContext";
import BoxStudent from "./BoxStudent";

const Sidebar = () => {
  const { students, setStudents } = useContext(StudentsContext);
  if (students.length == 0) {
    return <h1 className="error">دانش اموزی در اینجا ثبت نشده...</h1>;
  } else {
    return (
      <div className="d-flex">
        {students.map((student) => (
          <BoxStudent
            firstname={student.firstname}
            lastname={student.lastname}
            isOnline={student.isOnline}
            score={student.score}
            setStudent={setStudents}
            students={students}
            id={student.id}
          />
        ))}
      </div>
    );
  }
};
export default Sidebar;
