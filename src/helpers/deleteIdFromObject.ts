import copyObject from './copyObject';

import { IOptionalId } from 'types';

const deleteIdFromObject = <T>(object: T): T => {
  try {
    const objectCopy = copyObject<T>(object);

    delete (<IOptionalId>objectCopy).id;

    return objectCopy;
  } catch (e) {
    console.error(e);
    return object;
  }
};

export default deleteIdFromObject;
