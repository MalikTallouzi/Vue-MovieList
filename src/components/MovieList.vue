<template>
  <div>
    <h2>Mina filmer</h2>
    <ul id="movie-list">
      <li v-for="movie in store.movies" :key="movie.title">
        {{ movie.title }}
        <span v-html="getStars(movie.grade)"></span>
        <img
          src="../assets/delete.png"
          alt="Delete"
          class="delete-movie"
          @click="store.deleteMovie(movie.title)"
        />
      </li>
    </ul>

    <button class="btn btn-primary" @click="store.sortByTitle">Alfabetisk ordning</button>
    <button class="btn btn-primary" @click="store.sortByGrade">Betygsordning</button>
  </div>
</template>

<script setup>
import { useMovies } from '@/stores/Movies'

const store = useMovies()

const getStars = (rating) => {
  return '<img src="src/assets/star.png" alt="Star" class="star">'.repeat(rating)
}
</script>

<style scoped>
#movie-list {
  margin: 0 0 20px 0;
  padding: 0;
}

#movie-list > li {
  list-style: none;
  background-color: #eee;
  margin: 5px;
  padding: 20px;
  box-shadow: 0 0 5px #999;
}

#movie-list > li > img {
  float: right;
  height: 25px;
  margin-left: 5px;
  cursor: pointer;
}

.btn-primary {
  margin: 5px;
}
.star {
  width: 4px;
  height: 4px;
}
</style>
