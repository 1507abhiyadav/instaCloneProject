import axios from 'axios';
import "../styles/login.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({email: "", password: ""})
    const [data, setData] = useState("")
    let name, value;
    const handleInput = (e) => {
        name= e.target.name;
        value= e.target.value;
        setUser({...user, [name]: value});
    };
    const login = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", user).then(res => setData(res.data))

        if (data.status === "sucess"){
        localStorage.setItem('token', data.token);
        console.log(data.token)
        navigate("/upload")
     }else if (data.status === 401){
        window.alert("Invalid credential")
     }else if(data.status === 404){
        window.alert("user doesn't exist");
}else{
    window.alert("Something went wrong")

}
    }
    
    return (
        <div>
            <form action="/posts" method="post">
                    <div clasName="imgcontainer">
                        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="avatar" clasName="avatar" />
                    </div>

                    <div clasName="container">
                        <label for="name"><b>Username</b></label>
                        <input onChange ={handleInput} type="text" placeholder="Enter Username" name="email" required />

                        <label for="psw"><b>Password</b></label>
                        <input onChange ={handleInput} type="password" placeholder="Enter Password" name="password" required />
                            <button onClick ={login} type="submit">Login</button>
                        </div>

                        <div clasName="container">
                            <a href ="/"><button type="button" clasName="cancelbtn">Cancel</button></a>
                        </div>
                    </form>
                </div>
                )
}

export default Login;
