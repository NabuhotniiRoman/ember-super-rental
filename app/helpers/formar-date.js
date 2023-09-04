import { helper } from '@ember/component/helper';

export function formatDate(params /*, hash*/) {
  const originalDate = params[0];
  const date = new Date(originalDate);

  const day = date.getDate();
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
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

export default helper(formatDate);
