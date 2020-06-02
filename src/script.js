const App = new Vue({
  el: "#hero ",
  data: {
    name: "",
    superhero: [],
    modal: false,
    character: [],
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

    getMoreInfo(charachter) {
      fetch(
        `https://www.superheroapi.com/api.php/10156900756796046/${charachter}/biography/`
      )
        .then((response) => response.json())
        .then((data) => {
          this.character = data;
        });
      if (this.modal == false) {
        this.modal = true;
      } else {
        this.modal = false;
      }
    },
    // removeItem(itemId) {
    //   this.items = this.items.filter((obj) => {
    //     return (obj.id = itemId);
    //   });
    // },
  },
});
