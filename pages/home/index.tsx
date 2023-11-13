import Post from 'interfaces/post'
import { getAllPosts } from 'lib/api'
import Head from 'next/head'
import About from 'pages/home/components/about'
import Blog from 'pages/home/components/blog'
import Intro from 'pages/home/components/intro'
import Projects from 'pages/home/components/projects'
import Services from 'pages/home/components/services'
import Testimonials from 'pages/home/components/testimonials'
import Container from 'shared/components/container'
import Footer from 'shared/components/footer'
import Layout from 'shared/components/layout'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Portfolio Resume of Pat Neal | Software Engineer, Force Multiplier, Problem Solver and Mentor</title>
        </Head>
        <Container>
          <Intro />
          <About />
          <Services />
          <Projects />
          <Testimonials />
          <Blog />
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
