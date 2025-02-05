import React from 'react'
import Layout from '../components/layout/Layout'
import BlogList from '../components/blogComponents/BlogList'

function BlogPage() {
  return (
    <Layout>
        <div className="container lightColor mt-5 margin-bottom">
        <div className="row my-5">
          <div className="col-12">
            <div className="d-flex justify-content-center flex-column h-100">
              <h2 className=" text-center my-2 p-0">Latest Blogs</h2>
              <p className=" mb-3 mt-2 text-center">
                Stay updated with the latest trends and insights
              </p>
            </div>
          </div>
        </div>
        <BlogList/>
      </div>
    </Layout>
  )
}

export default BlogPage