import React from 'react'
import SellingForm from './SellingForm'
import InventoryForm from './InventoryForm'
import SearchForm from './SearchForm'

class FormContainer extends React.Component {
    
    checkType = (props) => {
        if(props.type==="selling"){
            return <SellingForm />
        }
        else if(props.type==="inventory"){
            return <InventoryForm />
        }
        else if(props.type==="search"){
            return <SearchForm />
        }
    }
    render(){
        return(
            <div>
                {this.checkType(this.props)}
            </div>
        )
    }
}

export default FormContainer