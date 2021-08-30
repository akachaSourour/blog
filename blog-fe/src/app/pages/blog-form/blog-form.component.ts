import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BlogService} from "../../shared/services/blog.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {
  blogForm: FormGroup = this.fb.group({
    title: [null, Validators.required],
    content: [null, Validators.required],
    author: [null, Validators.required ]
  });

  constructor(private fb: FormBuilder, private blogService: BlogService, private router: Router) { }

  ngOnInit() {
    this.blogForm = this.fb.group({
      title: [null, Validators.required],
      content: [null, Validators.required],
      author: [null, Validators.required]
    })
  }

  create(){
    if(this.blogForm.valid){
      this.blogService.createBlog(this.blogForm.value).subscribe(r =>

          this.router.navigate(['/'])
       );

    }

  }

}
