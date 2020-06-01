const App = new Vue({
  el: "#hero ",
  data: {
    name: "",
    superhero: [],
    modal: false,
  },

  methods: {
    getSuperhero() {
      fetch(
        `https://www.superheroapi.com/api.php/10156900756796046/search/${this.name}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.superhero = data;
        });
    },
    getMoreInfo() {
      fetch(
        `https://www.superheroapi.com/api.php/10156900756796046/search/${this.name}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.superhero = data;
        });
    },
  },
});
