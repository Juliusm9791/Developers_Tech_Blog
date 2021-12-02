// const getNames = async () => {

//     // const userId = document.getElementById('userCommentedId').textContent;
//     // console.log(userId)
//     // if (userId) {
//         const response = await fetch(`/api/users`);
//         if (response.ok) {
//             let data = await response.json();
//             return data;
//         }
//     // }
// };

// async function IdReplaceNAme (){ 
// const data = await getNames();
// console.log(data)
// var elements = document.querySelectorAll(".userCommentedId");
// for (let i = 0; i < elements.length; i++) {
//     for (let j = 0; j < data.length; j++) {
//            if (elements[i].textContent ===  data[j].id) {
//             let u = data[j].username;
//             console.log(u)
//            }
//     }
    
// }
// // document.getElementById('userCommentedId').textContent = data.username;
// }
// IdReplaceNAme ()