import React, {useEffect, useState} from 'react';
import axios from "axios";

const Convert = ({language, text}) => {
    const [debounceText, setDebounceText] = useState(text);
    const [translated, setTranslated] = useState('');

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            setDebounceText(text);
        }, 500);

        return () => {
            clearTimeout(debounceTimer);
        }
    }, [text]);

    useEffect(() => {
        const doTranslation = async () => {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debounceText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslated(data.data.translations[0].translatedText);
        }

        if (debounceText) {
            doTranslation();
        } else {
            setTranslated('');
        }
    }, [language, debounceText]);

    return <div>
        <h2 className="ui header">{translated}</h2>
    </div>
}

export default Convert;