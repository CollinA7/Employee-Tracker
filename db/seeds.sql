-- INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
-- VALUES
--     (1, "Charles", "Smith", 1, NULL),
--     (2, 'Samuel', 'Delany', 3, 1),
--     (3, 'Tony', 'Duvert', 3, 20),
--     (4, 'Dennis', 'Cooper', 2, 1),
--     (5, 'Monica', 'Bellucci', 4, 9),
--     (6, 'Samuel', 'Johnson', 1, 20),
--     (7, 'John', 'Dryden', 1, 9),
--     (8, 'Alexander', 'Pope', 1, 20),
--     (9, 'Lionel', 'Johnson',1, NULL),
--     (10, 'Aubrey', 'Beardsley', 2, 9),
--     (11, 'Tulse', 'Luper', 1, 20),
--     (12, 'William', 'Morris', 2, 9),
--     (13, 'George', 'Shaw', 3, 20),
--     (14, 'Arnold', 'Bennett', 3, 1),
--     (15, 'Algernon', 'Blackwood', 1, 1),
--     (16, 'Rhoda', 'Broughton', 4, 20),
--     (17, 'Hart', 'Crane', 2, 1),
--     (18, 'Vitorio', 'DeSica', 3, 9),
--     (19, 'Wilkie', 'Collins', 2, 9),
--     (20, 'Elizabeth', 'Gaskell', 1, NULL);

INSERT INTO department (id, name)
VALUES 
    (1, "Sales"),
    (2, "Engineering"),
    (3, "Finance"),
    (4, "Legal");
    
INSERT INTO role (id, title, salary, department_id)
VALUES
    (1, 'Sales Lead', 90000, 1),
    (2, 'Salesperson', 60000, 1),
    (3, 'Lead Engineer', 95000, 2),
    (4, 'Software Enginneer', 100000, 2),
    (5, 'Account Manager', 120000, 3),
    (6, 'Accountant', 130000, 3),
    (7, 'Lawyer', 1000000, 4);