import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Blog} from "../../shared/models/blog";
import {BlogService} from "../../shared/services/blog.service";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  blog: any;
  loading = false;

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.loading = true;
    this.blogService.getBlogById(id).pipe(finalize(() => this.loading = false)).subscribe(r => {
      this.blog = r;
    })

  }

  upVote(blog: Blog){
    blog.upVotes ++;
    this.blogService.updateBlog(blog).subscribe(r=> console.log(r))
  }

  downVote(blog: Blog){
    blog.downVotes ++;
    this.blogService.updateBlog(blog).subscribe(r=> console.log(r))
  }

}
