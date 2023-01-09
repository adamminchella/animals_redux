const initState = {
  all: [],
  savedAnimals: [],
};

const animalsReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ANIMAL":
      const newAnimal = action.payload;
      return {
        ...state,
        all: [...state.all, newAnimal],
      };
    case "UPDATE_ANIMAL":
      const animalToUpdate = state.all.find(
        (animal) =>
          animal.name.toLowerCase() == action.payload.name.toLowerCase()
      );
      const index = state.all.indexOf(animalToUpdate);
      const updatedAnimals = [
        ...state.all.slice(0, index),
        action.payload,
        ...state.all.slice(index + 1),
      ];
      return {
        ...state,
        all: updatedAnimals,
      };
    case "DELETE_ANIMAL":
      const animalToDelete = state.all.find(
        (animal) =>
          animal.name.toLowerCase() == action.payload.name.toLowerCase()
      );
      const indexOfAnimalToDeleteInAll = state.all.indexOf(animalToDelete);
      const allAnimalsWhenDeleted = [
        ...state.all.slice(0, indexOfAnimalToDeleteInAll),
        ...state.all.slice(indexOfAnimalToDeleteInAll + 1),
      ];
      const indexOfAnimalToDeleteInSaved =
        state.savedAnimals.indexOf(animalToDelete);
      const savedAnimalsWhenDeleted = [
        ...state.savedAnimals.slice(0, indexOfAnimalToDeleteInSaved),
        ...state.savedAnimals.slice(indexOfAnimalToDeleteInSaved + 1),
      ];
      return {
        ...state,
        all: allAnimalsWhenDeleted,
        savedAnimals: savedAnimalsWhenDeleted,
      };

    case "SAVE_ANIMAL":
      return {
        ...state,
        savedAnimals: [...state.savedAnimals, action.payload],
      };
    case "FORGET_ANIMAL":
      return {
        ...state,
        savedAnimals: state.savedAnimals.filter(
          (animal) => animal.name != action.payload.name
        ),
      };

    default:
      return state;
  }
};

export default animalsReducer;
