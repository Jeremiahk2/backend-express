package com.master.backend.service;

import com.master.backend.model.User;
import com.master.backend.repository.UserRepository;
import org.springframework.stereotype.Service;


@Service
public class UserService {
    private final UserRepository userRepo;

    public UserService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    public Iterable<User> getAllUsers() {
        return userRepo.findAll();
    }

    public User getByEmail(String email) {
        return userRepo.findByEmail(email).orElseThrow();
    }
}
