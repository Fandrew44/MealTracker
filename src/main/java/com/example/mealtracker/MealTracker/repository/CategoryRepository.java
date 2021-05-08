package com.example.mealtracker.MealTracker.repository;

import com.example.mealtracker.MealTracker.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    Category findByName(String name);
}
