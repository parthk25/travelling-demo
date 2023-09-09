import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card1 = (props) => {
    return (
        <Card className='desr' style={{ width: '250px' }}>
            <Card.Img src={props.src} height="225px"/>
            <Card.Body className='rating'>
                <Card.Title className='card_title'>{props.title}</Card.Title>
                <Card.Text className='card_text'>{props.text}</Card.Text>
                <div className='rating-star'>
                <i class="fa-solid fa-star"></i><span>{props.rate}</span>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Card1;