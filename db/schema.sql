DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL
    -- role_id VARCHAR(30) NOT NULL,
);

CREATE TABLE department (
    dep_id INT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

-- source db/db.sql;
-- source db/schema.sql;
-- source db/seeds.sql;