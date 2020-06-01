// const hero = new Vue({
//   el: "#hero",
//   data: {
//     response: "success",
//     // results-for: "id",
//     heroes: [],
//     searchItem: "";
//   },

//   mounted: function () {
//     fetch("https://www.superheroapi.com/api.php/10156900756796046/search", {
//       method: "get",
//     })
//       .then((response) => {
//         return response.json();
//       })
//       // .then((response) => {
//       //   this.results = response;
//       // });
//       .then((response) => {
//         this.heroes = heroes[2].apperance;
//         console.log(response);
//       });
//   },
// });

// const demo = new Vue({
//   el: "#demo",
//   data: {
//     parentMsg: "Hello",
//     items: [{ childMsg: "Foo" }, { childMsg: "Bar" }],
//   },
// });

// ---------------------

// const hero = new Vue({
//   el: "#hero",
//   data: {
//     response: "success",
//     // results-for: "id",
//     heroes: [],
//     searchItem: " ",
//   },

//   mounted: function () {
//     fetch("https://www.superheroapi.com/api.php/10156900756796046/", {
//       method: "get",
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .then((heroes) => {
//         this.hero = heroes;
//         // ändrade till hero
//       });

//     // .then((response) => {
//     //   this.heroes = heroes[2].apperance;
//     //   console.log(response);
//     // });
//   },
// });

// ------------

const hero = new Vue({
  el: "#hero",
  data: function () {
    return {
      query: "",
      results: [],
    };
  },

  mounted: function () {
    // fetch(
    //   `https://www.superheroapi.com/api.php/10156900756796046/search/batman`
    // )
    fetch(
      `https://www.superheroapi.com/api.php/10156900756796046/search/${this.query}`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.results = response;
      });
    //     .then((response) => {
    //       this.results = results[2].apperance;
    //       console.log(response);
    //     });
  },

  // methods: {
  //   getSuperhero() {
  //     fetch(`https://superheroapi.com/api/10156900756796046/search/${query}`)
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then(this.setResults);

  //     console.log(this.query);
  //   },
  //   setResults(results) {
  //     this.results = results;
  //   },
  // },
});
