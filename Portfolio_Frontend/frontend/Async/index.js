/*function getUsers(){
    let users=[];
    setTimeout(() => {
    users=[
        {username:'john' , email:'john@gmail.com'},
        {username:'jane', email:'jane@gamil.com'},
    ];
},1000);
 return users;
}

function findUsername(username){
    const users=getUsers();
    const user= users.find((user) => user.username === username);
    return user;
}



console.log(findUsername('john'));*/


function getUsers() {
    return new Promise ( (resolve, reject) =>{
        setTimeout(()=>{
            if (false){
                resolve(
                    [
                     {username:'john' , email:'john@gmail.com'},
                     {username:'jane', email:'jane@gamil.com'}, 
                    ]
                );
            }
            else{
                reject('Failed to the user list');
            }
           
        },1000);
    }
    );
}

const promise =getUsers();

promise.then((user)=>{
    console.log(user)
},
(error)=>{
    console.log(error);
});

promise.catch((error)=>{
    console.log(error);
})
