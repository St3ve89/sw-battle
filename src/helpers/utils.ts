export const getRandomItemFromArray = (arr: []) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const generateRandomId = () => {
  const firstItem: any = {
    value: '0',
  };

  let counter = '123456789'.split('').reduce((acc: any, curValue: any) => {
    const curObj: any = {};
    curObj.value = curValue;
    curObj.prev = acc;

    return curObj;
  }, firstItem);

  firstItem.prev = counter;

  return function () {
    let now = Date.now();
    if (
      typeof performance === 'object' &&
      typeof performance.now === 'function'
    ) {
      now = parseInt(performance.now().toString().replace('.', ''));
    }
    counter = counter.prev;

    return `${now}${Math.random().toString(16).substr(2)}${counter.value}`;
  };
};
