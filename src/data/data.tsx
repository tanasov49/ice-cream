import { IValues } from "../interface/model";
import IceCreamMany from '../images/Header/many-ice-cream.png'
import IceCream from '../images/Header/ice-cream.png'
export const menuLinks: IValues[] = [
    {id: 1, title: 'Home', url: '#'},
    {id: 2, title: 'How it’s made?', url: '#'},
    {id: 3, title: 'Our products', url: '#'},
    {id: 4, title: 'Contact', url: '#'}
]
export const buttonPage: IValues[] = [
    {title: 'Buy now >', class: 'button-open_header'},
    {title: 'Products', class: 'button-open_header-info'},
    {title: 'Read more >', class: 'button-open_section-made'},
    {title: 'Our Locations >', class: 'button-open_footer-locations'},
    {title: 'Franchise >', class: 'button-open_footer-franchise'}
]
export const classesPage: IValues[]= [
    {class: 'logo_header'}
]
export const linksPage: IValues[] = [
    {title: 'How it’s made?', class: 'link-href_header-info', url: '#'}
]
export const imagesPage: IValues[] = [
    {src: IceCreamMany, title: 'ice-cream-many', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', url: '#'},
    {src: IceCream, title: 'ice-cream'}
]
export const ourCafes = [
    {text: 'cafes', number: '16'},
    {text: 'food trucks', number: '23'},
]
export const textSection: IValues[] = [
    {title: '100% natural', subtitle: 'products', classTitle: 'title-section_section-products', classSubtitle: 'subtitle-section_section-products'},
    {title: 'tradition and love', subtitle: 'how it’s made?', classTitle: 'title-section_section-made', classSubtitle: 'subtitle-section_section-made'},
]
import IceCreams from '../images/Sections/SectionProducts/icecream.png'
import IceCoffee from '../images/Sections/SectionProducts/icecoffee.png'
import MilkShakes from '../images/Sections/SectionProducts/milkshakes.png'
export const products: IValues[] = [
    {src: IceCreams, title: 'ice cream', text: 'Soft ice cream with a delicate taste. Made with milk, cream, sugar and natural stabilizer', url: '#', class: 'product__image_ice-cream', bcgColor: '#AEC6A5', id: 1},
    {src: IceCoffee, title: 'ice coffee', text: 'Fragrant invigorating drink created from 100% natural ingredients without the use of preservatives and flavor enhancers', url: '#', class: 'product__image_ice-coffee', bcgColor: '#EFD478', id: 2},
    {src: MilkShakes, title: 'milkshakes', text: 'Sweet drinks based on milk and ice cream, supplemented with syrups, fruits, berries and other sweets of your choice', url: '#', class: 'product__image_milkshakes', bcgColor: '#D6936D', id: 3}
]
import Cow from '../images/Sections/SectionMade/cow.png'
export const objectsSectionMade = {
    src: Cow, text1: 'Ice is a place where you will become not only a little happier, but also healthier. Health is the main value for us, and we follow it when creating our handmade desserts.', text2: 'We use traditional recipes and 100% natural ingredients. Our products are so natural that they can be given to children from the age of three years. Sweets lovers can expect 55 types of ice cream, 15 types of coffee and 23 milkshakes.', text3: 'This is enough to choose ice cream and coffee for any mood!'
}
import CowSvg from '../images/Sections/SectionMade/cow.svg?url'
import WeightSvg from '../images/Sections/SectionMade/weight.svg?url'
import IceCremaSvg from  '../images/Sections/SectionMade/icecrema.svg?url'

export const advantages: IValues[] = [
    {src: CowSvg, title: '721', text: 'Aliquam ac dui vel dui vulputate consectetur. Mauris massa.', id: 1},
    {src: WeightSvg, title: '16kg', text: 'Aliquam ac dui vel dui vulputate consectetur. Mauris massa.', id: 2},
    {src: IceCremaSvg, title: '84', text: 'Aliquam ac dui vel dui vulputate consectetur. Mauris massa.', id: 3}
]
import ImageIceCreams from '../images/Sections/SectionReviews/imageicecreams.png'
export const imageIceCreams = {
    src: ImageIceCreams, alt: 'image ice-creams'
}
import PhotoBryan from '../images/Sections/SectionReviews/PhotoBryan.png'
import PhotoDiana from '../images/Sections/SectionReviews/PhotoDiana.png'
import PhotoSam from '../images/Sections/SectionReviews/PhotoSam.png'
export const reviews: IValues[] = [
    {src: PhotoBryan, title: 'Bryan, New-York', text: 'Every day we come to you with friends after classes in college. We love your ice cream and casual atmosphere!', id: 1},
    {src: PhotoDiana, title: 'Diana, Chicago', text: 'Ice cream is my passion! I love your chocolate hazelnut ice cream! And I really like the excellent service - always served politely and quickly!', id: 2},
    {src: PhotoSam, title: 'Sam, Los Angeles', text: 'I love eating popsicles on a hot day. Yours is always delicious. I recommend your cafe to everyone I know.', id: 3}
]
export const address = [
    {type: 'cafe', city: 'Chicago', address: '10340 Ridgeland Ave, Chicago Ridge, IL 60415, USA', workingDays: 'Monday - Friday', timeWorking: '06:00 AM - 10:00 PM', daysOff: 'Saturday - Sunday', timeOff: '08:00 AM - 16:00 PM', phone: '+61(0) 383 766 284', email: 'noreply@envato.com', id: 1, urlMap: '#',},
    {type: 'food truck', city: 'Los Angeles', address: '1003 Manhattan Ave, Manhattan Beach, CA 90263, USA', workingDays: 'Monday - Friday', timeWorking: '06:00 AM - 10:00 PM', daysOff: 'Saturday - Sunday', timeOff: '08:00 AM - 16:00 PM', phone: '+61(0) 383 766 284', email: 'noreply@envato.com', id: 2, urlMap: '#'},
    {type: 'cafe', city: 'New York', address: '726 Sterling Pl, Brooklyn, NY 11222, USA', workingDays: 'Monday - Friday', timeWorking: '06:00 AM - 10:00 PM', daysOff: 'Saturday - Sunday', timeOff: '08:00 AM - 16:00 PM', phone: '+61(0) 383 766 284', email: 'noreply@envato.com', id: 3, urlMap: '#'}
]
export const textFooterNav = {
    title: 'homemade ice cream made ', subtitle: 'with passion', text: 'Feel free to contact', phone: '+61 (0) 383 766 284'
}
import GithubSvg from '../images/Footer/FooterNav/Github.svg'
import TelegramSvg from '../images/Footer/FooterNav/Telegram.svg'
import FaceBookSvg from '../images/Footer/FooterNav/Facebook.svg' 
export const socialIcons = [
    {Svg: GithubSvg, url: '#', id: 1},
    {Svg: TelegramSvg, url: '#', id: 2},
    {Svg: FaceBookSvg, url: '#', id: 3}
]

export const ingredientsProducts = [
    {src: IceCreams, title: 'ice cream', foodComponents: [
        {
            name: 'kcal',
            amount: '320',
            bcgColor: '#AEC6A5'
        },
        {
            name: 'Protein',
            amount: '4g',
            bcgColor: '#AEC6A5'
        },
        {
            name: 'Fats',
            amount: '8,2g',
            bcgColor: '#AEC6A5'
        },
        {
            name: 'Fats',
            amount: '40,4g',
            bcgColor: '#AEC6A5'
        },
    ],
    ingredients: [
        {
            name: 'Milk',
            amount: '100ml',
        },
        {
            name: 'Belgian chocolate',
            amount: '20g',
        },
        {
            name: 'Cream',
            amount: '150 ml',
        },
        {
            name: 'Cocoa powder',
            amount: '30g',
        },
        {
            name: 'Sugar',
            amount: '40g',
        },
        {
            name: 'Vanilla sugar',
            amount: '10g',
        }
    ]
    },
    {src: IceCoffee, title: 'ice coffee', foodComponents: [
        {
            name: 'kcal',
            amount: '320',
            bcgColor: '#EFD478'
        },
        {
            name: 'Protein',
            amount: '4g',
            bcgColor: '#EFD478'
        },
        {
            name: 'Fats',
            amount: '8,2g',
            bcgColor: '#EFD478'
        },
        {
            name: 'Fats',
            amount: '40,4g',
            bcgColor: '#EFD478'
        },
    ],
    ingredients: [
        {
            name: 'Milk',
            amount: '100ml',
        },
        {
            name: 'Belgian chocolate',
            amount: '20g',
        },
        {
            name: 'Cream',
            amount: '150 ml',
        },
        {
            name: 'Cocoa powder',
            amount: '30g',
        },
        {
            name: 'Sugar',
            amount: '40g',
        },
        {
            name: 'Vanilla sugar',
            amount: '10g',
        }
    ]
    },
    {src: MilkShakes, title: 'milk shakes',  foodComponents: [
        {
            name: 'kcal',
            amount: '320',
            bcgColor: '#D6936D',
        },
        {
            name: 'Protein',
            amount: '4g',
            bcgColor: '#D6936D',
        },
        {
            name: 'Fats',
            amount: '8,2g',
            bcgColor: '#D6936D',
        },
        {
            name: 'Fats',
            amount: '40,4g',
            bcgColor: '#D6936D',
        },
    ],
    ingredients: [
        {
            name: 'Milk',
            amount: '100ml',
        },
        {
            name: 'Belgian chocolate',
            amount: '20g',
        },
        {
            name: 'Cream',
            amount: '150 ml',
        },
        {
            name: 'Cocoa powder',
            amount: '30g',
        },
        {
            name: 'Sugar',
            amount: '40g',
        },
        {
            name: 'Vanilla sugar',
            amount: '10g',
        }
    ]
    },
]