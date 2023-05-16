
// import * as React from 'react'
// import { Link } from 'gatsby'

// const AboutPage = () => {
//   return (
//     <main>
//       <h1>About Me</h1>
//       <Link to='/'>back to home</Link>
//       <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
//     </main>
//   )
// }
// export const Head = () => <title>About Me</title>
// export default AboutPage

import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage