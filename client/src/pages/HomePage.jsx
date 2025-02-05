import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import HeroComponent from '../components/homeComponents/HeroComponent'
import BlogComponent from '../components/homeComponents/BlogComponent'


function HomePage() {



  return (
    <div>
      <Layout>
        <HeroComponent/>
       <BlogComponent/>
      </Layout>
    </div>
  )
}

export default HomePage
