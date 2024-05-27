const posts = [
  {
    id: 1,
    title: 'My first blog',
    tags: ['javascript', 'webdevelopment'],
  },
  {
    id: 2,
    title: 'My experience with React',
    image: 'https://img.com/2',
    tags: ['javascript', 'webdevelopment', 'react'],
  },
  {
    id: 3,
    title: 'My experience with Node',
    image: 'https://img.com/3',
    tags: ['javascript', 'webdevelopment', 'node'],
  },
];

// console.log(posts.find((post) => post.id === 1));

// console.log(posts.some((post) => post.id === 4));

// console.log(posts.some((post) => post.tags.includes('react')));

// console.log(posts.every((post) => post.tags.includes('javascript')));

// console.log(posts.map((post) => post.title));

// console.log(posts.filter((post) => post?.image));

console.log(
  posts.reduce((allTags, post) => {
    return Array.from(new Set([...allTags, ...post.tags]));
  }, [])
);

console.log(
  posts
    .reduce((allTags, post) => {
      return [...allTags, ...post.tags];
    }, [])
    .filter((post, index, self) => index === self.indexOf(post))
);
