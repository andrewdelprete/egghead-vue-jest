import { render, Simulate } from "vue-testing-library";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
  it("renders component", () => {
    const { getByText, getByTestId } = render(Counter);
    expect(getByTestId("count"));
  });

  it("increments counter by 1 on click", () => {
    const { getByText, getByTestId } = render(Counter);
    Simulate.click(getByText("Increments"));
    expect(getByTestId("count").textContent).toBe("1");
  });

  it("decrements counter by 1 on click", () => {
    const { getByText, getByTestId } = render(Counter);
    Simulate.click(getByText("Decrements"));
    expect(getByTestId("count").textContent).toBe("-1");
  });

  it("resets counter back to 0 on click", () => {
    const { getByText, getByTestId } = render(Counter);
    Simulate.click(getByText("Reset"));
    expect(getByTestId("count").textContent).toBe("0");
  });

  it("multiplier increments on click", () => {
    const { getByText, getByTestId } = render(Counter, { props: { multiplier: 4 } });
    Simulate.click(getByText("Increments"));
    expect(getByTestId("count").textContent).toBe("4");
  });

  it("multiplier decrements on click", () => {
    const { getByText, getByTestId } = render(Counter, { props: { multiplier: 4 } });
    Simulate.click(getByText("Decrements"));
    expect(getByTestId("count").textContent).toBe("-4");
  });
});
