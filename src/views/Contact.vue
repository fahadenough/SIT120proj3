<template>
    <div class="container">
    <!-- transition created using css and vue conditional rendering -->
    <transition name="fade">
        <div class="about" v-if="showC">
            <h1>TasteBuddy</h1>
            <h2>About:</h2>
            <p>Taste Buddy was created to solve the basic problem of not being able to decide what to eat. It was a problem that we faced, so we figured others would be facing it too. We aim to build a platform where foodies can have a community as ease of access to the restaurants that provide certain types of food. We hope you enjoy your experience!</p>
        </div>
    </transition>
    <!-- button to toggle between hide and show about us section -->
    <button @click="showC = !showC">About us</button>
    <div class="contact">
        <h2>For business inquiries: </h2>
        <p>Email: tastebuddy@loremipsum.com</p>
        <p>Phone: +123456789 </p>
    </div>

    </div>
</template>

<script>
    export default {
        data (){
            return{
                showC: false
            }
        }
    }
</script>


<style scoped>
.container{
    background-color: white;
}

.contact{
    display: flex;
    flex-direction: column;
}
.contact h2{
    font-weight: 600;
}

.contact p{
    margin: 10px auto;
}
.about{
    display: flex;
    align-items: center;
    flex-direction: column;
}

.about h1{
    font-size: 100px;
    margin-bottom: 0;
    font-weight: 900;
}

.about h1:hover{
    color: red;
}

.about h2{
    font-weight: 400;
    font-size: 40px;
}
.about p{
    width: 40%;
    text-align: center;
}
.container button {
  padding: 9px 25px;
  background-color: white;
  border: 2px solid red;
  border-radius: 10px;
  cursor: pointer;
  color: black;
}
.container button:hover {
    background-color: rgba(255, 0, 0, 0.859);
}

/* transitions css:  */
.fade-enter-from {
    opacity: 0;
}

.fade-enter-active {
     transition: all 2s ease;
}

.fade-leave-to {
    opacity: 0;
}
.fade-leave-active {
    transition: all 2s ease;
}

@media (max-width: 768px){

.container h1{
    font-size: 70px;
}

.about p{
    width: 80%;
}
.about h2{
    font-size: 30px;
}
}
</style>