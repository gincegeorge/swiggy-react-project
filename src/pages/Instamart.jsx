import { useState } from "react";

const Section = ({ title, desc, isVisible, setIsVisible, hideSection }) => {
  return (
    <div className="my-2 bg-slate-600 text-[#fff] p-5 border text-left">
      <h3 className="font-bold text-xl mb-3">{title}</h3>
      <div className="my-2">
        {isVisible ? (
          <>
            <button onClick={() => hideSection()} className="m-1 underline">
              Hide
            </button>
            <p>{desc}</p>
          </>
        ) : (
          <button onClick={() => setIsVisible()} className="m-1 underline">
            Show
          </button>
        )}
      </div>
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <>
      <div className="container mx-auto max-w-7xl p-10 text-center">
        <Section
          title="About section"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam"
          isVisible={visibleSection === "about"}
          setIsVisible={() => setVisibleSection("about")}
          hideSection={() => setVisibleSection("")}
        />
        <Section
          title="Team section"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam"
          isVisible={visibleSection === "team"}
          setIsVisible={() => setVisibleSection("team")}
          hideSection={() => setVisibleSection("")}
        />
        <Section
          title="Careers section"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam"
          isVisible={visibleSection === "careers"}
          setIsVisible={() => setVisibleSection("careers")}
          hideSection={() => setVisibleSection("")}
        />
        <div className="mt-10">
          <h1>Instamart page </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </>
  );
};
export default Instamart;
