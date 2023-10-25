import { timeStringFromDate, dateStringFromDate } from '@/utils/dateFormat';
import { IChatMessageDisplay } from '@/interfaces/chatMessage';

export function updateMessage(m: IChatMessageDisplay, lastDate: string): string {
  m.time = timeStringFromDate(m.createdDateTime);
  m.date = dateStringFromDate(m.createdDateTime);
  m.firstDate = m.date !== lastDate;
  lastDate = m.date;
  m.messageTitle = m.userDisplayName;

  return lastDate;
}
