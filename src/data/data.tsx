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
    {title: 'Products', class: 'button-open-modal_header-info'}
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
export const titleSectionProducts: IValues[] = [
    {title: '100% natural', subtitle: 'products', classTitle: 'title-section_section-products', classSubtitle: 'subtitle-section_section-products'}
]
import IceCreams from '../images/Sections/SectionProducts/icecream.png'
import IceCoffee from '../images/Sections/SectionProducts/icecoffee.png'
import MilkShakes from '../images/Sections/SectionProducts/milkshakes.png'
export const products: IValues[] = [
    {src: IceCreams, title: 'ice cream', text: 'Soft ice cream with a delicate taste. Made with milk, cream, sugar and natural stabilizer', url: '#', class: 'product__image_ice-cream', bcgColor: '#AEC6A5'},
    {src: IceCoffee, title: 'ice coffee', text: 'Fragrant invigorating drink created from 100% natural ingredients without the use of preservatives and flavor enhancers', url: '#', class: 'product__image_ice-coffee', bcgColor: '#EFD478'},
    {src: MilkShakes, title: 'milkshakes', text: 'Sweet drinks based on milk and ice cream, supplemented with syrups, fruits, berries and other sweets of your choice', url: '#', class: 'product__image_milkshakes', bcgColor: '#D6936D'}
]