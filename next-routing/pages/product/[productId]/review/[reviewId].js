import { useRouter } from "next/router";

function Review() {
  const router = useRouter()
  const { productId, reviewId } = router.query
  return <h1>Product ID {productId} and Review ID {reviewId}</h1>
}

export default Review