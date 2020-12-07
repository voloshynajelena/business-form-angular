import { Component, ContentChild, ElementRef, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  @ContentChild('info', {static: true}) infoRef: ElementRef;
  @Output() onRemove = new EventEmitter<number>();

  postLength = 100;

  constructor() { }

  ngOnInit(): void {
    console.log(this.infoRef)
  }

  remove() {
    this.onRemove.emit(this.post.id);
  }
}
