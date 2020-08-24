package com.example.dataMongoDB.Service

import com.example.dataMongoDB.Schema.Post
import org.bson.types.ObjectId
import org.springframework.data.annotation.Id

interface PostService {
    fun findById(id: ObjectId): Post

    fun findByUsername(username: String): ArrayList<Post>

    fun existsById(id: ObjectId): Boolean

    fun findAllPost(): List<Post>

    fun existsByUsername(username: String): Boolean

    fun postCommentById(id: ObjectId, comment: com.example.dataMongoDB.Schema.Comment)

    fun updateLikesById(id: ObjectId, likes: Int)

    fun saveOrUpdatePost(post: Post)
}