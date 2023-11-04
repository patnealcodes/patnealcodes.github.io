import Footer from 'shared/footer'
import Meta from 'shared/meta'
import PreviewAlert from 'shared/preview-alert'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {preview && <PreviewAlert /> }
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
