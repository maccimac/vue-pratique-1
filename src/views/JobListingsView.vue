<template>
  <div
    class="impact-job-listings-view"
    :class="{ 'filter-bar--displayed': JobTags.length }"
  >
    <div class="header-spacer"></div>
    <div class="content mx-1 mx-lg-4">
      <div v-if="JobTags.length" class="filter-bar-holder container">
        <div v-if="JobTags.length" class="row mb-5 mb-sm-4">
          <div class="col">
            <JobListingFilterBar v-model="JobTags" class="mx-1 mx-lg-4" />
          </div>
        </div>
      </div>

      <div class="job-listings-holder container">
        <div
          v-for="job in jobsFiltered"
          :key="job.id"
          class="job-listing-item__holder"
        >
          <JobListingCard :job="job" @tab-selected="handleTabSelected">
            <ChipTag
              v-for="(tag, i) in collectTagProperties(job)"
              :key="`${job.id}_${i}`"
              :tag="tag"
              :is-selected="alreadySelected(tag)"
              @click="handleTabSelected(tag)"
            />
          </JobListingCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import dataJobListings from "@/data/data.json";
import { defineComponent } from "vue";
import ChipTag from "@/components/chips/ChipTag.vue";
import JobListingFilterBar from "@/components/job-listing/JobListingFilterBar.vue";
import JobListingCard from "@/components/job-listing/JobListingCard.vue";
import { JobListing, JobTag } from "@/types/index";

interface TabMap {
  language: string[];
  tool: string[];
  role: string[];
  level: string[];
}

export default defineComponent({
  components: {
    ChipTag,
    JobListingCard,
    JobListingFilterBar,
  },
  data(): { jobs: JobListing[]; JobTags: JobTag[] } {
    return {
      jobs: [],
      JobTags: [],
    };
  },
  computed: {
    tabsMap(): TabMap {
      const valueMap: TabMap = {
        language: [],
        tool: [],
        role: [],
        level: [],
      };
      this.JobTags.forEach((tag: JobTag) => {
        let key = Object.keys(tag)[0] as keyof TabMap;

        const value = tag[key];
        valueMap[key].push(value || "");
      });
      return valueMap;
    },
    jobsFiltered(): JobListing[] {
      if (
        !this.tabsMap.language.length &&
        !this.tabsMap.tool.length &&
        !this.tabsMap.role.length &&
        !this.tabsMap.level.length
      )
        return this.jobs;

      return this.jobs.filter((job) => {
        let hasRole = true;
        this.tabsMap.role.forEach(() => {
          if (hasRole && !this.tabsMap.role.includes(job.role)) {
            hasRole = false;
            return;
          }
        });

        let hasLevel = true;
        this.tabsMap.level.forEach(() => {
          if (hasLevel && !this.tabsMap.level.includes(job.level)) {
            hasLevel = false;
            return;
          }
        });

        let hasAllRequiredLanguages = true;
        this.tabsMap.language.forEach((lang) => {
          if (hasAllRequiredLanguages && !job.languages.includes(lang)) {
            hasAllRequiredLanguages = false;
            return;
          }
        });

        let hasAllRequiredTools = true;
        this.tabsMap.tool.forEach((tool) => {
          if (hasAllRequiredTools && !job.tools.includes(tool)) {
            hasAllRequiredTools = false;
            return;
          }
        });

        return (
          hasAllRequiredLanguages && hasAllRequiredTools && hasRole && hasLevel
        );
      });
    },
  },
  mounted() {
    this.jobs = dataJobListings;
  },
  methods: {
    collectTagProperties(job: JobListing): JobTag[] {
      const tabs: JobTag[] = [];

      const languages = job.languages;
      const tools = job.tools;
      const level = job.level;
      const role = job.role;

      tabs.push({ role });
      tabs.push({ level });

      languages.forEach((val) => {
        const tabItem: JobTag = {
          language: val,
        };
        tabs.push(tabItem);
      });

      tools.forEach((val) => {
        const tabItem: JobTag = {
          tool: val,
        };
        tabs.push(tabItem);
      });

      return tabs;
    },
    handleTabSelected(tag: JobTag) {
      this.JobTags = [...this.JobTags, tag];
    },
    alreadySelected(tag: JobTag): boolean {
      let key = Object.keys(tag)[0] as keyof JobTag;
      return this.JobTags.some((val) => tag[key] == val[key]);
    },
  },
});
</script>

<style scoped>
.impact-job-listings-view {
  &.filter-bar--displayed {
    .job-listings-holder {
      margin-top: 0;
    }
  }
}

.header-spacer {
  height: 10rem;
  background-image: url("@/assets/images/bg-header-desktop.svg");
  background-size: cover;
  background-color: var(--primary);
}
.job-listings-holder {
  margin-top: 56px;
}

.filter-bar-holder {
  margin-top: -32px;
}
</style>
