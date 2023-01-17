package com.bingo.service;

import com.bingo.domain.BingoBall;

import java.util.List;
import java.util.Optional;


public interface IBingoBallService {


    /**
     * Listar las balotas
     *
     * @return lista de Objetos de tipo balota
     *
     */
    public List<BingoBall> list();

    /**
     * Guardar las balotas
     *
     * @param /balota Objeto de balota a guardar
     * @return Objeto de balota guardado
     *
     */
    public BingoBall save(BingoBall bingoBall);

    /**
     * Actualiza la tupla completa de una balota
     *
     * @param id Identificador de la balota a actualizar
     * @param /balota Objeto de balota a actualizar
     * @return Objeto de balota actualizada
     *
     */
    public BingoBall update(Long id, BingoBall bingoBall);

    /**
     * Elimina una tupla completa de una balota
     *
     * @param /balota Objeto de balota a eliminar
     * @return Objeto de balota eliminado
     *
     */
    public void  delete(BingoBall bingoBall);

    public Optional<BingoBall> findUser(BingoBall bingoBall);

}
