import { readFileSync } from 'node:fs';
import _ from 'lodash';

const arrDiff = (data1, data2) => {
  const keysFromObj1 = Object.keys(data1);
  const keysFromObj2 = Object.keys(data2);
  const unionKeys = (_.union(keysFromObj1, keysFromObj2).sort());
  const parts = [];
  // eslint-disable-next-line array-callback-return
  unionKeys.forEach((key) => {
    // ключ есть в обоих объектах
    if (Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
      if (data1[key] === data2[key]) {
        parts.push(`  ${key}: ${data1[key]}`);
      }
      if (data1[key] !== data2[key]) {
        parts.push(`- ${key}: ${data1[key]}`);
        parts.push(`+ ${key}: ${data2[key]}`);
      }
    }
    // ключ есть только в первом объекте
    if (Object.hasOwn(data1, key) && !Object.hasOwn(data2, key)) {
      parts.push(`- ${key}: ${data1[key]}`);
    }
    // ключ есть тольк во втором объекте
    if (!Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
      parts.push(`+ ${key}: ${data2[key]}`);
    }
  });
  return (`{\n${parts.join('\n')}\n}`);
};

export default (filepath1, filepath2) => {
  const data1 = readFileSync(filepath1, 'utf-8');
  const data2 = readFileSync(filepath2, 'utf-8');
  const obj1 = JSON.parse(data1);
  const obj2 = JSON.parse(data2);

  return arrDiff(obj1, obj2);
};
