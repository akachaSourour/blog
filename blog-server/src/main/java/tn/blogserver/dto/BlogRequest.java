package tn.blogserver.dto;

import lombok.Getter;
import lombok.Setter;

/**
 * @author sourour akacha
 **/
@Getter
@Setter
public class BlogRequest {
    private int page;
    private int size;
    private String textSearch;
}
