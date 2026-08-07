const ItemSidebar = () => {
  return (
    <div className="d-flex flex-column justify-content-between h-100 boxes-item">
      <div className="text-center mx-auto mt-5">
        <img
          className="w-50 bg-white p-1 rounded-circle"
          src="../../../../public/image/Maneger.png"
          alt=""
        />
        <h2 className="mt-3">نیما هادی زاده</h2>
      </div>
      <div className="mx-auto">
        <div>
          <div className="z-0 p-2 box-item-sidebar d-flex flex-row-reverse align-items-center mt-3">
            <button className="w-100 mt-1 text-end bg-transparent border-0 text-white me-2">
              افزودن دانش اموز
            </button>
            <img
              className="w-25"
              src="../../../../public/image/AddStudent.png"
              alt=""
            />
          </div>
          <div className="z-0 p-2 box-item-sidebar d-flex flex-row-reverse align-items-center mt-3">
            <button className="w-100 text-end bg-transparent border-0 text-white me-2">
              افزودن معلم
            </button>
            <img
              className="w-25"
              src="../../../../public/image/AddTeacher.png"
              alt=""
            />
          </div>
          <div className="z-0 p-2 box-item-sidebar d-flex flex-row-reverse align-items-center mt-3">
            <button className="w-100 mt-1 text-end bg-transparent border-0 text-white me-2">
              امار کلاس
            </button>
            <img
              className="w-25"
              src="../../../../public/image/Stasitic.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="z-0 box-item-sidebar d-flex flex-row-reverse align-items-center mt-3">
        <button className="text-end w-100 bg-transparent border-0 text-warning">
          پاک کردن اکانت
        </button>
        <img
          className="w-25"
          src="../../../../public/image/SignOut.png"
          alt=""
        />
      </div>
    </div>
  );
};
export default ItemSidebar;
