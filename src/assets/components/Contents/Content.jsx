import { useState, useContext } from "react";
import { StudentsContext } from "../../context/StudentsContext";
import FilterItems from "./FilterItems";
import SidebarTeacher from "../Contents/SidebarTeachers";

const Content = () => {
  const { students } = useContext(StudentsContext);
  const [openTeacherList, setOpenTeacherList] = useState(false);

  if (students.length == 0) {
    return <h1 className="error">دانش اموزی در اینجا ثبت نشده...</h1>;
  } else {
    return (
      <>
        <FilterItems />
          <SidebarTeacher
            openTeacherList={openTeacherList}
            setOpenTeacherList={setOpenTeacherList}
          />
      </>
    );
  }
};
export default Content;
