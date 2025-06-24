import React from 'react'

const BlogSlugPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  return (
    <div>
      <h1>Blog Slug Page</h1>
      <p>Slug: {slug}</p>
    </div>
  )
}

export default BlogSlugPage
