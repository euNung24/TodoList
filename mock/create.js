const createData = [
  {
    todo: "놀기",
    date: 20210910,
    isComplete: false,
  },
  {
    todo: "빨래하기",
    date: 20210910,
    isComplete: false,
  },
  {
    todo: "청소하기",
    date: 20210901,
    isComplete: false,
  },
  {
    todo: "잠자기",
    date: 20210901,
    isComplete: true,
  },
  {
    todo: "놀기",
    date: 20210904,
    isComplete: false,
  },
  {
    todo: "빨래하기",
    date: 20210904,
    isComplete: false,
  },
  {
    todo: "청소하기",
    date: 20210901,
    isComplete: false,
  },
  {
    todo: "잠자기",
    date: 20210901,
    isComplete: true,
  },
];

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const date = new Date().getDate();

const today = `${year}${month}${date}-`;

module.exports = function () {
  return {
    todolists: createData.map((item, i) => ({
      ["id"]: today + i,
      ...item,
    })),
  };
};
