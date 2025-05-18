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

//go to controller folder and inside user we hash the password before saving it to database

//hema1234
//$2b$10$xMhryquiHO5mhwbxZuxzyOv25HmEyMzv0MIm0hcS0H.4Yz3HKiwA2

//Systax ->
//await bcrypt.hash(password , 10)
//10 is salt
//salt is used to tell -> how many times we hash the password

//checking compariong passowed
// let comparePassword = await bcrypt.compare(
//             password ,
//             finduser.password 
//         )


//Authentication -> it is the process of verifying the identity of a user
//user comes he gave all the credentials if correct then user is authenticated

//Authorization -> it is the process of verifying the access of a user
//staff room me student nahi ja sakta usko access nhi hai
//admin room me admin hi ja sakta hai

//user1 ko user2 ke blogs change krne k access nahi hai ..