import React from 'react'
import { Form, Button,Col,Card } from 'react-bootstrap'

class SellingForm extends React.Component{
    
    render() {
        return (
            <Card className="mx-auto p-4 shadow bg-white" >
                <Card.Title>Sell Book</Card.Title>
                <hr/>
                <form>
                    <div className="form-group">
                        <label>Buyer's Name</label>
                        <input type="text" className="form-control" name="buyername"  onChange={this.handleInputChange}/>    
                    </div>
                    <div className="form-group">
                        <label>Book Name</label>
                        <input type="text" className="form-control" name="bookname" onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label>ISBN</label>
                        <input type="text" className="form-control" name="isbn"  onChange={this.handleInputChange}/>    
                    </div>
                    <div className="form-group">
                        <label>Qnt</label>
                        <input type="numbers" className="form-control" name="quantity"  onChange={this.handleInputChange}/>    
                    </div>
                    <button type="submit" class="btn btn-primary mb-2 btn-dark">Submit</button>
                </form>
            </Card>
        )
    }
}

export default SellingForm
