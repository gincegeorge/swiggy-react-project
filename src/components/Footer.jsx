import { useContext } from "react";
import UserContext from "../utils/UserContext";

export const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="mx-auto max-w-7xl p-10 mt-5 text-center bg-red-50">
        <p className="text-center">Footer | Site developed by {user.name}- {user.email}</p>
      </div>
    </>
  );
};
