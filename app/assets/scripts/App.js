import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();

//Scroll object instance for feature items
new RevealOnScroll($(".feature-item"), "85%");
//Scroll object instance for testimonials items
new RevealOnScroll($(".testimonial"), "60%");

var stickyHeader = new StickyHeader();

var modal = new Modal();
