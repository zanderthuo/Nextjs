import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter()

  const handleClick = () => {
    console.log("Placing ypur order")
    router.replace('/product')
  }

  return (
    <>
      <h1>Home Page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/product">
        <a>Products</a>
      </Link>
      <button onClick={handleClick}>
        Place Order
      </button>
    </>
  )
}

export default Home