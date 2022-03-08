import User from "../components/user"

function UserList({ users }) {
  return (
    <>
      <h1>List of users</h1>
      {users.map((users) => {
        return (
          <div key={users.id}>
            <User user={users} />
          </div>
        )
      })}
    </>
  )
}

export default UserList

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data)

  return {
    props: {
      users: data,
    }
  }
}