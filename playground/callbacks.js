const getUser = (id,callback)=>{
        var user={
            id:id,
            name:'adam'
        };

        setTimeout(()=>{
            callback(user);
        },3000)
       
};

getUser(125,(userObject)=>{
    console.log(userObject);
})