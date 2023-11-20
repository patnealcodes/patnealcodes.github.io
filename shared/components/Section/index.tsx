import clsx from "clsx";
import {Container} from "shared/components";

import styles from './section.module.css';

type Props = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  dark?: boolean;
};

const Section = ({ children, className = '', containerClassName = '', dark = false }: Props) => {
  return (
    <section className={clsx(className, dark ? styles.darkSection : styles.lightSection)}>
      <Container className={clsx('flex flex-col items-center py-5 md:py-20', containerClassName)}>
        {children}
      </Container>
    </section>
  );
};

export default Section;
