package com.example.dataMongoDB.Schema

import org.bson.types.ObjectId
import org.omg.CORBA.Object
import org.springframework.data.annotation.Id

data class Comment (val status: String, val username: String){
    @Id
    lateinit var id : ObjectId
}