package com.bingo.dao;

import com.bingo.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserDao extends JpaRepository<User,Long> { }
