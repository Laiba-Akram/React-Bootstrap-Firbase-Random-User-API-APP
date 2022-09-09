
import { useState } from "react";
import Randomuser from "./Randomuser";
import { Button, Container, Row,Col } from "react-bootstrap";
const  Closemodel =() => {
     const [ counter, setCounter ] = useState( 1 );



  const handleRemoveDiv = () => {
    setCounter( counter - 1 );
  };
  return (
    <>






    <Container fluid>
<Row>


  <Col md={6}>
  
  {
        Array.from(Array( counter )).map(( item, idx ) => (
           <div>
             <div>
              <Randomuser/>
               <Button onClick={handleRemoveDiv}>Remove</Button>
             </div>
           </div>
        ))
      }
  </Col>

  </Row>
    </Container>
    </>
  );
}

export default Closemodel;