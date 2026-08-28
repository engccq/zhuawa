const lunarDays = ['初一','初二','初三','初四','初五','初六','初七','初八','初九','初十','十一','十二','十三','十四','十五','十六','十七','十八','十九','二十','廿一','廿二','廿三','廿四','廿五','廿六','廿七','廿八','廿九','三十'];
const formatter = new Intl.DateTimeFormat('zh-CN-u-ca-chinese', { month: 'long', day: 'numeric' });

export function daysInMonth(year, month) { return new Date(year, month, 0).getDate(); }
export function monthGrid(year, month) {
  const count = daysInMonth(year, month), firstDay = new Date(year, month - 1, 1).getDay();
  return Array.from({ length: Math.ceil((firstDay + count) / 7) * 7 }, (_, index) => {
    const date = index - firstDay + 1;
    return date < 1 || date > count ? { date: null } : { date, weekday: (firstDay + date - 1) % 7 };
  });
}
export function lunarLabel(date) {
  const parts = Object.fromEntries(formatter.formatToParts(date).filter(({ type }) => type === 'month' || type === 'day').map(({ type, value }) => [type, value]));
  return `${parts.month}${lunarDays[Number(parts.day) - 1] || parts.day}`;
}

// State published in the State Council General Office holiday arrangement notices.
const schedules = {
  2024: { rest: [['01-01','元旦'],['02-10','春节'],['02-11','春节'],['02-12','春节'],['02-13','春节'],['02-14','春节'],['02-15','春节'],['02-16','春节'],['02-17','春节'],['04-04','清明节'],['04-05','清明节'],['04-06','清明节'],['05-01','劳动节'],['05-02','劳动节'],['05-03','劳动节'],['05-04','劳动节'],['05-05','劳动节'],['06-08','端午节'],['06-09','端午节'],['06-10','端午节'],['09-15','中秋节'],['09-16','中秋节'],['09-17','中秋节'],['10-01','国庆节'],['10-02','国庆节'],['10-03','国庆节'],['10-04','国庆节'],['10-05','国庆节'],['10-06','国庆节'],['10-07','国庆节']], work: ['02-04','02-18','04-07','04-28','05-11','09-14','09-29','10-12'] },
  2025: { rest: [['01-01','元旦'],...range(2025,'01-28','02-04','春节'),...range(2025,'04-04','04-06','清明节'),...range(2025,'05-01','05-05','劳动节'),...range(2025,'05-31','06-02','端午节'),...range(2025,'10-01','10-08','国庆节')], work: ['01-26','02-08','04-27','09-28','10-11'] },
  2026: { rest: [['01-01','元旦'],['01-02','元旦'],['01-03','元旦'],...range(2026,'02-15','02-23','春节'),...range(2026,'04-04','04-06','清明节'),...range(2026,'05-01','05-05','劳动节'),...range(2026,'06-19','06-21','端午节'),...range(2026,'09-25','09-27','中秋节'),...range(2026,'10-01','10-07','国庆节')], work: ['01-04','02-14','02-28','05-09','09-20','10-10'] }
};
function range(year, start, end, name) { const out = [], cursor = new Date(`${year}-${start}`), last = new Date(`${year}-${end}`); while (cursor <= last) { out.push([cursor.toISOString().slice(5, 10), name]); cursor.setDate(cursor.getDate() + 1); } return out; }
export function holidaysForYear(year) {
  const schedule = schedules[year]; if (!schedule) return {};
  const result = {};
  for (const [monthDay, name] of schedule.rest) { const key = `${year}-${monthDay}`; result[key] = result[key] ? `${result[key]}、${name}|休` : `${name}|休`; }
  for (const monthDay of schedule.work) { const key = `${year}-${monthDay}`; result[key] = `${result[key] ? result[key].split('|')[0] + '、' : ''}调休上班|班`; }
  return result;
}
export function dateKey(year, month, day) { return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`; }
