let score: string | number = 33;

score = 44;
score = "55";

type User_ = {
  name: string;
  id: number;
};
type Admin_ = {
  username: string;
  id: number;
};

let beau: User_ | Admin_ = { name: "beau", id: 42 };

beau = { username: "beauTheGoat", id: 42 };

const getDbId = (id: number | string) => {
  if (typeof id === "string") id.toLowerCase();
  else id + 2;
};

// unions in arrays 
const data:(string | number)[] = [1, 2, 3, "4"];
