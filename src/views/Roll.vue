<template>
    <div class="dice">
        <div class="container1">
            <h1>Can't decide what to eat?</h1>
            <h3>Roll the dice.</h3>
            <h3>We'll decide for you!</h3>

        </div>
        <div class="container2">
            <h2>Select food choices: </h2>
            <!-- input fields for food choices: -->
                <div class="foodSelect">
                    <!-- selectLeft and selectRight Divs to make responsive application look better -->
                    <div class="selectLeft">
                        <!-- selection option binded to options array with v-model -->
                        <select id="foods" name="foods1" v-model="options[0]">
                            <!-- v-for directive used to render list/all items in array 'food' -->
                            <option v-for="food in foods" :key="food" >{{ food }}</option>
                        </select>
                        <select id="foods" name="foods2" v-model="options[1]">
                            <option v-for="food in foods" :key="food" >{{ food }}</option>
                        </select>
                        <select id="foods" name="foods3" v-model="options[2]">
                            <option v-for="food in foods" :key="food" >{{ food }}</option>
                        </select>
                    </div>
                    <div class="selectRight">
                        <select id="foods" name="foods4" v-model="options[3]">
                            <option v-for="food in foods" :key="food" >{{ food }}</option>
                        </select>
                        <select id="foods" name="foods5" v-model="options[4]">
                            <option v-for="food in foods" :key="food" >{{ food }}</option>
                        </select>
                        <select id="foods" name="foods6" v-model="options[5]">
                            <option v-for="food in foods" :key="food" >{{ food }}</option>
                        </select>
                    </div>
                </div>

        </div>
    </div>
    <!-- 3rd div containing roll button which triggers the function and displays result using v-on directive (event handling)-->
    <div class="roll">
        <button v-on:click="selectedFood()">ROLL!</button>
        <div class="eatThis">
            <h3>eat this! " {{eat}} "</h3>
        </div>     
    </div>
</template>

<script>

export default ({
    data() {
        return{
        index: 0,
        //empty string to display the food choice generated:
        eat: "",
        // initial food choices (can be updated):
        foods:["Pizza", "Burger", "Fries", "Pasta", "Lasagna", "Icecream"], 
        //empty array used to randomise food choices selected from array foods:
        options: []
        };
    },
    methods: {
        //function to randomise and push the generated food choice
        selectedFood(){
            this.index = Math.floor(Math.random()*this.options.length);
            this.eat = this.options[this.index];
        }
    },
})
</script>


<style scoped>

.container1{
    height: 30%;
    width: 50%;
    color: rgba(0, 0, 0, 0.837);
    display: flex;
    flex-direction: column;
}
.roll{
    display: flex;
    flex-direction: row;
}
.eatThis{
    width: 50%;
    margin-left: 31%;
    margin-right: 2%;
}

.eatThis h3{
    font-size: 35px;
    margin: 0 auto;
    border: 3px solid red;
    border-radius: 10px;
    text-align: center;
    width: 80%;
    font-weight: 500;
}

.dice{
    display: flex;
    flex-direction: row;
    height: auto;
}
.container2{
    width: 50%;
    color: rgba(0, 0, 0, 0.837);
    display: flex;
    flex-direction: column;
}
.container2 h2{
    width: 100%;
    text-align: center;
    margin: 90px 0 0 0;
    padding: 0px 5px;
}
.container2 h3{
    width: 80%;
    margin: 0 auto;
    padding: 0px;
    font-size: 300%;
    text-align: center;
}
.container2 p{
    border-radius: 20px;
    background-color: rgb(239, 239, 239);
    padding: 5px 5px;
    font-size: 150%;
    margin: 0;
}

.foodSelect{
    width: 50%;
    display: flex;
    margin: 0 auto;
}
#foods{
    margin: 3px 8px;
    width: 100%;
    padding: 3px 5px;
    border: 1px solid grey;
    border-radius: 20px;
}
.selectLeft{
    display: flex;
    flex-direction: column;
    width: 45%;
    margin: 3px 8px;
}
.selectRight{
    display: flex;
    flex-direction: column;
    width: 45%;
    margin: 3px 8px;
}
.container1 h1 {
    width: 60%;
    margin: 20px auto;
    font-size: 80px;
    line-height: 85%;
    text-align: left;
    padding: 2px 0 0 2%;
}

.container1 h3{
    margin: 0 auto;
    text-align: left;
    width: 60%;
    font-size: 20px;
    padding: 2px 0 0 5%;
}

.roll button{
    width: 172px;
    font-size: 40px;
    margin-left: 10%;
    border: 2px solid red;
    color: black;
    font-weight: 600;
    align-items: flex-start
}

.roll button:hover{
    background-color: red;
}

@media (max-width: 768px){
.dice {
    flex-direction: column;
    align-items: center;
}
.roll {
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.roll button{
    text-align: center;
    margin-right: 10%;
    margin-bottom: 15px;
    margin-top: 5px;
}

.eatThis{
    margin: 0 auto;
}
.container1 {
    width: 100%;
    color: rgba(0, 0, 0, 0.837);
    display: flex;
    flex-direction: column;
}
.container2 h2 {
    margin: 10px auto;
    border: 2px;
    padding: 0px 5px;
    text-align: center;
}
.container2 {
    width: 100%;
    color: rgba(0, 0, 0, 0.837);
    display: flex;
    flex-direction: column;
    margin-top: 15px;
}

.foodSelect{
    flex-direction: column;
    align-items: center;
    width: 80%;
}
}
</style>