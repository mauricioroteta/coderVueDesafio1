// create app
const {createApp} = Vue;

createApp({
    data()  {
        return {
            valor : 0
        }
    },
    created(){

    },
    methods: {
        incrementar(){
            this.valor ++

        },
        decrementar(){
            if(this.valor != 0){
                this.valor --
            }
            
        }
    }

}).mount("#valor")