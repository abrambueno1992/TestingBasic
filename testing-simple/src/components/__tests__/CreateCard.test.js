import React from "react";
import Create from "../CreateCard";
// import { mount } from "enzyme";
import { shallow, mount } from "enzyme";
let wrapped;
beforeEach(() => {
  wrapped = shallow(<Create />);
});

it("shows a comment box", () => {
  //   expect(wrapped.find("div").length).toEqual(1);
});

// it("shows a comment list", () => {
//   expect(wrapped.find(CommentList).length).toEqual(1);
// });
