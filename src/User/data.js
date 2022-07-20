import image1 from './images/Country_Lane_Lodge/large-pool-children-s.jpg';
import hotel1 from './images/Country_Boutique_Hotel/country-boutique-hote.jpg'
import hotel2 from './images/Dunkeld Country & Equestrian Estate/296213621.jpg'
import hotel3 from './images/House Lodge/white-house-lodge1.jpg'
import hotel4 from './images/Ingwenyama Conference & Sports Resort/ingwenyama-conference.jpg'
import hotel5 from './images/Khayalami Hotel/khayalami-boutique-hotel (1).jpg'
import hotel6 from './images/Welgelegen Manor/35627412.jpg'
import pic11 from './images/Country_Boutique_Hotel/country-boutique-hotel (1).jpg'
import pic12 from './images/Country_Boutique_Hotel/country-boutique-hotel.jpg'
import pic21 from './images/House Lodge/white-house-lodge.jpg'
import pic22 from './images/House Lodge/white-house-lodge (2).jpg'
import pic31 from './images/Khayalami Hotel/khayalami-boutique-hotel (2).jpg'
import pic32 from './images/Khayalami Hotel/khayalami-boutique-hotel.jpg'
import Room11 from './images/Country_Boutique_Hotel/country-boutique-hotel (1).jpg'
import Room12 from './images/Country_Boutique_Hotel/img-20171208-181727-largejpg.jpg'
import Room21 from './images//House Lodge/gogo-s-cottage-main-bedroom.jpg'
import Room22 from './images//House Lodge/348214480.jpg'
import Room31 from './images/Khayalami Hotel/khayalami-lodge.jpg'
import Room32 from './images/Khayalami Hotel/khayalami-boutique-hotel (2).jpg'

import {
  faStar
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faStar);
const Data = [
  {
    id: 1, image: hotel1, hotelName: 'Country Boutique Hotel', star: faStar,
    suites:[
      {id: 1, suite: Room11,price: '290.00',name:'Superior Double Room'},
       { id: 2, suite: Room12,price: '560.00',name:'comfort Double Room'}
      ], 
      image1: pic11, image2: pic12, maps: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14423.00086767588!2d31.0082387!3d-25.3461615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9f072c98efbb03bb!2sCountry%20Boutique%20Hotel!5e0!3m2!1sen!2sza!4v1656595069968!5m2!1sen!2sza'
  },
  {
    id: 2, image: hotel3, hotelName: 'White House Lodge', star: faStar, image1: pic21, image2: pic22, 
    suites:[
      { id: 1, suite: Room21,price: '410.00',name:'Superior Double Room'},
       { id: 2, suite: Room12,price: '860.00',name:'comfort Double Room'}
    ],
     maps: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14422.686953401464!2d31.043543!3d-25.348794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7010ad1198a0dec1!2sWhite%20House%20Lodge!5e0!3m2!1sen!2sza!4v1656595404887!5m2!1sen!2sza'
  },
  {
    id: 3, image: hotel5, hotelName: 'Khayalami Hotel', star: faStar, image1: pic31,
    image2: pic32,
    suites: 
    [{ id: 1, suite: Room31,price: '320.00',name:'Superior Double Room'},
     { id: 2, suite: Room32,price: '970.00',name:'comfort Double Room'}
    ], 
    maps: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14406.246442818689!2d30.98331!3d-25.48631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2cb0bd6809f1c0c2!2sKhayalami%20Hotel%20-%20Mbombela!5e0!3m2!1sen!2sza!4v1656594274578!5m2!1sen!2sza'
  },
]

export default Data;