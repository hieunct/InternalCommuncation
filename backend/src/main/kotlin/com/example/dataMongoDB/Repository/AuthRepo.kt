package com.example.dataMongoDB.Repository
import com.example.dataMongoDB.Schema.Authentication
import org.bson.types.ObjectId
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface AuthRepo : MongoRepository<Authentication, String> {
    fun findByUsername(username : String) : Authentication
    fun existsByUsername(username: String) : Boolean
    fun findById(Id: ObjectId): Authentication
}