'use client';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { IChatUserThread } from '@/interfaces/chatThread';
import * as React from 'react';
import { ChatMessageType, IChatMessageDisplay, IChatTyping } from '@/interfaces/chatMessage';
import { Editor as TinyMCEEditor } from 'tinymce';
import ChatMessageText from '@/components/ChatRoom/chatMessageText';
import ChatMessage, {
  FlexBox,
  MessageTiteTypography,
  StyledAvatar,
  StyledListItem,
  StyledListItemAvatar,
  TimeTypography,
} from '@/components/ChatRoom/chatMessage';
import { Chip, ListItemText } from '@mui/material';
import MessagesSectionHeader from './messagesSectionHeader';
import MessagesSectionFooter from './messagesSectionFooter';
import { updateMessage } from '../../utils/updateMessageDisplay';
import { BouncingLoaderIcon } from '@/components/icon/BouncingLoaderIcon';
import { useRef, useState } from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import { dateStringFromDate } from '@/utils/dateFormat';
import useLocalStorage from '@/hooks/useLocalStorage';
import {
  DateDivider,
  DateTypography,
  MessageContentBox,
  StyledList,
} from '@/components/common/StyledChatroom/ChatroomStyles';
import { v4 as uuidv4 } from 'uuid';

interface IMessagesSectionProps {
  selectedThread: IChatUserThread | undefined;
  isTyping: boolean;
  setIsTyping: (isTyping: boolean) => void;
}

