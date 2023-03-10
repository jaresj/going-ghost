'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient " />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">Enter The Graveyard</h4>
        <a href="https://forms.gle/pLY5iTjo8B7PiBSw8" target="_blank" rel="noreferrer">
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
          >
            {/* <img src="/GG_Retro_Logo.png" alt="Logo" className="w-[24px] h-[24px] object-contain" /> */}
            <span className="font-normal text-[16px] text-white">Join The Nightmare</span>
          </button>
        </a>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">Going Ghost</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2022 - 2023 Going Ghost. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noreferrer">
                <img
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
