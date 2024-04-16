package com.marinaldo.controller;

import java.time.LocalDate;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.marinaldo.model.Order;
import com.marinaldo.repository.OrdersRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/orders/")
public class OrdersController {

    private final OrdersRepository ordersRepository;
   

    public OrdersController(OrdersRepository ordersRepository) {
        
    	this.ordersRepository = ordersRepository;
    	
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/create")
    public String createOrder(@RequestBody Order order) {
    	
    	System.out.println(order.getTotal());
        Order newOrder = new Order();  
        newOrder.setOrder_description(order.getOrder_description());
        newOrder.setTime(order.getTime());
        newOrder.setDay(order.getDay());
        newOrder.setMonth(order.getMonth());
        newOrder.setYear(order.getYear()); 	
        newOrder.setTotal(order.getTotal());
        System.out.println(order.toString());
    	ordersRepository.save(order);
        
    	return "Successful add";
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/getByDate")
    public ResponseEntity<List<Order>> getOrdersByDate(@RequestParam String date) {
        LocalDate localDate = LocalDate.parse(date);
        List<Order> orders = ordersRepository.findOrdersByDate(String.valueOf(localDate.getDayOfMonth()), String.valueOf(localDate.getMonthValue()), String.valueOf(localDate.getYear()));
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }
    
}
