package com.waaAssig.Assignment.aspect.logger.repo;

import com.waaAssig.Assignment.aspect.logger.domain.exception;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface exceptionRepo extends CrudRepository<exception, Long> {
}
