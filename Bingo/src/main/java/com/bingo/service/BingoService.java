package com.bingo.service;

import com.bingo.dao.BingoGameDao;
import com.bingo.domain.Bingo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Optional;


@Service
public class BingoService implements IBingoService {

    @Autowired
    private BingoGameDao bingoGameDao;

    @Override
    @Transactional(readOnly = true)
    public List<Bingo> list() {
        return  (List<Bingo>) bingoGameDao.findAll();
    }

    @Override
    @Transactional
    public Bingo save(Bingo bingo) {
        return bingoGameDao.save(bingo);
    }


    @Override
    @Transactional
    public Bingo update(Long id, Bingo bingo) {
        bingo.setId(id);
            return bingoGameDao.save(bingo);
    }

    @Override
    @Transactional
    public void delete(Bingo bingo) {
        bingoGameDao.delete(bingo);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Bingo> findUser(Bingo bingo) {
        return  bingoGameDao.findById(bingo.getId());
    }
}
