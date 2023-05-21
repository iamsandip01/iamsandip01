package com.ecommerce.dealkart.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.dealkart.entity.Cart;
import com.ecommerce.dealkart.entity.User;

import java.util.List;

@Repository
public interface CartDao extends CrudRepository<Cart, Integer > {
    public List<Cart> findByUser(User user);
}
