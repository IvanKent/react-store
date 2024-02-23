import { useNavigate } from "react-router-dom";
export default function Search(){
    const navigate = useNavigate();
    const handleChange = (evt) => {
        navigate(`/search?s=` + evt.target.value)
    }
    return (
        <div>
            <input type="text" name="search" onClick={handleChange}></input>
        </div>
    )
}