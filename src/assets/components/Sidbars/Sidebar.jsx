import { useContext } from "react";
import ItemSidebar from "./ItemsSidebar";
import { SidebarContext } from "../../context/SidebarContext";
const Sidebar = () => {
  const { sidebarToggle, setSidebarToggle } = useContext(SidebarContext);
  const handleSidebarToggle = () => {
    setSidebarToggle(!sidebarToggle);
  };
  return (
    <div className={`sidebar ${sidebarToggle ? "end-0" : ""}`}>
      <div className={`bg-black vh-100 p-3 position-relative`}>
        <ItemSidebar />
        <div className="slanted-edge rounded-pill">
          <img
          onClick={handleSidebarToggle}
          className="btn-open-sidebar"
            width={50}
            src="../../../public/image/BtnSidebar.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
