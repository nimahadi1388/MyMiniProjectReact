import { createContext } from "react";

export const ModalToggleContext = createContext({
  modalToggle: [],
  setModalToggle: () => {},
  message: [],
  setMessage: () => {},
});
