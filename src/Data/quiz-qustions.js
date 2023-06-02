const GENRES = 
    {
        'A' : [{"id":53,"name":"Thriller"}, {"id":80,"name":"Crime"}],
    
        'B' : [{"id":14,"name":"Fantasy"}, {"id":10749,"name":"Romance"}],
    
        'C' : [{"id":18,"name":"Drama"}, {"id":53,"name":"Thriller"}],      
        
        'D': [{"id":28,"name":"Action"}, {"id":878,"name":"Science Fiction"}],
        
        'E': [{"id":36,"name":"History"}, {"id":99,"name":"Documentary"}],
        
        'F': [{"id":35,"name":"Comedy"}, {"id":16,"name":"Animation"} ]
    }

const QUESTIONS = [
    {
        question : 'pick a location',
        response : [
            {
                rId: 'F',
                img : 'https://deih43ym53wif.cloudfront.net/sydney-opera-australia-shutterstock_1094901527_b98ec1c857.jpeg',
                title : 'Sydney'
            },
            {
                rId: 'A',
                img : 'https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg',
                title : 'New York'
            },
            {
                rId: 'D',
                img : 'https://media.cntraveler.com/photos/60341fbad7bd3b27823c9db2/16:9/w_2560%2Cc_limit/Tokyo-2021-GettyImages-1208124099.jpg',
                title : 'Tokyo'
            },
            {
                rId: 'B',
                img : 'https://images.pexels.com/photos/12160606/pexels-photo-12160606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                title : 'Paris'
            },
            {
                rId: 'C',
                img : 'https://pyt-blogs.imgix.net/2020/08/eva-dang-EXdXLrZXS9Q-unsplash-1-scaled.jpg?auto=format&ixlib=php-3.3.0',
                title : 'London'
            },
            {
                rId: 'E',
                img : 'https://media.timeout.com/images/105211673/image.jpg',
                title : 'Rome'
            },
        ]
    },

    {
        question : 'pick an exterior',
        response : [
            {
                rId: 'E',
                img: 'https://www.bhg.com/thmb/ZKUn3kHAJ2Zmisg4EIcHIzTbDJU=/1484x0/filters:no_upscale():strip_icc()/exterior-julia-miller-house-f122f192-bef24da932c74f88b13f88168556fa4c.jpg',
                title: 'Colonial'
            },
            {
                rId: 'C',
                img: 'https://www.redfin.com/blog/wp-content/uploads/2022/04/1314-Addison-St-12.jpg',
                title: 'Gothic'
            },
            {
                rId: 'B',
                img: 'https://static.giggster.com/images/location/f2da1996-da80-4980-812e-bf8df269379d/d1feb2f2-4446-403b-9f51-54db4f2bb41d/full_hd_retina.jpeg',
                title: 'Fairytale'
            },
            {
                rId: 'F',
                img: 'https://www.theagencyre.com/blog/wp-content/uploads/2022/08/f6Yui33fTjyhCSTMqQ5P.jpg',
                title: 'Quirky'
            },
            {
                rId: 'D',
                img: 'https://media.istockphoto.com/id/1255070620/photo/modern-house-with-garden-and-solar-panels.jpg?s=612x612&w=0&k=20&c=-q8PVziNfBqKNb-6esW1ryiAKUTyFKox9F_BOaMO_KI=',
                title: 'Futuristic'
            },
            {
                rId: 'A',
                img : 'https://cdn.decoist.com/wp-content/uploads/2022/03/Central-courtyard-of-the-house-perseves-existing-tree-without-feeling-out-of-place-66621.jpg',
                title : 'Brutalist'
            },
        ]
    },

    {
        question : 'pick a kitchen',
        response : [
            {
                rId: 'B',
                img: 'https://cdn.homedit.com/wp-content/uploads/2022/10/Understanding-the-Cottagecore-Aesthetic.jpg',
                title: 'Cottage'
            },
            {
                rId: 'E',
                img: 'https://hips.hearstapps.com/hmg-prod/images/rustickitchens3-1497449626.jpg',
                title: 'Rustic'
            },
            {
                rId: 'A',
                img : 'https://www.home-designing.com/wp-content/uploads/2017/02/kitchen-island-industrial-style-adjustable-lamps.jpg',
                title : 'Industrial'
            },
            {
                rId: 'C',
                img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/black-kitchen-cabinets-hilliard-losaltos2-18-10-07-1579801635.jpg',
                title: 'Black'
            },
            {
                rId: 'F',
                img: 'https://cdn.shopify.com/s/files/1/0006/6558/3668/files/Colorful_Kitchen_OMGreen_GoldenHour_04.jpg?v=1658876399',
                title: 'Bright'
            },
            {
                rId: 'D',
                img: 'https://bestdesignideas.com/wp-content/uploads/2015/02/High-Tech-Kitchen-Smooth-decor-free-or-relief-free-facades-980x734.jpg',
                title: 'High-tech'
            },
        ]
    },

    {
        question : 'pick a backyard',
        response : [
            {
                rId: 'A',
                img: 'https://yardzen.com/wp-content/uploads/9-10-1.png',
                title : 'Stone',
            },
            {
                rId: 'C',
                img: 'https://www.architectureartdesigns.com/wp-content/uploads/2015/02/16-Captivating-Modern-Landscape-Designs-For-A-Modern-Backyard-0-1280x720.jpg',
                title: 'Modern',
            },
            {
                rId: 'F',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/230224150612-03-body-best-beaches-world-tripadvisor-2023-radhanagar-beach.jpg?c=original&q=w_1280,c_fill',
                title: 'Beach',
            },
            {
                rId: 'B',
                img: 'https://cdn.mos.cms.futurecdn.net/foqUJNnt54WwqaStXAGeP3-1200-80.jpg',
                title: 'Romantic',
            },
            {
                rId: 'D',
                img: 'https://arc-anglerfish-arc2-prod-gmg.s3.amazonaws.com/public/VFKOL4I2PNBEXBCDGINXBGKJOQ.jpg',
                title: 'JungleGym',
            },
            {
                rId: 'E',
                img: 'https://www.eyeofthedaygdc.com/wp-content/uploads/versailles-880359_1280.jpg',
                title: 'Classic',
            },
        ]
    },

    {
        question : 'pick some art',
        response : [
            {
                rId: 'E',
                img: 'https://static01.nyt.com/images/2022/10/27/multimedia/27xp-donda-1-8c76/27xp-donda-1-8c76-videoSixteenByNine3000.jpg',
                title: 'Historic',
            },
            {
                rId: 'A',
                img : 'https://mcasd.org/client-uploads/images/_mcasd_image_1_62x1_1200px_w/MCASD-LJ-1.jpg',
                title : 'Modern',
            },
            {
                rId: 'D',
                img: 'https://img.artpal.com/572072/36-23-2-5-20-20-37m.jpg',
                title: 'Futuristic',
            },
            {
                rId: 'B',
                img: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Reflections_of_Clouds_on_the_Water-Lily_Pond.jpg',
                title: 'Dreamy',
            },
            {
                rId: 'F',
                img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRY605hoIjfwWqGhzoSl6_gQCqAYnH3bW88BGoOFwnIWImHvl7WEPJ36yfq7-_nrA6ob5X10QbQL9fqGtt_U74tS-oyNS_GgeDA-dmdDh8&usqp=CAE',
                title: 'Playful',
            },
            {
                rId: 'C',
                img: 'https://d16kd6gzalkogb.cloudfront.net/magazine_images/Caravaggio-Saint-Jerome-Writing-Image-via-walksofitalycom.jpg',
                title: 'Intense',
            },
        ]
    },

    {
        question : 'pick a front door',
        response : [
            {
                rId: 'D',
                img: 'https://www.europeancabinets.com/wp-content/uploads/2017/06/banner-front-door-_MG_7247.jpg',
                title: 'Futuristic',
            },
            {
                rId: 'A',
                img : 'https://secure.img1-cg.wfcdn.com/im/67583898/resize-h445%5Ecompr-r85/2386/238690965/Iron+Prehung+Front+Entry+Door.jpg',
                title : 'Modern',
            },
            {
                rId: 'C',
                img: 'https://i.etsystatic.com/21192821/r/il/4c33ad/3681338970/il_1588xN.3681338970_33ue.jpg',
                title: 'Dramatic',
            },
            {
                rId: 'F',
                img: 'https://thecraftsmanblog.com/wp-content/uploads/2013/04/Why-Does-My-Old-House-Have-Two-Front-Doors.jpg',
                title: 'Retro',
            },
            {
                rId: 'E',
                img: 'https://as1.ftcdn.net/v2/jpg/01/35/17/88/1000_F_135178810_NXufAUCBnD6DNb7Hl3Vq8o6mWkZK0SgD.jpg',
                title: 'Traditional',
            },
            {
                rId: 'B',
                img: 'https://www.thecottagejournal.com/wp-content/uploads/2020/08/Loi-Thai.jpg',
                title: 'Cottage',
            },
        ]
    },

    {
        question : 'pick your roommate',
        response : [
            {
                rId: 'B',
                img: 'https://worldanimalfoundation.org/wp-content/uploads/2023/02/history-of-sea-horse-review.jpg',
                title: 'Seahorse',
            },
            {
                rId: 'A',
                img: 'https://www.rd.com/wp-content/uploads/2019/09/shutterstock_58825690-scaled.jpg',
                title: 'K9 Dog',
            },
            {
                rId: 'C',
                img: 'https://cf.ltkcdn.net/reptiles/snakes/images/orig/321346-1600x1066-pet-corn-snake.jpg',
                title: 'Snake',
            },
            {
                rId: 'E',
                img: 'https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk2OTY2NzAwMDk5MzE1MzQw/pet-turtle-or-tortoise.png',
                title: 'Tortoise',
            },
            {
                rId: 'D',
                img : 'https://post.bark.co/wp-content/uploads/2022/05/iStock-1223511966.jpg',
                title : 'Dog',
            },
            {
                rId: 'F',
                img: 'https://www.thesprucepets.com/thmb/rW016PPM5VrD2cAJnMId-W1mLmM=/3865x0/filters:no_upscale():strip_icc()/close-up-of-gold-and-blue-macaw-perching-on-tree-962288862-5b50073e46e0fb0037c23c23.jpg',
                title: 'Parrot',
            },
        ]
    },

    {
        question : 'pick an extra room',
        response : [
            {
                rId: 'B',
                img: 'https://media.houseandgarden.co.uk/photos/61894268f6eb732bf13e4668/4:3/w_3868,h_2901,c_limit/hgtuscannk.jpg',
                title: 'Garden',
            },
            {
                rId: 'A',
                img: 'https://cdn.mos.cms.futurecdn.net/hKX2Uqg2giQikXUekiPNaC.jpg',
                title : 'Study',
            },
            {
                rId: 'D',
                img: 'https://www.finitesolutions.co.uk/wp-content/uploads/2019/03/Basement-Home-Theatre-Project-in-London.jpeg',
                title: 'Home Theater',
            },
            {
                rId: 'C',
                img: 'https://www.christiesrealestate.com/blog/wp-content/uploads/2019/11/Dining-Room.jpg',
                title: 'Dining Room',
            },
            {
                rId: 'F',
                img: 'https://ugami.com/wp-content/uploads/2022/02/gaming-room-11.jpg',
                title: 'Gaming Room',
            },
            {
                rId: 'E',
                img: 'https://static01.nyt.com/images/2015/10/24/opinion/24manguel/24manguel-superJumbo.jpg',
                title: 'Library',
            },
        ]
    },

]

