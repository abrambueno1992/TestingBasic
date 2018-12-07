import React, { Component } from "react";

class CreateCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <div>Card display image</div>
        <div>List of cards already saved.</div>
        <div>Suggested board name list</div>
        <button>Create Board</button>
        This is the create card component
      </div>
    );
  }
}

export default CreateCard;
