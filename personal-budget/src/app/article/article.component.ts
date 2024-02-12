import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'pb-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {
  @Input() title = 'Title'
  @Input() content = 'Content';

  constructor() { }
  ngOnInit(): void {
      
  }
}
