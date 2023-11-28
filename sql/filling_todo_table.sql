-- Todo items עבור user_id 1
INSERT INTO `todo` (`todo_id`, `user_id`, `title`, `completed`, `date`)
VALUES
('1a', 1, 'Complete Nature Journal', 0, CURRENT_TIMESTAMP),
('2a', 1, 'Prepare Healthy Lunch', 1, CURRENT_TIMESTAMP),
('3a', 1, 'Read Chapter 5 of Book', 0, CURRENT_TIMESTAMP),
('4a', 1, 'Attend Yoga Class', 0, CURRENT_TIMESTAMP);
('5a', 1, 'Explore Local Art Gallery', 0, CURRENT_TIMESTAMP),
('6a', 1, 'Finish Coding Project', 1, CURRENT_TIMESTAMP),
('7a', 1, 'Write Blog Post', 0, CURRENT_TIMESTAMP);

-- Todo items עבור user_id 2
INSERT INTO `todo` (`todo_id`, `user_id`, `title`, `completed`, `date`)
VALUES
('1b', 2, 'Explore Local Art Gallery', 0, CURRENT_TIMESTAMP),
('2b', 2, 'Finish Coding Project', 1, CURRENT_TIMESTAMP),
('3b', 2, 'Write Blog Post', 0, CURRENT_TIMESTAMP);

-- Todo items עבור user_id 3
INSERT INTO `todo` (`todo_id`, `user_id`, `title`, `completed`, `date`)
VALUES
('1c', 3, 'Research AI Trends', 0, CURRENT_TIMESTAMP),
('2c', 3, 'Run 5 Miles', 1, CURRENT_TIMESTAMP),
('3c', 3, 'Edit Photography Portfolio', 0, CURRENT_TIMESTAMP);

-- Todo items עבור user_id 4
INSERT INTO `todo` (`todo_id`, `user_id`, `title`, `completed`, `date`)
VALUES
('1d', 4, 'Plan Family Dinner', 0, CURRENT_TIMESTAMP),
('2d', 4, 'Complete Work Presentation', 1, CURRENT_TIMESTAMP),
('3d', 4, 'Buy Groceries', 0, CURRENT_TIMESTAMP);
