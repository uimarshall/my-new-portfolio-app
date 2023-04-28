import React from 'react';
import { motion } from 'framer-motion';
import Header from '../layout/Header';
import SelectedPage from '../../shared/types';

import NodeJs from '../../assets/node-2.jpg';
import Dev from '../../assets/dev.jpg';
import ReactJs from '../../assets/networking.jpg';
import Html from '../../assets/html-css-js.jpg';
import Ruby from '../../assets/computers2.png';
import NextJs from '../../assets/web-dev6.jpg';

// continue from 1:15
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
function Portfolio({ setSelectedPage }: Props) {
  const projects = [
    { id: 1, src: NodeJs },
    { id: 2, src: Dev },
    { id: 3, src: ReactJs },
    { id: 4, src: Html },
    { id: 5, src: Ruby },
    { id: 6, src: NextJs },
  ];
  return (
    <section id="portfolio" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Portfolio)}
      >
        {/* <div className="max-w-screen-lg mx-auto flex h-full w-full flex-col justify-center p-4"> */}
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Header>My best works</Header>
          <p className="my-5 py-3">Checkout some of my best works here.</p>
        </motion.div>
        {/* GRID 2 COLS */}
        <div className="grid gap-4 sm:grid-cols-2 sm:px-0 md:grid-cols-3">
          {projects.map(({ id, src }) => (
            <div key={id} className="rounded-lg shadow-md shadow-gray-600">
              <img
                src={src}
                alt="developer"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  className="m-4 w-1/2 px-6 py-3 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  type="button"
                  className="m-4 w-1/2 px-6 py-3 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* GRID 3 COLS */}
        {/* </div> */}
      </motion.div>
    </section>
  );
}

export default Portfolio;
