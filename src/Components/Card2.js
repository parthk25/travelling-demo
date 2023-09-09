import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card3 = (props) => {
    return (
        <Card className='mb-3 mx-3 pos' style={{ width: '348px' }}>
            <Card.Img variant="top" src={props.src} height={241} width={346} />
            <Card.Body>
                <Button className='bg-white text-dark rounded-pill abb'><i class="me-2 fa-solid fa-tag"></i>$120.5</Button>

                <img src={props.logo} height={120} width={120} className="rocky" alt=''/>

                <Card.Title className='text1'><p> <span className='fs-6 ms-5'> new yorks, USA</span> <br />  Richard Martinoze</p></Card.Title>
                <Card.Text>
                    <p className=' fs-6'>Travelling fosters a medium to build human connections with one onther.</p>
                </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Card3
