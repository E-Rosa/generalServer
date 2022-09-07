import {Card} from "../components/Card/cardModel.js";
let marshRabbit = new Card(
    "Marsh Rabbit",
    "Creature",
    ["Rabbit", "Rogue"],
    3,
    1,
    "",
    "Alpha",
    "",
    ["C", "C", "B"]
  );
  
let bolt = new Card(
    "Bolt",
    "Instant",
    ['', ''],
    0,
    0,
    '',
    'Alpha',
    '',
    ['R', 'G', 'G', 'C', 'C', 'C  ']
  );
  
  let grizzlyBear = new Card(
    "Grizzly Bear",
    "Creature",
    ['Bear', 'Grey'],
    2,
    2,
    '',
    'Alpha',
    '',
    ['C','C','G', 'R']
  );
  let pitlord = new Card(
    "Pitlord",
    "Creature",
    ['Demon', ''],
    6,
    6,
    '',
    'Alpha',
    '',
    ['C','C','B', 'B', 'B']
  );

export{bolt, grizzlyBear, pitlord, marshRabbit}
  