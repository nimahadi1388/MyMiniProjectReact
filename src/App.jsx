import { useState } from "react";
import Content from "./assets/components/Contents/Content";
import { StudentsContext } from "./assets/context/StudentsContext";
import { studentsList } from "./assets/data/student";
import Sidebar from "./assets/components/Sidbars/Sidebar";
import Header from "./assets/components/Header";
import { SidebarContext } from "./assets/context/SidebarContext";
const App = () => {
  const [students, setStudents] = useState(studentsList);
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div>
      <div className="d-flex flex-row-reverse justify-content-between">
        <div className={`${sidebarToggle ? "content" : ""}`}>
          <SidebarContext.Provider value={{ sidebarToggle, setSidebarToggle }}>
            <Header/>
          </SidebarContext.Provider>
          <StudentsContext.Provider value={{ students, setStudents }}>
            <Content/>
          </StudentsContext.Provider>
        </div>
        <SidebarContext.Provider value={{ sidebarToggle, setSidebarToggle }}>
          <Sidebar />
        </SidebarContext.Provider>
      </div>
    </div>
  );
};
export default App;
