import React from 'react'
import { Form, Button,Col,Card } from 'react-bootstrap'

class SellingForm extends React.Component{
    
    render() {
        return (
            <Card className="mx-auto p-4 shadow bg-white" >
                <Card.Title>Sell Book</Card.Title>
                <hr/>
                <Form>
                    <Form.Group controlId="buyerName">
                        <Form.Label>
                            Buyer's Name
                        </Form.Label>
                        <Form.Control type="text" placeholder="Mr. Sonu Kumar Saw"/>
                    </Form.Group>
                    <Form.Group controlId="isbn">
                        <Form.Label>
                            ISBN
                        </Form.Label>
                        <Form.Control type="text" placeholder="9123234541243"/>
                    </Form.Group>
                    <Form.Group controlId="bookname">
                        <Form.Label>
                            Book Name
                        </Form.Label>
                        <Form.Control type="text" placeholder="Go in Action"/>
                    </Form.Group>
                    <Form.Row>
                    <Form.Group as={Col} controlId="Quantity">    
                        <Form.Control as="select" defaultValue="0" >
                            <option value="0">Qnt</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlID="submitForm">
                        <Button type="submit" variant="dark" className="mx-5">Submit</Button>
                    </Form.Group>
                    </Form.Row>
                </Form>
            </Card>
        )
    }
}

export default SellingForm
