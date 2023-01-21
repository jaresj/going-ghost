'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TypingText, ExploreCard, TitleText } from '../components';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { exploreTeams } from '../constants';

const Explore = () => {
  const [active, setActive] = useState('team-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The Teams" textStyles="text-center" />
        <TitleText title={<>Choose the team you want to explore</>} textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreTeams.map((team, index) => (
            <ExploreCard
              key={team.id}
              {...team}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
