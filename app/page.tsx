"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEyeOpen, setIsEyeOpen] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleEye = () => {
    setIsEyeOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isEyeOpen) {
      const timer = setTimeout(() => {
        router.push("/exhibition");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isEyeOpen, router]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white">
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full relative"
          >
            {/* First Slide: Hero Section with GIF */}
            <section className="w-full h-screen flex items-center justify-center max-w-screen-xl mx-auto">
              <motion.div
                className="w-full max-w-[90vw] cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleEye}
              >
                <Image
                  src="/images/eye.gif"
                  alt="Interactive Eye"
                  width={1200}
                  height={1200}
                  className="w-full h-auto"
                  priority
                />
              </motion.div>
            </section>

            {/* Second Slide: Full Poster Image and Description */}
            <section className="w-full flex md:flex-row flex-col items-center justify-center  max-w-[90vw] mx-auto md:space-x-[3vw] space-y-[3vw]">
              {/* Left side - Full Poster */}
              <div className="w-full lg:w-[45vw]">
                <Image
                  src="/images/poster-02.png"
                  alt="Exhibition Poster"
                  width={500}
                  height={700}
                  layout="responsive"
                />
              </div>
              {/* Right side - Description */}
              <div className="w-full lg:w-[45vw] flex items-center justify-center">
                <div className="pl-[5vw]">
                  <div className="space-y-[2vw]">
                    <motion.p
                      className="text-[1.35vw] leading-relaxed font-mono text-justify"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      It normally is an exciting experience, for young or old.
                      To witness these man-made contraptions flying in the sky
                      is wondrous, and to appreciate human creativity.
                    </motion.p>
                    <motion.p
                      className="text-[1.35vw] leading-relaxed font-mono text-justify"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      But for the people of Myanmar, every time they see the
                      planes They see those parts of the country now facing
                      airstrikes by the military regime against civilian
                      targets, every time they hear the planes, they hear the
                      cries of the many forced to flee their homes and hide from
                      the bombs -
                    </motion.p>
                    <motion.p
                      className="text-[1.35vw] leading-relaxed font-mono text-justify"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      It is the images of local communities, people, children,
                      brutalized and destroyed, that are the civilians forced.
                    </motion.p>
                  </div>
                </div>
                <motion.div
                  className="w-[6vw] flex items-center justify-center rotate-90"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <h2 className="text-yellow-400 text-[2vw] tracking-[0.08em] whitespace-nowrap font-mono font-extrabold origin-center">
                    WHEN WE SEE THE PLANES
                  </h2>
                </motion.div>
              </div>
            </section>

            {/* Third Slide: Impact Section */}
            <section className="w-full relative max-w-[100vw] mx-auto -mt-[5vw]">
              {/* Background Image */}
              <Image
                src="/images/fire-bg.png"
                alt="Background"
                width={1600}
                height={500}
                priority
                className="absolute bottom-0 w-[90vw] h-auto"
              />
              <div className="absolute z-10 w-full h-full text-center flex items-center justify-center">
                <Image
                  src="/images/page-03.png"
                  alt="Impact of Airstrikes"
                  width={900}
                  height={900}
                  className="w-[80vw] h-auto"
                />
              </div>
              {/* Text Content */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-[5vw] pt-[15vw] pb-[2vw] text-center">
                <motion.div
                  className="max-w-[50vw] space-y-[2vw] text-center flex flex-col items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-[3vw] font-bold text-blue-600 font-mono mb-[1vw]">
                    THE IMPACT OF AIRSTRIKES
                  </h2>
                  <p className="text-[1.5vw] leading-relaxed font-mono text-justify text-black mb-[1vw]">
                    After the coup, the military regime has deliberately and
                    repeatedly targeted civilians with air strikes, in violation
                    with the laws of war. From February 2021 to December 2023,
                    there were 1625 airstrikes, meaning an uninterrupted string
                    of daily airstrikes on civilian targets.
                  </p>
                  <div className="relative w-full max-w-[40vw] min-h-80 aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/u31qwQUeGuM"
                      title="Placeholder video"
                      className="absolute top-0 left-0 w-full h-full"
                      style={{ border: "none" }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </motion.div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
