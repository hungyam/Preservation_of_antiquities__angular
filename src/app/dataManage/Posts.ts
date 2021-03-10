import { Post } from './postType';

export const Posts: Post[] = [
  { id: 0, title: 'first', text: 'asdadas', author: 'ddd', date: '123' ,
    comments: [
      { text: 'adwread', by: 'adawrdsd'},
      { text: 'adsad', by: 'asdera'}
    ]
  },
  { id: 1, title: 'fidsad', text: 'asddsaas', author: 'ddsasd', date: '234',
    comments: [
      { text: 'aerdad', by: 'adaredsd'},
      { text: 'adqsad', by: 'asewda'}
    ]
  }
];
