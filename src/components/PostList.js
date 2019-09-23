import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://geralinks.com.br/ups/timthumb.php?h=40&w=40&src=https://geralinks.com.br/ups/users/cba9b05b3c3e6414f1942ddc058158db.jpg'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://geralinks.com.br/ups/timthumb.php?h=40&w=40&src=https://geralinks.com.br/ups/users/5d7037bfafc12-jenifer-fagundes-da-cruz-geralinks.jpg'
            },
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
          }
        ],
      },
      {
        id: 2,
        author: {
          name: 'Fábio Alcantara',
          avatar: 'https://geralinks.com.br/ups/timthumb.php?h=40&w=40&src=https://geralinks.com.br/ups/users/5cf8cdfdad2b5-allan-kardec-da-silva-ribeiro-geralinks.jpg'
        },
        date: '24 Jun 2019',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Samuel Fernandes',
              avatar: 'https://geralinks.com.br/ups/timthumb.php?h=40&w=40&src=https://geralinks.com.br/ups/users/5d685d7659c2a-fernando-leao-geralinks.jpg'
            },
            content: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          }
        ],
      },
      {
        id: 3,
        author: {
          name: 'João Alcantara',
          avatar: 'https://geralinks.com.br/ups/timthumb.php?h=40&w=40&src=https://geralinks.com.br/ups/users/5c494de3391d7-adriano-pina-geralinks.jpg'
        },
        date: '13 Jul 2019',
        content: 'The point of using Lorem Ipsum is that it has a more-or-less?',
        comments: [],
      },
      {
        id: 4,
        author: {
          name: 'José Alcantara',
          avatar: 'https://geralinks.com.br/ups/timthumb.php?h=40&w=40&src=https://geralinks.com.br/ups/users/75a87bd2bf7b3ea17dad43325357f8b6.png'
        },
        date: '29 Jan 2019',
        content: 'Many desktop publishing packages!',
        comments: [
          {
            id: 1,
            author: {
              name: 'Carlos Fernandes',
              avatar: 'https://geralinks.com.br/ups/timthumb.php?h=40&w=40&src=https://geralinks.com.br/ups/users/5bfc46ef8fab0-jean-sobrinho-geralinks.jpg'
            },
            content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
          },
          {
            id: 2,
            author: {
              name: 'Maurício Fernandes',
              avatar: 'https://geralinks.com.br/ups/timthumb.php?h=40&w=40&src=https://geralinks.com.br/ups/users/177a89142ac94dc5009500c05c6547f4.jpg'
            },
            content: 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC',
          }
        ],
      },
    ]
  };

  render(){
    return(
      <section>
        {
          this.state.posts.map(post => (
            <Post
              key={post.id}
              post={post}
            />
          ))
        }
      </section>
    )
  }
}

export default PostList;
