package com.example.dataMongoDB

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class AuthServiceImpl : AuthService{
    @Autowired
    lateinit var authRepo : AuthRepo
    override fun findAllUser(): List<Authentication> = authRepo.findAll()

    override fun findByUsername(username: String): Authentication = authRepo.findByUsername(username)

    override fun saveOrUpdateAuthentication(authentication: Authentication) {
        authRepo.save(authentication)
    }

    override fun existByUsername(username: String) = authRepo.existsByUsername(username)

    override fun authenticate(username: String, password: String) : Boolean{
        return if (existByUsername(username)) {
            password == findByUsername(username).password
        } else {
            false
        }
    }
}