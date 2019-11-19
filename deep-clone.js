const deepClone = originalObject => {
  const cloneObject = {};
  for (const key of Object.keys(originalObject)) {
    if (typeof originalObject[key] === "object") {
      cloneObject[key] = deepClone(originalObject[key]);
    } else {
      cloneObject[key] = originalObject[key];
    }
  }
  return cloneObject;
};

module.exports = deepClone;
