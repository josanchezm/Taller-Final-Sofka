package com.bingo.controller;

import com.bingo.domain.BingoBall;
import com.bingo.service.BingoBallService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

/**
 * Controlador de las balotas
 */
@Slf4j
@CrossOrigin
@RestController
public class bingoBallController {

    /**
     * Manejo de la balota
     */
    @Autowired
    private BingoBallService bingoBallService;

    /**
     * Raíz del sistema, redirige a balotas
     *
     * @return Lista de objetos de clase balota
     */
    @GetMapping(path = "/balls")
    public List<BingoBall> list(){
        return bingoBallService.list();
    }

    /**
     * Crear una balota
     *
     * @param /balota Objeto balota a crear
     * @return Objeto en formato JSON
     */
    @PostMapping(path = "/ball")
    public ResponseEntity<BingoBall> create(BingoBall bingoBall) {
        log.info("balota creada: {}", bingoBall);
        bingoBallService.save(bingoBall);
        return new ResponseEntity<>(bingoBall, HttpStatus.CREATED);
    }
}
