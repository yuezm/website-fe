import React from 'react';
import FeaturedPost from './FeaturedPost';

function Recommend() {
  const featuredPosts = [
    {
      title: 'Featured post',
      date: 'Nov 12',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageLabel: 'Image Text',
    },
    {
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageLabel: 'Image Text',
    },
  ];

  return (
    <>
      {
        featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
        ))
      }
    </>
  )
}

export default Recommend;