import React from "react";
import { render , fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import GreetingTest from "./GreetingTest";

describe("GreetingTest component", () => {
  it("Apakah component memiliki header", () => {
    const { getByTestId } = render(<GreetingTest />);
    const greetingHeader = getByTestId("greeting-header");
    expect(greetingHeader).toHaveTextContent("Greeting Page");
  });

  it("Apakah component memiliki deskripsi?", () => {
    const { getByTestId } = render(<GreetingTest />);
    const greetingDescription = getByTestId("greeting-description");
    expect(greetingDescription).toHaveTextContent(
      "Project MiniApp sederhana Penerapan Redux Styled dan StoryBook"
    );
  });

  it("Apakah onClick tidak dipanggil saat Button diklik?", () => {
    const onClick = jest.fn();
    onClick.mockClear();
    const { getByText } = render(<GreetingTest onClick={onClick} />);
    const button = getByText("OK!");
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
  
  
});
