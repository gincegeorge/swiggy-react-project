import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    console.log("useeffect");

    const timer = setInterval(() => {
      console.log("set interval");
    }, 1000);



    return () => {
      clearInterval(timer)
      console.log("return ");
    };
  }, []);

  return (
    <>
      <div className="container">
        <h1>This is about page</h1>
        <p>page description</p>
      </div>
    </>
  );
};

export default About;
