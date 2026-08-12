import { useContext } from "react";
import { ModalToggleContext } from "../../context/ModalContext";

const Message = () => {
  const { message, setMessage } = useContext(ModalToggleContext);
  const handleHideMessages = () => {
    setMessage(false);
  };
  return (
    <div className="position-relative">
      <div
        className={`bg-success message text-nowrap rounded-3 ${message == "messageSuccessStudent" ? "" : "visually-hidden"}`}
      >
        <div className="d-flex justify-content-between">
          <img
            onClick={handleHideMessages}
            src="../../../../public/image/closeBtn.png"
            alt=""
          />
          <h5 className="text-end">پیام موفقیت:</h5>
        </div>
        <p>دانش اموز جدید با موفقیت ثبت شد</p>
      </div>
      <div
        className={`bg-success message text-nowrap rounded-3 ${message == "messageSuccessTeacher" ? "" : "visually-hidden"}`}
      >
        <div className="d-flex justify-content-between">
          <img
            onClick={handleHideMessages}
            src="../../../../public/image/closeBtn.png"
            alt=""
          />
          <h5 className="text-end">پیام موفقیت:</h5>
        </div>
        <p> معلم جدید با موفقیت ثبت شد</p>
      </div>
      <div
        className={`bg-danger message text-nowrap rounded-3 ${message == "messageErr" ? "" : "visually-hidden"}`}
      >
        <div className="d-flex justify-content-between align-items-center">
          <img
            onClick={handleHideMessages}
            src="../../../../public/image/closeBtn.png"
            alt=""
          />
          <h5 className="text-end">پیام خطا:</h5>
        </div>
        <p>لطفا فرم را پر کنید</p>
      </div>
    </div>
  );
};
export default Message;
