package com.spring.assignmentOne.aspect.logger.service;

import com.spring.assignmentOne.aspect.logger.domain.exception;
import com.spring.assignmentOne.aspect.logger.repo.exceptionRepo;
import org.aspectj.lang.JoinPoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;

@Service
public class exceptionServiceImpl implements exceptionService{

    @Autowired
    exceptionRepo exRepo;

    @Override
    public void save( JoinPoint jp, Throwable throwable ){
        exRepo.save(new exception(
            LocalDate.now(), LocalTime.now(), jp.getSignature().getName(),
            throwable.getClass().getName(), throwable.getMessage()
        ));
    }
}
