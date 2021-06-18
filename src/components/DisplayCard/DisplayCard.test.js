import React from "react";
import { render } from "@testing-library/react";
import DisplayCard from "./DisplayCard";

describe("DisplayCard tests", () => {
  it("should render", () => {
    expect(render(<DisplayCard />)).toBeTruthy();
  });
});
