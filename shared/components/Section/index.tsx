import {Container} from "shared/components";

type Props = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

const Section = ({ children, className = '', containerClassName = '' }: Props) => {
  return (
    <section className={className}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};

export default Section;
