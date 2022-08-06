import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
import {navigateTo} from "./components/Link";

const items = [
    {
        title: "What is React?",
        content: "React is a front end javascript framework",
    },
    {
        title: "Why use React?",
        content: "React is a favorite JS library among engineers",
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components",
    },
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Shared of Blue',
        value: 'blue'
    },
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div className="ui container">
            <Header/>
            <Route path="/">
                <Accordion items={items}/>
                <hr style={{margin: '15px 0'}}/>
                <button className="ui button" typeof="button" onClick={() => navigateTo('/translate')}>
                    Navigate to translate
                </button>
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/dropdown">
                <Dropdown label="Select a Color" options={options} selected={selected} onSelectedChange={setSelected}/>
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
        </div>
    );
};
export default App;
