import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { HomeScreen } from "./routes/HomeScreen"
import { About } from "./routes/About"
import { Contact} from "./routes/Contact"
import { UserProvider } from "./context/UserProvider"
import { Login } from "./routes/Login"



export const App = () => {
    return (
        <UserProvider>
            <Navbar></Navbar>

            <Routes>
                <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
                <Route path="/*" element={<Navigate to="/" />}></Route>
            </Routes>
        </UserProvider>
    )
}
