import shortid from "shortid";

const questions = [
  {
    id: shortid.generate(),
    questions: "11 + 10 x 10 - 11",
    one: "11",
    two: "22",
    three: "100",
    best: "100",
  },
  {
    id: shortid.generate(),
    questions: "22 + 20 x 20 - 22",
    one: "22",
    two: "400",
    three: "44",
    best: "400",
  },
  {
    id: shortid.generate(),
    questions: "33 + 30 x 30 - 33",
    one: "900",
    two: "44",
    three: "55",
    best: "900",
  },
  {
    id: shortid.generate(),
    questions: "44 + 40 x 40 - 44",
    one: "44",
    two: "55",
    three: "1600",
    best: "1600",
  },
  {
    id: shortid.generate(),
    questions: "55 + 50 x 50 - 55",
    one: "2500",
    two: "66",
    three: "77",
    best: "2500",
  },
];

export default questions;
