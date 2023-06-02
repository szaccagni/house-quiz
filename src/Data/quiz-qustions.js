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
                rId: 'A',
                img : 'https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg',
                title : 'New York'
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
                rId: 'D',
                img : 'https://media.cntraveler.com/photos/60341fbad7bd3b27823c9db2/16:9/w_2560%2Cc_limit/Tokyo-2021-GettyImages-1208124099.jpg',
                title : 'Tokyo'
            },
            {
                rId: 'E',
                img : 'https://media.timeout.com/images/105211673/image.jpg',
                title : 'Rome'
            },
            {
                rId: 'F',
                img : 'https://deih43ym53wif.cloudfront.net/sydney-opera-australia-shutterstock_1094901527_b98ec1c857.jpeg',
                title : 'Sydney'
            },
        ]
    },

    {
        question : 'pick an exterior',
        response : [
            {
                rId: 'A',
                img : 'https://cdn.decoist.com/wp-content/uploads/2022/03/Central-courtyard-of-the-house-perseves-existing-tree-without-feeling-out-of-place-66621.jpg',
                title : 'Brutalist'
            },
            {
                rId: 'B',
                img: 'https://images.unsplash.com/photo-1485962927012-fc4fd446a24d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1132&q=80',
                title: 'Fairytale'
            },
            {
                rId: 'C',
                img: 'https://www.redfin.com/blog/wp-content/uploads/2022/04/1314-Addison-St-12.jpg',
                title: 'Gothic'
            },
            {
                rId: 'D',
                img: 'https://media.istockphoto.com/id/1255070620/photo/modern-house-with-garden-and-solar-panels.jpg?s=612x612&w=0&k=20&c=-q8PVziNfBqKNb-6esW1ryiAKUTyFKox9F_BOaMO_KI=',
                title: 'Futuristic'
            },
            {
                rId: 'E',
                img: 'https://historicmassachusetts.files.wordpress.com/2020/11/john-ward-house-salem.jpg?w=718',
                title: 'Colonial'
            },
            {
                rId: 'F',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScqabf-QTsN-3VFsIzGU4W64pL9bDSZeMAhA&usqp=CAU',
                title: 'Quirky'
            },
            
        ]
    },

    {
        question : 'pick a kitchen',
        response : [
            {
                rId: 'A',
                img : 'https://www.home-designing.com/wp-content/uploads/2017/02/kitchen-island-industrial-style-adjustable-lamps.jpg',
                title : 'Industrial'
            },
            {
                rId: 'B',
                img: 'https://storage.googleapis.com/gen-atmedia/3/2014/06/e0804f76591843a7ea9ed1a3516b88dbd29a2f4c.jpeg',
                title: 'Pastel'
            },
            {
                rId: 'C',
                img: 'https://images.dwell.com/photos-6504047573267292160/6504061669781700608-large/kitchen.jpg',
                title: 'Black'
            },
            {
                rId: 'D',
                img: 'https://bestdesignideas.com/wp-content/uploads/2015/02/High-Tech-Kitchen-Smooth-decor-free-or-relief-free-facades-980x734.jpg',
                title: 'High-tech'
            },
            {
                rId: 'E',
                img: 'https://hips.hearstapps.com/hmg-prod/images/rustickitchens3-1497449626.jpg',
                title: 'Rustic'
            },
            {
                rId: 'F',
                img: 'https://cdn.onekindesign.com/wp-content/uploads/2013/04/Colorful-Kitchen-01-1-Kindesign.jpg',
                title: 'Bright'
            },
        ]
    },

    {
        question : 'pick a backyard',
        response : [
            {
                rId: 'A',
                img: 'https://st.hzcdn.com/simgs/pictures/landscapes/outside-landscape-group-outside-landscape-group-img~674163e9001c3472_4-0863-1-2b1d76d.jpg',
                title : 'Stone',
            },
            {
                rId: 'B',
                img: 'https://3.bp.blogspot.com/-_2yKDRrfXFg/T_bBNHRV-FI/AAAAAAAAt6M/1iVVed4Xnjk/s1600/IMG_6298.JPG',
                title: 'Romantic',
            },
            {
                rId: 'C',
                img: 'https://www.thespruce.com/thmb/mB7SATStPvYfLyW_7Ae04HzXW3U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/248416467_633001891024435_3035653121947143324_n-7c07e4e532534bd78602501ec1a9215c.jpg',
                title: 'Minimal',
            },
            {
                rId: 'D',
                img: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/3/26/1/SSS-Outdoor-Entertaining-Cinebox-Backyard-Theater.jpg.rend.hgtvcom.616.462.suffix/1427420066321.jpeg',
                title: 'Projector',
            },
            {
                rId: 'E',
                img: 'https://www.eyeofthedaygdc.com/wp-content/uploads/versailles-880359_1280.jpg',
                title: 'Classic',
            },
            {
                rId: 'F',
                img: 'https://www.bhg.com/thmb/YYkWP3y3Q_uCYzLomqc1FEizWUg=/1280x0/filters:no_upscale():strip_icc()/back-yard-patio-with-hot-tub-in-pergola-912cd91a-234502a6ba744d818f3004c1950eca0f.jpg',
                title: 'Colorful',
            },
        ]
    },

    {
        question : 'pick some art',
        response : [
            {
                rId: 'A',
                img : 'https://mcasd.org/client-uploads/images/_mcasd_image_1_62x1_1200px_w/MCASD-LJ-1.jpg',
                title : 'Modern',
            },
            {
                rId: 'B',
                img: 'https://st2.depositphotos.com/4288515/44016/i/1600/depositphotos_440165164-stock-photo-romantic-painting-illustration-fantasy-art.jpg',
                title: 'Dreamy',
            },
            {
                rId: 'C',
                img: 'https://d16kd6gzalkogb.cloudfront.net/magazine_images/Caravaggio-Saint-Jerome-Writing-Image-via-walksofitalycom.jpg',
                title: 'Intense',
            },
            {
                rId: 'D',
                img: 'https://images.squarespace-cdn.com/content/v1/58614e2ae6f2e152e7568f2c/1484580453026-HDE5ELRPNRSWXBM13WL8/Scout.jpg?format=2500w',
                title: 'Futuristic',
            },
            {
                rId: 'E',
                img: 'https://www.artandobject.com/sites/default/files/styles/gallery_item/public/starrynight-edited.jpg?itok=gGlg6L6J',
                title: 'Starry Nights',
            },
            {
                rId: 'F',
                img: 'https://helios-i.mashable.com/imagery/articles/01XY6bHOPzuAM1ygO9clBPV/hero-image.fill.size_1248x702.v1623373740.jpg',
                title: 'Playful',
            },
        ]
    },

    {
        question : 'pick a front door',
        response : [
            {
                rId: 'A',
                img : 'https://secure.img1-cg.wfcdn.com/im/67583898/resize-h445%5Ecompr-r85/2386/238690965/Iron+Prehung+Front+Entry+Door.jpg',
                title : 'Modern',
            },
            {
                rId: 'B',
                img: 'https://blog.countrydoor.com/wp-content/uploads/sites/8/2019/08/Romantic-Front-Door-with-Basket.jpg',
                title: 'Welcoming',
            },
            {
                rId: 'C',
                img: 'https://www.thompsoncreek.com/wp-content/uploads/2021/07/front-door-black-563x409.jpg',
                title: 'Dark',
            },
            {
                rId: 'D',
                img: 'https://abeautifulspace.co.uk/wp-content/uploads/2019/03/house-front-doors-1600x1000.jpg',
                title: 'Futuristic',
            },
            {
                rId: 'E',
                img: 'https://hullworks.com/wp-content/uploads/2021/04/know-your-doors-paneled-doors-english-diamond-panel-door1.jpg',
                title: 'Traditional',
            },
            {
                rId: 'F',
                img: 'https://hips.hearstapps.com/hmg-prod/images/front-door-colors-hbx090117buzz01-2-1601326524.jpg?crop=1.00xw:0.335xh;0,0.263xh&resize=1200:*',
                title: 'Vibrant',
            },
            
            
        ]
    },

    {
        question : 'pick your roommate',
        response : [
            {
                rId: 'A',
                img: 'https://www.rd.com/wp-content/uploads/2019/09/shutterstock_58825690-scaled.jpg',
                title: 'K9 Dog',
            },
            {
                rId: 'B',
                img: 'https://worldanimalfoundation.org/wp-content/uploads/2023/02/history-of-sea-horse-review.jpg',
                title: 'Seahorse',
            },
            {
                rId: 'C',
                img: 'https://cf.ltkcdn.net/reptiles/snakes/images/orig/321346-1600x1066-pet-corn-snake.jpg',
                title: 'Snake',
            },
            {
                rId: 'D',
                img : 'https://post.bark.co/wp-content/uploads/2022/05/iStock-1223511966.jpg',
                title : 'Dog',
            },
            {
                rId: 'E',
                img: 'https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk2OTY2NzAwMDk5MzE1MzQw/pet-turtle-or-tortoise.png',
                title: 'Tortoise',
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
                rId: 'A',
                img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixid=Mnw3MzE3NHwwfDF8c2VhcmNofDJ8fGxpYnJhcnl8ZW58MHx8fHwxNjQ3MjM4ODAy&ixlib=rb-1.2.1&fit=crop&h=230&w=320&crop=edges',
                title : 'Library',
            },
            {
                rId: 'B',
                img: 'https://images.unsplash.com/photo-1596481768453-8befafc2d7ae?ixid=Mnw3MzE3NHwwfDF8c2VhcmNofDF8fGJhY2t5YXJkJTIwZ2FyZGVufGVufDB8fHx8MTY0NzIzODU2Mw&ixlib=rb-1.2.1&fit=crop&h=230&w=320&crop=edges',
                title: 'Garden',
            },
            {
                rId: 'C',
                img: 'https://www.home-designing.com/wp-content/uploads/2022/05/formal-dining-room-inspiration.jpg',
                title: 'Dining Room',
            },
            {
                rId: 'D',
                img: 'https://www.finitesolutions.co.uk/wp-content/uploads/2019/03/Basement-Home-Theatre-Project-in-London.jpeg',
                title: 'Home Theater',
            },
            {
                rId: 'E',
                img: 'https://images.unsplash.com/photo-1616315168316-61d6e5f16ead?ixid=Mnw3MzE3NHwwfDF8c2VhcmNofDF8fGFudGlxdWV8ZW58MHx8fHwxNjQ3MjM4NjIz&ixlib=rb-1.2.1&fit=crop&h=230&w=320&crop=edges',
                title: 'Study Room',
            },
            {
                rId: 'F',
                img: 'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?ixid=Mnw3MzE3NHwwfDF8c2VhcmNofDJ8fGdhbWluZyUyMHJvb218ZW58MHx8fHwxNjQ3MjM4Njg3&ixlib=rb-1.2.1&fit=crop&h=230&w=320&crop=edges',
                title: 'Gaming Room',
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