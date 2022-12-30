import {Card} from "../components/Card/cardModel.js";
import {None} from "../components/Area/None/None.js";
let marshRabbit = new Card(
    "Marsh Rabbit",
    "Creature",
    ["Rabbit", "Rogue"],
    3,
    1,
    "",
    "Alpha",
    "",
    ["C", "C", "B"],
    null,
    null
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
    ['R', 'G', 'G', 'C', 'C', 'C  '],
    null,
    null
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
    ['C','C','G', 'R'],
    null,
    null
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
    ['C','C','B', 'B', 'B'],
    null,
    null
  );

export{bolt, grizzlyBear, pitlord, marshRabbit}
  