import dayjs from 'dayjs';

export function serializeTime(t: string | number | Date) {
  return dayjs(t).format('YYYY-MM-DD HH:mm:ss');
}
