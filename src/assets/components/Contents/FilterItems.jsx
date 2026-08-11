import { useContext, useState } from "react";
import { StudentsContext } from "../../context/StudentsContext";
import BoxStudent from "./BoxStudent";
const FilterItems = () => {
  const [dropdown, setDropdown] = useState(false);
  const { students, setStudents } = useContext(StudentsContext);
  const [filter, setFilter] = useState("all");
  const handleOpenDropdown = () => {
    setDropdown(!dropdown);
  };

  const filterStudent = students.filter((student) => {
    if (filter == "all") {
      return true;
    }

    if (filter == "present") {
      return student.isOnline;
    }

    if (filter == "absent") {
      return !student.isOnline;
    }
  });
  return (
    <div>
      <div className="w-75 mx-auto my-4 d-flex align-items-center justify-content-center">
        <input
          className="form-control px-3 py-2 rounded-start-0"
          type="text"
          placeholder="نام دانش اموز را جست و جو کنید..."
        />
        <div>
          <button
            className="btn btn-secondary text-nowrap h-100 py-2 rounded-end-0 position-relative"
            onClick={handleOpenDropdown}
          >
            مرتب سازی
          </button>
          <ul
            className={`dropdownCss bg-black w-0 border position-absolute rounded-3 p-0 ${dropdown ? "d-block" : "d-none"}`}
          >
            <li
              onClick={() => setFilter("all")}
              className="list-unstyled w-100 list-hover p-2 rounded-3 z-0 border-bottom"
            >
              همه
            </li>
            <li
              onClick={() => setFilter("present")}
              className="list-unstyled w-100 list-hover p-2 rounded-3 z-0 border-bottom"
            >
              حاضر ها
            </li>
            <li
              onClick={() => setFilter("absent")}
              className="list-unstyled w-100 list-hover p-2 rounded-3 z-0"
            >
              غایب ها
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex justify-content-center flex-wrap gap-4">
        {filterStudent.map((student) => (
          <BoxStudent key={student.id}
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
    </div>
  );
};
export default FilterItems;
