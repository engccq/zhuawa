import test from 'node:test';
import assert from 'node:assert/strict';
import { daysInMonth, monthGrid, lunarLabel, holidaysForYear } from './calendar.js';

test('daysInMonth handles leap years', () => {
  assert.equal(daysInMonth(2024, 2), 29);
  assert.equal(daysInMonth(2023, 2), 28);
});

test('monthGrid starts on Sunday and contains every day', () => {
  const grid = monthGrid(2024, 2);
  assert.equal(grid[0].date, null);
  assert.equal(grid.filter(x => x.date).length, 29);
  assert.equal(grid.find(x => x.date === 29).date, 29);
});

test('lunar label uses Chinese calendar', () => {
  assert.match(lunarLabel(new Date(2024, 1, 10)), /正月|初一/);
});

test('holidays include statutory dates', () => {
  const holidays = holidaysForYear(2024);
  assert.equal(holidays['2024-01-01'], '元旦');
  assert.equal(holidays['2024-10-01'], '国庆节');
});
