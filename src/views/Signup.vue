<template>
    <div class="container">
        <h1>Please Sign up to post reviews</h1>
        <!-- pushed a p tag from profile.vue below as slot -->
        <slot></slot>
        <!-- input fields: -->
        <label>First Name</label>
        <input type="text">
        <label>Email</label>
        <input type="text">
        <label>Password</label>
        <input type="password"> 
        <!-- both buttons trigger the same function/custom event back in profile.vue -->
        <button @click="closeWindow">Sign Up</button>
        <button @click="closeWindow">Close Window</button>
    </div> 
</template>

<script>


export default({
    name: 'Signup',
    components: {
    },
    methods: {
        // emitting custom event 
        closeWindow(){
            this.$emit('close')
        }
    }
})
</script>

<style>

.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    background-color: rgb(236, 236, 236);
    width: 100%;
    border-radius: 10px;
}

.container button {
  padding: 9px 25px;
  background-color: white;
  border: 2px solid red;
  border-radius: 10px;
  cursor: pointer;
  color: black;
  font-weight: 700;
  margin: 5px auto;
}

.container h1{
    font-size: 30px;
    font-weight: 500;
}

.container label{
    margin: 3px auto;
}


.container button:hover{
    background-color: red;
}
</style>