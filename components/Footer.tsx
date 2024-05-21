import { socialMedia } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img src="./footer-grid.svg" alt="grid" className="w-full h-full opacity-50" />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to discuss <span className="text-purple">synergies?</span>
        </h1>

        <p className="text-white-200 my-5 md:my-10 text-center">Let&apos;s have a conversation.</p>

        <a href="mailto:aaron.johnson1031@gmail.com">
          <MagicButton title="Contact Me" icon={<FaLocationArrow />} position="right" />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2024, Aaron Johnson SWE</p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((profile) => (
            <a href={profile.link} target="_blank" rel="noopener noreferrer" key={profile.id}>
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <img src={profile.img} alt={profile.id.toString()} width={20} height={20} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
