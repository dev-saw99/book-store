import React from 'react'
import { Form, Button,Col,Card } from 'react-bootstrap'

class InventoryForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        
                bookname:"",
                author:"",
                price:0,
                quantity:0,
                isbn:"",
            }
        
        this.handleInputChange = this.handleInputChange.bind(this)
      
    }
    handleInputChange(event){
        let target = event.target
        let tname = target.name
        let tvalue = target.value
        
        this.setState({
            
                [tname] : tvalue
            
        })
       console.warn(this.state)
    }
    handleSubmit(event){
        event.preventDefault()
    }
    
    render(){
        return (
            <Card className="mx-auto p-4 shadow bg-white"  >
                <Card.Title>Add/Update book</Card.Title>
                <hr/>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="bookname">
                        <Form.Label>
                            Book Name
                        </Form.Label>
                        <Form.Control type="text" name="bookname" placeholder="Go in Action" onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="isbn">
                        <Form.Label>
                            ISBN
                        </Form.Label>
                        <Form.Control type="text" name="isbn" placeholder="9123234541243" onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="Author">
                        <Form.Label>
                            Author's Name
                        </Form.Label>
                        <Form.Control type="text" name="author" placeholder="William Kennedy" onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Form.Row>
                    <Form.Group as={Col} controlId="Quantity">
                        <Form.Label>
                            Quantity
                        </Form.Label>
                        <Form.Control type="number" name="quantity" placeholder="1" onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="Price">
                        <Form.Label>
                            Price
                        </Form.Label>
                        <Form.Control type="number"name="price" placeholder="199.00" onChange={this.handleInputChange}/>
                    </Form.Group>
                    </Form.Row>
                    <Form.Group  controlID="submitForm">
                        <Button type="submit" variant="dark">Submit</Button>
                    </Form.Group>
                    
                </Form>
            </Card>
        )
    }
}
export default InventoryForm