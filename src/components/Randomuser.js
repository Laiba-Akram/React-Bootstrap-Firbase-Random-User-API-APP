import './Randomuser.css';
import { Container,Row,Col,Card, CardGroup } from 'react-bootstrap';
import Getbuttonuser from './Getbuttonuser';
import { useState, Fragment } from 'react';
import axios from 'axios';


const Randomuser = () => {

    const [userData, setUserData] = useState([]);
    const [loading, setloading] = useState(false);
    const [activeUser, setActiveUSer] = useState(false);
    const [activeLink, setActiveLink] = useState(0);
    const onClickhandler = () => {
        setActiveLink(0);
        setloading(true);
        axios.get('https://randomuser.me/api/')
            .then((response) => {
                console.log(response);
                setUserData(response.data.results);
            }).catch((error) => {
                console.log(error);
                setloading(true);
            }).finally(() => {
                setloading(false);
                setActiveUSer(true);
            })
    }

    const icons = [
        'fas fa-user fa-2x',
        // 'fas fa-envelope fa-2x',
        'fas fa-calender-alt fa-2x',
        'fas fa-map-marker  fa-2x',
        'fas fa-phone fa-2x',
        'fas fa-lock fa-2x',
    ];

    const PhraseGenerator = ({user}) => {
        const phrases = [
            `Hi my name is ${user.name.first}`,
            // `Hi my email is ${user.email}`,
            `Hi my born on ${user.dob.date.slice(0, 10)}`,
            `Hi my country is  ${user.location.country} `,
            `Hi my num is ${user.phone} `,
            `Hi my paswrd is ${user.login.password} `,
        ];
        return <h1>{phrases[activeLink]}</h1>
    }
  const activeLinkHandler =(index)=>{
    setActiveLink(index)
  }

  const [ counter, setCounter ] = useState( 1 );



  const handleRemoveDiv = () => {
    setCounter( counter - 1 );
  };
    return (
      
        <div className="random  " id="Randomuser">
           
<Card rounded="true"><CardGroup>


    {
        Array.from(Array( counter )).map(( item, idx ) => (
       
             <div>
              
              
               <Getbuttonuser  isActive={activeUser} clicked={onClickhandler}  />
 <span className="delete-btn " onClick={handleRemoveDiv}>&times;</span>
 
 {loading ? (
                <h1>loading.....</h1>
            ) : (
 
                <div className='randomuser'>

                    {
                        userData.map((user, index) => {
                            return (
                                <Fragment key={user.cell}>

                                    <img src={user.picture.large} alt='#' />
                                    <PhraseGenerator user={user} />
                                   
                                          <div className='randomicons'>
                                        {
                                            icons.map((icon, index) => {
                                                return <i className={icon} key={index} onMouseEnter={() => activeLinkHandler(index)}></i>
                                            })
                                        }

                                    </div>
                                    
                                  
                                </Fragment>
                            )
                        })
                    }
                </div>
            ) 
             }

             </div>
        
        ))
      }

  
					
</CardGroup>
                        
     
                   
                </Card>

 
 


        
           
           
     

        </div>

    )
    
};

export default Randomuser;