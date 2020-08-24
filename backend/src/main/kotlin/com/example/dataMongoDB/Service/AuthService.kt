package com.example.dataMongoDB.Service

import com.example.dataMongoDB.Schema.Authentication

interface AuthService {
    fun findAllUser() : List<Authentication>

    fun findByUsername(username : String) : Authentication

    fun saveOrUpdateAuthentication(authentication: Authentication)

    fun existByUsername(username: String) : Boolean

    fun authenticate(username: String, password: String) : Boolean
}

