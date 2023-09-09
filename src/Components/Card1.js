import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Card2 = (props) => {
    return (
        <Card className='mb-3 mx-3 border-0' style={{ width: '25%' }}>
            <Card.Img variant="top" className='time' src={props.src} height={230} width={350} />

            <Card.Body>
            <p className='rotet bg-white text-dark rounded-pill text-center fs-6'>August 16,2021</p>

                <Card.Title>The Most Beautiful Places To visit All Over the world</Card.Title>
                <Card.Text>
                    <p className='articles'>Lorem ipsum dolor sit amet expedita. <br /> enim consectetur distinctio dolor?</p>
                </Card.Text>
                <div className="boton text-center ">
                    <h6><a href='/' class="more">Explore More<i class="fa-solid fa-arrow-right ms-2"></i></a></h6>
                </div>

            </Card.Body>
        </Card>
    )
}

export default Card2;
