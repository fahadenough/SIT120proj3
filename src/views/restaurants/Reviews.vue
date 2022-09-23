<template>
    <div class="container">
        <!-- restaurant information -->
        <img src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600">
        <h1>Restaurant title</h1>
        <h3>Reviews:</h3>

        <!-- list rendering for all values in array 'reviews' -->
        <div v-for="review in reviews">
            <p>{{review}}</p>
        </div>

        <!-- binding to empty string userReview: -->
        <input type="text" placeholder="Add a review..." v-model="userReview">
        <button @click="post">Post</button>
        
        <h3>Please Log In or Sign up to post reviews</h3>

        <!-- router links to restaurants and profile components -->
        <router-link :to="{ name: 'profile'}">
            <h4>Sign Up</h4>
        </router-link>
        <router-link :to="{ name: 'restaurants'}">
            <h4>back to restaurants</h4>
        </router-link>
        
    </div>

</template>

<script>
export default ({
    data(){
        return {
            //empty string binded with input field
            userReview: '',
            //array containing all reviews
            reviews: []
        }
    },
    methods: {
        //function to push the user input into array 'reviews'
        post (){
            this.reviews.push(this.userReview)
        }
    }
})
</script>

<style>

.container img{
    width: 350px;
    height: auto;
    margin-top: 20px;
}

.container h1{
    font-weight: 600;
}

.container a:hover{
    color: rgba(255, 4, 4, 0.877);
}

.container h3{
    font-weight: 500;
}

.container a{
    text-decoration: none;
    color: rgb(27, 27, 27);
    border-radius: 10px;
    padding: 0;
    margin: 0 auto;
}
</style>
