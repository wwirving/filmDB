import React from "react";
import { render } from "@testing-library/react";
import FilmProvider from "./FilmProvider";

describe("FilmProvider tests", () => {
  it("should render", () => {
    expect(render(<FilmProvider />)).toBeTruthy();
  });
});
