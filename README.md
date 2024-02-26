# CV-world

# User
GET  "http://localhost:3001/user" --> to get all users 
GET  "http://localhost:3001/user/:userId" --> to get user by id
GET  "http://localhost:3001/dashboard/user" --> to get all users dashboard (requires verify Token)
GET  "http://localhost:3001/user/dashboard/:userId" --> to get user by id dashboard (requires verify Token)
POST "http://localhost:3001/user/register" --> to sign up
POST "http://localhost:3001/user/firebase" --> to sign up and log in with firebase
PUT "http://localhost:3001/user/:userId" --> to update user (requires verify Token)
PUT "http://localhost:3001/user/delete" --> to delete user (requires verify Token)

# Cv
GET "http://localhost:3001/cv?search=searchValue&sort=sortValue&page=pageValue&limit=limitValue&categories=categoriesValue&languages=languageValue" --> to get all cvs filtered and paginated
GET "http://localhost:3001/cv/:cvId" --> to get a cv by id
GET "http://localhost:3001/cv/dashboard" --> to get all cvs dashboard (requires verify Token)
GET "http://localhost:3001/cv/dashboard/:cvId" --> to get a cv by id dashboard (requires verify Token)
POST "http://localhost:3001/cv/:userId" --> to create a cv (requires verify Token)
PUT "http://localhost:3001/cv/:cvId" --> to update a cv by id
PUT "http://localhost:3001/cv/updateView/:cvId" --> to update views 
PUT "http://localhost:3001/cv/delete/:cvId" --> to delete a cv by id (requires verify Token)

# Subscription
GET "http://localhost:3001/subscription" --> to get all subscription
GET "http://localhost:3001/subscription/:subscriptionId" --> to get a subscription by id
GET "http://localhost:3001/subscription/dashboard" --> to get all subscription dashboard (requires verify Token)
GET "http://localhost:3001/subscription/dashboard/:subscriptionId" --> to get a subscription by id dashboard (requires verify Token)
POST "http://localhost:3001/subscription" --> to create a subscription (requires verify Token)
PUT "http://localhost:3001/subscription/:subscriptionId" --> to update a subscription (requires verify Token)
PUT "http://localhost:3001/subscription/delete/:subscriptionId" --> to delete a subscription (requires verify Token)
PUT "http://localhost:3001/subscription/restore/:subscriptionId" --> to restore a subscription (requires verify Token)

# Category
GET "http://localhost:3001/category" --> to get all category
GET "http://localhost:3001/category/:categoryId" --> to get a category by id
GET "http://localhost:3001/category/dashboard" --> to get all category dashboard (requires verify Token)
GET "http://localhost:3001/category/dashboard/:categoryId" --> to get a category by id dashboard (requires verify Token)
POST "http://localhost:3001/category" --> to create a category (requires verify Token)
PUT "http://localhost:3001/category/:categoryId" --> to update a category (requires verify Token)
PUT "http://localhost:3001/category/delete/:categoryId" --> to delete a category (requires verify Token)
PUT "http://localhost:3001/category/restore/:categoryId" --> to restore a category (requires verify Token)

# Language
GET "http://localhost:3001/language" --> to get all language 
GET "http://localhost:3001/language/:languageId" --> to get a language by id
GET "http://localhost:3001/language/dashboard" --> to get all language dashboard (requires verify Token)
GET "http://localhost:3001/language/dashboard/:languageId" --> to get a language by id dashboard (requires verify Token)
POST "http://localhost:3001/language" --> to create a language (requires verify Token)
PUT "http://localhost:3001/language/:languageId" --> to update a language (requires verify Token)
PUT "http://localhost:3001/language/delete/:languageId" --> to delete a language (requires verify Token)
PUT "http://localhost:3001/language/restore/:languageId" --> to restore a language (requires verify Token)

# Comment
GET "http://localhost:3001/comment" --> to get all comments
GET "http://localhost:3001/comment/:commentId" --> to get comment by Id
GET "http://localhost:3001/comment/dashboard" --> to get all comments dashboard (requires verify Token)
GET "http://localhost:3001/comment/dashboard/:commentId" --> to get comment by Id dashboard (requires verify Token)
POST "http://localhost:3001/comment/:cvId/:userId" --> to create a comment (requires verify Token)
PUT "http://localhost:3001/comment/delete/:commentId" --> to delete a comment (requires verify Token)
PUT "http://localhost:3001/comment/restore/:commentId" --> to restore a comment (requires verify Token)

# Payment
POST "http://localhost:3001/create-order/:userId" --> to create a payment (requires verify Token)



