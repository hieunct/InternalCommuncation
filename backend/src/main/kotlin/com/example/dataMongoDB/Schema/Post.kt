package com.example.dataMongoDB.Schema

import com.sun.org.apache.xml.internal.security.c14n.implementations.Canonicalizer11_OmitComments
import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Field
import javax.print.attribute.IntegerSyntax

data class Post (var status: String){
    var username: String = "Anonymous"
    var comments: ArrayList<Comment> = ArrayList()
    var likes: Int = 0

    @Id
    lateinit var id : ObjectId
    constructor(status: String, username: String, comments: ArrayList<Comment>) : this(status) {
        this.username = username
        this.comments = ArrayList()
    }

    override fun toString(): String {
        return "$status + /n + $username + /n + $likes + /n $comments"
    }
}