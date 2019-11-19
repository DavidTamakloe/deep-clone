const deepClone = require("./deep-clone.js");

test("returns a deep clone of an object", () => {
  const innerObject = { town: "Lerum", country: "Sweden" };
  const original = {
    name: "Paddy",
    address: innerObject
  };

  const clone = deepClone(original);
  expect(clone).toEqual(original);

  innerObject.town = "Accra";
  expect(clone).not.toEqual(original);

  expect(original).toEqual({
    name: "Paddy",
    address: { town: "Accra", country: "Sweden" }
  });

  expect(clone).toEqual({
    name: "Paddy",
    address: { town: "Lerum", country: "Sweden" }
  });
});
