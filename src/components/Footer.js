
import React from 'react';
import { Button} from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
return (
<>
    <div className='footer text-center p-3 bg-light' >
      <p> 
        Discord Channel : Laiba Akram#8215
        </p>
      <Button className='btn btn-sm m-3' onClick={() => window.location = 'mailto:laibakram@gmail.com'}>Mail</Button>
    </div>
    </>
)

};

export default Footer;


