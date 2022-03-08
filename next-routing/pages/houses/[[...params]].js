import { useRouter } from 'next/router'

function Houses() {
  const router = useRouter();
  const { params = [] } = router.query
  console.log(params)

  if (params.length === 2) {
    return (
      <h1>
        Viewing Houses for 100000 {params[0]} and 1000000 {params[1]}
      </h1>
    )
  } else if(params.length === 1) {
    return <h1>Viewing Houses for 100000 {params[0]}</h1>
  }

  return <h1>Houses Home Page</h1>
}

export default Houses