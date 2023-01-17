package com.bingo.dao;

import com.bingo.domain.BingoBall;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BingoBallDao extends JpaRepository<BingoBall,Long> { }
