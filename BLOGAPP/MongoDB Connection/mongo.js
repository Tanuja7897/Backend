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