import { useState } from "react";
import Header from "./assets/components/Header";
import Sidebar from "./assets/components/Sidebar";
import { StudentsContext } from "./assets/context/StudentsContext";
const App = () => {
  const [students, setStudents] = useState([
    { id: 1, firstname: "محمد", lastname: "احمدیان", isOnline: true, score: 0},
    { id: 2, firstname: "محمود", lastname: "امینی", isOnline: false, score: 0},
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
