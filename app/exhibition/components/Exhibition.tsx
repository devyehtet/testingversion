'use client'

import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import styles from './Exhibition.module.css'
import Navigation from './Navigation'

type ImageType = 
  | { id: string; type: 'text'; content: string }
  | { id: string; type: 'single' }
  | { id: string; type: 'double' }
  | { 
      id: string; 
      type: 'artwork'; 
      imageId: string;
      sections: Array<{ title: string; description: string }>;
    };

const images: ImageType[] = [
  { id: 'welcome', type: 'text', content: 'Welcome To Our Exhibition' },
  { id: '09', type: 'single' },
  { 
    id: 'artwork-09', 
    type: 'artwork', 
    imageId: '09',
    sections: [
      {
        title: "Myawaddy Township (Karen State), 20 April By Zay Yar Minn",
        description: "A Lot of 500-pound bombs were fired by the military council near friendship bridge."
      },
      {
        title: "Laiza (Mountainous Town)Kachin, October 2023 By Khun Lat",
        description: "Two bombs were dropped from a jet plane near Laiza city and a thermal flare was dropped to protect the aircraft from the MANPADS. 31 October 2023. On the night of October 9th, at least 30 civilians, in­cluding a two-month-old infant, were killed and 57 others were injured when artillery shelling was fired at the Mon Laike refugee camp."
      }
    ]
  },
  { id: '05', type: 'single' },
  { id: '04', type: 'single' },
  { id: '06', type: 'single' },
  { id: '07', type: 'single' },
  { id: '08', type: 'single' },

  { 
    id: 'artwork-08', 
    type: 'artwork', 
    imageId: '08',
    sections: [
      {
        title: "Lukumpgra Village, June 2023",
        description: "2 of 500-pound bombs were dropped near the owner of the pig farm houses where he was sleeping and very fortunate that he wasn't injured. First Aid workers have requested him to leave his home for evacuation but he refuses to leave his home. While the photos were taken, the jet plane was still up in the air. In this picture he is Preparing food for his pigs and drinking rice wine."
      },
      {
        title: "Pa say lar village, May 2023",
        description: "Pa say lar village is one of the war zone villages and they are building a hide out (bunker) knowing that they will get hit by large bombs from Myanmar military. Almost Every household in this village has a bunker underneath this house."
      },
      {
        title: "Loi Nam Pha Camp",
        description: "Waiting patiently for a hearty meal to receive. Conversations between them: \"when they see the jet fighter planes, they point and say evil plane\". \"when they see passenger planes, they point and say its a good plane\". They could tell the different type of planes when an airplane is in the sky."
      },
      {
        title: "Mese village, July 2023",
        description: "Due to the Mese battle, a community has resettled deeper into the forest after being displaced by conflict, and they've constructed a new home and household items entirely from bamboo. The ingenuity and resourcefulness of using bamboo for both shelter and daily necessities without nails is truly remarkable. It's a testament to their resilience and ability to adapt to their environment."
      }
    ]
  },
  { id: '10', type: 'single' },
  { id: '11', type: 'single' },
  { id: '18', type: 'single' },

  { 
    id: 'artwork-18', 
    type: 'artwork', 
    imageId: '18',
    sections: [
      {
        title: "Artist: Nyein Chan Aung",
        description: "At the Shan-Kayah border, in the Ban Kauk refugee camp located in Hpruso Township, the military council dropped two 500-pound bombs via airstrike at around 9 PM on September 5. This resulted in the deaths of nine civilians, including children, and left many others injured. Among the nine fatalities, six were members of the same family: a mother and her five children. Additionally, six school-age children residing in the camp were also killed. Furthermore, a two-year-old child, the son of a CDM (Civil Disobedience Movement) teacher who had been teaching at the camp, was among the victims."
      },
      {
        title: "Artist: Hkun Li",
        description: "Another Tragic event. Military's airstrike on the civilians in Kunglaw village, Kachin State, Many children are among the deaths and casualties. The Myanmar military committed another terrible crime, killing innocent children in Kunglaw village, Kachin state. The airstrike on the church killed 9 people, mostly children, and injured over 10. One civilian was killed and 10 was injured by retaliatory airstrikes carried out by the military on Kung law , located in the Kachin state , on 7 August."
      },
      {
        title: "Houses that were destroyed in the village of Sita, May 15, 2023 By Khun Latt",
        description: "Her house was also caught in the fire, and they had to live in a nearby farm. Between the last week of March and April, troops under the 66th Division of the Military Council Army raided 12 villages in Shweku Township and carried out airstrikes, artillery shelling, and arson attacks resulting in the wreckage of 1800 houses."
      },
      {
        title: "Artist: Mai Ba Nyan (The Roots)",
        description: "This is the scene on February 4, 2024. When the military council army bombed the monastery of Pangkylog village in Kuk Khaing Township, North Shan, and almost all of the school buildings were damaged. About a mile away from Pangyelog village, the military council army and the Kachin Independence Army (KIA) fought fiercely. In addition to the monastery of Pangkylok village, about 50 houses were burnt to ashes due to the airstrike, and many houses were damaged. Until now, the monastery and houses have not been rebuilt."
      }
    ]
  },
  { id: '19', type: 'single' },

  { 
    id: 'artwork-19', 
    type: 'artwork', 
    imageId: '19',
    sections: [
      {
        title: "A church collapsed by military airstrike at the MaeKaNae village in Karen State. April 26, 2023 By Sit Htet Aung (The Roots)",
        description: "A church in MaeKaNae village, Karen State, was destroyed by a military airstrike on April 26, 2023, highlighting the devastating impact of the conflict on civilian structures and religious sites."
      },
      {
        title: "Artist: Mai Nyi Win Maung (The Roots)",
        description: "While the Kachin Independence Army (KIA) was attacking and taking over the base of the Military Council Infantry Regiment No. 123 in Nam Phekka Village, Kut Khaing Township, North Shan, a fighter plane was shot down (or crashed) after fierce resistance from the air. During the battle, the fighter jet bombed Nam Phekka village and nearby villages, killing more than 20 civilians and burning down more than a hundred homes. On December 12, 2023, the villagers were watching the plane that was destroyed after the event, and they were angry that they had become homeless because of the plane. At present, most of the homes that were damaged by the airstrikes have not yet been rebuilt and are living under rain and sand, according to Nampheka residents. (Villagers in Nam Phekka observe the wreckage of a fighter jet that was crashed down on December 12, 2023 by Kachin Independence Army, after bombing their village during a clash between KIA and Military Council forces in North Shan. The attack resulted in over 20 civilian deaths and destroyed more than a hundred homes, leaving many residents homeless and exposed to the elements."
      },
      {
        title: "April 20, 2024 by Zay Yar Min",
        description: "After hundreds of aerial bombs were fired by the Myanmar Military near the Friendship Bridge, the civilian houses were destroyed by fire in Myawaddy City, Karen State. At least 10 local civilians have been killed and thousands have been forced to flee the war on the Thai-Myanmar border because of armed conflicts in Myawaddy, Karen State."
      }
    ]
  },
  { id: '20', type: 'single' },
  { id: '14', type: 'single' },
  { id: '15', type: 'single' },
  { id: '17', type: 'single' },
  { id: '39', type: 'single' },
  { id: '16', type: 'single' },
  { id: '37', type: 'single' },
  { id: '43-44', type: 'double' },
  { id: '46-47', type: 'double' },
  { id: '49', type: 'single' },
  { id: '24', type: 'single' },
  { id: '12', type: 'single' },
  { id: '38', type: 'single' },
  { id: '36', type: 'single' },
  { id: '13', type: 'single' },
  { id: '01', type: 'single' },
  { id: '02-03', type: 'double' },
  { id: '48', type: 'single' },
  { id: '45', type: 'single' },
  { id: '22', type: 'single' },
  { id: '23', type: 'single' },
  { id: '26', type: 'single' },
  { id: '31', type: 'single' },
  { id: '50', type: 'single' },
  { id: '51', type: 'single' },
  { id: '53', type: 'single' },
  { id: '55', type: 'single' }
]

