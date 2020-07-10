import React from 'react'
import { Form,Row, Button,Col} from 'react-bootstrap'

class SearchForm extends React.Component{
    state = {
        query:""
    }

    render() {
    
        return (
            <div className="mr-5 mb-3">
            <Row>
                <Col sm={10}>
                    <Form >
                    <Row>
                        <Col sl={10}>
                        <Form.Control type="text" placeholder="Search books ..."/>
                        </Col>
                        <Col sm={2}>
                        <Button type="submit" variant="primary" className="mx-5">Search</Button>
                        </Col>
                    </Row>
                    </Form>
                </Col>
                <Col sm={2}>
                <Button type="submit" variant="primary" className="mx-5">Reset</Button>
                </Col>
            </Row>
            </div>
        )
    
}
}
export default SearchForm