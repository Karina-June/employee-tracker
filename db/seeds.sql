INSERT INTO department (department_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES  ("Sales Lead", 120000, 01),
        ("Salesperson", 90000, 01),
        ("Lead Engineer", 180000, 02),
        ("Software Engineer", 130000, 02),
        ("Account Manager", 155000, 03),
        ("Accountant", 110000, 03),
        ("Legal Team Lead", 350000, 04)
        ("Lawyer", 225000, 04);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Aragorn", "Strider", 1, NULL),
        ("Legolas", "Green", 3, NULL),
        ("Gamil", "Zirak", 5, NULL),
        ("Gandalf", "White", 7, NULL);

SELECT * FROM employee;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Frodo", "Baggins", 2, 1),
        ("Samwise", "Gamgee", 4, 3),
        ("Meriadoc", "Brandybuck", 6, 5),
        ("Peregrin", "Took", 8, 7)


