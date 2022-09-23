<template>
    <!-- List rendering of all restaurant data -->
    <div v-for="restaurant in restaurants" :key="restaurant.id" class="restaurant">
        <img :src="restaurant.image">
        <div class="info">
            <h1>{{restaurant.title}}</h1>
            <p>{{restaurant.description}}</p>
        </div>
        <!-- router link for each restaurant review component binded to restaurant id using route parameters therefore unique -->
        <router-link :to="{ name: 'reviews', params: { id: restaurant.id }}">
        <h4>{{restaurant.reviews}}</h4>
        </router-link>
    </div>
</template>

<script>
//Component registration
import Reviews from './Reviews.vue';

export default ({
    components: {
        Reviews
    },
    data() {
        return {
            //array of restaurants data object
            restaurants: [
                {   
                    title: 'Restaurant 1 title',
                    id: 1,
                    description: 'Restaurant 1 description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    reviews: 'reviews',
                    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600'
                },
                {
                    title: 'Restaurant 2 title',
                    id: 2,
                    description: 'Restaurant 2 description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    reviews: 'reviews',
                    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600'
                },
                {   
                    title: 'Restaurant 3 title',
                    id: 3,
                    description: 'Restaurant 3 description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    reviews: 'reviews',
                    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600'
                },
                {   
                    title: 'Restaurant 4 title',
                    id: 4,
                    description: 'Restaurant 4 description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    reviews: 'reviews',
                    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600'
                },
                {   
                    title: 'Restaurant 5 title',
                    id: 5,
                    description: 'Restaurant 5 description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    reviews: 'reviews',
                    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600'
                },            
            ]
        } 
    },
})
</script>

<style>

.restaurant {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    color: rgb(27, 27, 27);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.info {
    display: flex;
    flex-direction: column;
    margin-right: 15px;
    margin-left: 15px;
}
.restaurant img{
    width: 300px;
    height: auto;
}

.restaurant h4:hover{
    cursor: pointer;
    align-items: center;
}

.restaurant a:hover{
    background-color: rgba(255, 4, 4, 0.525);
}

.restaurant a{
    text-decoration: none;
    color: rgb(27, 27, 27);
    border: 2px solid red;
    border-radius: 10px;
    padding: 0 10px;
}

@media (max-width: 768px){

.restaurant{
    flex-direction: column;
    align-items: center;
}

.info {
    margin: 0 auto;
}
}

</style>
