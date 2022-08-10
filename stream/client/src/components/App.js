import React from "react";
import {Routes, Route} from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

const App = () => {
    return (
        <div className="ui container">
            <Header/>
            <Routes>
                <Route path="/" index element={<StreamList />} />
                <Route path="/streams">
                    <Route path="" element={<StreamList />} />
                    <Route path="new" element={<StreamCreate />} />
                    <Route path="edit/:id" element={<StreamEdit />} />
                    <Route path="delete" element={<StreamDelete />} />
                    <Route path="show" element={<StreamShow />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App;