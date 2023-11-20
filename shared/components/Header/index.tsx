import Link from 'next/link'

import styles from './header.module.css'
import Button from 'shared/components/Button'

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5">
      <Link className={styles.pnCodesLogo} href="/" />
    </header>
  )
}

export default Header
