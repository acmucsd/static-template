export const parseDate = (datestring: string): {
  month: string,
  date: number,
  hour: number,
  minute: number
} => {
  const date = new Date(datestring);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = months[date.getMonth()];
  const minute = date.getMinutes();
  const hour = date.getHours();
  const dateval = date.getDate() + 1;
  return {
    month,
    hour,
    minute,
    date: dateval
  }
}

export const formatDateToMonthAndDay = (datestring: string): string => {
  const { month, date } = parseDate(datestring);
  return `${month} ${date}`;
}