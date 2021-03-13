import { Component, OnInit } from '@angular/core';
import {Post} from '../dataManage/postType';
import {User} from '../dataManage/userType';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {
  post!: Post;
  user!: User;
  index!: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.index = Number(this.route.snapshot.paramMap.get('id'));
  }

  deletePost(): void {
    DataService.deletePost(this.index);
    this.router.navigate(['/home']).then(() => alert('succeeded'));
  }
}
