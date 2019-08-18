import React, { Component } from "react";

// import NavBar1 from "./NavBar1";
// import axios from "axios";

class EventsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    // axios.get();
  }

  render() {
    return (
      <div>
        <h4>Community Grass Clipping Party</h4>
        <p>
          <strong>Date:</strong> August 21, 2019
        </p>
        <p>
          <strong>Description:</strong> So much grass to cut, someone help!
        </p>
      </div>
    );
  }
}

export default EventsPage;
