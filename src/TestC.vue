<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed } from "vue";

const { data, fetching } = useQuery({
  query: `
    query GetOutput{
      output
    }
  `
});

</script>

<template>
  <p data-test-id="output">{{ data.output }}</p>
</template>