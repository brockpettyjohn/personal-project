//heads up clicking this breaks the code so don't do it until you fix it
import React, { Component } from "react";

export default class SearchBar extends Component {
    constructor() {
        super();

        this.state = { input: "" }
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    handleInputChange( event ) {
        this.setState( { input: event.target.value });
    }

    handleKeyPress() {
        //the startSearch function from App is being used from the AddMessage component via props
        this.props.startSearch( this.state.input)//<---is coming from the the state set above in the this.state = { input: ""}
        this.setState({
            input: ''
        })
    }

    render() {
        console.log( this.props );
        return (
            <div className="search-bar">
              
                <input 
                    onChange={ ( event ) => this.handleInputChange( event )}
                    type='text'
                    value={ this.state.input }
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            this.handleKeyPress();
                            }
                        }
                    }  
                />
            </div>
        );
    }
}
