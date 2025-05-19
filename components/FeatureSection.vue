<script setup>

</script>

<template>
<div id="feature-section">

<div id="feature-head">
  FEATURES
</div>

<div id="feature-box">


  <FeatureCard/>
  <FeatureCard/>
  <FeatureCard/>
  <FeatureCard/>

  <FeatureCard/>
  <FeatureCard/>
  <FeatureCard/>
  <FeatureCard/>

</div>


</div>
</template>

<style scoped>


#feature-head{
  font-size: 30px;
  color: var(--blue);
}

#feature-section{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#feature-box{
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
}
</style>
