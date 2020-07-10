import React from 'react'
import {Card,Tab,Nav,Col,Row} from 'react-bootstrap'
import FormContainer from './FormContainer'

class TabComponent extends React.Component{
  render(){
    return(
      <Card className="mx-auto" >
        <Card.Body>
        <Tab.Container id="left-tabs" defaultActiveKey="sell-book">
            <Row>
              <Col md={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="sell-book">Sell Books</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="inventory">Inventory</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              
              <Col md={8} >
                <Tab.Content className="pl-5">
                  <Tab.Pane eventKey="sell-book">
                    <FormContainer type="selling" data={this.props}/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="inventory">
                    <FormContainer type="inventory"/>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
              
            </Row>
        </Tab.Container>
        </Card.Body>
    </Card>
    )
  }
}

export default TabComponent