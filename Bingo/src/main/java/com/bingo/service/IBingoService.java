package com.bingo.service;

import com.bingo.domain.Bingo;
import java.util.List;
import java.util.Optional;


public interface IBingoService {


    /**
     * Listar los juegos
     *
     * @return lista de Objetos de tipo juego
     *
     */
    public List<Bingo> list();

    /**
     * Guardar los juegos
     *
     * @param /juego Objeto de juego a guardar
     * @return Objeto de juego guardado
     *
     */
    public Bingo save(Bingo bingo);

    /**
     * Actualiza la tupla completa de un juego
     * @param id Identificador del juego a actualizar
     * @param// Objeto de juego a actualizar
     * @return Objeto de juego actualizado
     *
     */
    public Bingo update(Long id, Bingo bingo);

    /**
     * Elimina una tupla completa de un juego
     *
     * @param /Objeto de juego a eliminar
     * @return Objeto de juego eliminado
     *
     */
    public void  delete(Bingo bingo);


    public Optional<Bingo> findUser(Bingo bingo);




}
