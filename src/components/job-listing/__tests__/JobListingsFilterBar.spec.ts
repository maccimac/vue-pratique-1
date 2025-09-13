import { mount, VueWrapper } from "@vue/test-utils";
import JobListingFilterBar from "@/components/job-listing/JobListingFilterBar.vue";
import ChipTag from "@/components/chips/ChipTag.vue";
import { JobTag } from "@/types";

describe("JobListingFilterBar", () => {
  const mockTags: JobTag[] = [
    {
      language: "JavaScript",
    },
    { tool: "React" },
  ];

  let wrapper: VueWrapper<InstanceType<typeof JobListingFilterBar>>;

  beforeEach(() => {
    wrapper = mount(JobListingFilterBar, {
      props: {
        modelValue: mockTags,
      },
    });
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("displays the tags", () => {
    const chips = wrapper.findAll(".impact-chip--tag");
    expect(chips.length).toBe(mockTags.length);
  });

  it("can remove tabs", async () => {
    await wrapper.findComponent(ChipTag).vm.$emit("remove", mockTags[0]);
    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
  });

  it("clears the filter", async () => {
    const clearSpy = jest.spyOn(wrapper.vm, "clear");
    await wrapper.find(".btn--clear").trigger("click");
    await wrapper.vm.$nextTick();
    expect(clearSpy).toHaveBeenCalled();
  });
});
