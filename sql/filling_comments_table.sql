-- תגובות לפוסטים עבור user_id 1
INSERT INTO `comments` (`comments_id`, `post_id`, `name`, `email`, `body`)
VALUES
(1, 1, 'Alice', 'alice@example.com', 'Great post! Nature is truly amazing.'),
(2, 1, 'Bob', 'bob@example.com', 'I love hiking too! Your experience sounds incredible.'),
(3, 2, 'Charlie', 'charlie@example.com', 'That pizza recipe sounds delicious. Can you share it?'),
(4, 3, 'David', 'david@example.com', 'Learning a new language is such a rewarding challenge. Keep it up!'),
(5, 4, 'Emma', 'emma@example.com', 'Movie night recommendations: Inception, The Shawshank Redemption, and The Dark Knight are must-watches!'),
(6, 5, 'Frank', 'frank@example.com', 'Yoga in the morning is a game-changer. It sets a positive tone for the day.');

-- תגובות לפוסטים עבור user_id 2
INSERT INTO `comments` (`comments_id`, `post_id`, `name`, `email`, `body`)
VALUES
(7, 6, 'Grace', 'grace@example.com', 'Your travel adventures sound incredible!'),
(8, 7, 'Henry', 'henry@example.com', 'I also love getting lost in a good book. What genre do you prefer?'),
(9, 8, 'Ivy', 'ivy@example.com', 'The local food scene is the best way to explore a new place. Any standout dishes?');

-- תגובות לפוסטים עבור user_id 3
INSERT INTO `comments` (`comments_id`, `post_id`, `name`, `email`, `body`)
VALUES
(10, 9, 'Jack', 'jack@example.com', 'The future of AI is fascinating! Any predictions on its impact?'),
(11, 10, 'Karen', 'karen@example.com', 'Fitness is a journey, not a destination. Keep up the hard work!'),
(12, 11, 'Liam', 'liam@example.com', 'Photography is such a powerful way to capture moments. Do you have a favorite subject to photograph?');
