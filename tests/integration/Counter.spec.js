import { render, Simulate } from "vue-testing-library";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
  it("increments by 1 on click", () => {
    const { getByTestId, getByText } = render(Counter);
    Simulate.click(getByText("Increments"));
    expect(getByTestId("count").textContent).toBe("1");
  });
});
