'use client';

import Grid from '@mui/material/Grid';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { IChatUserThread } from '@/interfaces/chatThread';
import MessagesSection from '@/components/ChatRoom/messagesSection';
import { Container } from '@mui/material';
import { EllipsisTypography, StyledGrid } from '@/components/common/StyledChatroom/ChatroomStyles';
import { useTitle } from '@/hooks/useTitle';
import { useState } from 'react';

EllipsisTypography.defaultProps = {
  noWrap: true,
};

const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: 0,
  },
}));

const defaultThreads: IChatUserThread[] = [
  {
    createdByUserId: 'user1',
    chatThreadId: 'thread1',
    displayName: 'Twig User',
    otherUserId: 'user2',
    type: 0,
    numberOfItemsUnread: 3,
    lastMessageOn: '2023-10-24 15:30:00',
    active: true,
    recipients: [
      {
        userId: 'user2',
        displayName: 'User 2',
        active: true,
      },
    ],
  },
];

function Chatroom(): JSX.Element {
  useTitle('Chat Room');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const needsPadding = useMediaQuery(theme.breakpoints.down('lg'));
  const [isTyping, setIsTyping] = useState<boolean>(false);

  return (
    <section>
      <StyledContainer maxWidth="lg">
        <StyledGrid container spacing={0}>
          <Grid
            item
            xs={12}
            md={9}
            lg={10}
            sx={{
              height: '100%',
              paddingRight: !isMobile && needsPadding ? '24px' : '0px',
            }}
          >
            <MessagesSection selectedThread={defaultThreads[0]} isTyping={isTyping} setIsTyping={setIsTyping} />
          </Grid>
        </StyledGrid>
      </StyledContainer>
    </section>
  );
}

export default Chatroom;
