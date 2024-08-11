import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
// import { RiArrowRightWideLine } from "react-icons/ri";
import { BsCaretRightFill } from "react-icons/bs";

function App() {
  return (
    <>
      <div className="d-flex flex-row justify-content-center">
        {/* 01 sidebar */}
        <div className="aside d-flex flex-column">
          <Sidebar />
        </div>

        {/* 02-main section */}
        <div id="technologies" className=" d-flex flex-column main-section">
          <div className="card d-flex m-3 p-5">
            <h1>Viktor Ilie</h1>
            <h4>Full Stack Developer</h4>
            <p className="">
              I'm a software developer with passion to work on both frontend and
              backend. Specialized in react and developing my skills in C#. With
              experience for complex scalable web apps.
            </p>
            <p>
              <b>Want to know how I may help your project?</b>
            </p>
            <p>Check out my portfolio and my resume</p>
            <div className=" justify-content-center align-items-center">
              <button className="btn-portfolio">
                <BsCaretRightFill className="mx-1" />
                View my Portfolio
              </button>
              <button className="btn-resume">View my Resume</button>
            </div>
          </div>
          <div className="card d-flex m-3 p-5">
            <h3>Technologies I do</h3>
            <div className="d-flex flex-row">icons, logos, names of tech</div>
            <div className="d-flex flex-row">icons, logos, names of tech</div>
          </div>
          <div className="card d-flex m-3 p-5">
            <h2>Portfolio</h2>
            <h4>Projects</h4>
            <div className="d-flex flex-row">
              <div>project 1</div>
              <div>project 2</div>
            </div>
            <div className="d-flex flex-row">
              <div>project 3</div>
              <div>project 4</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
