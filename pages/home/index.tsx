import Post from 'interfaces/post'
import { getAllPosts } from 'lib/api'
import Head from 'next/head'
import About from 'pages/home/components/About'
import Blog from 'pages/home/components/Blog'
import Intro from 'pages/home/components/Intro'
import Projects from 'pages/home/components/Projects'
import Services from 'pages/home/components/Services'
import Testimonials from 'pages/home/components/Testimonials'
import {Container, Layout} from 'shared/components'

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
