<template>
  {{counter.week[0]}}
  <v-card
      class="mx-auto"
      max-width="90%"
  >
    <v-list
        v-for="day in counter.week"
        :key="day"
    >
      <v-list-item>
        <v-list-item-title>{{day.dayName}}</v-list-item-title>
        <v-list-item-subtitle>{{day.description}}</v-list-item-subtitle>
        <v-card
        v-for="excercise in day.excercises"
        v-if="day.description !='Rest day'"
        >
          {{excercise}}
          <v-card-title>{{excercise.name}}</v-card-title>
          {{excercise.sets[0]}}
          {{excercise.reps}}
          {{excercise.weight}}
          <v-card-actions>

            <v-btn>BTN</v-btn>
          </v-card-actions>
        </v-card>

        <v-divider></v-divider>
      </v-list-item>
    </v-list>
  </v-card>
</template>


<script setup>
import {useWorkoutPlanStore} from "@/store/WorkoutPlanStore";

const counter = useWorkoutPlanStore();

</script>
<script>
export default {
  name: "RepetitionsView",
  data: () => ({
    items: [
      {
        name: 'Item #1',
        id: 1,
      },
      {
        name: 'Item #2',
        id: 2,
      },
      {
        name: 'Item #3',
        id: 3,
      },
    ],
  })
}
</script>

<style scoped>

</style>