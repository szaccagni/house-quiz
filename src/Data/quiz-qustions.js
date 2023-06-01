const QUESTIONS = [
    {
        question : 'pick a location',
        response : [
            {
                img : 'https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg',
                title : 'New York',
                genres: ['Horror', 'Crime']
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
            {
                img : 'https://media.timeout.com/images/105211673/image.jpg',
                title : 'Rome',
                genres: ['History', 'Documentary']
            },
        ]
    },

    {
        question : 'pick an exterior',
        response : [
            {
                img : 'https://cdn.decoist.com/wp-content/uploads/2022/03/Central-courtyard-of-the-house-perseves-existing-tree-without-feeling-out-of-place-66621.jpg',
                title : 'Brutalist',
                genres: ['Horror', 'Crime']
            },
        ]
    },

    {
        question : 'pick a kitchen',
        response : [
            {
                img : 'https://www.home-designing.com/wp-content/uploads/2017/02/kitchen-island-industrial-style-adjustable-lamps.jpg',
                title : 'Industrial',
                genres: ['Horror', 'Crime']
            },
        ]
    },

    {
        question : 'pick a backyard',
        response : [
            {
                img : 'https://yardzen.com/wp-content/uploads/9-10-1.png',
                title : 'Stone',
                genres: ['Horror', 'Crime']
            },
        ]
    },

    {
        question : 'pick a some art',
        response : [
            {
                img : 'https://mcasd.org/client-uploads/images/_mcasd_image_1_62x1_1200px_w/MCASD-LJ-1.jpg',
                title : 'Modern',
                genres: ['Horror', 'Crime']
            },
        ]
    },

    {
        question : 'pick a front door',
        response : [
            {
                img : 'https://secure.img1-cg.wfcdn.com/im/67583898/resize-h445%5Ecompr-r85/2386/238690965/Iron+Prehung+Front+Entry+Door.jpg',
                title : 'Modern',
                genres: ['Horror', 'Crime']
            },
        ]
    },

    {
        question : 'pick your roommate',
        response : [
            {
                img : 'https://post.bark.co/wp-content/uploads/2022/05/iStock-1223511966.jpg',
                title : 'Dog',
                genres: ['Action', 'Fantasy']
            },
        ]
    },

    {
        question : 'pick an extra room',
        response : [
            {
                img : 'https://www.finitesolutions.co.uk/wp-content/uploads/2019/03/Basement-Home-Theatre-Project-in-London.jpeg',
                title : 'Home Theater',
                genres: ['Action', 'Fantasy']
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

const MOVIE_DB_KEY = '4d84b4bbf6cccea4ffd1544bc87220a1'

// https://api.themoviedb.org/3/discover/movie?api_key=4d84b4bbf6cccea4ffd1544bc87220a1&with_genres=37

const GENRES = 
    [
        {"id":28,"name":"Action"},
        {"id":12,"name":"Adventure"},
        {"id":16,"name":"Animation"},
        {"id":35,"name":"Comedy"},
        {"id":80,"name":"Crime"},
        {"id":99,"name":"Documentary"},
        {"id":18,"name":"Drama"},
        {"id":10751,"name":"Family"},
        {"id":14,"name":"Fantasy"},
        {"id":36,"name":"History"},
        {"id":27,"name":"Horror"},
        {"id":10402,"name":"Music"},
        {"id":9648,"name":"Mystery"},
        {"id":10749,"name":"Romance"},
        {"id":878,"name":"Science Fiction"},
        {"id":10770,"name":"TV Movie"},
        {"id":53,"name":"Thriller"},
        {"id":10752,"name":"War"},
        {"id":37,"name":"Western"}
    ]