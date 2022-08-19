<template>
  <v-card
      class="mx-auto"
      max-width="90%"
  >
{{counter}}
      <v-tabs v-model="tab" background-color="primary">
        <v-tab
        v-for="day in counter.week"
        :key="day"
        :value="day.dayName"
        >{{ day.dayName }}</v-tab>
      </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item
            v-for="day in counter.week"
            :key="day"
            :value="day.dayName"
        >
          {{day.dayName}}
          {{day}}
        </v-window-item>
      </v-window>
    </v-card-text>

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


          <v-form v-model="valid">
            <v-container>

              <v-row>
                <v-col cols="12" md="8">
                  <v-label>
                    Doporučená počet sérií: {{excercise.sets}}
                  </v-label>
                </v-col>
                <v-col cols="12" md="4" >
                  <v-text-field
                      v-model="fSets"
                      :rules="nameRules"
                      label="Série"
                      required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" md="8">
                  <v-label>
                    Doporučená počet Opakování: {{excercise.reps}}
                  </v-label>
                </v-col>
                <v-col cols="12" md="4" >
                  <v-text-field
                      v-model="fSets"
                      :rules="nameRules"
                      label="Série"
                      required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" md="8">
                  <v-label>
                    Doporučená váha: {{excercise.weight}}
                  </v-label>
                </v-col>
                <v-col cols="12" md="4" >
                  <v-text-field
                      v-model="fSets"
                      :rules="nameRules"
                      label="Série"
                      required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" md="8" >
                  <v-card-actions>
                    <v-btn>Uložit</v-btn>
                  </v-card-actions>
                </v-col>
                <v-col cols="12" md="4" >
                  <v-card-actions>
                    <v-btn>BTN</v-btn>
                  </v-card-actions>
                </v-col>

              </v-row>
            </v-container>
          </v-form>

          {{excercise.sets}}
          {{excercise.reps}}
          {{excercise.weight}}

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

function f(i) {
  if (i.sets[0] != undefined){
    console.log(i.name)
    console.log(i.sets[0])
  };
}

export default {
  name: "RepetitionsView",
  data: () => ({
    tab: null,
  })
}
</script>

<style scoped>

</style>