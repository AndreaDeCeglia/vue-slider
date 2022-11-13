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
                    image: '/assets/img/pexels-kelly-2544992.jpg',
                    description: '',
                },
                {
                    name: 'imageNumber2',
                    image: '/assets/img/pexels-pixabay-220129.jpg',
                    description: '',
                },
                {
                    name: 'imageNumber3',
                    image: '/assets/img/pexels-sebastian-sørensen-750225.jpg',
                    description: '',
                },
                {
                    name: 'imageNumber4',
                    image: '/assets/img/pexels-skitterphoto-9334.jpg',
                    description: '',
                },        
            ],

            index: 0,

        },

        methods: {

            rightFlow: function(){ //Funzione freccia in giù
                if( this.index < this.images.length - 1 ){
                 return this.index++;
              } 
               return this.index = 0
            },

            leftFlow: function(){ //Funzione freccia in su
                if( this.index > 0 ){
                return this.index--;
              } 
                return this.index = this.images.length -1
            },
            
            img0: function(){ //Funzione al click del pallino vado all'immagine
                return this.index = 0;
            },

            img1: function(){ //Funzione al click del pallino vado all'immagine
                return this.index = 1;
            },

            img2: function(){ //Funzione al click del pallino vado all'immagine
                return this.index = 2;
            },
            
            img0: function(){ //Funzione al click del pallino vado all'immagine
                return this.index = 3;
            },
            
            img0: function(){ //Funzione al click del pallino vado all'immagine
                return this.index = 4;
            },

        },
    }
)