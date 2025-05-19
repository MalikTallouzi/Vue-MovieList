<template>
  <form @submit.prevent="submitMovie">
    <div class="form-group">
      <label for="title">Titel:</label>
      <input v-model="title" class="form-control" placeholder="Titel här..." />
    </div>

    <div class="form-group">
      <label for="grade">Betyg:</label>
      <select v-model="grade" class="form-control">
        <option disabled value="">Välj betyg här...</option>
        <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
      </select>
    </div>

    <button class="btn btn-success mt-2">Spara film</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useMovies } from '@/stores/Movies'

const title = ref('')
const grade = ref('')
const store = useMovies()

const submitMovie = () => {
  if (!title.value || !grade.value) {
    alert('Fyll i både titel och betyg')
    return
  }

  store.addMovie({ title: title.value, grade: parseInt(grade.value) })
  title.value = ''
  grade.value = ''
}
</script>
