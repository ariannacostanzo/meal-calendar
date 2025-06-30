export const days: string[] = [
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
  "Sabato",
  "Domenica",
];

export const meals: string[] = [
  "Colazione",
  "Spuntino",
  "Pranzo",
  "Spuntino",
  "Cena",
];

export type Day = {
  day: string;
  meals: Meal[];
  index: number;
};

export type Meal = {
  type: "COLAZIONE" | "SPUNTINO M" | "PRANZO" | "SPUNTINO P" | "CENA";
  ingredients: string;
  id: string;
};

export const myMeals: Day[] = [
  {
    day: "Lunedì",
    index: 0,
    meals: [
      {
        type: "COLAZIONE",
        ingredients: "latte lunedì",
        id: "colazione lunedì",
      },
      {
        type: "SPUNTINO M",
        ingredients: "spuntino m",
        id: "spuntino m lunedì",
      },
      {
        type: "PRANZO",
        ingredients: "pranzo",
        id: "pranzo lunedì",
      },
      {
        type: "SPUNTINO P",
        ingredients: "spuntino p",
        id: "spuntino p lunedì",
      },
      {
        type: "CENA",
        ingredients: "cena",
        id: "cena lunedì",
      },
    ],
  },
  {
    day: "Martedì",
    index: 1,
    meals: [
      {
        type: "COLAZIONE",
        ingredients: "latte martedì",
        id: "colazione martedì",
      },
      {
        type: "SPUNTINO M",
        ingredients: "spuntino m",
        id: "spuntino m martedì",
      },
      { type: "PRANZO", ingredients: "pranzo", id: "pranzo martedì" },
      {
        type: "SPUNTINO P",
        ingredients: "spuntino p",
        id: "spuntino p martedì",
      },
      { type: "CENA", ingredients: "cena", id: "cena martedì" },
    ],
  },
  {
    day: "Mercoledì",
    index: 2,
    meals: [
      {
        type: "COLAZIONE",
        ingredients: "latte mercoledì",
        id: "colazione mercoledì",
      },
      {
        type: "SPUNTINO M",
        ingredients: "spuntino m",
        id: "spuntino m mercoledì",
      },
      { type: "PRANZO", ingredients: "pranzo", id: "pranzo mercoledì" },
      {
        type: "SPUNTINO P",
        ingredients: "spuntino p",
        id: "spuntino p mercoledì",
      },
      { type: "CENA", ingredients: "cena", id: "cena mercoledì" },
    ],
  },
  {
    day: "Giovedì",
    index: 3,
    meals: [
      {
        type: "COLAZIONE",
        ingredients: "latte giovedì",
        id: "colazione giovedì",
      },
      {
        type: "SPUNTINO M",
        ingredients: "spuntino m",
        id: "spuntino m giovedì",
      },
      { type: "PRANZO", ingredients: "pranzo", id: "pranzo giovedì" },
      {
        type: "SPUNTINO P",
        ingredients: "spuntino p",
        id: "spuntino p giovedì",
      },
      { type: "CENA", ingredients: "cena", id: "cena giovedì" },
    ],
  },
  {
    day: "Venerdì",
    index: 4,
    meals: [
      {
        type: "COLAZIONE",
        ingredients: "latte venerdì",
        id: "colazione venerdì",
      },
      {
        type: "SPUNTINO M",
        ingredients: "spuntino m",
        id: "spuntino m venerdì",
      },
      { type: "PRANZO", ingredients: "pranzo", id: "pranzo venerdì" },
      {
        type: "SPUNTINO P",
        ingredients: "spuntino p",
        id: "spuntino p venerdì",
      },
      { type: "CENA", ingredients: "cena", id: "cena venerdì" },
    ],
  },
  {
    day: "Sabato",
    index: 5,
    meals: [
      {
        type: "COLAZIONE",
        ingredients: "latte sabato",
        id: "colazione sabato",
      },
      {
        type: "SPUNTINO M",
        ingredients: "spuntino m",
        id: "spuntino m sabato",
      },
      { type: "PRANZO", ingredients: "pranzo", id: "pranzo sabato" },
      {
        type: "SPUNTINO P",
        ingredients: "spuntino p",
        id: "spuntino p sabato",
      },
      { type: "CENA", ingredients: "cena", id: "cena sabato" },
    ],
  },
  {
    day: "Domenica",
    index: 6,
    meals: [
      {
        type: "COLAZIONE",
        ingredients: "latte domenica 50gr, altre cose gr",
        id: "colazione domenica",
      },
      {
        type: "SPUNTINO M",
        ingredients: "spuntino m",
        id: "spuntino m domenica",
      },
      { type: "PRANZO", ingredients: "pranzo", id: "pranzo domenica" },
      {
        type: "SPUNTINO P",
        ingredients: "spuntino p",
        id: "spuntino p domenica",
      },
      { type: "CENA", ingredients: "cena", id: "cena domenica" },
    ],
  },
];

