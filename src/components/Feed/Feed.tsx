import { Navbar, Text } from '@mantine/core';
import React from 'react';
import Post from '../Post/Post';


function Feed() {
  return (
    <div style={{
        textAlign: 'center'
    }}>
        <Post />
    </div>
  );
}

export default Feed;
