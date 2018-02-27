import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
//Scroll object instance for feature items
new RevealOnScroll($(".feature-item"), "85%");
//Scroll object instance for testimonials items
new RevealOnScroll($(".testimonial"), "60%");
