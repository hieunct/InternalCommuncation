package com.example.dataMongoDB

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

interface AuthService {
    fun findAllUser() : List<Authentication>

    fun findByUsername(username : String) : Authentication

    fun saveOrUpdateAuthentication(authentication: Authentication)

    fun existByUsername(username: String) : Boolean

    fun authenticate(username: String, password: String) : Boolean
}

