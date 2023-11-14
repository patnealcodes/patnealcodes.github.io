import Link from 'next/link'

import styles from './header.module.scss'

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5">
      <Link className={styles.pnCodesLogo} href="/" />
    </header>
  )
}

export default Header
