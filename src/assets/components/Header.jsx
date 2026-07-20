const Header = () => {
  return (
    <div className="d-flex justify-content-left gap-5 mt-4 align-items-center">
      <div>
        <img
          className="d-inline-block"
          width={80}
          src="../../../public/image/Logo.png"
          alt=""
        />
        <h4 className="d-inline-block mt-1">هنرستان کام نوین</h4>
      </div>
      <div className="mt-3">
        <p className="fs-6 d-inline-block me-4">
          نام کلاس: <span className="text-warning">یازدهم ب</span>
        </p>
        <p className="fs-6 d-inline-block me-4">
          موضوع کلاس: <span className="text-warning">سخت افزار کامپیوتر</span>
        </p>
        <p className="fs-6 d-inline-block me-4">
          نام استاد: <span className="text-warning">نیما هادیزاده</span>
        </p>
      </div>
      <div className="online-dot rounded-circle"></div>
    </div>
  );
};
export default Header;
