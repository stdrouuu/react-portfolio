import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
  AiFillSpotify,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="py-8" id="contact">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div>
            <h2 className="md:text-7xl text-4xl font-bold mb-10 text-white/50">
              Get in <span className="text-gray-400">touch</span>
            </h2>
            <a
              className="md:text-7xl text-4xl font-semibold text-white underline decoration-gray-400 decoration-2
                                    underline-offset-4 hover:decoration-gray-200 transition duration-300"
              href="mailto:john@doe.com"
            >
              brajs0111@gmail.com
            </a>
          </div>

          <div className="text-white/50 mt-12">
            <div className="mb-8">
              <p className="text-lg mb-1">Phone</p>
              <a
                href="+62 821-1234-5678"
                className="text-2xl font-semibold underline decoration-gray-400 decoration-2
                                    underline-offset-4 hover:decoration-gray-400 transition duration-300"
              >
                +62 821-1234-5678
              </a>
            </div>

            <div className="text-lg mb-8">
              <p className="font-bold">From</p>
              <p>Pluit, Jakarta Utara</p>
              <p>Jakarta</p>
              <p>Indonesia </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center mt-8 py-12">
          <h1 className="hidden md:block text-[10rem] md:text-[12rem] lg:text-[15rem] font-bold text-white opacity-10">
            BRANDON
          </h1>

          <h1 className="md:hidden relative text-9xl md:text-[12rem] lg:text-[15rem] font-bold text-white opacity-10">
            BRAN
            <br />
            DON
          </h1>
        </div>

        <div className="relative mt-12 container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
          <p className="text-gray-200 caption text-n-4 lg:block ">
            © 2025, Brandon J.S - All rights reserved.
          </p>

          <ul className="flex gap-5 flex-wrap">
            <a
              href="https://github.com/stdrouuu"
              aria-label="GitHub"
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
            >
              <AiFillGithub size={30} />
            </a>

            <a
              href="https://www.instagram.com/brandon._js/"
              aria-label="Instagram"
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
            >
              <AiFillInstagram size={30} />
            </a>

            <a
              href="https://open.spotify.com/user/eeua467i5c6b9fivr3adqnz2k?si=fjSscfohTymAxnmTPK60BA&pi=hDzNWMoFSB6E7"
              aria-label="Spotify"
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
            >
              <AiFillSpotify size={30} />
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};
