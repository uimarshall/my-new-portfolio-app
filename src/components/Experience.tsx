import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import GigLogo from '../assets/gig_logo.png';
import PendleLogo from '../assets/pendle_logo.png';
import HatchwaysLogo from '../assets/hatchways.svg';
import HerbalgoodnessLogo from '../assets/herbal_goodness.avif';
import Header from './layout/Header';

function Experience() {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <section className="mx-auto w-5/6">
        <Header>The companies I&apos;ve worked with:</Header>
        <p className="my-5 py-3">
          Checkout some of the great companies I&apos;ve had the pleasure of
          working with here.
        </p>
      </section>
      {/* COMPANY EXPERIENCE */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <a
                href="https://www.pendlesportswear.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-30 w-24 object-scale-down"
                  src={PendleLogo}
                  alt="Pendle sportswear"
                />
              </a>
              <a
                href="https://www.hatchways.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-30 w-24 object-scale-down"
                  src={HatchwaysLogo}
                  alt="Hatchways"
                />
              </a>
              <a
                href="https://www.giglogistics.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-30 w-24 object-scale-down"
                  src={GigLogo}
                  alt="Gig Logistics"
                />
              </a>
              <a
                href="https://www.herbalgoodnessco.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-30 w-24 object-scale-down"
                  src={HerbalgoodnessLogo}
                  alt="Herbal Goodness"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Experience;
