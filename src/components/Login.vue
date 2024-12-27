<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <div>
                <label>Random ID:</label>
                <input type="text" v-model="randomId" required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" v-model="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
        <p v-if="message">{{ message }}</p>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            randomId: "",
            password: "",
            message: "",
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post("http://localhost:3000/login", {
                    randomId: this.randomId,
                    password: this.password,
                });
                this.message = `Login successful! Email: ${response.data.email}`;
            } catch (error) {
                this.message = error.response?.data?.message || "An error occurred";
            }
        },
    },
};
</script>