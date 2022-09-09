import{Button} from 'react-bootstrap';
const Getbuttonuser = ({isActive,clicked}) =>{

    return(
<div>
    <Button onClick={clicked}>{isActive ? "Get another User" : "Get User"} </Button>
</div>

    )
}
export default  Getbuttonuser;