const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const monthNames = [
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

export function isoToString(isoDate: string) {
  const date = new Date(isoDate);
  const day = date.getDay();
  const month = date.getMonth();
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();

  const ordinalSuffix = getOrdinalSuffix(dayOfMonth);

  return `${dayNames[day]}, ${monthNames[month]} ${dayOfMonth}${ordinalSuffix} ${year}`;
}

function getOrdinalSuffix(dayOfMonth: number) {
  if (dayOfMonth >= 1 && dayOfMonth <= 3) {
    return 'st';
  } else if (dayOfMonth >= 4 && dayOfMonth <= 20) {
    return 'th';
  } else if (dayOfMonth % 10 === 1) {
    return 'st';
  } else if (dayOfMonth % 10 === 2) {
    return 'nd';
  } else if (dayOfMonth % 10 === 3) {
    return 'rd';
  } else {
    return 'th';
  }
}

export function getCurrentYear() {
  return new Date().getFullYear();
}
