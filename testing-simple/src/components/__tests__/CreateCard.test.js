import React from "react";
import Create from "../CreateCard";
// import { mount } from "enzyme";
import { shallow, mount } from "enzyme";
let wrapped;
beforeEach(() => {
  wrapped = shallow(<Create />);
});

it("has the correct classNames for the styling", () => {
  expect(wrapped.find("div.Test").length).toEqual(1);
  expect(wrapped.find("div.NewImage").length).toEqual(1);
  expect(wrapped.find("div.Wrap").length).toEqual(1);
  expect(wrapped.find("div.Boards").length).toEqual(1);
  expect(wrapped.find("div.BoardImage").length).toEqual(1);
  expect(wrapped.find("div.Suggestions").length).toEqual(1);
  //   expect(wrapped.find("div").length).toEqual(1);
});
describe("button clicked, changed state", () => {
  //   wrapped.find("button").simulate("submit", {
  //     target: { value: "New CommeNt" }
  //   });
  //   wrapped.update();
  //   });
});

// it("shows a comment list", () => {
//   expect(wrapped.find(CommentList).length).toEqual(1);
// });
