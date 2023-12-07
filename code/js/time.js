const months = {
  abbr: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  full: [
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
  ],
}

const daysOfWeek = {
  abbr: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  full: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
}

const date = new Date()
const time = {
  time: date.getTime(),
  year: date.getFullYear(),
  season: getSeason(date),
  month: {
    raw: {
      abbr: months.abbr[date.getMonth()],
      full: months.full[date.getMonth()],
    },
    index: date.getMonth(),
  },
  week: getWeek(date),
  day: {
    dayOfYear: dayOfYear(date),
    dayOfMonth: date.getDate(),
    raw: {
      abbr: daysOfWeek.abbr[date.getDay()],
      full: daysOfWeek.full[date.getDay()],
    },
    index: date.getDay(),
  },
  hours: {
    am: date.getHours() % 12,
    pm: date.getHours(),
  },
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
  milliseconds: date.getMilliseconds(),
  timezoneOffset: {
    raw: timeZone(date),
    index: date.getTimezoneOffset(),
  },
  utc: {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth(),
    day: date.getUTCDate(),
    hours: date.getUTCHours(),
    minutes: date.getUTCMinutes(),
    seconds: date.getUTCSeconds(),
  },
  localeString: date.toLocaleString(),
  date: date,
}

function getWeek(date, startDay = 0) {
  const tempDate = new Date(date)
  tempDate.setMonth(0, 1)

  const dayOfWeek = tempDate.getDay()
  tempDate.setDate(tempDate.getDate() + ((startDay - dayOfWeek + 7) % 7))

  // 86400000 => oneDay = 1000 * 60 * 60 * 24
  const weekNumber = Math.ceil(((date - tempDate) / 86400000 + 1) / 7)

  return weekNumber
}

function dayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0)
  const diff =
    date -
    start +
    (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000
  // 86400000 => oneDay = 1000 * 60 * 60 * 24
  const day = Math.floor(diff / 86400000)
  return day
}

function timeZone(date) {
  const timezoneOffsetMinutes = date.getTimezoneOffset()
  const timezoneOffsetHours = -timezoneOffsetMinutes / 60
  const res = `UTC${timezoneOffsetHours >= 0 ? '+' : ''}${timezoneOffsetHours}`
  return res
}

function getSeason(date) {
  const month = date.getMonth() + 1

  const seasons = ['Winter', 'Spring', 'Summer', 'Autumn']
  const seasonIndex = Math.floor((month % 12) / 3)

  return seasons[seasonIndex]
}

export { time }
// https://www.w3schools.com/jsref/jsref_obj_date.asp
