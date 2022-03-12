import { Grid } from '@mantine/core';
import React, { SetStateAction, useState } from 'react';
import { Children, Data2 } from '../../interfaces/RedditResponse';
import { fetchData } from '../../services/fetchData';
import ArticleCardFooter from '../Post/Post';

const URLS = [
  // 'https://www.reddit.com/r/acturnips/new/.json',
  'https://www.reddit.com/r/TurnipExchange/new/.json',
  // 'https://www.reddit.com/r/ACNHTurnips/new/.json',
];

function Feed() {
  const [posts, setPosts] = useState<SetStateAction<Data2[] | null>>(null);
  fetchData(...URLS).then(siteResponse => {
    const flatResponse: Children[] = [];
    siteResponse.forEach(response => {
      const {
        data: { children },
      } = response;
      flatResponse.push(...children);
    });
    const combinedPosts = flatResponse.map(r => r.data);
    console.log(combinedPosts);
    setPosts(combinedPosts);
  });

  // const posts = mockedRedditResponse;

  let cards;
  if (posts && Array.isArray(posts)) {
    cards = posts.map(post => {
      return (
        <Grid.Col xs={12} sm={6} lg={6} xl={4}>
          <ArticleCardFooter
            key={post.id}
            image={post.url_overridden_by_dest ?? ''}
            title={post.title}
            author={{
              name: post.author,
              description: post.num_comments.toString(),
              image: post.url,
            }}
            footer={post.num_comments.toString()}
            category={'500 Bells'}
          />
        </Grid.Col>
      );
    });
    return <Grid>{cards}</Grid>;
  }

  return <div />;
}

export default Feed;
