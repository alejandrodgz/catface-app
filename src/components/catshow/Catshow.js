import CatCard from './CatCard';
import HeaderCats from '../HeaderCats';
import ModalCat from '../ModalCat';

const CatShow = () => {

    return(
        <>
        <ModalCat text="We are using Axios library to fetch data in every
         single click the Cats database button will redirect you to the crud example!" />
        <HeaderCats />
        <h2 style={{fontFamily:'Cherrils',textAlign:"center", color:"#565656"}}>
            are you ready to see the most beatiful cats?</h2>
        <CatCard />
        </>
    )
}

export default CatShow;