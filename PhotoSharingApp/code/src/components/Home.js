import Navbar from "./Navbar";
import "../styles/home.css";


const Home = () => {
    return (
    <div>
        <h1>Welcome here</h1>
        <img className="home-img" src ="https://media-exp1.licdn.com/dms/image/C560BAQF-VRWeBYzruw/company-logo_200_200/0/1640063541418?e=1655942400&v=beta&t=iubrT9YwiXp9vUBP8I6baHAgQHZ2J6jcha8fY1FlpgQ" alt ="wel-img" />
        <Navbar />
    </div>)
}

export default Home;