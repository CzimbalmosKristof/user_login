import { useState,useEffect,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

function ImageUpload() {
    const navigate = useNavigate();
    const { update } = useContext(UserContext);
    const[images,setImages] = useState([]);
    const token = sessionStorage.getItem('usertoken');

    useEffect(() => {
        if(!token) {
            navigate('/login');
        }
    },[token]); // ha ez a token meg változik, akkor a useEffect újra lefut erre jó ez a kis tömb 
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for(let i=0;i<images.length;i++){
            formData.append('images',images[i]);
        }
        kuldes(formData);
    }

    const kuldes=(adat)=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/api/files/upload`,{
            method:'POST',
            headers:{
                "Authorization":`Bearer ${token}` // a token a sessionStorage-ból jön
            },
            body:adat
        })
        .then(res=> res.json())
        .then(valasz=>{alert(valasz.message);update()})
        .catch(err=>console.log("Hiba:"+err));


    }

    const imageChange = (e) => {
        setImages([...images,...e.target.files]);
    }


  return (
    <div>
        <h2 className="text-3xl font-bold text-center">Kép feltöltése</h2>
        <div className="flex flex-col items-center justify-center">
            <form onSubmit={onSubmit}>
                <input onChange={imageChange} type="file" className="file-input file-input-bordered" multiple required/>
                <button type="submit" className="btn btn-primary mt-4">Feltöltés</button>
            </form>
        </div>
    </div>
  )
}

export default ImageUpload