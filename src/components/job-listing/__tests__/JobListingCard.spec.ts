import { shallowMount, VueWrapper } from "@vue/test-utils";
import { mockJob1 } from "@/tests/mocks";
import JobListingCard from "@/components/job-listing/JobListingCard.vue";

describe("JobListingCard", () => {
  let wrapper: VueWrapper<InstanceType<typeof JobListingCard>>;
  beforeEach(() => {
    wrapper = shallowMount(JobListingCard, {
      props: {
        job: mockJob1,
      },
    });
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it("renders", async () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("displays title, company, and details", () => {
    const includesPosition = wrapper.text().includes(mockJob1.position);
    const includesCompany = wrapper.text().includes(mockJob1.company);
    const includesRole = wrapper.text().includes(mockJob1.role);

    expect(includesPosition && includesCompany && includesRole).toBe(true);
  });

  it("displays logo", () => {
    const logo = wrapper.find(".logo-image");
    expect(logo.exists()).toBe(true);
    expect(logo.attributes("src")).toBe(mockJob1.logo);
    expect(logo.attributes("alt")).toBe(`${mockJob1.company} logo`);
  });
});
