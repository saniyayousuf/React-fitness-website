
import { useNavigate } from "react-router-dom";

type btnprops = {
 onClick: () => void ,
  label : string,

}


function Button(props:btnprops) {
    const navigate = useNavigate()

    const render =()=>{
        navigate("MemberShip")
    }
    const { onClick , label} = props ;
    return <button onClick={onClick}>{label}</button>;
  }
  
  export default Button;