import dayjs from 'dayjs';
import CustomParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(CustomParseFormat);
const dateFormat = 'YYYY-MM-DD';

export function formatDate(year: string, month: string, date: string) {
  return dayjs(`${year}-${month}-${date}`, dateFormat);
}
