import { useDispatch, useSelector } from 'react-redux';
import { fetchCats } from '../../features/Cats/CatsSlice';
import { useEffect, useState } from 'react';
import { deleteCat, editCat } from '../../features/Cats/CatsSlice';
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
//import PopoverEdit from './PopoverEdit';
import Popover from 'react-bootstrap/Popover';
import '../../style/crud/crud.css'






const CatList = () => {


  const [element, setElement] = useState({});


  const dispatch = useDispatch();
  const catsData = useSelector((state) => state.cats.cats);
  const status = useSelector((state) => state.cats.status);

  const handleDelete = (id) => {
    dispatch(deleteCat(id))

  }

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editCat(element))
  }

  const handleClickEdit = (cat) => {
    setElement(cat)
  }

  const handleElement = (e) => {

    setElement(oldValue => {
      if (e.target.name === "width" || e.target.name === "height") {
        return { ...oldValue, [e.target.name]: parseInt(e.target.value) }
      }
      return { ...oldValue, [e.target.name]: e.target.value }

    })
  }

  console.log(element)


  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  if (status === 'loading') {
    return <><Spinner /><div>Loading...</div></>;
  }

  return (<>

    <Container className='container-grid'>
      <h1 style={{ color: "#565656" }}>Cats<br />counter:<br />
        {catsData.length}</h1>
      {
        catsData.map(
          cat => <div key={cat.id} className='cardcontainer'>
            <img src={cat.url} alt='cat' className='cat-picture' />
            <p>Width: {cat.width}px<br />Height: {cat.height}px</p>
            <div className='buttons-container'>
              <Button style={{ backgroundColor: "#b784b3", borderColor: "#b784b3" }}
                className="edit-button" onClick={() => { handleDelete(cat.id) }}>delete</Button>
              <OverlayTrigger rootClose="true" trigger="click" placement="bottom" overlay={
                <Popover >
                  <Popover.Header as="h3">edit data</Popover.Header>
                  <Popover.Body>
                    <Form>
                      <Form.Group >
                        <Form.Label>Url</Form.Label>
                        <Form.Control value={element.url || cat.url} onChange={handleElement}
                          name='url' type="text" placeholder="put a valid url address" />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label>Width</Form.Label>
                        <Form.Control value={element.width || cat.width} onChange={handleElement}
                          name='width' type="text" placeholder="type just number values" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Height</Form.Label>
                        <Form.Control value={element.height || cat.height} onChange={handleElement}
                          name='height' type="text" placeholder="type just number values" />
                      </Form.Group>
                      <Button style={{ backgroundColor: "#A5DADB", borderColor: "#A5DADB", marginTop: "0.5rem " }}
                        onClick={handleEdit}>submit</Button>
                    </Form>
                  </Popover.Body>
                </Popover>}>
                <Button style={{ backgroundColor: "#A5DADB", borderColor: "#A5DADB" }}
                  className="edit-button" variant="primary" onClick={() => handleClickEdit(cat)} >edit</Button>
              </OverlayTrigger>
            </div>
          </div>
        )
      }
    </Container>
  </>
  );
};
export default CatList;