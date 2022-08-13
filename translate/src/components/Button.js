import React from 'react';
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Button extends React.Component {
    // used when use data from this.context not the consumer
    //static contextType = LanguageContext;

    render() {
        // used when use data from contextType not the consumer
        //const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
        return (
            <ColorContext.Consumer>
                {(color) => (
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {(language) => language === 'english' ? 'Submit' : 'Voorleggen'}
                        </LanguageContext.Consumer>
                    </button>
                )}
            </ColorContext.Consumer>
        );
    }
}

export default Button;
