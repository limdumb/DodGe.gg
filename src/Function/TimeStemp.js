export const month_Day = (timeCode) => {
  const time = new Date(timeCode);

  let month = ("0" + (time.getMonth() + 1)).slice(-2);
  let day = ("0" + time.getDate()).slice(-2);

  return `${month}월${day}일`;
};

export const minute_Second = (timeCode) => {
  const time = new Date(timeCode * 1000);

  let minutes = ("0" + time.getMinutes()).slice(-2);
  let secounds = ("0" + time.getSeconds()).slice(-2);

  return `${minutes}분 ${secounds}초`;
};
