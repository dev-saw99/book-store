import React from 'react'
import axios from 'axios'
import {Card } from 'react-bootstrap'

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
        this.handleSubmit = this.handleSubmit.bind(this)
      
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
        let name = {
                "bookname":this.state.bookname,
                "author":this.state.author,
                "price":Number(this.state.price),
                "quantity":Number(this.state.quantity),
                "isbn":this.state.isbn
        }
        name = JSON.stringify(name)
        axios.post("http://localhost:8080/api/books",name)
        .then(response=>{
            console.log(response.status)
            console.log(response.data)
        })
    }
    
    render(){
        return (
            <Card className="mx-auto mt-4 p-4 shadow bg-white"  >
                <Card.Title>Add/Update book</Card.Title>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Book Name</label>
                        <input type="text" className="form-control" name="bookname" onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label>ISBN</label>
                        <input type="text" className="form-control" name="isbn"  onChange={this.handleInputChange}/>    
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <input type="text" className="form-control" name="author"  onChange={this.handleInputChange}/>    
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="number"className="form-control" name="price"  onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label>Quantity</label>
                        <input type="numbers"className="form-control" name="quantity"  onChange={this.handleInputChange}/>
                    </div>
                    <button type="submit" class="btn btn-primary mb-2 btn-dark">Submit</button>
                </form>
            </Card>
        )
    }
}
export default InventoryForm