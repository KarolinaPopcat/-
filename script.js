
const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            email: '',
            password: '',
            error: '',
            loading: false

        }
    },
    methods: {
        register() {
            console.log(this.email)
            console.log(this.password)

            fetch('http://studentsystem.xyz:8080/user', {
                method: "POST",
                body: JSON.stringify({
                    email: this.email,
                    password: this.password
                })
            }).then((response) => {
                switch (response.status) {
                    case 201:
                        alert('Пользователь успешно создан')
                        break;
                    case 403:
                        this.error = "Такой пользователь уже существует"
                        break;
                    case 400:
                        alert("Не верные данные")
                        break;
                    default:
                        alert("Неизвестный статус")
                        break;
                }
                return response.json();
            }).then((data) => {
                console.log(data)
            })
                .catch((err) => {
                    console.error("Невозможно отправить запрос", err);
                });
        },
        login() {
            this.loading = true
            console.log(this.email)
            console.log(this.password)

            fetch('http://studentsystem.xyz:8080/user', {
                method: "POST",
                body: JSON.stringify({
                    email: this.email,
                    password: this.password
                })
            }).then((response) => {
                switch (response.status) {
                    case 200:
                        alert('Вы авторизовались')
                        break;
                    case 403:
                        this.error = "Проверьте логин или пароль"
                        break;
                    default:
                        this.error = "Неизвестный статус"
                        break;
                }
                return response.json();
            }).then((data) => {
                console.log(data)
                this.loading = false
            })
                .catch((err) => {
                    console.error("Невозможно отправить запрос", err);
                });
        }


    }
}).mount('#app')

