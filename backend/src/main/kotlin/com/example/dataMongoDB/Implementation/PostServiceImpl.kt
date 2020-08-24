package com.example.dataMongoDB.Implementation

import com.example.dataMongoDB.Repository.PostRepo
import com.example.dataMongoDB.Schema.Comment
import com.example.dataMongoDB.Schema.Post
import com.example.dataMongoDB.Service.PostService
import org.bson.types.ObjectId
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.annotation.Id
import org.springframework.stereotype.Service

@Service
class PostServiceImpl: PostService {
    @Autowired
    lateinit var postRepo: PostRepo

    override fun findById(id: ObjectId): Post{
        return postRepo.findById(id)
    }

    override fun findByUsername(username: String): ArrayList<Post> {
        return postRepo.findByUsername(username)
    }

    override fun existsById(id: ObjectId): Boolean {
        return postRepo.existsById(id)
    }

    override fun findAllPost(): List<Post> {
        return postRepo.findAll()
    }

    override fun existsByUsername(username: String): Boolean {
        return postRepo.existsByUsername(username)
    }

    override fun postCommentById(id: ObjectId, comment: Comment) {
        var postUpdate = postRepo.findById(id)
        postUpdate.comments.add(comment)
        saveOrUpdatePost(postUpdate)
    }

    override fun saveOrUpdatePost(post: Post) {
        postRepo.save(post)
    }

    override fun updateLikesById(id: ObjectId, likes: Int) {
        var postUpdate = postRepo.findById(id)
        postUpdate.likes = likes
        saveOrUpdatePost(postUpdate)
    }
}