import React, { Component } from "react";
import image from "../caffeine.jpg";
class CreateCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: ["Funny", "Humor", "Coffee", "Problem", "Twisted humor"]
    };
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <img src={image} />
          </div>
          <div>Image brief description of the image</div>
        </div>
        <div>List of cards images already saved.</div>
        <button>Create Board</button>
        <div>
          {this.state.suggestions.map(suggest => {
            return <li>{suggest}</li>;
          })}
        </div>
        This is the create card component
      </div>
    );
  }
}

export default CreateCard;
