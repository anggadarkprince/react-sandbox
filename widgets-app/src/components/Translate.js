import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from "./Convert";

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const options = [
    {
        label: 'Afrikaans',
        value: 'af',
    },
    {
        label: 'Arabic',
        value: 'ar',
    },
    {
        label: 'Hindi',
        value: 'hi',
    },
    {
        label: 'English',
        value: 'en',
    },
    {
        label: 'Indonesia',
        value: 'id',
    },
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="text">Enter text</label>
                    <input type="text" id="text"
                           value={text} placeholder="Input a text"
                           onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown
                label="Language"
                selected={language}
                onSelectedChange={setLanguage}
                options={options}
            />
            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert language={language} text={text}/>
        </div>
    );
};

export default Translate;
