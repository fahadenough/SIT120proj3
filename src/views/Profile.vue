<template>
    <div class="profile">
        <!-- Sign in input fields with button to show sign up component -->
        <div class="signIn">
            <h1>Sign In</h1>
            <label for="Email">Email</label>
            <input type="text" id="Email">
            <label for="pass">Password</label>
            <input type="password" id="pass">
            <button>Sign In</button>
        <!-- button to show signup component -->
            <button @click="showSignup = true">Sign up</button>
        </div>
        <!-- conditional rendering, custom event and slots used -->
        <div class="signUp" v-if="showSignup">
            <Signup @close="showSignup = false">
                <p>To protect restaurant integrity, we require a profile for review.</p>
            </Signup >
        </div>
    </div>
</template>

<script>
    //Registering Signup Component
import Signup from './Signup.vue';

export default ({
    components:{
        Signup,
    },
    data(){
        return{
            //data value to toggle signup component
            showSignup: false
        }
    }
})
</script>

<style>

.profile{
    display: flex;
}
.signIn{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    background-color: rgb(236, 236, 236);
    width: 50%;
    border-radius: 10px;
}
.signIn label{
    margin: 3px auto;
}

.signIn button {
  padding: 9px 25px;
  background-color: white;
  border: 2px solid red;
  border-radius: 10px;
  cursor: pointer;
  color: black;
  font-weight: 700;
  margin: 5px auto;
}
.signIn button:hover{
    background-color: red;
}

.signUp{
    width: 50%;
}

@media (max-width: 768px){

.profile {
    flex-direction: column;
}

.signIn{
    width: 100%;
}

.signUp{
    width: 100%;
}
}
</style>