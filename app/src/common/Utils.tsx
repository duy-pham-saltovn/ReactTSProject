import CONFIG from '../configs/config'
import AsyncStorage from '@react-native-async-storage/async-storage'

/**
 * Convert object to query string: page=1&limit=20
 * 
 * @param params 
 * @param glue 
 * @param delimiter 
 * 
 * @return string
 */
export const objectToQueryString = (params: object | any, glue: string = ':', delimiter: string = ';') => {
  return Object.keys(JSON.parse(JSON.stringify(params))).map(key => key + `${glue}` + params[key]).join(delimiter);
};

/**
 * Check key in object not empty value
 * 
 * @param params 
 * @param glue 
 * @param delimiter 
 * 
 * @return boolean
 */
export const isEmptyKeyInObject = (params: object) => {
  if (Object.keys(JSON.parse(JSON.stringify(params))).length) {
    return true;
  }

  return false;
};

/**
 * 
 * @param value 
 * 
 * @return boolean
 */
export const showError = (clientError: any, errorInfo: any, key: string) => {
  if (clientError[key] && !isEmpty(clientError[key])) {
    return clientError[key];
  }

  if (errorInfo.errors[key] && Array.isArray(errorInfo.errors[key])) {
    return errorInfo.errors[key][0];
  }

  return '';
}

/**
 * 
 * @param value 
 * 
 * @return boolean
 */
export const isEmpty = (value: any) => {
  return (value === 'undefined' || value === null || value === '');
}

export function sleep(ms: number) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

/**
 * 
 * @param value 
 */
export function isEmptyObject(value: any) {
  return Object.keys(value).length === 0;
}

/**
 * Make Image URL
 * @param url string
 * @returns string
 */
export function makeImageURL(url: string) {
  return `${CONFIG.IMAGE_URL}/${url}`;
}

/**
 * console.log high light
 * @param name 
 * @param val 
 * @param color 
 * @param fontSize 
 */
export function logHightLevel(name: string, val?: string | null, color: string = 'red', fontSize: string = '15') {
  console.log(`%c ${name}`, `color: ${color}; font-size: ${fontSize}px`, val)
}

export async function setAsyncStorage(key: string, val: any) {
  try {
    await AsyncStorage.setItem(key, val)
  } catch (e) {
    console.log(e)
  }
}

export async function removeAsyncStorage(key: string) {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    console.log(e)
  }
}

export async function getAsyncStorage(key: string) {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
}