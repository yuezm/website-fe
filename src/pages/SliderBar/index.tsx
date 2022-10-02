import React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import GitHubIcon from '@mui/icons-material/GitHub';

interface SidebarProps {
}

export default function Sidebar() {

  const archives = [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ];
  const social = [
    { name: 'GitHub', icon: GitHubIcon }
  ]

  return (
    <Grid item xs={12} md={4}>
      {/* 类型分类 */}
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        分类
      </Typography>
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))}

      {/* 日期存档 */}
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        存档
      </Typography>
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))}

      {/* 联系我 */}
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        关注我
      </Typography>

      {social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href="#"
          key={network.name}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
}
