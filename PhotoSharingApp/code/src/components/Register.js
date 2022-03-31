import { useState } from 'react';
import axios from "axios";

const Register = () => {
    const [user, setUser] = useState({
        name: "", email: "", password: "", cpassword :""
    });
    const [data, setData] = useState([])
    let name, value;
    const handleInput = (e) => {
        name =e.target.name;
        value= e.target.value;
        setUser({...user, [name]:value})
    };

const postData = async (e) => {
    e.preventDefault();
    // const {name, email, password} = user; 
    await axios.post("http://localhost:5000/api/register", user
        // {headers: {
        //     "Content-Type": "application/json"
        // }
    
        // body: JSON.stringify({
        //     "name":name,
        //     "email":email,
        //     "password": password

        // })
 ).then(res => setData(res.data));
}
console.log(data)
    // if (data.status === 400 || !data){
    //     window.alert("Invalid Registration");
    //     console.log("Inavlid Registraion")
    // }else{
    //     window.alert("Registraion sucessful");
    //     console.log("Regsitraion sucessfull")
        
    //     }
    
 
    return (
        <div>
        <form method='POST'>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr/>
          <label><b>Name</b></label>
          <input onChange ={ handleInput } type="text" placeholder="Enter Name" name="name" id="name" required />
      
          <label><b>Email</b></label>
          <input onChange ={ handleInput } type="text" placeholder="Enter Email" name="email" id="email" required />
      
          <label><b>Password</b></label>
          <input  onChange ={handleInput} type="password" placeholder="Enter Password" name="password" id="psw" required/>
      
          <label><b>Repeat Password</b></label>
          <input  onChange ={handleInput} type="password" placeholder="Repeat Password" name="cpassword" id="psw-repeat" required/>
          <hr/>
          <p>By creating an account you agree to our <a href="/terms">Terms & Privacy</a>.</p>
      
          <button type="submit" onClick ={postData} className="registerbtn">Register</button>
        </div>
        
        <div className="container signin">
          <p>Already have an account? <a href="/login">Sign in</a></p>
        </div>
      </form>
      </div>
        )
}
export default Register;