import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Blog} from "../models/blog";
import {BlogResponse} from "../models/blog-response";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private API = environment.baseApiUrl + '/blog';
  constructor(private http: HttpClient) { }

  getBlogById(id: string | null) {
    return this.http.get<Blog>(`${this.API}/${id}`);
  }

  filterBlogs(request: any) {
    return this.http.post<BlogResponse>(`${this.API}/search`, request);
  }

  createBlog(blog: any) {
    return this.http.post(this.API, blog);
  }

  updateBlog(blog: any) {
    return this.http.put(this.API, blog);
  }

  downVoteBlog(id: string) {
    return this.http.put<Blog>(`${this.API}/down-vote`, id);
  }

  upVoteBlog(id: string) {
    return this.http.put<Blog>(`${this.API}/up-vote`, id);
  }

}
