import React from "react";
import { render } from "@testing-library/react";
import Saved from "./Saved";

describe("Saved tests", () => {
  it("should render", () => {
    expect(render(<Saved />)).toBeTruthy();
  });
});
