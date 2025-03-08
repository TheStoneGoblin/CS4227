import LoginCard from "../components/LoginCard.tsx";
import NavBar from "../components/NavBar.tsx";

const LoginPage = () => {
    return(
        <div>
            <NavBar showLogout={false}/>
            <LoginCard/>
        </div>
    )
}
export default LoginPage;