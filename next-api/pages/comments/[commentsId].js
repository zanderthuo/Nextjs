import { comments } from '../../data/comments'

function Comment({ commentId }) {
  // Render Comment
  return (
    <>
      {comment.id} {comment.text}
    </>
  )
}

export default Comment

export async function getStaticProps(context){
  const { params } = context
  const { commentId } = params

  const comment = comments.find((comment) => comment.id === parseInt(commentId))
  console.log(comment)
  // Call an external API endpoint to get posts
  // const res = await fetch('/api/comment')
  // const comment = await res.json()

  return {
    props: {
      comment,
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: '1' } },
      { params: { commentId: '2' } },
      { params: { commentId: '3' } },
    ],
    fallback: false
  }
}