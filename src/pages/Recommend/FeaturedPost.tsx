import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

interface FeaturedPostProps {
  post: {
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
  };
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>

            {/* 标题 */}
            <Typography component="h2" variant="h5">
              标题
            </Typography>

            {/* 时间 */}
            <Typography variant="subtitle1" color="text.secondary">
              2022.02.02
            </Typography>
            <Typography variant="subtitle1" paragraph>
              我是呢一大段描述，描述于50个字左右，言简意赅
            </Typography>

            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>

          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}
