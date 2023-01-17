package com.bingo.controller;

import com.bingo.domain.User;
import com.bingo.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controlador de los usuarios (jugadores)
 */
@Slf4j
@CrossOrigin
@RestController

public class UserController {

    /**
     * Manejo de los usuarios
     */
    @Autowired
    private UserService userService;

    /**
     * Raíz del sistema, redirige a /users
     *
     * @return Lista de objetos de clase user
     */
    @GetMapping(path = "/users")
    public List<User> list(){
        return userService.list();
    }

    /**
     * Crear un nuevo usuario
     *
     * @param /usuario Objeto usuario a crear
     * @return Objeto en formato JSON
     */
    @PostMapping(path = "/user")
    public ResponseEntity<User> create(User user) {
        log.info("user creado: {}", user);
        userService.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }
}
