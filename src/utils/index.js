export const deepCopy = (object) => {
  let result;
  if (Object.prototype.toString.call(object) === "[object Object]") {
    result = {};
  } else if (Object.prototype.toString.call(object) === "[object Array]") {
    result = [];
  } else {
    return "不符合深拷贝的数据类型";
  }
  // 遍历空对象或者是空数组  也就是要拷贝的对象
  for (const key in object) {
    if (typeof object[key] === "object") {
      result[key] = deepCopy(object[key]);
    } else {
      result[key] = object[key];
    }
  }
  return result;
};
