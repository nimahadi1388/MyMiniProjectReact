const BoxStudent = ({ firstname, lastname, isOnline, score }) => {
  return (
    <div className="bg-black me-3 p-3 text-center rounded-4 box-student">
      <img width={150} src="../../../public/image/studentBox.png" alt="" />
      <div>
        <h3 className="d-inline-block">{`${firstname} ${lastname}`}</h3>
        <div
          className={`dot rounded-circle d-inline-block me-2 mt-2 ${isOnline ? "online" : "offline"}`}
        ></div>
      </div>
      <p className="text-end">
        امتیاز: <span>{score}</span>
      </p>
      <div
        className={`actions d-flex justify-content-around  ${isOnline ? "" : "d-none"}`}
      >
        <button className="btn btn-success rounded-circle fs-6">+</button>
        <button className="btn btn-danger rounded-circle fs-6">x</button>
        <button className="btn btn-secondary rounded-circle fs-6">-</button>
      </div>
    </div>
  );
};
export default BoxStudent;
