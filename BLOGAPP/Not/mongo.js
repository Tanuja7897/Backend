//how to connect two models in mongodb
//example Blog is created by users  , user read blog   
//means two collections are conneted
//like pk and foreign key in sql

//creator:{ 
            //creator will be user
            //connection ..
        //     type : mongoose.Schema.Types.ObjectId,
        //     ref : User, //refresces to User collection
        //     required : true
        // }

//type -> mongoose.Schema.Types.ObjectId, = _id in db
//steps -> mongoose se Schema bna -> schema se model -> model ke andr Type = _id hoga __unique refrence

//MONGODB operators 
//On array 
//$push -> append specified value in array
//syntax -> $push : {blogs : blog._id}

//popolate function
//like in schema hmne likha h creator ki id
//but hme chahiye name to populate function use krenge ye function pure detail ki id se replace kr dega
//isse getBlog ke output me blog with creator info ayegi n kevl id ..
//Systeax ->
//let blog = await Blog.find({draft : false}).populate("creator") 
//whole info including user password goes to frontend 
//if we want selected fields on frontend
//      .populate({
            //     path : "creator",
            //     select : "name"
            // }) 

//sb chahiye only password nhi chahiye 
 //select : "-password"