import Link from 'next/link'

import styles from './header.module.css'
import Button from 'shared/components/Button'

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5">
      <Link className={styles.pnCodesLogo} href="/" />
      <a className="pncodes-link" href="#">A Link</a>
      <Button onClick={() => alert('Just button things')}>A Button</Button>
    </header>
  )
}

export default Header
