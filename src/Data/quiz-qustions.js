const QUESTIONS = [
    {
        question : 'pick your dream location',
        response : [
            {
                img : 'https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg',
                title : 'New York',
                genres: ['Horror', 'Adventure', 'Crime']
            },
            {
                img : 'https://images.pexels.com/photos/12160606/pexels-photo-12160606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                title : 'Paris',
                genres: ['Romantic Comedy', 'Romance', 'Fantasy']
            },
            {
                img : 'https://pyt-blogs.imgix.net/2020/08/eva-dang-EXdXLrZXS9Q-unsplash-1-scaled.jpg?auto=format&ixlib=php-3.3.0',
                title : 'London',
                genres: ['Drama', 'Thriller']
            },
            {
                img : 'https://media.cntraveler.com/photos/60341fbad7bd3b27823c9db2/16:9/w_2560%2Cc_limit/Tokyo-2021-GettyImages-1208124099.jpg',
                title : 'Tokyo',
                genres: ['Action', 'Fantasy']
            },
            {
                img : 'https://media.timeout.com/images/105211673/image.jpg',
                title : 'Rome',
                genres: ['History', 'Documentary']
            },
        ]
    },

]

module.exports = {
    getData
}

function getData() {
    return QUESTIONS
}