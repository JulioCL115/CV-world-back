# CV-world

# User
POST "http://localhost:3001/user/login" --> to log in
POST "http://localhost:3001/user/register" --> to sign up
POST "http://localhost:3001/user/firebase" --> to sign up and log in with firebase
PUT "http://localhost:3001/user/delete" --> to delete user
PUT "http://localhost:3001/user/:userId" --> to update user

# Cv
POST "http://localhost:3001/cv/:userId" --> to create a cv
GET "http://localhost:3001/cv?offset=Pagina&limit=limitePorPagina" --> to get all cvs
GET "http://localhost:3001/cv?search=searchValue&offset=Pagina&limit=limitePorPagina" --> to get cvs for searchBar
GET "http://localhost:3001/cv/:cvId" --> to get a cv by id
PUT "http://localhost:3001/cv/:cvId" --> to update a cv by id
PUT "http://localhost:3001/cv/delete/:cvId" --> to delete a cv by id

# Comment
POST "http://localhost:3001/comment/:cvId/:userId" --> to create a comment

# Category
GET "http://localhost:3001/category" --> to get all category

# Language
GET "http://localhost:3001/language" --> to get all language

# Subscription
GET "http://localhost:3001/subscription" --> to get all subscription
POST "http://localhost:3001/subscription/:userId" --> to create a subscription
PUT "http://localhost:3001/subscription/:userId" --> to update a subscription






