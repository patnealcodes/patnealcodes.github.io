import {Meta, Header, PreviewAlert, Footer} from 'shared/components'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen">
        {preview && <PreviewAlert /> }
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
