<template>
<v-toolbar dense>
LMAO
</v-toolbar>

  <v-carousel v-model="model">
    <v-carousel-item
        v-for="(color, i) in colors"
        :key="color"
    >
      <v-sheet
          :color="color"
          height="100%"
          tile
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            Slide {{ i + 1 }}
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

  <v-btn>To app</v-btn>

</template>

<script>
import { defineComponent } from 'vue';

// Components

export default defineComponent({
  name: 'HomeView',
  data: () => ({
    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ]
  })
});
</script>
