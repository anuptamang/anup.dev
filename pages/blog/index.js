import { useEffect, useState } from 'react'
import Link from 'next/link'
import sanityClient from '../../client'
import NavBar from '../../components/NavBar'

const Post = () => {
  const [postData, setPost] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type== 'post']{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setPost(data))
      .catch(console.error)
  }, [])

  return (
    <main>
      <NavBar />
      <section>
        <h1>Blog Post Page</h1>
        <h2>Welcome to my page of blog posts</h2>
        <div>
          {postData &&
            postData.map((post, index) => (
              <article key={index}>
                <Link
                  href={`/blog/${post.slug.current}`}
                  key={post.slug.current}
                >
                  {post.slug.current}
                </Link>
                <img src={post.mainImage.asset.url} alt='' />
                <h3>{post.title}</h3>
              </article>
            ))}
        </div>
      </section>
    </main>
  )
}

export default Post
