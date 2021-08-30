package tn.blogserver.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author sourour akacha
 **/
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BlogDto {
    private String id;
    private String title;
    private String content;
    private String author;
    private int upVotes;
    private int downVotes;
}
