import { shallowMount, VueWrapper } from "@vue/test-utils";
import ChipTag from "@/components/chips/ChipTag.vue";

describe("ChipTag", () => {
  let wrapper: VueWrapper<InstanceType<typeof ChipTag>>;

  beforeEach(() => {
    wrapper = shallowMount(ChipTag, {
      props: {
        tag: {
          tool: "Tool",
        },
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("displays the value", () => {
    expect(wrapper.text()).toContain("Tool");
  });

  it("displays remove button", async () => {
    wrapper.setProps({
      isRemoveable: true,
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".btn--remove").exists()).toBe(true);

    wrapper.find(".btn--remove").trigger("click");
    expect(wrapper.emitted("remove")).toBeTruthy();
  });

  it("is unclickable if already selected", async () => {
    wrapper.setProps({
      isSelected: true,
    });
    await wrapper.vm.$nextTick();
    wrapper.find(".chip-value").trigger("click");
    expect(wrapper.emitted("click")).toBeFalsy();
  });
});
