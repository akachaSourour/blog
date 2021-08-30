package tn.blogserver.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import tn.blogserver.dto.BlogDto;
import tn.blogserver.dto.BlogRequest;
import tn.blogserver.dto.BlogResponse;
import tn.blogserver.dto.VoteDto;
import tn.blogserver.model.Blog;
import tn.blogserver.repository.BlogRepository;

import java.util.List;

/**
 * @author sourour akacha
 **/
@Service
public class BlogService {
    @Autowired
    private BlogRepository blogRepository;

    private Blog mapBlog(BlogDto request) {
        Blog blog = new Blog();
        blog.setAuthor(request.getAuthor());
        blog.setContent(request.getContent());
        blog.setDownVotes(0);
        blog.setTitle(request.getTitle());
        blog.setUpVotes(0);
        return blog;

    }

    public Blog createBlog(BlogDto request){
        Blog blog = mapBlog(request);
        return this.blogRepository.save(blog);
    }

    public Blog updateBlog(BlogDto request){
        Blog blog = blogRepository.findById(request.getId()).get();
        blog.setAuthor(request.getAuthor());
        blog.setContent(request.getContent());
        blog.setDownVotes(request.getDownVotes());
        blog.setTitle(request.getTitle());
        blog.setUpVotes(request.getUpVotes());
        return this.blogRepository.save(blog);

    }

    public List<Blog> findAll() {
        return blogRepository.findAll();
    }

    public BlogResponse getAllBlogsPaginated(BlogRequest request){
        Pageable pageable = PageRequest.of(request.getPage() ,request.getSize());
        BlogResponse response = new BlogResponse();
        if (request.getTextSearch() == null ) {
            Page<Blog> page = this.blogRepository.findAll(pageable);
            response.setData(page.getContent());
            response.setTotalElements(page.getTotalElements());
            response.setTotalPages(page.getTotalPages());
            return  response;
        }
        Page<Blog> page = this.blogRepository.findByAuthorLikeOrContentLikeOrTitleLike(request.getTextSearch(), request.getTextSearch(), request.getTextSearch(), pageable);
        response.setData(page.getContent());
        response.setTotalElements(page.getTotalElements());
        response.setTotalPages(page.getTotalPages());
        return response;
    }

    public Blog findById(String id){
        return this.blogRepository.findById(id).get();
    }

    public Blog upVote(String id){
        Blog blog = blogRepository.findById(id).get();
        blog.setUpVotes(blog.getUpVotes() + 1);
        return this.blogRepository.save(blog);

    }

    public Blog downVote(String id){
        Blog blog = blogRepository.findById(id).get();
        blog.setDownVotes(blog.getDownVotes() + 1);
        return this.blogRepository.save(blog);

    }
}
