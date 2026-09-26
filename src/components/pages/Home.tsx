import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMediumCircle,
  AiFillGithub,
} from 'react-icons/ai';
import { SiHackernoon } from 'react-icons/si';
import { BsBoxArrowRight } from 'react-icons/bs';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import emoji from '../../assets/emoji_raised_hand.png';
import ProfileImg from '../../assets/programmer_illustrator.svg';

import SelectedPage from '../../shared/types';
import SocialMediaHandles from '../../shared/SocialMediaHandles';
import ActionButton from '../../shared/ActionButton';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Home({ setSelectedPage }: Props) {
  const flexBetween = 'flex items-center justify-between';
  const style = { fontSize: '1.5em', borderRadius: '9999px' };
  const [isBioExpanded, setIsBioExpanded] = useState(false);

  return (
    <section id="intro" className="bg-gray-20 gap-16 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:min-h-[83.333333%]"
        onViewportEnter={() => setSelectedPage(SelectedPage.Intro)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 self-start md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-right-[710px] before:-top-4 before:z-[-1] md:before:content-patternbackground">
                <img alt="home-page-text" src={emoji} />
              </div>
              <p className="text-back py-4 font-geometricsans text-sm font-bold text-black xs:text-2xl sm:py-2 sm:text-3xl md:text-5xl">
                Your business, built better for visibility.
              </p>
            </div>

            <p className="mt-3 text-sm md:mt-8">
              Marshall, the creator of{' '}
              <span className="text-primary-500">Goptant,</span> is a seasoned
              senior software engineer, AI engineer, and data specialist who
              builds high‑performance digital solutions for businesses.
              {isBioExpanded && (
                <>
                  {' '}
                  He works with modern technologies including JavaScript, React,
                  Redux, TypeScript, Python, Node.js, and Ruby on Rails ,
                  delivering scalable applications, automation tools, AI‑powered
                  systems, and data‑driven solutions that help companies operate
                  faster and smarter. With expertise spanning software
                  engineering, artificial intelligence, data science, and data
                  analysis, He transforms complex business challenges into
                  clean, efficient, and user‑friendly products. His work is
                  driven by a passion for innovation, problem‑solving, and
                  helping businesses grow through intelligent technology. I can
                  help you build a product or web app. Look through some of my
                  work and experience! If you like what you see and have project
                  you need coded, don’t hesitate to contact me.
                </>
              )}{' '}
              <button
                type="button"
                className="font-bold text-primary-500 hover:underline"
                onClick={() => setIsBioExpanded((prev) => !prev)}
              >
                {isBioExpanded ? 'Read less' : 'Read more'}
              </button>
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mb-4 mt-8 flex items-center gap-8 pb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Resume
              <span className="px-2  duration-300 group-hover:rotate-90">
                <BsBoxArrowRight size={20} />
              </span>
            </ActionButton>
            <AnchorLink
              className="cursor-pointer text-sm font-bold text-primary-300 duration-200 hover:scale-110 hover:text-primary-500 hover:underline"
              onClick={() => setSelectedPage(SelectedPage.Portfolio)}
              href={`#${SelectedPage.Portfolio}`}
            >
              <p className="text-xs sm:text-base md:text-lg">My Works</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img className="h-auto w-full" src={ProfileImg} alt="home-graphics" />
        </div>
      </motion.div>
      {/* SOCIAL MEDIA */}

      {/* TODO: REFACTOR USING CONSTANTS, Use useId hook for the Ids */}
      <section className="mx-auto flex w-5/6 items-center justify-start gap-8 py-4">
        <div>
          <p className="text-sm">My works in social networks</p>
        </div>
        <div className={`${flexBetween} gap-4`}>
          {/* <SocialMediaHandles href="https://www.educative.io/profile/view/5344369935777792l">
            <SiEducative
              style={style}
              className="duration-200 hover:scale-150"
            />
          </SocialMediaHandles> */}
          <SocialMediaHandles href="https://hackernoon.com/u/uimarshall">
            <SiHackernoon
              style={style}
              className="duration-200 hover:scale-150"
            />
          </SocialMediaHandles>
          <SocialMediaHandles href="https://twitter.com/uimarshall">
            <AiFillTwitterCircle
              style={style}
              className="duration-200 hover:scale-150"
            />
          </SocialMediaHandles>
          <SocialMediaHandles href="https://www.linkedin.com/in/marshall-akpan/">
            <AiFillLinkedin
              style={style}
              className="duration-200 hover:scale-150"
            />
          </SocialMediaHandles>
          <SocialMediaHandles href="https://medium.com/@uimarshall">
            <AiFillMediumCircle
              style={style}
              className="duration-200 hover:scale-150"
            />
          </SocialMediaHandles>
          <SocialMediaHandles href="https://github.com/uimarshall">
            <AiFillGithub
              style={style}
              className="duration-200 hover:scale-150"
            />
          </SocialMediaHandles>
        </div>
      </section>
    </section>
  );
}

export default Home;
