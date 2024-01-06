import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const HomeScreen = () => {

  const {user} = useContext(UserContext)

  return (
    <>
    <div className = "container">
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Tecnología</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{user.name}</th>
      <td>{user.technology}</td>
      <td>{user.email}</td>
    </tr>
  </tbody>
</table>
    </div>
    </>
  )
}
