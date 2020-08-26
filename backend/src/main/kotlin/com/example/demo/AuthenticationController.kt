package com.example.demo

import com.example.dataMongoDB.Service.AuthService
import com.example.dataMongoDB.Schema.Authentication
import org.bson.types.ObjectId
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.annotation.Id
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@CrossOrigin(origins = ["http://localhost:3000", "http://localhost:4200" ])
@RestController
@RequestMapping("/hieu")
class AuthenticationController {
    @Autowired
    lateinit var authService: AuthService

    @GetMapping("/all")
    fun getAll() : List<Authentication>{
        return authService.findAllUser()
    }

    @PostMapping("/signin")
    fun getUserID(@RequestBody auth: Authentication) : String{
        return if(authService.authenticate(auth.username!!, auth.password!!)){

            authService.findByUsername(auth.username).id.toString()
        }
        else return "Wrong Username or Password"
    }

    @PostMapping("/user/{id}")
    fun getUserByID(@PathVariable("id") id: String): Authentication{
        return authService.findById(ObjectId(id))
    }


    @PostMapping("/signup")
    fun pass(@RequestBody auth: Authentication) : String{
        var userName = authService.existByUsername(auth.username!!)
        var passWord = auth.password!!
        return if(userName) "Username already existed"
        else {
            authService.saveOrUpdateAuthentication(Authentication(auth.username, auth.password))
            return "Registered successfully"
        }
    }

    @PostMapping("/check")
    fun checkForUser(@RequestBody auth: Authentication) : String {
        var userName = authService.existByUsername(auth.username!!)
        return if(userName) ("Username already existed")
        else {
            return "OK"
        }
    }
}