import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
  it("increments by 1 on click", () => {
    const wrapper = mount(Counter);
    wrapper.find("button").trigger("click");
    expect(wrapper.vm.count).toBe(1);
  });
});
