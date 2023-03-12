import axios from "axios";

const getArrCats = async () => {
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
        return response.data;

    } catch (error) {
        console.error(error)
        return null
    }
}

export default getArrCats;