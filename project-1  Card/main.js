 

 

// const posts=[
//     {
//         id:100,
//         name:"sabbir rahman",
//     },
//     {
//         id:101,
//         name:"shohanur rahman",
//     },
//     {
//         id:102,
//         name:"rakib hasan",
//     },
//     {
//         id:103,
//         name:"sakib hasan",
//     },
//     {
//         id:100,
//         name:"rubel hossen",
//     },
// ];



// const postsElement=document.querySelector(".posts");

// loadAllData=()=>{ 
   
//     posts.map((post)=>{
//         const postElement=document.createElement("div");
//         postElement.classList.add("post");
//         postElement.innerHTML=` 
//         <h4 class="post-title">${post.id}</h4>
//         <p class="post-body">${post.name}</p>`;
//         postsElement.appendChild(postElement);  
//     });
    
// };

// loadAllData();



const posts=[
    {
        name:"Sabbir",
        age:20,
        cgp:3.33,
    },
    {
        name:"Rakib  Hasan ",
        age:22,
        cgp:4.33,
    },
    {
        name:"SAkib Hasan ",
        age:23,
        cgp:2.33,
    },
    {
        name:"Tamim Iqbal",
        age:30,
        cgp:3.22,
    },
]

const postsElement=document.querySelector(".posts");

dataLoad=()=>{
    posts.map((post)=>{
    const postElement=document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML=`${post.name} ${post.age} ${post.cgp}`
    postsElement.appendChild(postElement);
    })  
}
dataLoad();






// fetchData= async (config)=>{
//  try{
//     const res=await axios(config);
//  return res.data; 

//  }catch(err){
//     throw Error("not is fetched data")
//  }
// }
// fetchData()




// const postsElement=document.querySelector(".posts");

// loadingData= async()=>{
//  const posts=await fetchData("https://jsonplaceholder.typicode.com/posts")
//     posts.map((post)=>{
//     const postElement=document.createElement("div");
//     postElement.classList.add("post");
//     postElement.innerHTML=`
//     ${post.id}
//     ${post.name}`
//     postsElement.appendChild(postElement)
//     });
// }
// loadingData();