export function getData() {
    return QUESTIONS
}

export function getGenres(letter) {
    return GENRES[letter]
}

export async function getMovies(genres, pg) {
    const genreIDs = genres.map(genre => genre.id)
    let endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${MOVIE_DB_KEY}&include_adult=false&with_genres=${genreIDs.join(',')}&page=${pg}&sort_by=popularity.desc`
    let response = await fetch(endpoint)
    return response.json()
}

export async function getSimilar(movieId, pg) {
    let endpoint = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${MOVIE_DB_KEY}&language=en-US&page=${pg}`
    let response = await fetch(endpoint)
    return response.json()
}

const MOVIE_DB_KEY = '4d84b4bbf6cccea4ffd1544bc87220a1'

// const MOVIE_DB_GENRES = 
//     [
//         {"id":28,"name":"Action"},
//         {"id":12,"name":"Adventure"},
//         {"id":16,"name":"Animation"},
//         {"id":35,"name":"Comedy"},
//         {"id":80,"name":"Crime"},
//         {"id":99,"name":"Documentary"},
//         {"id":18,"name":"Drama"},
//         {"id":10751,"name":"Family"},
//         {"id":14,"name":"Fantasy"},
//         {"id":36,"name":"History"},
//         {"id":27,"name":"Horror"},
//         {"id":10402,"name":"Music"},
//         {"id":9648,"name":"Mystery"},
//         {"id":10749,"name":"Romance"},
//         {"id":878,"name":"Science Fiction"},
//         {"id":10770,"name":"TV Movie"},
//         {"id":53,"name":"Thriller"},
//         {"id":10752,"name":"War"},
//         {"id":37,"name":"Western"}
//     ]