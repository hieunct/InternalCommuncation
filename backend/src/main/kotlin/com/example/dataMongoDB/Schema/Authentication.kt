package com.example.dataMongoDB.Schema
import org.bson.types.ObjectId;
import org.omg.CORBA.Object
import org.springframework.data.annotation.Id


data class Authentication(val username: String?) {
    lateinit var password : String
    constructor(username: String?, password: String?) : this(username) {
        this.password = password!!
    }


    @Id
    lateinit var id : ObjectId
    override fun toString(): String {
        return "$username + /n + $password"
    }
}