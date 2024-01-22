INSERT INTO department (name)
VALUES ("Legal"),
       ("Finance"),
       ("HR"),
       ("Marketing"),
       ("Executive"),

INSERT INTO role (title, salary, department_id )
VALUES ("Legal Advisor", 140000, 1),
       ("Financial Advisor", 90000, 2),
       ("Human Resource Assistant", 90000, 3),
       ("Manager", 130000, 4),
       ("CEO", 110000, 5),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ajax", "Antoniov", 3, 4),
       ("Zhongli", "Cun", 2, 4),
       ("Kaveh", "Khayyami", 1, 4),
       ("Al", "Haitham", 4, 5),
       ("Nahida", "Kusanali", 5, NULL),
       