const copyObject = <T>(object: T): T => {
  try {
    return <T>JSON.parse(JSON.stringify(object));
  } catch (e) {
    console.error(e);
    return object;
  }
};

export default copyObject;
