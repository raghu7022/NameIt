import React from 'react';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import Header from './../Header/Header';
import './App.css';


const name = require('@rstacruz/startup-name-generator');
class App extends React.Component {
    constructor() {
        super();

        this.state = {
            headerText: 'Name It!!',
            headerExpanded: true,
            suggestedNames: [],
        };
    }

    handleInputChange = (inputtext) => {
        this.setState({
            headerExpanded: !inputtext,
            suggestedNames: inputtext ? name(inputtext) : [],
        })
    };
    render() {
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText}
                />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />

            </div>
        );
    }
}


export default App;