import CatList from "./CatList";
import AddCat from "./AddCat";
import HeaderCats from "../HeaderCats";
import ModalCat from "../ModalCat";

const CatDb = () => {

    return(
        <>
        <ModalCat text={`I used the Slicers(redux) to update the state of the application
            and tooltips to edit directly the object, at the end of this page you can find the form to add
            new elements`} />
        <HeaderCats/>
        <CatList />
        <AddCat />
        </>
    )
}

export default CatDb;
