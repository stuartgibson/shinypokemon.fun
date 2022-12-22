import { DateTimeFormatterType } from "../types/date-time-formatter.types";

export const MINUTE = 60000;    // 1000 * 60
export const HOUR = 3600000;    // 1000 * 60 * 60
export const DAY = 86400000;    // 1000 * 60 * 60 * 24
export const WEEK = 604800000;  // 1000 * 60 * 60 * 24 * 7

export const dateTimeFormats:{[key in DateTimeFormatterType]: Intl.DateTimeFormatOptions} = {
  date: {day: 'numeric', month: 'short', year: 'numeric'},
  time: {hour: 'numeric', minute: '2-digit', hour12: true},
  dateTime: {day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true }
}

export const formatDateTime = (date:Date|null, format:DateTimeFormatterType = 'date'):string =>
  !date ? '' : new Intl.DateTimeFormat([], dateTimeFormats[format]).format(date)

export const timelessDate = (_:string|null):Date|null =>
  !_ ? null : beginningOfDay(new Date(Date.parse(_)))

export const beginningOfDay = (_:Date):Date =>
  new Date(_.setUTCHours(0, 0, 0, 0))

export const beginningOfMonth = (_:Date):Date =>
  new Date( Date.UTC(_.getFullYear(), _.getMonth(), 1))

export const beginningOfWeek = (_?:Date):Date => {
  _ ||= new Date();
  return new Date(beginningOfDay(_).getTime() - (DAY * ((_.getDay() + 6) % 7 )))
}

export const beginningOfYear = (_:Date):Date =>
  new Date( Date.UTC(_.getFullYear(), 0, 1))
