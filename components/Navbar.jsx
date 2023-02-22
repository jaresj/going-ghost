'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      {/* <img src="/search.svg" alt="search" className="w-[24px] h-[24px object-contain" /> */}
      <Link href="/" className="z-10"><img src="/GG_Retro_Logo.png" alt="Logo" className="w-[60px] h-[60px] object-contain" /></Link>
      <Link
        href="/graveyard"
        className="w-[24px] h-[24px] mt-[20px] object-contain text-white font-bold uppercase"
      >
        Graveyard
      </Link>
    </div>
  </motion.nav>
);

export default Navbar;
