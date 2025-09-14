import JobListingCard from './JobListingCard.vue'
import { mockJob1 } from "./../../tests/mocks";
export default {
    title: "JobListingCard"
}

export const VueComponentJSX = () => ({
    components: { JobListingCard },
    setup() {
        return { mockJob1 };
    },
    template: `<JobListingCard
        :job="mockJob1"
    />`
})