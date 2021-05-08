application.properties
- A file that contains all *configurations* for the project
    - e.g. The PORT used by the application
- Automatically loaded upon application starting

Enums in Spring Boot
- When declaring a field which is a type of Enum then it must be annotated with *@Enumerated*
    - The annotation can have 2 EnumType values:
    1. **Ordinal** - Value of the Enum field Column in the DB will be an integer equal to the index
       of the Enum value declaration
    2. **String** - Value of the Enum field Column will be the literal value of the Enum value
        - Good practice to use String
    - **NOTE**: When the value of the field is NOT one of the declared values in the Enum, then 
            the API Request/JPA Repository Query will return a 400 ERROR Status
            
Hibernate Association Annotations
- **@oneToMany** - 1 row in the current table is mapped to multiple rows in the specified table
    - **@manyToOne** is simply the vice versa
- **NOTE:** Used to ABSTRACT away SQL queries & database complexities
- **NOTE:** When connecting related/referenced data, use the referenced record's **PRIMARY KEY**

Spring JPA Implementation
- We will create a Repository through an **Interface** for EACH Table
    - Interface will EXTEND *JpaRepository* and specify the TYPE of *Record* & *Primary Key* being stored
- **NOTE:** Allows us to MAP a Java Class --> a Database Table
- Read Query Method names follow the STRUCTURE of: *findBy<field name>*


**IMPORTANT NOTE:** **Hibernate** is a *JPA Implementation*
- Go to **localhost/<port>/h2-console** to directly work with the H2 Database

ResponseEntity
- Represents the ENTIRE **HTTP Response** of an API call
    - Status Code
    - Body
    - Header
- Often used to *configure* the Response to return only specific information