export const emptyMeals: Day[] = [
  {
    day: "Lunedì",
    index: 0,
    meals: [
      {
        type: "COLAZIONE",
        ingredients: "",
        id: "colazione lunedì",
      },
      {
        type: "SPUNTINO M",
        ingredients: "",
        id: "spuntino m lunedì",
      },
      {
        type: "PRANZO",
        ingredients: "",
        id: "pranzo lunedì",
      },
      {
        type: "SPUNTINO P",
        ingredients: "",
        id: "spuntino p lunedì",
      },
      {
        type: "CENA",
        ingredients: "",
        id: "cena lunedì",
      },
    ],
  },
  {
    day: "Martedì",
    index: 1,
    meals: [
      {
        type: "COLAZIONE",
        ingredients: "",
        id: "colazione martedì",
      },
      {
        type: "SPUNTINO M",
        ingredients: "",
        id: "spuntino m martedì",
      },
      { type: "PRANZO", ingredients: "", id: "pranzo martedì" },
      {
        type: "SPUNTINO P",
        ingredients: "",
        id: "spuntino p martedì",
      },
      { type: "CENA", ingredients: "", id: "cena martedì" },
    ],
  },
  {
    day: "Mercoledì",
    index: 2,
    meals: [
      {
        type: "COLAZIONE",
        ingredients: "latte mercoledì",
        id: "colazione mercoledì",
      },
      {
        type: "SPUNTINO M",
        ingredients: "spuntino m",
        id: "spuntino m mercoledì",
      },
      { type: "PRANZO", ingredients: "", id: "pranzo mercoledì" },
      {
        type: "SPUNTINO P",
        ingredients: "spuntino p",
        id: "spuntino p mercoledì",
      },
      { type: "CENA", ingredients: "", id: "cena mercoledì" },
    ],
  },
  {
    day: "Giovedì",
    index: 3,
    meals: [
      {
        type: "COLAZIONE",
        ingredients: "",
        id: "colazione giovedì",
      },
      {
        type: "SPUNTINO M",
        ingredients: "",
        id: "spuntino m giovedì",
      },
      { type: "PRANZO", ingredients: "", id: "pranzo giovedì" },
      {
        type: "SPUNTINO P",
        ingredients: "",
        id: "spuntino p giovedì",
      },
      { type: "CENA", ingredients: "", id: "cena giovedì" },
    ],
  },
  {
    day: "Venerdì",
    index: 4,
    meals: [
      {
        type: "COLAZIONE",
        ingredients: "",
        id: "colazione venerdì",
      },
      {
        type: "SPUNTINO M",
        ingredients: "",
        id: "spuntino m venerdì",
      },
      { type: "PRANZO", ingredients: "", id: "pranzo venerdì" },
      {
        type: "SPUNTINO P",
        ingredients: "",
        id: "spuntino p venerdì",
      },
      { type: "CENA", ingredients: "", id: "cena venerdì" },
    ],
  },
  {
    day: "Sabato",
    index: 5,
    meals: [
      {
        type: "COLAZIONE",
        ingredients: "",
        id: "colazione sabato",
      },
      {
        type: "SPUNTINO M",
        ingredients: "",
        id: "spuntino m sabato",
      },
      { type: "PRANZO", ingredients: "", id: "pranzo sabato" },
      {
        type: "SPUNTINO P",
        ingredients: "",
        id: "spuntino p sabato",
      },
      { type: "CENA", ingredients: "", id: "cena sabato" },
    ],
  },
  {
    day: "Domenica",
    index: 6,
    meals: [
      {
        type: "COLAZIONE",
        ingredients: "",
        id: "colazione domenica",
      },
      {
        type: "SPUNTINO M",
        ingredients: "",
        id: "spuntino m domenica",
      },
      { type: "PRANZO", ingredients: "", id: "pranzo domenica" },
      {
        type: "SPUNTINO P",
        ingredients: "spuntino p",
        id: "spuntino p domenica",
      },
      { type: "CENA", ingredients: "", id: "cena domenica" },
    ],
  },
];
