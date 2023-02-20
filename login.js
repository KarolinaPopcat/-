// login(){
//     console.log(this.email)
//     console.log(this.password)

//     fetch('http://studentsystem.xyz:8080/user/auth', {
//                 method: "POST",
//                 body: JSON.stringify({
//                   email: this.email,
//                   password: this.password
//                 })
//               }).then((response) => {
//                 return response.json();
//               }).then((data) => {
//                     alert('Пользователь успешно создан')
//                   console.log(data)
//                 })
//                   .catch((err) => {
//                     console.error("Невозможно отправить запрос", err);
//                   });
//             }
