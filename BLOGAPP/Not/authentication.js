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


//JWT -> JSON Web Token
//usecase->
//suppose you have two users u1 and u2
//u1 has open his blog -> he can see / read  , write , update , delete
//u2 has opned u1 blog -> he is only permitted to read 
//and additionaly u2 can like or dislike the blog if he is signed in
//u1 open his blog -> button will be there all read , write , update , delete
//u2 open u1 blog -> button will be there only read , like , dislike

//here we use db call for like and dislike to check if user is signed in is present in db or not

//jwt comes here it will be used to verify the user and give him access to the blog

//jwt has 3 parts 
//1. header -> it contains the type of token and the algorithm used to sign the token
//2. payload -> it contains the data to be sent in the token
//3. signature -> it is used to verify the authenticity of the token

//flow of jwt 
//1. frontend -> request -> signin -> backend -> generate token -> send token to frontend -> 
// 2. frontend -> store token in local storage
//3. frontend -> request -> get all blogs -> backend -> verify token -> send all blogs to frontend
//4. frontend -> display all blogs