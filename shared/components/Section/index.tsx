import clsx from "clsx";
import {Container} from "shared/components";

import styles from './section.module.css';

const sectionThemes = ['light', 'dark', 'accent'] as const;
export type SectionTheme = typeof sectionThemes[number];

type Props = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  theme?: SectionTheme;
};

const Section = ({ children, className = '', containerClassName = '', theme = 'light' }: Props) => {
  return (
    <section className={clsx(
      className,
      ((!theme || theme === 'light') && styles.lightSection),
      (theme === 'dark' && styles.darkSection),
      (theme === 'accent' && styles.accentSection)
    )}>
      <Container className={clsx('flex flex-col items-center p-5 md:px-10 md:py-20', containerClassName)}>
        {children}
      </Container>
    </section>
  );
};

export default Section;
