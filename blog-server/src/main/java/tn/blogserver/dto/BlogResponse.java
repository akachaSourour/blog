package tn.blogserver.dto;

import lombok.Getter;
import lombok.Setter;
import tn.blogserver.model.Blog;

import java.util.List;

/**
 * @author sourour akacha
 **/
@Getter
@Setter
public class BlogResponse {
    private List<Blog> data;
    private Long totalElements;
    private int totalPages;
}
