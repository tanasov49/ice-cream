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
    {title: 'Products', class: 'button-open-modal_header-info'},
    {title: 'Read more >', class: 'button-open-modal_section-made'}
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
    {src: IceCreams, title: 'ice cream', text: 'Soft ice cream with a delicate taste. Made with milk, cream, sugar and natural stabilizer', url: '#', class: 'product__image_ice-cream', bcgColor: '#AEC6A5'},
    {src: IceCoffee, title: 'ice coffee', text: 'Fragrant invigorating drink created from 100% natural ingredients without the use of preservatives and flavor enhancers', url: '#', class: 'product__image_ice-coffee', bcgColor: '#EFD478'},
    {src: MilkShakes, title: 'milkshakes', text: 'Sweet drinks based on milk and ice cream, supplemented with syrups, fruits, berries and other sweets of your choice', url: '#', class: 'product__image_milkshakes', bcgColor: '#D6936D'}
]
import Cow from '../images/Sections/SectionMade/cow.png'
export const objectsSectionMade = {
    src: Cow, text1: 'Ice is a place where you will become not only a little happier, but also healthier. Health is the main value for us, and we follow it when creating our handmade desserts.', text2: 'We use traditional recipes and 100% natural ingredients. Our products are so natural that they can be given to children from the age of three years. Sweets lovers can expect 55 types of ice cream, 15 types of coffee and 23 milkshakes.', text3: 'This is enough to choose ice cream and coffee for any mood!'
}
import CowSvg from '../images/Sections/SectionMade/cow.svg'
import WeightSvg from '../images/Sections/SectionMade/weight.svg'
import IceCremaSvg from  '../images/Sections/SectionMade/icecrema.svg'

export const advantages: IValues[] = [
    {src: CowSvg, title: '721', text: 'Aliquam ac dui vel dui vulputate consectetur. Mauris massa.'},
    {src: WeightSvg, title: '16kg', text: 'Aliquam ac dui vel dui vulputate consectetur. Mauris massa.'},
    {src: IceCremaSvg, title: '84', text: 'Aliquam ac dui vel dui vulputate consectetur. Mauris massa.'}
]