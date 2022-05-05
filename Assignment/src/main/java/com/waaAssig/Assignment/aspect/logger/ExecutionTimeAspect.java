package com.waaAssig.Assignment.aspect.logger;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.time.LocalTime;

@Aspect
@Component
public class ExecutionTimeAspect {

    @Around("@annotation(ExcutionTime)")
    public void timeLogger(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
        LocalTime beforeExecution = LocalTime.now();
        proceedingJoinPoint.proceed();
        LocalTime afterExecution = LocalTime.now();

        System.out.println("|||**  Execution time details  **|||"
                + "\n" + beforeExecution
                + "\n" + afterExecution
                + "\n" + "Time elapsed while executing -->> "
                + proceedingJoinPoint.getSignature().getName()
                + " <<--  : "
                + Duration.between(beforeExecution, afterExecution).toMillis()
                + "ms");
    }
}
