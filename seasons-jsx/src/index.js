import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import "./App.css";

if (module.hot) {
    module.hot.accept();
}

/*
const App = () => {
  window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
  );
  return <>
    <div>Latitude: </div>
  </>;
};
*/
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {lat: null, lng: null, errorMessage: ''}
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
                console.log(position)
            },
            err => {
                this.setState({
                    errorMessage: err.message
                })
                console.log(err)
            }
        );
    }

    renderContent() {
        if (this.state.errorMessage) {
            return <div>{this.state.errorMessage}</div>
        } else if (this.state.lat && this.state.lng) {
            return <SeasonDisplay lng={this.state.lng} lat={this.state.lat}/>
        }

        return <Spinner message="Find your location..."/>
    }

    render() {
        return <div className="border red">
            {this.renderContent()}
        </div>
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));
