export enum ChatMessageType {
  Text = 0,
}

export interface IChatMessage {
  id: string;
  userId: string;
  chatThreadId: string;
  userDisplayName: string;
  createdDateTime: string;
  content: string;
  messageType: ChatMessageType;
}

export interface IChatMessageDisplay extends IChatMessage {
  messageTitle?: string;
  date?: string;
  time?: string;
  firstDate?: boolean;
  visibleMessage?: string;
  systemIcon?: React.ReactNode;
  isTemporary?: boolean;
  error?: string;
}

export interface IChatTyping {
  id: string;
  typingDisplayName: string;
  typingUserId: string;
}
