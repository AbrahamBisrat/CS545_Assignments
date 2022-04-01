package com.spring.assignmentOne.repo;

import com.spring.assignmentOne.domain.Users;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UsersRepo extends CrudRepository<Users, Long> {

    List<Users> findAll();

    Optional<Users> findById(Long id);

    // get a users posts
}
