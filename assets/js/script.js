var app = new Vue(
    {
        el: '#root',

        data: {
            photos: [
                {
                    name: 'imageNumber0',
                    image: 'https://images.pexels.com/photos/2544976/pexels-photo-2544976.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                    description: '',
                },
                {
                    name: 'imageNumber1',
                    image: 'https://images.pexels.com/photos/1629159/pexels-photo-1629159.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                    description: '',
                },
                {
                    name: 'imageNumber2',
                    image: 'https://images.pexels.com/photos/750225/pexels-photo-750225.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                    description: '',
                },
                {
                    name: 'imageNumber3',
                    image: 'https://images.pexels.com/photos/1082343/pexels-photo-1082343.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                    description: '',
                },
                {
                    name: 'imageNumber4',
                    image: 'https://images.pexels.com/photos/10957528/pexels-photo-10957528.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                    description: '',
                },        
            ],

            index: 0,

            dinamicClass: `opacity`,

        },

        methods: {

            rightFlow: function(){ //Funzione freccia in giù
                if( this.index < this.photos.length - 1 ){
                    console.log(`you're flowing up`)
                    //this.dinamicClass = false;
                    return this.index++;
                } 
                return this.index = 0
            },

            leftFlow: function(){ //Funzione freccia in su
                if( this.index > 0 ){
                    console.log(`you're flowing down`)
                    return this.index--;
                    } 
                return this.index = this.photos.length -1
            },
            
            img0: function(){ //Funzione al click del pallino vado all'immagine
                console.log(`you're seeing the image number 0`)
                return this.index = 0;
            },

            img1: function(){ //Funzione al click del pallino vado all'immagine
                console.log(`you're seeing the image number 1`)
                return this.index = 1;
            },

            img2: function(){ //Funzione al click del pallino vado all'immagine
                console.log(`you're seeing the image number 2`)
                return this.index = 2;
            },
            
            img3: function(){ //Funzione al click del pallino vado all'immagine
                console.log(`you're seeing the image number 3`)
                return this.index = 3;
            },
            
            img4: function(){ //Funzione al click del pallino vado all'immagine
                console.log(`you're seeing the image number 4`)
                return this.index = 4;
            },

            timer: function(){
                setInterval( this.rightFlow, 3000 )
            },

        },

        created(){
            this.timer();
        },
    }
);