// src/stores/movieStore.js
import { defineStore } from 'pinia'

export const useMovies = defineStore('movies', {
  state: () => ({
    movies: JSON.parse(localStorage.getItem('movies') || '[]'),
  }),
  actions: {
    addMovie(movie) {
      this.movies.push(movie)
      this.saveToLocalStorage()
    },
    deleteMovie(title) {
      this.movies = this.movies.filter((m) => m.title !== title)
      this.saveToLocalStorage()
    },
    sortByTitle() {
      this.movies.sort((a, b) => a.title.localeCompare(b.title))
    },
    sortByGrade() {
      this.movies.sort((a, b) => b.grade - a.grade)
    },
    saveToLocalStorage() {
      localStorage.setItem('movies', JSON.stringify(this.movies))
    },
  },
})
