package tn.blogserver.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.index.TextIndexed;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * @author sourour akacha
 **/
@Document(collection = "blog")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Blog {
    @Id
    private String id;
    @TextIndexed
    private String title;
    @TextIndexed
    private String content;
    @TextIndexed
    private String author;
    private int upVotes;
    private int downVotes;
}
