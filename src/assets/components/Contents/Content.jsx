import { useState, useContext } from "react";
import { StudentsContext } from "../../context/StudentsContext";
import FilterItems from "./FilterItems";
import { teachers } from "../../data/teacher";
import SidebarTeacher from "../Contents/SidebarTeachers";

import { TeacherContext } from "../../context/TeacherContext";

const Content = () => {
  const { students } = useContext(StudentsContext);
  const [teacherList, setTeacherList] = useState(teachers);
  const [openTeacherList, setOpenTeacherList] = useState(false);

  if (students.length == 0) {
    return <h1 className="error">دانش اموزی در اینجا ثبت نشده...</h1>;
  } else {
    return (
      <>
        <FilterItems />
        <TeacherContext.Provider
          value={{
            teacherList,
            setTeacherList,
          }}
        >
          <SidebarTeacher
            openTeacherList={openTeacherList}
            setOpenTeacherList={setOpenTeacherList}
          />
        </TeacherContext.Provider>
      </>
    );
  }
};
export default Content;
