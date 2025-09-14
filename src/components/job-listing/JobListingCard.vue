<template>
  <div
    class="impact-job-listing-card align-items-stretch mx-1 mx-lg-4"
    :class="{ 'impact-job-listing-card--featured': job.featured }"
  >
    <div class="row w-100 mx-0">
      <!-- Left -->
      <div class="col-12 col-md-7">
        <div class="card-content card-content--left d-flex gap-1">
          <div class="logo__holder">
            <div class="logo my-auto">
              <img
                class="logo-image"
                :src="job.logo"
                :alt="`${job.company} logo`"
              />
            </div>
          </div>

          <div class="meta d-flex flex-column justify-content-between">
            <div class="meta-top d-flex align-items-center mb-1">
              <span class="subheader mt-1">{{ job.company }}</span>
              <div class="d-flex align-items-center mx-3 gap-1">
                <div
                  v-if="job.new"
                  class="impact-chip impact-chip--alt impact-chip--new"
                >
                  <span>New!</span>
                </div>
                <div v-if="job.featured" class="impact-chip impact-chip--alt">
                  <span>Featured</span>
                </div>
              </div>
            </div>
            <a
              href="http://impact.com"
              target="_blank"
              class="meta-mid title mb-1"
              >{{ job.position }}</a
            >
            <div class="meta-bottom mb-1 d-flex gap-2">
              <span>{{ job.postedAt }}</span>
              <span>•</span>
              <span>{{ job.contract }}</span>
              <span>•</span>
              <span>{{ job.location }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right -->
      <div class="col-12 col-md-5 align-items-center d-flex">
        <div
          class="card-content card-content--right d-flex flex-wrap justify-content-md-end align-items-center gap-2 w-100"
        >
          <slot name="default" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { JobListing } from "@/types/index";

export default defineComponent({
  props: {
    job: {
      type: Object as () => JobListing,
      required: true,
    },
  },
  methods: {
    fetchImage(url: string) {
      return `@/assets${url}`;
    },
  },
});
</script>

<style scoped lang="scss">
$breakpoint-mobile: 375px;
$breakpoint-desktop: 1440px;

$grid-breakpoints: (
  xs: $breakpoint-mobile,
  sm: 540px,
  md: 768px,
  lg: 992px,
  xl: $breakpoint-desktop,
  xxl: $breakpoint-desktop,
);

.impact-job-listing-card {
  max-width: $breakpoint-desktop;
  min-width: $breakpoint-mobile;
  background-color: var(--white);
  border-radius: 1rem;
  display: flex;
  margin-bottom: 2rem;
  transition: box-shadow 0.2s ease-in-out;
  box-shadow: 0 0 2rem 0 hsla(180, 8%, 52%, 0.1);

  &::before {
    content: "";
    top: 0;
    left: 0;
    width: 0.35rem;
    margin-right: -0.35rem;
    min-height: 100%;
    display: block;
    border-radius: 1rem 0 0 1rem;
    background-color: var(--primary);
    position: relative;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover {
    box-shadow: 0 0 3.5rem 0 hsla(180, 24%, 15%, 0.1);

    &::before {
      opacity: 1;
    }

    .title {
      color: var(--primary);
    }
  }

  &.impact-job-listing-card--featured {
    &::before {
      opacity: 1;
    }
  }
}

.card-content {
  margin: 1.5rem;
}

.card-content--left {
  padding-left: 0.25rem;
}

.logo__holder {
  display: flex;
  align-items: center;
}

.logo img {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  margin-right: 1rem;
}

.impact-chip.impact-chip--new {
  background-color: var(--primary);
}

@media screen and (max-width: map-get($grid-breakpoints, md)) {
  .logo img {
    width: 3rem;
    height: 3rem;
  }

  .card-content {
    margin: 1.5rem;
  }
  .card-content--right {
    margin-top: 0;
  }
}

@media screen and (max-width: map-get($grid-breakpoints, sm)) {
  .card-content {
    margin: 0.75rem;
  }
  .card-content--left {
    margin-top: 2rem;
    padding-bottom: 1rem;
    border-bottom: #ccc 1px solid;
  }

  .card-content--right {
    margin-bottom: 1.5rem;
  }
  .logo__holder {
    width: 3rem;
    height: 3rem;
    width: 0;
    margin-top: -3.5rem;
  }

  .logo img {
    width: 3rem;
    height: 3rem;
  }
}
</style>
