import { useState } from "react";
import Header from "./assets/components/Header";
import Content from "./assets/components/Contents/Content";
import { StudentsContext } from "./assets/context/StudentsContext";
import { studentsList } from "./assets/data/student";
const App = () => {
  const [students, setStudents] = useState(studentsList);
  return (
    <div className="container">
      <Header />
      <StudentsContext.Provider value={{ students, setStudents }}>
        <Content />
      </StudentsContext.Provider>
    </div>
  );
};
export default App;
