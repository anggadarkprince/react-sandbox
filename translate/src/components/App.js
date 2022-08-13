import React from 'react';
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
    state = {language: 'english', color: 'red'};

    onLanguageChange = language => {
        this.setState({
            language,
            color: language === 'english' ? 'red' : 'primary'
        });
    };

    render() {
        return (
            <div className="ui container">
                <LanguageSelector onLanguageChange={this.onLanguageChange}/>
                <LanguageContext.Provider value={this.state.language}>
                    <ColorContext.Provider value={this.state.color}>
                        <UserCreate/>
                    </ColorContext.Provider>
                </LanguageContext.Provider>
            </div>
        );
    }
}

export default App;
