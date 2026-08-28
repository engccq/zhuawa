import { monthGrid, lunarLabel, holidaysForYear, dateKey } from './calendar.js';

const now = new Date();
let view = { year: now.getFullYear(), month: now.getMonth() + 1 };
const grid = document.querySelector('#calendarGrid');
const holidays = holidaysForYear(view.year);

function render() {
  document.querySelector('#monthLabel').textContent = `${view.month}月`;
  document.querySelector('#yearLabel').textContent = `${view.year}年`;
  const todayKey = dateKey(now.getFullYear(), now.getMonth() + 1, now.getDate());
  grid.replaceChildren(...monthGrid(view.year, view.month).map(({ date }) => {
    const cell = document.createElement('div');
    if (!date) { cell.className = 'day empty'; return cell; }
    const key = dateKey(view.year, view.month, date);
    const holiday = holidays[key];
    cell.className = `day${key === todayKey ? ' is-today' : ''}${holiday ? ' is-holiday' : ''}`;
    cell.innerHTML = `<strong>${date}</strong><small>${lunarLabel(new Date(view.year, view.month - 1, date))}</small>${holiday ? `<em>${holiday}</em>` : ''}`;
    cell.setAttribute('aria-label', `${view.year}年${view.month}月${date}日${holiday ? `，${holiday}` : ''}`);
    return cell;
  }));
}

document.querySelector('#prevMonth').addEventListener('click', () => { view.month--; if (view.month < 1) { view.month = 12; view.year--; } render(); });
document.querySelector('#nextMonth').addEventListener('click', () => { view.month++; if (view.month > 12) { view.month = 1; view.year++; } render(); });
document.querySelector('#todayButton').addEventListener('click', () => { view = { year: now.getFullYear(), month: now.getMonth() + 1 }; render(); });
render();
