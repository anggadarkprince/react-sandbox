import React from 'react';
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";
import {LanguageStore} from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
    /*state = {language: 'english', color: 'red'};
    onLanguageChange = language => {
        this.setState({
            language,
            color: language === 'english' ? 'red' : 'primary'
        });
    };*/

    render() {
        return (
            <div className="ui container">
                <LanguageStore>
                    {/*<LanguageSelector onLanguageChange={this.onLanguageChange}/>*/}
                    <LanguageSelector/>
                    {/*<ColorContext.Provider value={this.state.color}>*/}
                    <ColorContext.Provider value={this.state.color}>
                        <UserCreate/>
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    }
}

export default App;
