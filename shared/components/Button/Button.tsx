import styles from './button.module.css';

interface ButtonProps {
  onClick: (any?) => any;
  children: string | React.ReactElement
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button className={styles.themeButton} onClick={onClick}>
      <span className={styles.themeButtonText}>{children}</span>
    </button>
  )
}