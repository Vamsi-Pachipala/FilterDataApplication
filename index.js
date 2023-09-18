users=[
    {
        id:1,
        name:'Vamsi',
        Age:21,
        Profession:'Developer'
    },
    {
        id:2,
        name:'Prabhakar',
        Age:24,
        Profession:'Developer'
    },
    {
        id:3,
        name:'Sathish',
        Age:22,
        Profession:'Admin'
    }
]


function filterData(Profession)
{
    if(Profession==='') {
        return users;
    }
    let userList=users.filter((userList)=>{
        return userList.Profession===Profession;
    })
    return userList;
}

function addNewUser()
{
   
    let age=document.getElementById('age').value;
    let name=document.getElementById('name').value;
    let Profession=document.getElementById('profession').value;
    let newUser={
        id:users[users.length-1].id + 1,
        name:name,
        Age:age,
        Profession:Profession
    }
    if(age!=='' && name!=='' && Profession!=='')
    {
        users.push(newUser);  
    }
    appendUsers(users)
}

function filter()
{
   let container=document.getElementsByClassName('container')[0];
    let select=document.getElementsByTagName('select')[0].value;
    let filterList=filterData(select);
    console.log(filterList);
    appendUsers(filterList);
}

function appendUsers(userList)
{
    let container=document.getElementsByClassName('container')[0];
    container.innerHTML='';
    for(let i=0;i<userList.length;i++)
    {
            let user=document.createElement('div')
            user.className='user';
           

            let users=document.createElement('div')
            users.className='users';
        
             
            let id=document.createElement('div')
            id.innerText=userList[i].id;

            let age=document.createElement('div')
            age.innerText=`Age: ${userList[i].Age}`;

            let name=document.createElement('div')
            name.innerText=`name: ${userList[i].name}`;

            let profession=document.createElement('div')
            profession.innerText=`Profession: ${userList[i].Profession}`;

            user.append(id)
            user.append(name)
            user.append(profession)
            user.append(age)

            users.append(user)
            container.append(users);
        }
}