export function compareAscending(objectProperty) {
  objectProperty = objectProperty.toLowerCase();
  return (object1, object2) => {
    return (!isNaN(parseInt(object1[objectProperty]))
      ? parseInt(object1[objectProperty])
      : object1[objectProperty]) <
      (!isNaN(parseInt(object2[objectProperty]))
        ? parseInt(object2[objectProperty])
        : object2[objectProperty])
      ? -1
      : (!isNaN(parseInt(object1[objectProperty]))
          ? parseInt(object1[objectProperty])
          : object1[objectProperty]) >
        (!isNaN(parseInt(object2[objectProperty]))
          ? parseInt(object2[objectProperty])
          : object2[objectProperty])
      ? 1
      : 0;
  };
}

export function compareDescending(objectProperty) {
  objectProperty = objectProperty.toLowerCase();
  return (object1, object2) => {
    return (!isNaN(parseInt(object1[objectProperty]))
      ? parseInt(object1[objectProperty])
      : object1[objectProperty]) >
      (!isNaN(parseInt(object2[objectProperty]))
        ? parseInt(object2[objectProperty])
        : object2[objectProperty])
      ? -1
      : (!isNaN(parseInt(object1[objectProperty]))
          ? parseInt(object1[objectProperty])
          : object1[objectProperty]) <
        (!isNaN(parseInt(object2[objectProperty]))
          ? parseInt(object2[objectProperty])
          : object2[objectProperty])
      ? 1
      : 0;
  };
}
