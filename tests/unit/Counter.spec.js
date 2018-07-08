import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
  it("renders component", () => {
    const wrapper = mount(Counter);
    expect(wrapper.element).toMatchSnapshot();
  });

  it("has initial count of 0", () => {
    const wrapper = mount(Counter);
    expect(wrapper.vm.count).toEqual(0);
  });

  it("increments count by 1", () => {
    const wrapper = mount(Counter);
    wrapper.vm.increment();
    expect(wrapper.vm.count).toEqual(1);
  });

  it("decrements count by 1", () => {
    const wrapper = mount(Counter);
    wrapper.vm.decrement();
    expect(wrapper.vm.count).toEqual(-1);
  });

  it("resets count to 0", () => {
    const wrapper = mount(Counter);
    wrapper.vm.reset();
    expect(wrapper.vm.count).toEqual(0);
  });

  it("multiplierCount is incremented", () => {
    const wrapper = mount(Counter, { propsData: { multiplier: 4 } });
    wrapper.vm.increment();
    expect(wrapper.vm.multiplierCount).toEqual(4);
  });

  it("multiplierCount is decremented", () => {
    const wrapper = mount(Counter, { propsData: { multiplier: 4 } });
    wrapper.vm.decrement();
    expect(wrapper.vm.multiplierCount).toEqual(-4);
  });
});
