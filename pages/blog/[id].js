import { useEffect, useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../../client'
import BlockContent from '@sanity/block-content-to-react'
import { useRouter } from 'next/router'
import NavBar from '../../components/NavBar'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null)
  const router = useRouter()
  const slug = router.query.id

  console.log(slug)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == '${slug}']{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
      },
      body,
      "name": author->name,
      "authorImage": author->image
    }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error)
  }, [slug])

  console.log(singlePost)

  if (!singlePost) {
    return <div>Loading...</div>
  }

  return (
    <main>
      <NavBar />
      <article>
        <header>
          <div></div>
        </header>
        <div>
          <img
            src={urlFor(singlePost.authorImage).url()}
            width={50}
            height={50}
            alt={singlePost.name}
          />
        </div>
      </article>
      <BlockContent
        blocks={singlePost.body}
        projectId='o9elc61n'
        dataset='production'
      />
    </main>
  )
}

export default SinglePost
