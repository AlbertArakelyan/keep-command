const getFirebaseError = (message: string, errors: Record<string, string>): string => {
  try {
    const messageSplit = message.split('Error ');

    let errorString = messageSplit[1];

    if (!errorString) {
      return message;
    }

    errorString = errorString.slice(1, errorString.length - 2);

    const error = errors[errorString];

    if (!error) {
      return message;
    }

    return error;
  } catch (e) {
    console.error(e);
    return message;
  }
};

export default getFirebaseError;
