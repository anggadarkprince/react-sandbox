import React from 'react';
import LanguageContext from "../context/LanguageContext";

class Field extends React.Component {
    //static contextType = LanguageContext;

    render() {
        const text = this.context === 'english' ? 'Name' : 'Naam';
        const placeholder = this.context === 'english' ? 'Input text...' : 'Tekst invoeren...';
        return (
            <div className="ui field">
                <label>{text}</label>
                <input placeholder={placeholder}/>
            </div>
        );
    }
}

Field.contextType = LanguageContext;

export default Field;
