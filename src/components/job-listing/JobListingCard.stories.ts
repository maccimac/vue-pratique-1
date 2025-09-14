import JobListingCard from './JobListingCard.vue'
import { mockJob1 } from "./../../tests/mocks";
import type { Meta, StoryFn } from "@storybook/vue3";


export default {
    title: "JobListingCard",
    decorators: [
        (story: StoryFn) => ({
            components: { Story: story() },
            template: '<div  class="p-2" style="padding: 2rem; box-sizing: border-box; outline: 2px solid #eee; border-radius: 8px"><story /></div>',
        }),
    ],


}

export const VueComponentJSX = () => ({
    components: { JobListingCard },
    setup() {
        return { mockJob1 };
    },
    template: `<JobListingCard
        :job="mockJob1"
    >
      This is the default slot
    </JobListingCard>`
})

VueComponentJSX.story = {
    name: "Simple Job Listing Card"
}

export const Simple  = () =>({
    render(){
        return "Hello";
    },
})

// Simple.story = {
//     name: "Simple"
// }