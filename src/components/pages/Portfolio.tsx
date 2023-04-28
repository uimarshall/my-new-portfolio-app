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
        <div className="relative grid gap-4 sm:grid-cols-2 sm:px-0 md:grid-cols-3">
          {projects.map(({ id, src }) => (
            <div
              key={id}
              className="group relative rounded-lg bg-gradient-to-t from-gray-100 to-gray-400 shadow-md shadow-gray-600"
            >
              <div className="m-4 w-1/2 px-6 py-3">
                <h3 className="text-1xl absolute left-5 top-5 font-geometricsans font-bold text-white">
                  Top Left
                </h3>
              </div>
              <div className="absolute left-0 top-5 m-4 flex w-1/2 flex-row gap-3 px-6 py-3">
                <span className=" rounded-md bg-gray-500 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                  Badge
                </span>
                <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                  Badge
                </span>
                <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                  Badge
                </span>
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  Badge
                </span>
              </div>
              <img
                src={src}
                alt="developer"
                className="inset-0 mx-auto rounded-md object-cover
								duration-200 hover:scale-105 group-hover:opacity-50 "
              />

              <div className="relative pl-3">
                <div className="mt-1">
                  <div
                    className="translate-y-8 transform
								opacity-0 transition-all
								group-hover:translate-y-0
								group-hover:opacity-100"
                  >
                    <div className="p-2">
                      <button
                        type="button"
                        className="bg-primary-300 px-4 py-2
											text-sm text-white"
                      >
                        See the project
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="flex items-center justify-center">
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
              </div> */}
            </div>
          ))}
        </div>

        {/* GRID 3 COLS */}
      </motion.div>
    </section>
  );
}

export default Portfolio;
