package com.example.dataMongoDB.Repository

import com.example.dataMongoDB.Schema.Post
import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface PostRepo : MongoRepository<Post, String> {
    fun findById(id: ObjectId): Post
    fun findByUsername(username: String): ArrayList<Post>
    fun existsByUsername(username: String): Boolean
    fun existsById(id: ObjectId): Boolean
}