package com.ecommerce.dealkart.dao;

import org.springframework.data.repository.CrudRepository;

import com.ecommerce.dealkart.entity.OrderDetail;
import com.ecommerce.dealkart.entity.User;

import java.util.List;

public interface OrderDetailDao extends CrudRepository<OrderDetail, Integer> {
    public List<OrderDetail> findByUser(User user);

    public List<OrderDetail> findByOrderStatus(String status);
}
