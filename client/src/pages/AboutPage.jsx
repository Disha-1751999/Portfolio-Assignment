import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import AboutSection from '../components/aboutComponents/AboutSection'
import TeamSection from '../components/aboutComponents/TeamSection'

function AboutPage() {

  return (
    <Layout>
      <AboutSection/>
      <TeamSection/>
    </Layout>
  )
}

export default AboutPage
