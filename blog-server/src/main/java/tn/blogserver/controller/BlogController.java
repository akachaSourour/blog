package tn.blogserver.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.blogserver.dto.BlogDto;
import tn.blogserver.dto.BlogRequest;
import tn.blogserver.dto.BlogResponse;
import tn.blogserver.dto.VoteDto;
import tn.blogserver.model.Blog;
import tn.blogserver.service.BlogService;

import java.util.List;

/**
 * @author sourour akacha
 **/
@RestController
@RequestMapping("api/blog")
public class BlogController {
    @Autowired BlogService blogService;

    @GetMapping()
    public List<Blog> getAll() {
        return this.blogService.findAll();
    }

    @PostMapping()
    public Blog createBlog(@RequestBody BlogDto request){
        return this.blogService.createBlog(request);
    }

    @PutMapping()
    public Blog updateBlog(@RequestBody BlogDto request){
        return this.blogService.updateBlog(request);
    }

    @PostMapping("search")
    public BlogResponse getAllBlogsPaginated(@RequestBody BlogRequest request) {
        return this.blogService.getAllBlogsPaginated(request);
    }

    @GetMapping("{id}")
    public Blog findById(@PathVariable String id) {
        return this.blogService.findById(id);
    }

    @PutMapping("up-vote")
    public Blog upVoteBlog(@RequestBody String id){
        return this.blogService.upVote(id);
    }

    @PutMapping("down-vote")
    public Blog downVoteBlog(@RequestBody String id){
        return this.blogService.downVote(id);
    }
}
