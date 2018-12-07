import React, { Component } from "react";
import image from "../caffeine.jpg";
import "./CreateCard.css";
class CreateCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: ["Funny", "Humor", "Coffee", "Problem", "Twisted humor"],
      boards: [
        {
          image:
            "https://i.pinimg.com/200x150/6c/75/e9/6c75e9222bb6da16f30b14e0ea9fe6ab.jpg",
          name: "Butterfly"
        }
      ]
    };
  }
  render() {
    return (
      <div className="Test">
        <div className="NewImage">
          <div>
            <img src={image} />
          </div>
          <div>Image brief description of the image</div>
        </div>
        <div className="Wrap">
          <div className="Boards">
            {this.state.boards.map(board => {
              return (
                <div key={board.image} className="BoardImage">
                  <img src={board.image} />
                  <div>{board.name}</div>
                </div>
              );
            })}
          </div>
          <div className="Suggestions">
            <button>Create Board</button>
            <div>Suggested board names</div>
            {this.state.suggestions.map(suggest => {
              return (
                <li key={suggest}>
                  <button>{suggest}</button>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCard;
