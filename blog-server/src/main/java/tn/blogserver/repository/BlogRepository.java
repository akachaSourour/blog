package tn.blogserver.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import tn.blogserver.model.Blog;


/**
 * @author sourour akacha
 **/
public interface BlogRepository extends MongoRepository<Blog, String> {
    Page<Blog>  findByAuthor(String author, Pageable pageable);
    Page<Blog>  findByAuthorLikeOrContentLikeOrTitleLike(String author, String content, String title, Pageable pageable);
}
