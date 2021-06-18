import React from "react";
import { render } from "@testing-library/react";
import FavouriteCard from "./FavouriteCard";

describe("FavouriteCard tests", () => {
  it("should render", () => {
    expect(render(<FavouriteCard />)).toBeTruthy();
  });
});
