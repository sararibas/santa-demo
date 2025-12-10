import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  type: "success" | "danger" | null;
}

const Alert = ({ type, children }: AlertProps) => {
  return (
    <div
      className={`alert mb-0 fade show position-fixed top-0 start-50 translate-middle-x mt-3 alert-${type} $type ?? ""`}
      role="alert"
    >
      {children}
    </div>
  );
};

export default Alert;
