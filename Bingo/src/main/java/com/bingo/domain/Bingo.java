package com.bingo.domain;
import lombok.Data;

import javax.persistence.Entity;

import javax.persistence.Table;

import javax.persistence.GeneratedValue;

import javax.persistence.Id;

import javax.persistence.Column;

import javax.persistence.GenerationType;

import java.io.Serializable;

@Data
@Entity
@Table(name = "game")
public class Bingo implements Serializable {
    private static final long  serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_game")
    private Long id;
}
