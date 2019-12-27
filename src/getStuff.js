const TYPES = {
  DOLL: "doll",
  CAR: "car",
  BOX: "box",
  WRAPPING_PAPER: "wrapping paper"
};
module.exports = {
  TYPES,
  getStuff: function(count = 100) {
    return [...new Array(count)].map(() => {
      let thing;
      const rand = Math.random();

      if (rand < 0.25) {
        thing = { type: TYPES.DOLL };
      } else if (rand < 0.5) {
        thing = { type: TYPES.CAR };
      } else if (rand < 0.75) {
        thing = { type: TYPES.BOX };
      } else {
        thing = { type: TYPES.WRAPPING_PAPER };
      }
      return thing;
    });
  }
};
