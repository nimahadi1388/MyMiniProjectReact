import { useState } from "react";
import Header from "./assets/components/Header";
import Sidebar from "./assets/components/Sidebar";
import { StudentsContext } from "./assets/context/StudentsContext";
const App = () => {
  const [students, setStudents] = useState([
    { id: 1, fistname: "Mamad", lastname: "Ahmadian", isOnline: true },
    { id: 2, fistname: "Mahmoud", lastname: "Amini", isOnline: false },
  ]);
  return (
    <div className="container-scondary mx-auto ">
      <Header />
      <StudentsContext.Provider value={{ students, setStudents }}>
        <Sidebar />
      </StudentsContext.Provider>
    </div>
  );
};
export default App;
