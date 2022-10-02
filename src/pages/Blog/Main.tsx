import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MarkdownPreciew from './MarkdownPreview';

interface MainProps {
}

function Main() {

  const post = `
   # 标题一波
   ## 二级标题一波

   \`\`\`javascript
    **这是代码**
   \`\`\`
  `;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        主标题
      </Typography>
      <Divider />

      <MarkdownPreciew className="markdown" key={post.substring(0, 40)}>
        {post}
      </MarkdownPreciew>
    </Grid>
  );
}

export default Main;