export default function MessagesSection(props: IMessagesSectionProps): JSX.Element {
  const [initialValue, setInitialValue] = useState<string | undefined>('');
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const messagesContainerRef = useRef<Element | null>();
  const messagesEndRef = useRef<Element | null>();
  const [messages, setMessages] = useLocalStorage<IChatMessageDisplay[]>(
    [
      {
        id: uuidv4(),
        userId: 'user2',
        chatThreadId: 'thread1',
        userDisplayName: 'System',
        createdDateTime: new Date().toString(),
        content: 'Welcome to the chat box!',
        messageType: ChatMessageType.Text,
        firstDate: true,
        date: dateStringFromDate(new Date().toString()),
        visibleMessage: 'System Generated',
        messageTitle: 'System',
      },
    ],
    'messages',
  );

  const [loadingCompleted, setLoadingCompleted] = useState<boolean>(false);

  const [typingRecipient, setTypingRecipient] = useState<IChatTyping>();
  const [isFirstTyping, setIsFirstTyping] = useState<boolean>(true);
  const [typingThreadId, setTypingThreadId] = useState<string | undefined>(undefined);

  const [lastIndexOfNewPage, setLastIndexOfNewPage] = useState<number>(-1);
  const lastElementOfNewPageRef = useRef<Element | null>();

  const addTemporaryTextMessage = (tempId: string, content: string, chatThreadId: string): void => {
    const tempMessage: IChatMessageDisplay = {
      id: tempId,
      userId: 'user1',
      chatThreadId,
      userDisplayName: `Twig User`,
      createdDateTime: new Date().toString(),
      content,
      messageType: ChatMessageType.Text,
      firstDate: false,
    };

    setMessages(current => {
      const lastDate = dateStringFromDate(new Date().toString());
      updateMessage(tempMessage, lastDate ?? '');
      return [...current, tempMessage];
    });

    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 2,
        min: 1,
      },
      wordsPerSentence: {
        max: 16,
        min: 2,
      },
    });

    scrollToBottom();
    setTypingRecipient({
      id: uuidv4(),
      typingDisplayName: 'System',
      typingUserId: 'user2',
    });
    props.setIsTyping(true);
    setTypingThreadId('thread1');

    setTimeout(() => {
      props.setIsTyping(false);
      setTypingRecipient(undefined);
      setTypingThreadId(undefined);
    }, 1000);

    setTimeout(() => {
      setMessages(current => [
        ...current,
        {
          ...tempMessage,
          content: lorem.generateSentences(1),
          userId: 'user2',
          userDisplayName: `System`,
          messageTitle: 'System',
          firstDate: false,
        },
      ]);
    }, 1000);

    // Scroll to bottom to see new message and set focus again for the next message
    setInitialValue('');
    editorRef.current?.focus();
    editorRef.current?.setContent('');
    scrollToBottom();
  };

  const onSendClick = (): void => {
    const content = editorRef.current?.getContent();

    if (content !== undefined && content !== '') {
      setInitialValue(content);
      const tempId = new Date().getTime().toString(36);
      const newMessage = content ?? '';
      const chatThreadId = props.selectedThread?.chatThreadId ?? '';

      addTemporaryTextMessage(tempId, newMessage, chatThreadId);
    }
  };

  const scrollToBottom = (): void => {
    setTimeout(() => {
      messagesEndRef?.current?.scrollIntoView();
    }, 200);
  };

  const setEditorRef = (editor: TinyMCEEditor): void => {
    editorRef.current = editor;
  };

  const loadMessages = (reset = true) => {
    if (reset) {
      setLastIndexOfNewPage(-1);
      setLoadingCompleted(false);
    }
  };

  React.useEffect(() => {
    loadMessages();
  }, [props.selectedThread]);

  React.useEffect(() => {
    if (messagesContainerRef === undefined || messagesContainerRef.current === undefined) return; // wait for the elementRef to be available
    const resizeObserver = new ResizeObserver(() => {
      scrollToBottom();
    });
    resizeObserver.observe(messagesContainerRef.current as Element);
    return () => resizeObserver.disconnect(); // clean up
  }, []);

  const typingDisplayName = typingRecipient?.typingDisplayName ?? '';

  return (
    <Stack direction="column" spacing={0} sx={{ height: '100%' }}>
      <MessagesSectionHeader />
      <MessageContentBox ref={messagesContainerRef}>
        {props.selectedThread !== undefined && (
          <StyledList>
            {messages.map((item: IChatMessageDisplay, i: number) => (
              <React.Fragment key={i}>
                {(item.firstDate ?? false) && (
                  <DateDivider>
                    <Chip
                      size="small"
                      label={
                        <DateTypography variant="caption" fontWeight={500}>
                          {item.date}
                        </DateTypography>
                      }
                    ></Chip>
                  </DateDivider>
                )}

                {loadingCompleted && i === lastIndexOfNewPage && <Box ref={lastElementOfNewPageRef} />}
                <ChatMessage {...item}>
                  {item.messageType === ChatMessageType.Text && <ChatMessageText {...item} />}
                </ChatMessage>
              </React.Fragment>
            ))}
            {props.isTyping && props.selectedThread.chatThreadId === typingThreadId && (
              <StyledListItem alignItems="flex-start">
                <StyledListItemAvatar>
                  <StyledAvatar displayName={typingDisplayName} />
                </StyledListItemAvatar>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <FlexBox>
                        <MessageTiteTypography variant="subtitle1">System</MessageTiteTypography>
                        <TimeTypography variant="caption">
                          {new Date().toLocaleTimeString('en-Us', {
                            hour12: true,
                            hour: 'numeric',
                            minute: 'numeric',
                          })}
                        </TimeTypography>
                      </FlexBox>
                    </React.Fragment>
                  }
                  secondary={<BouncingLoaderIcon width={80} height={80} />}
                  secondaryTypographyProps={{ component: 'div' }}
                />
              </StyledListItem>
            )}
          </StyledList>
        )}
        <Box ref={messagesEndRef} />
      </MessageContentBox>

      <MessagesSectionFooter
        selectedThread={props.selectedThread}
        initialValue={initialValue}
        scrollToBottom={scrollToBottom}
        setEditorRef={setEditorRef}
        onSendClick={onSendClick}
        setIsFirstTyping={setIsFirstTyping}
        isFirstTyping={isFirstTyping}
        isSecondTying={props.isTyping}
      />
    </Stack>
  );
}
