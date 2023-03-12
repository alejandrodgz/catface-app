import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { getCat } from "./getcat"
import '../../style/catshow/CatCard.css'
import Spinner from 'react-bootstrap/Spinner';

const CatCard = () => {

  const [catUrl, setCatUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    const url = await getCat();
    if (url) {
      setCatUrl(url);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchCat = async () => {
      setIsLoading(true);
      const url = await getCat();
      if (url) {
        setCatUrl(url);
      }
      setIsLoading(false);
    };
    fetchCat();
  }, []);


  return (
    <><div className='pictureram-container'>{isLoading ?
      <div className="spinner"><Spinner animation="grow" /></div> : <>
        <img className="card-image" src={catUrl} alt="cute_cat" />
        <Button style={{ backgroundColor: "#b784b3", borderColor: "#b784b3", marginTop: '2rem' }}
          onClick={handleClick}>next pussy cat!</Button>
      </>}</div>
    </>
  )
}

export default CatCard