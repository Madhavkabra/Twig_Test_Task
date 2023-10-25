import { IChatUserThread } from '@/interfaces/chatThread';
import { Editor as TinyMCEEditor } from 'tinymce';

export interface IMessageFooterBoxProps {
  isMobile: boolean;
  isDisabled: boolean;
}

export interface MobileProps {
  isMobile: boolean;
}

export interface IMessagesSectionProps {
  selectedThread: IChatUserThread | undefined;
  isTyping: boolean;
  setIsTyping: (isTyping: boolean) => void;
}

export interface IMessagesSectionFooterProps {
  selectedThread: IChatUserThread | undefined;
  initialValue: string | undefined;
  scrollToBottom: () => void;
  setEditorRef: (editor: TinyMCEEditor) => void;
  onSendClick: () => void;
  isFirstTyping: boolean;
  isSecondTying: boolean;
  setIsFirstTyping: React.Dispatch<boolean>;
}
