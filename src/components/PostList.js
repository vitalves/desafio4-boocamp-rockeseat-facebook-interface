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
              avatar: 'http://url-da-imagem.com/imagem.jpg'
            },
            content: "Conteúdo do comentário"
          }
        ],
      },
      {
        id: 2,
        author: {
          name: 'Fábio Alcantara',
          avatar: 'https://geralinks.com.br/ups/timthumb.php?h=40&w=40&src=https://geralinks.com.br/ups/users/5cf8cdfdad2b5-allan-kardec-da-silva-ribeiro-geralinks.jpg'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'http://url-da-imagem.com/imagem.jpg'
            },
            content: "Conteúdo do comentário"
          }
        ],
      },
      {
        id: 3,
        author: {
          name: 'João Alcantara',
          avatar: 'https://geralinks.com.br/ups/timthumb.php?h=40&w=40&src=https://geralinks.com.br/ups/users/5c494de3391d7-adriano-pina-geralinks.jpg'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'http://url-da-imagem.com/imagem.jpg'
            },
            content: "Conteúdo do comentário"
          }
        ],
      },
      {
        id: 4,
        author: {
          name: 'José Alcantara',
          avatar: 'https://geralinks.com.br/ups/timthumb.php?h=40&w=40&src=https://geralinks.com.br/ups/users/75a87bd2bf7b3ea17dad43325357f8b6.png'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'http://url-da-imagem.com/imagem.jpg'
            },
            content: "Conteúdo do comentário"
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
