DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

-- CREATE TABLE employee (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     first_name VARCHAR(30) NOT NULL,
--     last_name VARCHAR(30) NOT NULL,
--     -- CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id),
--     -- CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id)
-- );

-- source db/db.sql;
-- source db/schema.sql;
-- source db/seeds.sql;
-- jfuai9-iqyxP-prbTy