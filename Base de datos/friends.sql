/*SELECT users.first_name, users.last_name, friendships.user_id , friendships.friend_id
FROM users 
LEFT JOIN friendships ON users.id = friendships.user_id 
LEFT JOIN users as user2 ON friendships.friend_id = users.id;*/

-- select * from friendships;

/*SELECT users.first_name AS usuario_nom, users.last_name AS Usuario_ape, user2.first_name AS amigo_nom, user2.last_name AS amigo_ape
FROM users
JOIN friendships
ON users.id = friendships.user_id
JOIN users AS user2
ON friendships.friend_id = user2.id;*/

/* users - friendships -user2 */

/*SELECT users.first_name AS usuario_nom, users.last_name AS Usuario_ape, user2.first_name AS amigo_nom, user2.last_name AS amigo_ape
FROM users
JOIN friendships
ON users.id = friendships.user_id
JOIN users AS user2
ON friendships.friend_id = user2.id
WHERE friendships.friend_id = 4;*/

/*SELECT friendships.user_id, users.first_name, users.last_name, COUNT(friendships.friend_id) AS total_amigos
FROM users
JOIN friendships
ON users.id = friendships.user_id
GROUP BY friendships.user_id
ORDER BY users.first_name*/

/*SELECT user2.first_name, user2.last_name FROM users
JOIN friendships
ON users.id = friendships.user_id
JOIN users AS user2
ON friendships.friend_id = user2.id
WHERE users.id = 2
Order by user2.first_name;
*/

/*DELETE FROM friendships 
WHERE user_id = 2 AND friend_id = 5;
*/

/*SELECT users.first_name AS Nombre, users.last_name AS Apellido, user2.first_name AS Nombre_amigo, user2.last_name AS apellido_amigo
FROM users
JOIN friendships
ON users.id = friendships.user_id
JOIN users AS user2
ON friendships.friend_id = user2.id;
*/








