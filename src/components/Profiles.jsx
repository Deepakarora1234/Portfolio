import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, leetcode, codechef, linkedin } from "../assets";
import { SectionWrapper } from "../hoc";
import { profiles } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProfileCard = ({
    index,
    name,
    description,
    image,
    profile_link,
  }) => {
    // Define a function to determine the image source based on the profile name
    const getImageSource = (name) => {
      switch (name) {
        case "leetcode":
          return leetcode;
        case "codechef":
          return codechef;
        case "linkedin":
          return linkedin;
        default:
          return image; // Fall back to the original image if no match
      }
    };
  
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='profile_image'
              className='w-full h-full object-cover rounded-2xl'
            />
  
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(profile_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                {/* Use the getImageSource function to determine the image src */}
                <img
                  src={getImageSource(name)}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>
  
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>
        </Tilt>
      </motion.div>
    );
  };

const Profiles = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} `}>My work</p> */}
        <h2 className={`${styles.sectionHeadText}`}>Profiles.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
         Explore my profiles to witness my problem-solving prowess and competitive 
         programming achievements. From LeetCode challenges to CodeChef contests, 
         and a dynamic LinkedIn network, discover how I tackle challenges and excel in the digital realm.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {profiles.map((profile, index) => (
          <ProfileCard key={`profile-${index}`} index={index} {...profile} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Profiles, "");
