//Hashing -> we do hashing of password using becrypt package
//Hashing vs encryption -> hashing is one way process and encryption is two way process
//if we hash password -> we cannot get origional password
//if we encrypt password -> we can get origional password via decryption
//so we use hashing for password because we do not want anyone to take encrypted password and decrypt it using some hit and trial or some alogrithems

//process 
//1. we take password from user
//2. we hash the password using bcrypt
//3. we store the hashed password in database
//4. when user login we take password from user and hash it
//5. we compare the hashed password with the hashed password in database
//6. if it matches we login the user
//7. if it does not match we show error message