# CV-world

# User
GET  "http://localhost:3001/user?email=emailUsuario" --> to get user by email
GET  "http://localhost:3001/user" --> to get all users
POST "http://localhost:3001/user/register" --> to sign up
POST "http://localhost:3001/user/firebase" --> to sign up and log in with firebase
PUT "http://localhost:3001/user/:userId" --> to update user
PUT "http://localhost:3001/user/delete" --> to delete user

# Cv
GET "http://localhost:3001/cv?search=searchValue&sort=sortValue&page=pageValue&limit=limitValue&categories=categoriesValue&languages=languageValue" --> to get all cvs filtered and paginated
GET "http://localhost:3001/cv/:cvId" --> to get a cv by id
POST "http://localhost:3001/cv/:userId" --> to create a cv
PUT "http://localhost:3001/cv/:cvId" --> to update a cv by id
PUT "http://localhost:3001/cv/delete/:cvId" --> to delete a cv by id

# Subscription
GET "http://localhost:3001/subscription" --> to get all subscription
GET "http://localhost:3001/subscription/:subscriptionId" --> to get a subscription by id
POST "http://localhost:3001/subscription" --> to create a subscription
PUT "http://localhost:3001/subscription/:subscriptionId" --> to update a subscription
PUT "http://localhost:3001/subscription/delete/:subscriptionId" --> to delete a subscription

# Category
GET "http://localhost:3001/category" --> to get all category
GET "http://localhost:3001/category/:categoryId" --> to get a category by id
POST "http://localhost:3001/category" --> to create a category
PUT "http://localhost:3001/category/:categoryId" --> to update a category
PUT "http://localhost:3001/category/delete/:categoryId" --> to delete a category

# Language
GET "http://localhost:3001/language" --> to get all language
GET "http://localhost:3001/language/:languageId" --> to get a language by id
POST "http://localhost:3001/language" --> to create a language


# Comment
POST "http://localhost:3001/comment/:cvId/:userId" --> to create a comment
PUT "http://localhost:3001/comment/delete/:commentId" --> to delete a comment

# Payment
POST "http://localhost:3001/create-order/:userId" --> to create a payment
POST "http://localhost:3001/webhook/:userId/:subscriptionId" 



