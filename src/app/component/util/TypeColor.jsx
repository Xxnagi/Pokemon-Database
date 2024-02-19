export const typeColor = (type) => {
  switch (type) {
    case "normal":
      return "blue-gray";

    case "grass":
      return "light-green";

    case "poison":
      return "deep-purple";

    case "fire":
      return "red";

    case "flying":
      return "purple";

    case "water":
      return "blue";

    case "bug":
      return "lime";

    case "electric":
      return "yellow";

    case "ground":
      return "brown";

    case "fairy":
      return "pink";

    case "fighting":
      return "teal";

    case "psychic":
      return "orange";

    case "steel":
      return "gray";

    case "ice":
      return "cyan";

    case "ghost":
      return "indigo";

    case "dragon":
      return "deep-purple";

    case "rock":
      return "deep-orange";

    case "dark":
      return "";
    default:
      return "blue";
  }
};

export const statColor = (color) => {
  switch (color) {
    case "hp":
      return "green";

    case "attack":
      return "red";

    case "defense":
      return "indigo";

    case "special-attack":
      return "purple";

    case "special-defense":
      return "deep-purple";

    case "speed":
      return "yellow";
    default:
      return "";
  }
};
