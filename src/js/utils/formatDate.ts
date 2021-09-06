export default (time: string) => {
  const date: Date = new Date(time);
  const currentDay: number = date.getDate();
  const currentMonth: number = date.getMonth() + 1;
  const currentYear: number = date.getFullYear() % 100;

  let resultDay: string = '';
  let resultMonth: string = '';
  let resultYear: string = '';

  if (currentDay < 10) {
    resultDay = `0${currentDay}`;
  }

  if (currentMonth < 10) {
    resultMonth = `0${currentMonth}`;
  }

  if (currentYear < 10) {
    resultYear = `0${currentYear}`;
  }

  return `${resultDay || currentDay}.${resultMonth || currentMonth}.${resultYear || currentYear}`;
};