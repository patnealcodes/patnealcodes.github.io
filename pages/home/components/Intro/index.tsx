import { Section } from "shared/components"

import { useEffect, useState } from "react";
import IntroPhoto from "pages/home/components/Intro/IntroPhoto";

const titles = [
  'Mentor',
  'Husband',
  'Gamer',
  'D&D Enjoyer',
  'Video Game Lore Junkie',
  'can\'t use VIM :('
]

const Intro = () => {
  const [title, setTitle] = useState<string>();

  useEffect(() => {
    setTitle(titles[Math.floor(Math.random() * titles.length)])
  })

  return (
  <Section containerClassName="flex flex-col md:gap-8 md:flex-row justify-center relative text-center z-0">
      <div>
        <h1 className="font-regular max-w-2xl">Software Engineer, Force Multiplier, Problem Solver{title && ` and ${title}`}</h1>
        <h2>I tell computers how to make clients happy.</h2>
      </div>
      <IntroPhoto />
    </Section>
  )
}

export default Intro
