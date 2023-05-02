import React from 'react';
import { Button, Card } from 'react-bootstrap';


const ChefCards = ({chef}) => {

    const {chef_name,picture_url}=chef

    return (
        <div> 
          
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={picture_url} />
      <Card.Body>
        <Card.Title>{chef_name}</Card.Title>
        <Card.Text>
          {/* Some quick example text to build on the card title and make up the
          bulk of the card's content. */}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default ChefCards;