package com.garyjonesconsulting.todoapp.repositories;

import com.garyjonesconsulting.todoapp.models.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
