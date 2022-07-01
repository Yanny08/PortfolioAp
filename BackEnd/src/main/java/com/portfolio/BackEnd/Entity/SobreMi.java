package com.portfolio.BackEnd.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class SobreMi {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    private String link1;
    
    
    private String link2;
    
    
    private String link3;
    
    private String descripcion;
    
    
    private String descargaCv;
    
    
    private String img;
    
}
