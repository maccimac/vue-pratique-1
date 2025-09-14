import JobListingCard from "./JobListingCard.vue";
import { mockJob1, mockJob2 } from "./../../tests/mocks";
import type { Meta, StoryFn } from "@storybook/vue3";
import { JobListing } from "@/types/index";

export default {
  title: "JobListingCard",
  decorators: [
    (story: StoryFn) => ({
      components: { Story: story },
      template:
        '<div  class="p-2" style="padding: 2rem; box-sizing: border-box; outline: 2px solid #eee; border-radius: 8px"><story /></div>',
    }),
  ],
};

export const VueComponentJSX = () => ({
  components: { JobListingCard },
  setup() {
    return { mockJob1 };
  },
  template: `<JobListingCard
        :job="mockJob1"
    >
      This is the default slot
    </JobListingCard>`,
});

VueComponentJSX.story = {
  name: "Job Listing Simple",
};

interface StoryArgs {
    job: JobListing,
    slotText: string
}

export const VueComponentKnobs = (args: StoryArgs) => ({
    components: { JobListingCard },
    setup() {
        return { args };
    },

    template: `<JobListingCard
        :job="args.job"
    >
      {{ args.slotText}}
    </JobListingCard>`,
});

VueComponentKnobs.story = {
    name: "Job Listing With Control",
};
VueComponentKnobs.args = {
    job: mockJob2,
    slotText: "This is the default slot"
}