export default function Exhibition() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slideIndex = Number(entry.target.getAttribute('data-index'))
            setCurrentSlide(slideIndex)
          }
        })
      },
      { threshold: 0.5 }
    )

    container.querySelectorAll('section').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [isClient])

  useEffect(() => {
    if (!isClient) return

    const handleScroll = () => {
      const artworkSections = document.querySelectorAll(`.${styles.artworkSection}`)
      artworkSections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const descriptionEl = section.querySelector(`.${styles.artworkDescription}`)
        if (descriptionEl) {
          if (rect.top < 0 && rect.bottom > window.innerHeight) {
            descriptionEl.classList.add(styles.visible)
          } else {
            descriptionEl.classList.remove(styles.visible)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isClient])

  const scrollToSlide = (index: number) => {
    if (!isClient) return
    containerRef.current?.children[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div className={styles.exhibitionWrapper}>
      <div ref={containerRef} className={styles.container}>
        <AnimatePresence>
          {images.map((image, index) => (
            <React.Fragment key={image.id}>
              {image.type === 'text' && (
                <motion.section
                  className={`${styles.section} ${styles.welcomeSection}`}
                  data-index={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={styles.welcomeContent}>
                    <motion.h1 
                      className={styles.welcomeText}
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                    >
                      {image.content}
                    </motion.h1>
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <ChevronDown className={styles.downArrow} size={48} />
                    </motion.div>
                  </div>
                </motion.section>
              )}
              {(image.type === 'single' || image.type === 'double') && (
                <motion.section
                  className={styles.section}
                  data-index={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={image.type === 'single' ? styles.singleImageWrapper : styles.doubleImageSection}>
                    {image.type === 'single' ? (
                      <div className={styles.imageFrame}>
                        <Image
                          src={`/webp/${image.id}.webp`}
                          alt={`Exhibition image ${image.id}`}
                          layout="fill"
                          objectFit="contain"
                          priority={index < 2}
                          className={styles.exhibitionImage}
                        />
                      </div>
                    ) : (
                      <>
                        <div className={styles.imageFrame}>
                          <Image
                            src={`/webp/${image.id.split('-')[0]}.webp`}
                            alt={`Exhibition image ${image.id.split('-')[0]}`}
                            layout="fill"
                            objectFit="contain"
                            priority={index < 2}
                            className={styles.exhibitionImage}
                          />
                        </div>
                        <div className={styles.imageFrame}>
                          <Image
                            src={`/webp/${image.id.split('-')[1]}.webp`}
                            alt={`Exhibition image ${image.id.split('-')[1]}`}
                            layout="fill"
                            objectFit="contain"
                            priority={index < 2}
                            className={styles.exhibitionImage}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </motion.section>
              )}
              {image.type === 'artwork' && (
                <motion.section
                  className={`${styles.section} ${styles.artworkSection}`}
                  data-index={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={styles.artworkContent}>
                    <div className={styles.artworkImageWrapper}>
                      <Image
                        src={`/webp/${image.imageId}.webp`}
                        alt={`Artwork ${image.imageId}`}
                        layout="fill"
                        objectFit="contain"
                        priority={index < 2}
                        className={styles.exhibitionImage}
                      />
                    </div>
                    <motion.div 
                      className={styles.artworkDescription}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {image.sections.map((section, sectionIndex) => (
                        <motion.div 
                          key={sectionIndex}
                          className={styles.descriptionSection}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 * sectionIndex, duration: 0.5 }}
                        >
                          <h2>{section.title}</h2>
                          <p>{section.description}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.section>
              )}
            </React.Fragment>
          ))}
        </AnimatePresence>
      </div>
      {isClient && (
        <Navigation totalSlides={images.length} currentSlide={currentSlide} setCurrentSlide={scrollToSlide} />
      )}
    </div>
  )
}

