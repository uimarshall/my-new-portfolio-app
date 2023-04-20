import { motion } from 'framer-motion';
import emoji from '@/assets/emoji_raised_hands.png';
import SelectedPage from '@/shared/types';
import Header from '../layout/Header';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Home({ setSelectedPage }: Props) {
  return (
    <section id="home" className="bg-gray-20 gap-16 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Intro)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
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
              <div className="md:before:content-evolvetext before:absolute before:-left-20 before:-top-20 before:z-[-1]">
                <img alt="home-page-text" src={emoji} />
              </div>
            </div>

            <Header>
              Hello I am a software developer! I can help you build a product,
              featre or website. Look through some of my work and experience! If
              you like what you see and have project you need coded, don’t
              hesistate to contact me.
            </Header>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* SOCIAL MEDIA */}
            <div>
              <p>social media</p>
            </div>
          </motion.div>
        </div>

        {/* IMAGE */}
      </motion.div>
    </section>
  );
}

export default Home;
