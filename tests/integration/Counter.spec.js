import { render, Simulate } from "vue-testing-library";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
  it("increments by 1 on click", () => {
    const { getByTestId, getByText } = render(Counter);
    Simulate.click(getByText("Increments"));
    expect(getByTestId("count").textContent).toBe("1");
  });

  it("decrements by 1 on click", () => {
    const { getByTestId, getByText } = render(Counter);
    Simulate.click(getByText("Decrements"));
    expect(getByTestId("count").textContent).toBe("-1");
  });

  it("increments by multiplier", () => {
    const { getByTestId, getByText } = render(Counter, { props: { multiplier: 4 } });
    Simulate.click(getByText("Increments"));
    expect(getByTestId("count").textContent).toBe("4");
  });

  it("decrements by multiplier", () => {
    const { getByTestId, getByText } = render(Counter, { props: { multiplier: 4 } });
    Simulate.click(getByText("Decrements"));
    expect(getByTestId("count").textContent).toBe("-4");
  });

  it("resets to 0", () => {
    const { getByTestId, getByText } = render(Counter);
    Simulate.click(getByText("Reset"));
    expect(getByTestId("count").textContent).toBe("0");
  });
});
