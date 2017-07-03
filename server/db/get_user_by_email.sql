SELECT first_name, last_name, email, password
FROM users
WHERE email = $1;