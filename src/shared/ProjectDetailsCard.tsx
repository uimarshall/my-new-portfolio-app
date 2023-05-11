import React from 'react';
import Ruby from '../assets/computers2.png';
import Dev from '../assets/dev.jpg';
import Prog from '../assets/html-css-js.jpg';
// type Props = {};

function ProjectDetailsCard() {
  return (
    <section className="mx-auto w-full py-2">
      <div className="card">
        <img src={Ruby} alt="Ruby" className="h-full w-full object-cover" />

        <div className="flex flex-col gap-3 p-4">
          {/* Badge */}
          <div className="flex w-3/5 flex-row items-center justify-stretch gap-2">
            <span className="block h-auto max-w-full">
              <img src={Dev} alt="dev" />
            </span>
            <span className="block h-auto max-w-full">
              <img src={Prog} alt="prog" />
            </span>
            <span className="block h-auto max-w-full">
              <img src={Dev} alt="dev" />
            </span>
          </div>
          <div className="flex w-3/5 flex-grow flex-col gap-2">
            <button className="project-btn" type="button">
              btn 1
            </button>
            <button type="button" className="project-btn">
              btn 2
            </button>
          </div>
          {/* Project Title */}
          {/* <h3>title</h3>
            <div className="flex items-center gap-2">
              <span className="badge">badge</span>
              <span className="badge">two</span>
              <span className="badge">three</span>
            </div> */}
        </div>
        <div className="flex flex-col gap-3 p-5">
          <h3>title</h3>
          <div className="flex justify-start gap-2">
            <span className="badge">badge</span>
            <span className="badge">two</span>
            <span className="badge">three</span>
          </div>
        </div>
        {/* <div className="flex flex-col gap-2">
            <button type="button">btn 1</button>
            <button type="button">btn 2</button>
          </div> */}

        <div className="mx-auto flex">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
            exercitationem!
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetailsCard;
