import React from 'react'
import  {Container,Row,Col}  from 'react-bootstrap'
import IOContainer from './IOContainer'



class MainTemplate extends React.Component{
    state = {
        books: {}
    }
    
    componentDidMount(){
        fetch("http://localhost:8080/api/books")
        .then(res => res.json())
        .then((data)=>{
          this.setState({books:data})
        })
        .catch(console.log)
    }
    
    render(){
        return (
            <Container fluid>
                <Row>
                    <h1 className="display-4 text-dark mx-auto mt-3">Pick-a-Book</h1>
                </Row>
                <hr/>
                <Row className="mt-2">
                    <Col className="left">  
                        <IOContainer type="input-search"/>
                        <IOContainer type="input-form" data={this.state.books}/>
                    </Col>
                    <Col className="right">
                        
                        <IOContainer type="output" data={this.state.books}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default MainTemplate