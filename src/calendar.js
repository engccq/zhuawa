const formatter = new Intl.DateTimeFormat('zh-CN-u-ca-chinese', { month: 'long', day: 'numeric' });

export function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

export function monthGrid(year, month) {
  const count = daysInMonth(year, month);
  const firstDay = new Date(year, month - 1, 1).getDay();
  return Array.from({ length: Math.ceil((firstDay + count) / 7) * 7 }, (_, index) => {
    const date = index - firstDay + 1;
    return date < 1 || date > count ? { date: null } : { date, weekday: (firstDay + date - 1) % 7 };
  });
}

export function lunarLabel(date) {
  return formatter.format(date).replace(/^\d+年/, '').replace(/月(?=\d)/, '月');
}

const fixedHolidays = [
  ['01-01', '元旦'], ['02-10', '春节'], ['04-04', '清明节'],
  ['05-01', '劳动节'], ['06-10', '端午节'], ['09-17', '中秋节'], ['10-01', '国庆节']
];

export function holidaysForYear(year) {
  return Object.fromEntries(fixedHolidays.map(([monthDay, name]) => [`${year}-${monthDay}`, name]));
}

export function dateKey(year, month, day) {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}
