package com.example.dataMongoDB
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface AuthRepo : MongoRepository<Authentication, String> {
    fun findByUsername(username : String) : Authentication
    fun existsByUsername(username: String) : Boolean
}