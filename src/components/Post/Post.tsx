import { ActionIcon, Avatar, Badge, Card, createStyles, Group, Image, Text } from '@mantine/core';
import { Bookmark, Heart, Share } from 'tabler-icons-react';
import { parseData } from '../../services/fetchData';
import { mockedRedditResponse } from '../../services/fetchData.test';

// const mock = mockedRedditResponse;
const mockedData = parseData();

function Post() {
  const posts = mockedRedditResponse.map((mock) => {
    return (
      <ArticleCardFooter
        key={mock.id}
        image={mock.url_overridden_by_dest ?? ''}
        title={mock.title}
        author={{
          name: mock.author,
          description: mock.num_comments.toString(),
          image: mock.url,
        }}
        footer={mock.num_comments.toString()}
        category={'500 Bells'}
      />
    );
  });

  return (
    <div
      style={{
        textAlign: 'center',
        margin: '0 auto',
      }}
    >
      {posts}
    </div>
  );
}

export default Post;

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));

interface ArticleCardFooterProps {
  image: string;
  category: string;
  title: string;
  footer: string;
  author: {
    name: string;
    description: string;
    image: string;
  };
}

function ArticleCardFooter({ image, category, title, footer, author }: ArticleCardFooterProps) {
  const { classes, theme } = useStyles();

  return (
    <Card withBorder padding='lg' radius='md' className={classes.card}>
      <Card.Section mb='sm'>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Badge>{category}</Badge>

      <Text weight={700} className={classes.title} mt='xs'>
        {title}
      </Text>

      <Group mt='lg'>
        <Avatar src={author.image} radius='sm' />
        <div>
          <Text weight={500}>{author.name}</Text>
          <Text size='xs' color='dimmed'>
            {author.description}
          </Text>
        </div>
      </Group>

      <Card.Section className={classes.footer}>
        <Group position='apart'>
          <Text size='xs' color='dimmed'>
            {footer}
          </Text>
          <Group spacing={0}>
            <ActionIcon>
              <Heart size={18} color={theme.colors.red[6]} />
            </ActionIcon>
            <ActionIcon>
              <Bookmark size={18} color={theme.colors.yellow[6]} />
            </ActionIcon>
            <ActionIcon>
              <Share size={16} color={theme.colors.blue[6]} />
            </ActionIcon>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
}
