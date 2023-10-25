'use client';

import * as DOMPurify from 'dompurify';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

interface ISantizeProps {
  html: string;
}

export default function Sanitize(props: ISantizeProps): JSX.Element {
  const [cleanHtml, setCleanHtml] = useState('');

  useEffect(() => {
    const clean = DOMPurify.sanitize(props.html, { ADD_ATTR: ['target'] });

    setCleanHtml(clean);
  }, []);

  console.log({ cleanHtml });

  return <Box dangerouslySetInnerHTML={{ __html: cleanHtml ?? '' }} />;
}
