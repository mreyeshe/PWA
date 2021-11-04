const app= Vue.createApp({
data() { 
    return {
        title:"Contador app - Vue",
        count:0
    }
},
methods:{
    // disCount(){
    //     this.count-=1; 
    // },
    // addCount(){
    //     this.count+=1; 
    // },
    modCount(instruction ="add", limit=1){

        if(instruction==='add')
        {
            this.count+=limit; 
        }
        else if (instruction==='dis')
        {
            this.count-=limit;
        }

    },
}
});
