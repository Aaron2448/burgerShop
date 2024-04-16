package com.marinaldo.model;

import java.text.SimpleDateFormat;
import java.util.Date;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Table(name = "orders")

public class Order {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(nullable = false)
    private String order_description;

    @Column(nullable = false)
    private String day;

    @Column(nullable = false)
    private String month;


    @Column(nullable = false)
    private String year;


    @Column(nullable = false)
    private String time;

    @Column(nullable = false)
    private double total;


}