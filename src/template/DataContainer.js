import React from 'react'
import {Card, Row, Col} from 'react-bootstrap'

class DataContanier extends React.Component{
    
    checkAndDisplayData = (props) => {
    
        let flag = Object.keys(props.data).length === 0 && props.data.constructor === Object
        let data = props.data
        if(!flag){
            return (
                <div className="mx-auto p-4">
                    {  
                        Object.keys(data).map((key)=>(
                            <Card className="my-2 shadow-sm bg-white">
                                
                                <Card.Body>
                                    <Card.Title>{data[key].bookname}</Card.Title>
                                    <hr/>
                                    <Card.Text className="small">
                                        <Row>
                                            <Col>
                                                ISBN: {data[key].isbn}
                                            </Col>
                                            <Col>
                                                Price: {data[key].price}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                Quantity: {data[key].quantity}
                                            </Col>
                                            <Col>
                                                Author: {data[key].author}
                                            </Col>
                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </div>
            )
        }    
    }

    render(){
        return(
        
            <Card className="mx-auto" >
                <Card.Header><h4>Available Books</h4></Card.Header>
                <Card.Body>
                    {this.checkAndDisplayData(this.props)}
                </Card.Body>
            </Card>
            
        )
    }
}
export default DataContanier