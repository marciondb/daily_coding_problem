const raw_pilots = `[
  {
    "id": 10,
    "name": "Poe Dameron",
    "years": 14
  },
  {
    "id": 2,
    "name": "Temmin 'Snap' Wexley",
    "years": 30
  },
  {
    "id": 41,
    "name": "Tallissan Lintra",
    "years": 16
  },
  {
    "id": 99,
    "name": "Ello Asty",
    "years": 22
  }
]`;
pilots = JSON.parse(raw_pilots)
// const years = pilots.reduce( (acc, pilot) => acc + pilot.years, 0)

// console.log(years)

// var mostExpPilot = pilots.reduce(function (oldest, pilot) {
//   return (oldest.years || 0) > pilot.years ? oldest : pilot;
// }, {});
// const mostExpPilot = pilots.reduce((oldest, pilot) => {return (oldest.years || 0) > pilot.years ? oldest : pilot;}, {})
// const mostExpPilot = pilots.reduce((oldest, pilot) => (oldest.years || 0) > pilot.years ? oldest : pilot, {})
// console.log(mostExpPilot)

// const biggerYearsOf20 = pilots.filter((pilot, index, array) => {console.log(array);return pilot.years >= 20})

const biggerYearsOf20 = pilots.filter(pilot => pilot.years >= 20).reduce( (acc, item) => acc + item.years, 0)

console.log(biggerYearsOf20)

// remember, you can pass only a function:
// const results = data.map(formatElement);
// formatElement is a function that receive each element from data; and do not need do use => or function {return}
