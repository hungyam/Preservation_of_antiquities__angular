import {Component, OnInit} from '@angular/core';
import {formType} from './formType';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form!: formType;
  error = '';

  constructor(private router: Router) {
  }

  onSubmit(): void {
    if (DataService.findUser(this.form.username as string, this.form.key as string)) {
      localStorage.setItem('username', this.form.username as string);
      this.router.navigate(['home']).then(() => alert('Success!'));
    } else {
      this.error = 'Error!';
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('username')){
      this.router.navigate(['/logout'])
        .then(() => alert('You must logout your account first!'));
    }
    this.form = new formType('', '');
  }

}
