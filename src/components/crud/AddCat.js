  import { useState} from 'react';
  import Button from 'react-bootstrap/Button';
  import Form from 'react-bootstrap/Form';
  import { useDispatch } from 'react-redux';
  import { addCat } from '../../features/Cats/CatsSlice';



  const AddCat = () => {

      const [element, setElement] = useState({});

      const dispatch = useDispatch();

      const handleElement = (e)=>{

          setElement(oldValue=>{
              if(e.target.name === "width" ||  e.target.name === "height"){
                  return {...oldValue, [e.target.name]:parseInt(e.target.value)}
              }
              return {...oldValue, [e.target.name]:e.target.value}

          })
      }

      const handleClick = (e) => {
          e.preventDefault();
          dispatch(addCat(element));
      }

      return(<div  className='form-container'>
        <h1 style={{fontFamily:'Cherrils',textAlign:"center", color:"#565656"}}>Add your Cat picture</h1>
      <Form style={{textAlign:"center"}}>
        <Form.Group >
          <Form.Label >Url of picture</Form.Label>
          <Form.Control style={{textAlign:"center"}} name="url" onChange={handleElement} type="text" placeholder="enter Url" />
          <Form.Text className="text-muted">
            We spected a url link
          </Form.Text>
        </Form.Group>

        <Form.Group >
          <Form.Label>width</Form.Label>
          <Form.Control style={{textAlign:"center"}} name="width" 
          onChange={handleElement} type="text" placeholder="width in px" />
          <Form.Label>height</Form.Label>
          <Form.Control style={{textAlign:"center"}} name="height" 
          onChange={handleElement} type="text" placeholder="height in px" />
        </Form.Group>
        <Button style={{marginTop:"1rem", backgroundColor:"#b784b3", borderColor:"#b784b3"}}
         variant="primary" onClick={handleClick} type="submit">
          Submit
        </Button>
      </Form>
      </div>
          
      )
  }

  export default AddCat;