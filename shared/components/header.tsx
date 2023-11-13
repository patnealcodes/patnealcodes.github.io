import Link from 'next/link'

import Logo from 'public/assets/pncodes-logo.svg';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5">
      <a className="px-3 py-2" href="/">
        <Logo className="fill-black hover:fill-theme-green transition-all w-14"/>
      </a>
    </header>
  )
}

export default Header
