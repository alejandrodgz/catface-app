import Button from "react-bootstrap/Button"
import Paw from "../style/images/paw.png"
import {Link} from "react-router-dom"

const HeaderCats = () => {

    return(
        <>
        <header className="headercontainer"><div><img src={Paw} alt="paw"/><h1>The Cat-Face</h1></div>
        <div className="buttons-container" >
        <Button as={Link} to="/" className="header-button"
         style={{backgroundColor:"#A57CA4", borderColor:"#A57CA4"}}>Random Picture</Button>
        <Button as={Link} to="/catdb" className="header-button"
        style={{backgroundColor:"#A5DADB", borderColor:"#A5DADB"}}>Cats Database</Button>
        </div>
        </header>
        </>
    )
}

export default HeaderCats;