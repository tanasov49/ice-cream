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