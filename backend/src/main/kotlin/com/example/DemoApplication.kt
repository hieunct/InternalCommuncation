package com.example

import com.example.config.CorsConfig
import com.example.dataMongoDB.Authentication
import com.example.demo.AuthenticationController
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.ComponentScan
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories

@SpringBootApplication
@ComponentScan("com.example.dataMongoDB",basePackageClasses = [AuthenticationController::class, CorsConfig::class] )
@EnableMongoRepositories(basePackages = ["com.example.dataMongoDB"])
//@EnableJpaRepositories("com.example.dataMongoDB")
class DemoApplication

fun main(args: Array<String>) {
	var hieu: Authentication = Authentication("hieu")
	print(hieu.username)
	runApplication<DemoApplication>(*args)
	print("Connected successfully at 8080")
}
