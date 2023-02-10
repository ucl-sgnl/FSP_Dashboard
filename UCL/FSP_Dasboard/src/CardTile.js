import Card from 'react-bootstrap/Card';
import { ListGroup} from 'react-bootstrap';
import './CardTile.css';

export default function CardTile(data) {
    // the basic template for a card tile
    return (
        <Card
        className="mb-2"
        border='danger'
        >
            <Card.Img variant="top" src={data.img} width="10%"/>
            <Card.Header>{data.name}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {data.mainText}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Time: {data.net}</ListGroup.Item>
                <ListGroup.Item>Mission Type: {data.type}</ListGroup.Item>
                <ListGroup.Item>Status: {data.status}</ListGroup.Item>
                <ListGroup.Item>Desc: {data.desc}</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}