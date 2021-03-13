import {Post} from './postType';

export const Posts: Post[] = [
  {
    id: 0, title: 'first', text: 'asdadas', author: 'master', date: '123', hide: false, isAuthor: false,
    comments: [
      {text: 'adwread', by: 'adawrdsd', isAuthor: false, hide: false},
      {text: 'adsad', by: 'asdera', isAuthor: false, hide: false}
    ]
  },
  {
    id: 1, title: 'fidsad', text: 'asddsaas', author: 'hungyam', date: '234', hide: false, isAuthor: false,
    comments: [
      {text: 'aerdad', by: 'adaredsd', isAuthor: false, hide: false},
      {text: 'adqsad', by: 'asewda', isAuthor: false, hide: false}
    ]
  }
];
