import React from 'react'
import {Container} from 'react-bootstrap'
import TabComponent from './Tab'
import DataContainer from './DataContainer'
import FormContainer from './FormContainer'


class IOContainer extends React.Component{

    checkAndRouteType = (props) => {
        if (props.type==="input-form"){
            return <TabComponent data={this.props}/>
        }
        if (props.type==="input-search"){
            return(
                <FormContainer type="search"/>
            )
        }
        if  (props.type==="output"){
            return <DataContainer data={props.data}/>
        }
    }

    render(){
        return (
            <Container fluid>
                    
                {this.checkAndRouteType(this.props)}
                        
            </Container>
        )
    }
}

export default IOContainer
