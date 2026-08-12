import { useState } from "react";
import Content from "./assets/components/Contents/Content";
import { StudentsContext } from "./assets/context/StudentsContext";
import { studentsList } from "./assets/data/student";
import Sidebar from "./assets/components/Sidbars/Sidebar";
import Header from "./assets/components/Header";
import { SidebarContext } from "./assets/context/SidebarContext";
import AddStudentM from "./assets/components/Sidbars/itemsSidebarModal/AddStudentM";
import AddTeacherM from "./assets/components/Sidbars/itemsSidebarModal/AddTeacherM";
import { ModalToggleContext } from "./assets/context/ModalContext";
import Message from "./assets/components/Contents/Message";
const App = () => {
  const [students, setStudents] = useState(studentsList);
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [modalToggle, setModalToggle] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <div className="position-relative overflow-hidden">
      <div className="d-flex flex-row-reverse justify-content-between">
        <StudentsContext.Provider value={{ students, setStudents }}>
          <div className={`${sidebarToggle ? "content" : ""}`}>
            <SidebarContext.Provider
              value={{ sidebarToggle, setSidebarToggle }}
            >
              <Header />
            </SidebarContext.Provider>
            <Content />
          </div>
          <SidebarContext.Provider value={{ sidebarToggle, setSidebarToggle }}>
            <ModalToggleContext.Provider
              value={{ modalToggle, setModalToggle, message, setMessage }}
            >
              <Sidebar />
              <AddStudentM titleModal="افزودن دانش اموز" />
              <AddTeacherM titleModal="افزودن معلم" />
              <Message/>
            </ModalToggleContext.Provider>
          </SidebarContext.Provider>
        </StudentsContext.Provider>
      </div>
    </div>
  );
};
export default App;
