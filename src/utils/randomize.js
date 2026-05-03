//src\utils\randomize.js

// Using HTML/CSS rules, we determine arrow by number, top is 1, then clockwise, right 2, bottom 3, left 4.

const offensiveStratagems_orbital = [
  {
    id: 1,
    name: "Orbital Precision Strike",
    inputCode: [2, 2, 1]
  },
  {
    id: 2,
    name: "Orbital Gatling Barrage",
    inputCode: [2, 3, 4, 1, 1]
  },
  {
    id: 3,
    name: "Orbital Airburst Strike",
    inputCode: [2, 2, 2]
  },
  {
    id: 4,
    name: "Orbital Napalm Barrage",
    inputCode: [2, 2, 3, 4, 2, 1]
  },
  {
    id: 5,
    name: "Orbital 120MM HE Barrage",
    inputCode: [2, 3, 3, 4, 2, 3]
  },
  {
    id: 6,
    name: "Orbital Walking Barrage",
    inputCode: [2, 3, 2, 3, 2, 3]
  },
  {
    id: 7,
    name: "Orbital 380MM HE Barrage",
    inputCode: [2, 3, 1, 1, 4, 3, 3]
  },
  {
    id: 8,
    name: "Orbital Railcannon Strike",
    inputCode: [2, 1, 3, 3, 2]
  },
  {
    id: 9,
    name: "Orbital Laser",
    inputCode: [2, 3, 1, 2, 3]
  },
  {
    id: 10,
    name: "Orbital EMS Strike",
    inputCode: [2, 2, 4, 3]
  },
  {
    id: 11,
    name: "Orbital Gas Strike",
    inputCode: [2, 2, 3, 2]
  },
  {
    id: 12,
    name: "Orbital Smoke Strike",
    inputCode: [2, 2, 3, 1]
  }
];

export function selectStratagem(){
    let randomInt = Math.floor(Math.random() * offensiveStratagems_orbital.length);
    return offensiveStratagems_orbital[randomInt];
}