package com.example.mealtracker.MealTracker.controller;

import com.example.mealtracker.MealTracker.model.Category;
import com.example.mealtracker.MealTracker.repository.CategoryRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api") // prefix for all subsequent endpoints
public class CategoryController {
    private CategoryRepository categoryRepository;

    public CategoryController(CategoryRepository categoryRepository) {
        super();
        this.categoryRepository = categoryRepository;
    }

    @GetMapping("/categories")
    public Collection<Category> getAllCategories() {
        //Hibernate abstracts away SQL
        return categoryRepository.findAll(); // equivalent to: SELECT * FROM category
        // specifically: select category0_.id as id1_0_, category0_.name as name2_0_ from category category0_
    }

    // specify a variable as an API Parameter by surrounding it with CURLY BRACES {}
    // must also add as an argument with @PathVariable annotation
    @GetMapping("/category/{id}")
    ResponseEntity<?> getCategoryById(@PathVariable Long id) {
        Optional<Category> category = categoryRepository.findById(id);
        // a lambda function that takes the category and returns it as the body of the API Response (if present)
        return category.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/category")
    // @Validated ensures Request is valid
    // @RequestBody indicates the parameter should be "bound to the body of the web request"
    // URISyntaxException thrown when data is incorrectly formatted
    ResponseEntity<Category> createCategory(@Validated @RequestBody Category category) throws URISyntaxException {
        // equivalent to SQL INSERT command
        Category result = categoryRepository.save(category);
        return ResponseEntity.created(new URI("/api/category" + result.getId())).body(result);
    }

    @PutMapping("/category")
    ResponseEntity<Category> updateCategoryById(@Validated @RequestBody Category category) {
        // JPA automatically understands to update a pre-existing record if Method is PUT
        // - determines which record to update based on PRIMARY KEY (I THINK)
        Category result = categoryRepository.save(category);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/category/{id}")
    ResponseEntity<Category> deleteCategoryById(@PathVariable Long id) {
        categoryRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
