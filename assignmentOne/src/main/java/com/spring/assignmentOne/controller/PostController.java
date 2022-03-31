package com.spring.assignmentOne.controller;

import com.spring.assignmentOne.domain.Post;
import com.spring.assignmentOne.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Post controller
 * @author Abraham Bisrat
 *
 */

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    PostService postService;

    Post post;

    @GetMapping("/{id}")
    public Post getPostById(@PathVariable int id){
        System.out.println("Get post by id was excuted");
        return postService.getById(id);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/")
    public List<Post> allPosts(){
        System.out.println("All posts was excuted");
        return postService.getAll();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping()
    public boolean newPost(@RequestBody Post newPost){
        return postService.save(newPost);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void updatePost(@PathVariable int id, @RequestBody Post post){
        System.out.println("Update request has been made for record with id : " + id);
        System.out.println("Request body : ");
        System.out.println(post);
        postService.updateById(id, post);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable int id){
        postService.deleteById(id);
    }
}
