import React from 'react'
import dayjs from 'dayjs'
import Timer from '.'

const now = dayjs()
const nextSecond = now.subtract(-1, 's')
const nextMinute = now.subtract(-1, 'm').startOf('m')
const nextHour = now.subtract(-1, 'h').startOf('h')
const quarterDay = now.subtract(-6, 'h').startOf('h')
const yesterday = now.subtract(1, 'd').startOf('d')
const tomorrow = now.subtract(-24, 'h').subtract(-2, 's')
const overmorrow = now.subtract(-48, 'h').subtract(-2, 's')
const lastWeek = now.subtract(1, 'w').startOf('d')
const nextWeek = now.subtract(-1, 'w').startOf('d')
const lastMonth = now.subtract(1, 'M').startOf('d')
const nextMonth = now.subtract(-1, 'M').startOf('d')
const lastYear = now.subtract(1, 'y').startOf('d')
const nextYear = now.subtract(-1, 'y').startOf('d')

export default { component: Timer }

export const Source = {
  args: { start: now.format(), end: now.format() },
  parameters: { chromatic: { disable: true } }
}

export const Current = {
  render: args =>
    args.items.map((item, i) => (
      <React.Fragment key={i}>
        <Timer {...item} />
        <br />
      </React.Fragment>
    )),
  args: {
    items: [
      { start: yesterday, end: nextYear },
      { start: yesterday, end: nextMonth },
      { start: yesterday, end: nextWeek },
      { start: yesterday, end: overmorrow },
      { start: yesterday, end: tomorrow },
      { start: yesterday, end: quarterDay },
      { start: yesterday, end: nextHour },
      { start: yesterday, end: nextMinute },
      { start: yesterday, end: nextSecond }
    ]
  }
}

export const Future = {
  ...Current,
  args: {
    items: [
      { start: nextYear, end: nextYear },
      { start: nextMonth, end: nextYear },
      { start: nextWeek, end: nextWeek },
      { start: overmorrow, end: nextWeek },
      { start: tomorrow, end: nextWeek },
      { start: quarterDay, end: nextWeek },
      { start: nextHour, end: nextWeek },
      { start: nextMinute, end: nextWeek },
      { start: nextSecond, end: nextMinute }
    ]
  }
}

export const Past = {
  ...Current,
  args: {
    items: [
      { start: lastYear, end: yesterday },
      { start: lastYear, end: lastWeek },
      { start: lastYear, end: lastMonth },
      { start: lastYear, end: lastYear }
    ]
  }
}
