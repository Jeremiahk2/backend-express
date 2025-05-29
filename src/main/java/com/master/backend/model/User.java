package com.master.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name="users")
public class User {

    @Id
    @JsonProperty(value="Id")
    @Column(name="id")
    int id;

    @JsonProperty(value="Username")
    @Column(name="username")
    String username;

    @JsonProperty(value="Email")
    @Column(name="email")
    String email;
}
