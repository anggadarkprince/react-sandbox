import React, {useState, useEffect} from 'react';
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debounceTerm, setDebounceTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        }
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    origin: '*',
                    srsearch: debounceTerm
                }
            });
            setResults(data.query.search);
        }
        search();
    }, [debounceTerm]);

    /*
    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    origin: '*',
                    srsearch: term
                }
            });
            setResults(data.query.search);
        }

        if (term && !results.length) {
            search();
        } else {
            const debounceId = setTimeout(() => {
                if (term) {
                    search();
                } else {
                    setResults([]);
                }
            }, 500);

            return () => {
                clearInterval(debounceId);
            }
        }
    }, [term]);
    */

    const renderedResults = results.map(result => {
        return <div className="item" key={result.pageid}>
            <div className="right floated content">
                <a href={`https://en.wikipedia.org?curid=${result.pageid}`} target='_blank' rel="noreferrer" className="ui button">Go</a>
            </div>
            <div className="content">
                <div className="header">{result.title}</div>
                <span dangerouslySetInnerHTML={{__html: result.snippet}}/>
            </div>
        </div>
    })

    return <div>
        <div className="ui form">
            <div className="field">
                <label htmlFor="search">Enter Search Term</label>
                <input type="text" className="input" placeholder="Search..."
                       value={term}
                       onChange={e => setTerm(e.target.value)}/>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    </div>;
};

export default Search;
