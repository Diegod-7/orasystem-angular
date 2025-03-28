import { Component, OnInit } from '@angular/core';

interface Comment {
  id: number;
  author: string;
  date: Date;
  content: string;
  replies: Comment[];
}

interface ForumTopic {
  id: number;
  title: string;
  author: string;
  date: Date;
  content: string;
  comments: Comment[];
}

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  topics: ForumTopic[] = [
    {
      id: 1,
      title: 'Consulta sobre servicios Oracle',
      author: 'Carlos Mendoza',
      date: new Date('2025-03-15'),
      content: 'Me gustaría saber más detalles sobre los servicios de administración de bases de datos Oracle que ofrecen. ¿Incluyen soporte 24/7?',
      comments: [
        {
          id: 1,
          author: 'Soporte Orasystem',
          date: new Date('2025-03-16'),
          content: 'Hola Carlos, sí ofrecemos soporte 24/7 para nuestros clientes con contrato de administración de bases de datos Oracle. Te invitamos a contactarnos directamente para más detalles.',
          replies: []
        }
      ]
    },
    {
      id: 2,
      title: 'Migración a la nube Oracle',
      author: 'Ana Gutiérrez',
      date: new Date('2025-03-10'),
      content: '¿Qué recomiendan para migrar una base de datos Oracle on-premise a Oracle Cloud?',
      comments: []
    }
  ];

  newTopic: ForumTopic = {
    id: 0,
    title: '',
    author: '',
    date: new Date(),
    content: '',
    comments: []
  };

  newComment: Comment = {
    id: 0,
    author: '',
    date: new Date(),
    content: '',
    replies: []
  };

  selectedTopic: ForumTopic | null = null;
  showNewTopicForm = false;

  constructor() { }

  ngOnInit(): void {
  }

  selectTopic(topic: ForumTopic): void {
    this.selectedTopic = topic;
    this.resetNewComment();
  }

  addTopic(): void {
    if (this.newTopic.title.trim() && this.newTopic.author.trim() && this.newTopic.content.trim()) {
      const newId = this.topics.length > 0 ? Math.max(...this.topics.map(t => t.id)) + 1 : 1;
      
      const topicToAdd: ForumTopic = {
        ...this.newTopic,
        id: newId,
        date: new Date(),
        comments: []
      };
      
      this.topics.unshift(topicToAdd);
      this.resetNewTopic();
      this.showNewTopicForm = false;
    }
  }

  addComment(): void {
    if (this.selectedTopic && this.newComment.author.trim() && this.newComment.content.trim()) {
      const newId = this.selectedTopic.comments.length > 0 
        ? Math.max(...this.selectedTopic.comments.map(c => c.id)) + 1 
        : 1;
      
      const commentToAdd: Comment = {
        ...this.newComment,
        id: newId,
        date: new Date(),
        replies: []
      };
      
      this.selectedTopic.comments.push(commentToAdd);
      this.resetNewComment();
    }
  }

  resetNewTopic(): void {
    this.newTopic = {
      id: 0,
      title: '',
      author: '',
      date: new Date(),
      content: '',
      comments: []
    };
  }

  resetNewComment(): void {
    this.newComment = {
      id: 0,
      author: '',
      date: new Date(),
      content: '',
      replies: []
    };
  }

  toggleNewTopicForm(): void {
    this.showNewTopicForm = !this.showNewTopicForm;
    if (this.showNewTopicForm) {
      this.resetNewTopic();
    }
  }

  backToTopicList(): void {
    this.selectedTopic = null;
  }
} 