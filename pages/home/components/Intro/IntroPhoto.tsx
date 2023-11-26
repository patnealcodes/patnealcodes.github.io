import styles from './intro.module.css'

import Writing from '../../../../public/assets/prouddad.svg';
import { useLayoutEffect, useState } from 'react';

function IntroPhoto() {
  const [playing, setPlaying] = useState(false)

  useLayoutEffect(() => {

  }, [playing])

  return (
    <div className={styles.introPhotoContainer}>
      <figure className={styles.introPhoto} >
        <img src={`/assets/me-and-the-kiddo.jpg`} />
        <Writing className={styles.photoWriting} />
        <div className={styles.bg} />
      </figure>
    </div>
  )
}

export default IntroPhoto