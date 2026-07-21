import { useContext } from "react";
import { StudentsContext } from "../context/StudentsContext";
import BoxStudent from "./BoxStudent";

const Sidebar = () => {
  const { students, setStudents } = useContext(StudentsContext);
  return (
    <div className="d-flex">
      {students.map((student) => (
        <BoxStudent firstname={student.firstname} lastname={student.lastname} isOnline={student.isOnline} score={student.score}/>
      ))}
    </div>
  );
};
export default Sidebar;
