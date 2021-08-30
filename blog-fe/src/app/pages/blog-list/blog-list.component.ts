import {Component, OnDestroy, OnInit} from '@angular/core';
import {BlogService} from "../../shared/services/blog.service";
import {Blog} from "../../shared/models/blog";
import {debounceTime, finalize, takeUntil} from "rxjs/operators";
import {Router} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";
import {FormControl} from "@angular/forms";
import {Subject} from "rxjs";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit, OnDestroy {
  page = 0;
  size = 10;
  blogList: Blog[] = [];
  totalBlogs = 0;
  totalPages = 0;
  loading = false;
  searchFormControl = new FormControl(null);
  private unsub = new Subject();

  constructor(private blogService: BlogService, private router: Router) {
    this.searchFormControl.valueChanges
      .pipe(takeUntil(this.unsub), debounceTime(500))
      .subscribe((s) => {
        console.log(s)
        this.page = 0;
        this.getFiltredBlogs({
          size: this.size,
          page: this.page,
          textSearch: s,
        });
      });
  }

  ngOnInit() {
    this.getFiltredBlogs({page: this.page, size: this.size, textSearch : this.searchFormControl.value});


  }

  getFiltredBlogs(request: any){
    this.loading = true;
    this.blogService.filterBlogs(request)
      .pipe(finalize(() => this.loading = false))
      .subscribe(r => {
      this.blogList = r.data.map(u => {
        return {...u, content: u.content ? u.content.substr(0, 2) : ''}
      });
      this.totalBlogs = r.totalElements;
      this.totalPages = r.totalPages;
    });
  }

  navigateForm(){
    this.router.navigateByUrl("/form");

  }

  upVote(blog: Blog){
    this.blogService.upVoteBlog(blog.id).subscribe(r => {
      blog.upVotes = r.upVotes;
      })
  }

  downVote(blog: Blog){
    this.blogService.downVoteBlog(blog.id).pipe().subscribe(r=> {
      blog.downVotes = r.downVotes;
    })
  }

  showMore(id: string) {
    this.router.navigate(["/detail", id])
  }

  pageChange(page: PageEvent) {
    this.page = page.pageIndex;
    this.getFiltredBlogs({page: this.page, size: this.size, textSearch : this.searchFormControl.value});
  }

  ngOnDestroy(): void {
    this.unsub.next();
    this.unsub.complete();
  }

}
