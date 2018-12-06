import React from "react";
import Search from "../Search";
// import { mount } from "enzyme";
import { shallow, mount } from "enzyme";
let wrapped;
beforeEach(() => {
  wrapped = shallow(<Search />);
});

it("shows a comment box", () => {
  //   expect(wrapped.find("div").length).toEqual(1);
});

// it("shows a comment list", () => {
//   expect(wrapped.find(CommentList).length).toEqual(1);
// });
