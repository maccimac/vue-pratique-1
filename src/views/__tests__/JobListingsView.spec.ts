import { mount, shallowMount, VueWrapper } from "@vue/test-utils";
import { mockJob1, mockJob2 } from "@/tests/mocks";
import JobListingsView from "@/views/JobListingsView.vue";

describe("JobListingsView", () => {
  describe("renders defaults", () => {
    let wrapper: VueWrapper<InstanceType<typeof JobListingsView>>;
    beforeEach(() => {
      wrapper = shallowMount(JobListingsView);
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it("renders", () => {
      expect(wrapper.exists()).toBe(true);
    });

    it("displays the job listings", () => {
      expect(wrapper.findAll(".job-listing-item__holder").length).toBe(10);
    });

    it("does not display filter", () => {
      expect(wrapper.find(".filter-bar-holder").exists()).toBe(false);
    });
  });

  describe("when there is a selected tag", () => {
    let wrapper: VueWrapper<InstanceType<typeof JobListingsView>>;
    beforeEach(() => {
      wrapper = mount(JobListingsView);
      wrapper.setData({
        JobTags: [
          {
            language: "JavaScript",
          },
        ],
      });
    });
    afterEach(() => {
      wrapper.unmount();
    });

    it("displays filter bar", () => {
      expect(wrapper.find(".filter-bar-holder").exists()).toBe(true);
    });

    it("displays the correct number of chips", () => {
      expect(
        wrapper.findAll(".filter-bar-holder .impact-chip--tag").length
      ).toBe(1);
    });

    it("adds a chip on tag click", async () => {
      const chips = wrapper.findAll(".impact-chip--tag .chip-value");
      let clicked = false;
      chips.forEach((chip) => {
        if (!clicked && chip.text().includes("CSS")) {
          chip.trigger("click");
          clicked = true;
        }
      });
      await wrapper.vm.$nextTick();
      expect(wrapper.findAll(".impact-chip--removeable").length).toBe(2);
    });

    it("displays less jobs when a tag is clicked", async () => {
      await wrapper.vm.$nextTick();
      const initialJobsCount = wrapper.findAll(
        ".job-listing-item__holder"
      ).length;

      const chips = wrapper.findAll(".impact-chip--tag .chip-value");
      let clicked = false;
      chips.forEach((chip) => {
        if (!clicked && chip.text().includes("CSS")) {
          chip.trigger("click");
          clicked = true;
        }
      });
      await wrapper.vm.$nextTick();
      const newCount = wrapper.findAll(".job-listing-item__holder").length;

      expect(newCount).toBeLessThan(initialJobsCount);
    });

    it("displays only jobs with selected tag", () => {
      let containsTagTitle = true;
      wrapper.findAll(".job-listing-item__holder").forEach((job) => {
        if (!containsTagTitle) return;
        if (!job.find(".card-content--right").text().includes("JavaScript")) {
          containsTagTitle = false;
        }
      });

      expect(containsTagTitle).toBe(true);
    });

    it("removes a chip on tag click", async () => {
      const JobTagsLength = wrapper.findAll(
        ".filter-bar-holder .impact-chip--tag"
      ).length;
      wrapper.find(".impact-chip--removeable .btn--remove").trigger("click");
      await wrapper.vm.$nextTick();
      expect(
        wrapper.findAll(".filter-bar-holder .impact-chip--tag").length
      ).toBe(JobTagsLength - 1);
    });
  });

  describe("when there are less jobs passed", () => {
    let wrapper: VueWrapper<InstanceType<typeof JobListingsView>>;

    beforeEach(() => {
      wrapper = mount(JobListingsView);
      wrapper.setData({
        jobs: [mockJob1, mockJob2],
      });
    });

    it("displays the correct number of jobs", () => {
      expect(wrapper.findAll(".job-listing-item__holder").length).toBe(2);
    });
  });
});
