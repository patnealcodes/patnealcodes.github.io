import { useEffect, useState } from "react";
import { Section } from "shared/components"

import styles from './intro.module.css'

import Writing from '../../../../public/assets/photo-text.svg';

const titles = [
  'Mentor',
  'Dad',
  'Husband',
  'Gamer',
  'D&D Enjoyer',
  'can\'t use VIM :('
]

const Intro = () => {
  const [titleIndex, setTitleIndex] = useState(0)

  useEffect(() => {
    const titleLength = titles.length - 1
    const titleInterval = setInterval(() => {
      titleIndex < titleLength ? setTitleIndex(titleIndex + 1) : setTitleIndex(0)
    }, 5000);

    return () => clearInterval(titleInterval)
  }, [])

  return (
  <Section containerClassName="text-center">
      <h1 className="font-regular">Software Engineer, Problem Solver, Force Multiplier and Mentor</h1>
      <h2>I tell computers how to make clients happy.</h2>
      <div className={styles.introPhotoContainer}>
        <figure className={styles.introPhoto} >
          <img src={`/assets/me-and-the-kiddo.jpg`} />
          <Writing className={styles.photoWriting} />
        </figure>
      </div>
    </Section>
  )
}

export default Intro
