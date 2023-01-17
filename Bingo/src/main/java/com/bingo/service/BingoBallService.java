package com.bingo.service;

import com.bingo.dao.BingoBallDao;
import com.bingo.domain.BingoBall;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


@Service
public class BingoBallService implements IBingoBallService {

    /**
     * Inyectando el usuario DAO
     */
    @Autowired
    private BingoBallDao bingoBallDao;

    @Override
    @Transactional(readOnly = true)
    public List<BingoBall> list() {
        return  (List<BingoBall>) bingoBallDao.findAll();
    }

    @Override
    @Transactional
    public BingoBall save(BingoBall bingoBall) {
        return bingoBallDao.save(bingoBall);
    }

    @Override
    @Transactional
    public BingoBall update(Long id, BingoBall bingoBall) {
        bingoBall.setId(id);
            return bingoBallDao.save(bingoBall);
    }

    @Override
    @Transactional
    public void delete(BingoBall bingoBall) {

        bingoBallDao.delete(bingoBall);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<BingoBall> findUser(BingoBall bingoBall) {
        return  bingoBallDao.findById(bingoBall.getId());
    }
}
