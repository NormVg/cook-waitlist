<script setup>
const props = defineProps({
  icon: {
    default: "📦",
    type: String,
  },
  head: {
    default: "Code Snippet",
    type: String,
  },
  sub: {
    default:
      "Store, reuse, and share code snippets both locally and publicly. Speed up your coding with ready-made solutions.",
    type: String,
  },
});
</script>

<template>
  <div id="card-feature">
    <div id="feature-icon">
      {{ props.icon }}
    </div>

    <div id="feature-head">
      {{ props.head }}
    </div>

    <div id="feature-sub">
      {{ props.sub }}
    </div>
  </div>
</template>

<style scoped>
#card-feature {
  border: 5px solid var(--white);
  width: 250px;
  aspect-ratio: 300/380;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
}

#feature-icon {
  font-size: 38.2px;
  margin-top: 15px;
}

#feature-head {
  font-size: 23.61px;
  color: var(--pink);
}

#feature-sub {
  width: 90%;
  font-size: 15px;
  margin-bottom: 15px;
}

</style>
