import { useEffect, useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const { user, setUser } = useContext(UserContext);

  // useEffect(() => {

  //   const timer = setInterval(() => {
  //     console.log("set interval");
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //     console.log("return ");
  //   };
  // }, []);

  return (
    <>
      <div className="container mx-auto max-w-7xl p-10 bg-green-100 ">
        <h1 className="font-bold">This is about page</h1>
        <input
          type="text"
          value={user.name}
          className="p-2 my-5 border"
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        />
        <p>page description</p>
      </div>
    </>
  );
};

export default About;
