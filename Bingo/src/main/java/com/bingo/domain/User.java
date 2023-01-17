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
@Table(name = "user")
public class User implements Serializable {
    private static final long  serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_player")
    private Long id;

}
