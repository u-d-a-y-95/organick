import { ReactNode } from "react";

interface IModal {
  title?: string;
  opended: boolean;
  children: ReactNode;
  close: Function;
  backdrop?: boolean;
}

export default function Modal({ children, opended, close, backdrop }: IModal) {
  if (!opended) return null;

  const outSideClick = () => {
    if (backdrop) return;
    close();
  };

  return (
    <div className="p-0">
      <div
        className="bg-black opacity-80 fixed top-0 bottom-0 left-0 right-0"
        onClick={outSideClick}
      ></div>
      <div className="bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </div>
  );
}
