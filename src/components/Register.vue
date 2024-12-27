<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="register">
            <div>
                <label>Email:</label>
                <input type="email" v-model="email" required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" v-model="password" required />
            </div>
            <button type="submit">Register</button>
        </form>
        <p v-if="message">{{ message }}</p>
        <button v-if="randomId" @click="copyId">Copy ID</button>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            email: "",
            password: "",
            message: "",
            randomId: "",
        };
    },
    methods: {
        async register() {
            try {
                const response = await axios.post("http://localhost:3000/register", {
                    email: this.email,
                    password: this.password,
                });
                this.randomId = response.data.randomId;
                this.message = `Registration successful! Your ID: ${this.randomId}`;
            } catch (error) {
                this.message = error.response?.data?.message || "An error occurred";
            }
        },
        copyId() {
            navigator.clipboard.writeText(this.randomId).then(() => {
                alert("ID copied to clipboard!");
            });
        },
    },
};
</script>