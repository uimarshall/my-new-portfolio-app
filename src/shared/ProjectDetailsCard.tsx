import React from 'react';
import Ruby from '../assets/computers2.png';
import Dev from '../assets/dev.jpg';
import Prog from '../assets/html-css-js.jpg';
// type Props = {};

function ProjectDetailsCard() {
  return (
    <>
      <img src={Ruby} alt="Ruby" className="h-40 w-full object-cover" />

      <div className="flex flex-col gap-3 p-4 md:flex-row">
        {/* Badge */}
        <div className="mx-3 flex w-3/5 flex-row items-center justify-stretch gap-2">
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
        <div className="mx-5 flex w-1/3 flex-grow-0 flex-col gap-2 md:gap-7">
          <a href="proj" className="project-btn" type="button">
            btn 1
          </a>
          <a href="github" type="button" className="project-btn">
            btn 2
          </a>
        </div>
      </div>
      {/* Project Title */}
      <div className="flex flex-col gap-2 px-5 py-2">
        <h3>title</h3>
        <div className="flex justify-start gap-2">
          <span className="badge">badge</span>
          <span className="badge">two</span>
          <span className="badge">three</span>
        </div>
      </div>

      <div className="flex justify-start px-5">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
          exercitationem! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Eaque, exercitationem! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Eaque, exercitationem!Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Eaque, exercitationem!
        </p>
      </div>
    </>
  );
}

export default ProjectDetailsCard;
