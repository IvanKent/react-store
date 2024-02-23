import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Search(){
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const delay = setTimeout(() => {
            if(searchTerm){
                navigate('/search?s='+searchTerm);
            }
        }, 500);
        return () => clearTimeout(delay);
    }, [searchTerm, navigate])

    const handleChange = (evt) => {
        setSearchTerm(evt.target.value)
    }
    return (
        <div>
            <input type="text" name="search" onClick={handleChange}></input>
        </div>
    )
}