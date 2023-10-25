'use client';

import { useMediaQuery, useTheme } from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';
import React, { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { SmileIcon } from '@/icons/SmileIcon';
import { LinkIcon } from '@/icons/LinkIcon';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import { MessageFooterBox } from './styles';
import { IMessagesSectionFooterProps } from './interface';

export default function MessagesSectionFooter(props: IMessagesSectionFooterProps): JSX.Element {
  const pluginValues: string[] = ['emoticons', 'autolink', 'link', 'autoresize', 'lists'];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (props.isFirstTyping === true) return;
      if (count >= 30) {
        props.setIsFirstTyping(true);
        setCount(0);
        clearInterval(interval);
      } else {
        setCount(count => count + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [count, props, props.isFirstTyping]);

  const handleTyping = () => {
    if (props.isFirstTyping) {
      props.setIsFirstTyping(false);
    }
  };

  return (
    <MessageFooterBox isDisabled={props.isSecondTying} isMobile={isMobile}>
      <Editor
        apiKey="fv262fzee7obv9hkyci9uyq0g2hgm186kpi3dnlgvqd17c6h"
        initialValue={props.initialValue}
        disabled={props.isSecondTying}
        onEditorChange={handleTyping}
        onInit={(evt, editor): void => {
          props.scrollToBottom();
          props.setEditorRef(editor);
        }}
        init={{
          placeholder: 'Send a message',
          max_height: 300,
          min_height: 90,
          height: 90,
          width: '100%',
          menubar: false,
          resize: false,
          branding: false,
          inline: false,
          setup: function (editor) {
            editor.ui.registry.addIcon('smile_icon', ReactDOMServer.renderToString(<SmileIcon />));
            editor.ui.registry.addIcon('link_icon', ReactDOMServer.renderToString(<LinkIcon />));
            editor.ui.registry.addIcon(
              'numlist_icon',
              ReactDOMServer.renderToString(<FormatListNumberedIcon style={{ stroke: 'none' }} />),
            );
            editor.ui.registry.addIcon(
              'bulllist_icon',
              ReactDOMServer.renderToString(<FormatListBulletedIcon style={{ stroke: 'none' }} />),
            );
            editor.ui.registry.addIcon(
              'bold_icon',
              ReactDOMServer.renderToString(<FormatBoldIcon style={{ stroke: 'none' }} />),
            );
            editor.ui.registry.addIcon(
              'underline_icon',
              ReactDOMServer.renderToString(<FormatUnderlinedIcon style={{ stroke: 'none' }} />),
            );
            editor.ui.registry.addButton('send_btn', {
              text: 'Send',
              tooltip: 'Send',
              enabled: props.selectedThread?.active,
              onAction: props.onSendClick,
            });
            editor.ui.registry.addButton('emoticon_btn', {
              tooltip: 'Emojis',
              icon: 'smile_icon',
              enabled: true,
              onAction: function () {
                editor.execCommand('mceEmoticons');
              },
            });
            editor.ui.registry.addButton('link_btn', {
              tooltip: 'Link',
              icon: 'link_icon',
              enabled: true,
              onAction: function () {
                editor.execCommand('mceLink');
              },
            });
            editor.ui.registry.addButton('numlist_btn', {
              tooltip: 'Numbered List',
              icon: 'numlist_icon',
              enabled: true,
              onAction: function () {
                editor.execCommand('InsertOrderedList');
              },
            });
            editor.ui.registry.addButton('bulllist_btn', {
              tooltip: 'Bulleted List',
              icon: 'bulllist_icon',
              enabled: true,
              onAction: function () {
                editor.execCommand('InsertUnorderedList');
              },
            });
            editor.ui.registry.addButton('bold_btn', {
              tooltip: 'Bold',
              icon: 'bold_icon',
              enabled: true,
              onAction: function () {
                editor.execCommand('Bold');
              },
            });
            editor.ui.registry.addButton('underline_btn', {
              tooltip: 'Underline',
              icon: 'underline_icon',
              enabled: true,
              onAction: function () {
                editor.execCommand('Underline');
              },
            });
          },
          toolbar_location: 'bottom',
          plugins: pluginValues,
          newline_behavior: 'block',
          default_link_target: '_blank',
          autoresize_overflow_padding: 0,
          autoresize_bottom_margin: 0,
          forced_root_block: 'p',
          valid_elements: 'strong,em,span[style],a[href|target=_blank],p,ol,ul,li,br,b,i,u',
          //Line 111 in this file may need updated if you add or remove buttons here
          toolbar:
            'upload_btn approval_btn bold_btn underline_btn numlist_btn bulllist_btn emoticon_btn link_btn send_btn',
          link_title: false,
          link_target_list: false,
          statusbar: false,
          content_style: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap');
      body p, .mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before { 
      font-size: 14px; 
      font-family: "Inter"; 
      line-height: 20px;
      letter-spacing: 0.01071em; 
      margin-block-start: 0px; 
      margin-block-end: 0px;
    } 
    ol, ul {
      margin-block-start: 0px; 
      margin-block-end: 0px;
    }
    strong, b {
      font-weight: 700;
    }
    body.mce-content-body { 
      margin-bottom: 0px;
      font-family: "Inter";
      min-height: 0px;
    }
    body.mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before { 
      font-size: 14px; 
    } 
    `,
        }}
      />
    </MessageFooterBox>
  );
}
