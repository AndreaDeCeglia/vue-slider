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

        },
    }
)