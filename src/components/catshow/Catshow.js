import CatCard from './CatCard';
import HeaderCats from '../HeaderCats';

const CatShow = () => {

    return(
        <>
        <HeaderCats />
        <h2 style={{fontFamily:'Cherrils',textAlign:"center", color:"#565656"}}>
            are you ready to see the most beatiful cats?</h2>
        <CatCard />
        </>
    )
}

export default CatShow;