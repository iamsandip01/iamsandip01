package com.ecommerce.dealkart.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.dealkart.entity.User;

@Repository
public interface UserDao extends CrudRepository<User, String> {
}
