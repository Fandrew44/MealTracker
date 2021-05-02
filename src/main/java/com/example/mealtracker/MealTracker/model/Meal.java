package com.example.mealtracker.MealTracker.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="meal")
public class Meal {

    @Id
    private Long id;
    private Instant mealDate;
    private String description;
    @ManyToOne
    private User user;
    @ManyToOne
    private Category category;

}
