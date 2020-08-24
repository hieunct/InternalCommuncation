package com.example.demo

import com.example.dataMongoDB.Schema.Comment
import com.example.dataMongoDB.Schema.Post
import com.example.dataMongoDB.Service.PostService
import org.bson.types.ObjectId
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.annotation.Id
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["http://localhost:3000", "http://localhost:4200" ])
@RestController
@RequestMapping("/post")
class PostController {
    @Autowired
    lateinit var postService: PostService

    @GetMapping("/")
    fun getAllPost() : List<Post> {
        return postService.findAllPost()
    }

    @PostMapping("/")
    fun post(@RequestBody post: Post) : String{
        postService.saveOrUpdatePost(post)
        return "Posted"
    }

    @PostMapping("/{postID}/comments")
    fun postComment(@PathVariable("postID") postID: ObjectId, @RequestBody comment: Comment) : String{
        postService.postCommentById(postID , comment)
        return "Comment posted"
    }

    @PostMapping("/{postID}/likes")
    fun checkForUser(@PathVariable("postID") postID: ObjectId, likes: Int) {
        postService.updateLikesById(postID, likes)
    }
}