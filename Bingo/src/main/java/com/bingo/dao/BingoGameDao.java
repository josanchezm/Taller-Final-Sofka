package com.bingo.dao;

import com.bingo.domain.Bingo;
import org.springframework.data.repository.CrudRepository;

public interface BingoGameDao extends CrudRepository<Bingo,Long> { }
