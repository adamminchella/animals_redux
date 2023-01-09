export const addAnimal = (animal) => {
  return {
    type: "ADD_ANIMAL",
    payload: animal,
  };
};

export const destroyAnimal = (animal) => {
  return {
    type: "DELETE_ANIMAL",
    payload: animal,
  };
};

export const saveAnimal = (animal) => {
  return {
    type: "SAVE_ANIMAL",
    payload: animal,
  };
};

export const forgetAnimal = (animal) => {
  return {
    type: "FORGET_ANIMAL",
    payload: animal,
  };
};
