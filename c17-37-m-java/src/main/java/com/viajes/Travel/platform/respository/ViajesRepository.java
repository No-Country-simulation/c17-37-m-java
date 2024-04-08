package com.viajes.Travel.platform.respository;


import com.viajes.Travel.platform.entity.Viajes;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ViajesRepository extends JpaRepository<Viajes,Integer> {

    List<Viajes> findByPrice(Double price);
    
   List<Viajes> findByDestiny(String destiny);
   
   List<Viajes> findByOriginsAndDestiny(String origins,String destiny);
   
    

}
