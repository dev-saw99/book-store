import React from 'react'

class SearchForm extends React.Component{

    render() {
    
        return (
            <div className="form-row my-3">
                <div className="col-8">
                    <input type="text" class="form-control" placeholder="Search" name="query"/>
                </div>
                <div className="col">
                    <input type="button" class="form-control btn-dark" value="submit"/>
                </div>
                <div className="col">
                    <input type="button" class="form-control btn-dark" value="reset"/>
                </div>
            </div>
        )
    
}
}
export default SearchForm