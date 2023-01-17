package com.bingo.service;

import com.bingo.domain.User;

import java.util.List;
import java.util.Optional;


public interface IUserService {


    /**
     * Listar los usuarios
     *
     * @return lista de Objetos de tipo User
     *
     */
    public List<User> list();

    /**
     * Guardar los usuarios
     *
     * @param /objeto de usuario a guardar
     * @return Objeto de usuario guardado
     *
     */
    public User save(User user);


    public Optional<User> findUser(User user);



}
