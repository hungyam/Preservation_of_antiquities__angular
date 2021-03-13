import {Component, OnInit} from '@angular/core';
import {User} from '../dataManage/userType';
import {formType} from './formType';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  user!: User;
  form!: formType;
  index!: number ;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = new User(localStorage.getItem('username')as string);
    this.index = Number(this.route.snapshot.paramMap.get('id')) ?? 0;
    const post = DataService.getPost(this.index);
    this.form = new formType(post.title, post.text );
  }

  onSubmit(): void {
    DataService.editPost(this.index, this.form.title, this.form.text);
    this.router.navigate(['/readPost/' + this.index]).then(() => alert('succeeded'));
  }

}
