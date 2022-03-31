import { useState } from "react";
import axios from "axios";
const UploadImage = () =>{
    const[file ,setFile] = useState(null);
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")

    const onFormSubmit = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', file);
        formData.append('name', name);
        formData.append('location', location);
        formData.append('description', description);

        const url = "http://localhost:5000/api/upload";
        await axios.post(url, formData,{
            headers :{
                        'Content-Type':'multipart/form-data; boundary= myboundary'
                    }
        }).then((response)=>{
            console.log(response)
            // alert('Image Uploaded Successfully')
        }).catch((err) =>{
            console.log('err',err);
        })
    }

    return (
    <div className="upload-cont">
    <form action="#"  encType="multipart/form-data">
    <h1>Simple File Upload</h1>
    <input type='file' name="photo"  onChange= {(e) =>setFile(e.target.files[0])} />;
    <input type="text" name="name" placeholder="Author" value={name}  onChange={(e) => setName(e.target.value)}></input>
    <input type="text" name="location" placeholder="Location" value={location}   onChange={(e) => setLocation(e.target.value)}></input><br></br>
    <input type="text" name="description" placeholder="Description" value={description}   onChange={(e) => setDescription(e.target.value)}></input><br></br>
    <button onClick={onFormSubmit}> Upload</button> 
    </form>
    </div>
    );

}

export default UploadImage;