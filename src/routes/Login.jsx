import { useForm } from "../hooks/useForm"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const Login = () => {

    const inicialForm = {
        name: '',
        technology: '',
        email: ''
    }

    const { formState, name, technology, email, onInputChange } = useForm(inicialForm)
    const {setUser} = useContext(UserContext)

    const onSubmit = (event) => {
        event.preventDefault()
        setUser(formState)
    }
    return (
        <>
            <form className="container" onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={onInputChange} />

                </div>
                <div className="mb-3">
                    <label htmlFor="tecnologia" className="form-label">Tecnología</label>
                    <input
                        type="text"
                        className="form-control"
                        name="technology"
                        value={technology}
                        onChange={onInputChange} />

                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={onInputChange} />

                </div>

                <button type="submit" className="btn btn-primary">Registro</button>
            </form>

        </>
    )
}
