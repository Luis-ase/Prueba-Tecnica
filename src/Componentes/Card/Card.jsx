
import Card from 'react-bootstrap/Card';


export default function Products({ name, id, rating, price, image }) {
    return (
        <div>
            <Card style={{ width: '18rem' }} key={id}>
                <Card.Img variant="top" src={image} alt={name} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Valoracion {"★".repeat(rating).padEnd(5, "☆")}</Card.Text>
                    <Card.Text>price {price.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}