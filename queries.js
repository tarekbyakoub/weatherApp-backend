const { user, favourite, check, suggestion } = require("./models");

async function getUserWithRelations(id) {
  const userById = await user.findByPk(id, {
    raw: true,
    include: {
      model: favourite,
      attributes: ["resolvedAdress", "displayName", "userId"],
    },
  });
  console.log("user", userById);
  return;
}

async function getSuggestionWithRelations(id) {
  const suggestionById = await suggestion.findByPk(id, {
    raw: true,
    include: {
      model: check,
      attributes: ["checkProperty", "checkType", "checkValue", "suggestionId"],
    },
  });
  console.log("suggestion", suggestionById);
  return;
}

console.log(getUserWithRelations(1));
console.log(getSuggestionWithRelations(1));
