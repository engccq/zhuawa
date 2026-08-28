const lunarDays = ['初一','初二','初三','初四','初五','初六','初七','初八','初九','初十','十一','十二','十三','十四','十五','十六','十七','十八','十九','二十','廿一','廿二','廿三','廿四','廿五','廿六','廿七','廿八','廿九','三十'];
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
  const parts = Object.fromEntries(formatter.formatToParts(date).filter(({ type }) => type === 'month' || type === 'day').map(({ type, value }) => [type, value]));
  return `${parts.month}${lunarDays[Number(parts.day) - 1] || parts.day}`;
}

const qingming = { 2024: '04-04', 2025: '04-04', 2026: '04-05', 2027: '04-04', 2028: '04-04', 2029: '04-04', 2030: '04-05' };
export function holidaysForYear(year) {
  const result = { [`${year}-01-01`]: '元旦', [`${year}-05-01`]: '劳动节', [`${year}-10-01`]: '国庆节' };
  if (qingming[year]) result[`${year}-${qingming[year]}`] = '清明节';
  for (let day = new Date(year, 0, 1); day < new Date(year + 1, 0, 1); day.setDate(day.getDate() + 1)) {
    const parts = Object.fromEntries(formatter.formatToParts(day).filter(({ type }) => type === 'month' || type === 'day').map(({ type, value }) => [type, value]));
    const lunarDay = Number(parts.day);
    if (parts.month === '正月' && lunarDay === 1) result[dateKey(year, day.getMonth() + 1, day.getDate())] = '春节';
    if (parts.month === '五月' && lunarDay === 5) result[dateKey(year, day.getMonth() + 1, day.getDate())] = '端午节';
    if (parts.month === '八月' && lunarDay === 15) result[dateKey(year, day.getMonth() + 1, day.getDate())] = '中秋节';
  }
  return result;
}

export function dateKey(year, month, day) {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}
