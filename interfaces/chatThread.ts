export enum ChatType {
  OneToOne = 0,
  Group = 1,
}

export interface IChatUserThread {
  createdByUserId: string;
  chatThreadId: string;
  displayName: string;
  otherUserId: string;
  type: ChatType;
  numberOfItemsUnread: number;
  lastMessageOn: string;
  active: boolean;
  recipients: IChatRecipient[];
}

export interface IChatRecipient {
  userId: string;
  displayName: string;
  active: boolean;
}

export interface IChatThreadUpdated {
  id: string;
}
