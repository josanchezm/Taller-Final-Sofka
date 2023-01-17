package com.bingo.controller;

import com.bingo.domain.Bingo;
import com.bingo.service.BingoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

/**
 * Controlador para el juego de Bingo
 */
@Slf4j
@CrossOrigin
@RestController

public class bingoController {
    /**
     * Manejo de juegos
     */
    @Autowired
    private BingoService bingoService;

    /**
     * Raíz del sistema, redirige a /games
     *
     * @return Lista de objetos de clase game
     */
    @GetMapping(path = "/games")
    public List<Bingo> list(){
        return bingoService.list();
    }

    /**
     * Crear un juego nuevo
     *
     * @param /juego Objeto juego a crear
     * @return Objeto en formato JSON
     */
    @PostMapping(path = "/game")
    public ResponseEntity<Bingo> create(Bingo bingo) {
        log.info("game creado: {}", bingo);
        bingoService.save(bingo);
        return new ResponseEntity<>(bingo, HttpStatus.CREATED);
    }
}
