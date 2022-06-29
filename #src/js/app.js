import { benefitsSlider } from './modules/benefitsSlider.js';
import { careerAcc } from './modules/careerAcc.js';
import { filterSelect } from './modules/filterSelect.js';
import { fltr } from './modules/fltr.js';
import * as flsFuncs from './modules/functions.js';
import { galleryScript } from './modules/galleryScript.js';
import { heroSlider } from './modules/heroSlider.js';
import { intSlider } from './modules/intSlider.js';
import { mapCluster } from './modules/mapCluster.js';
import { mapCt } from './modules/mapCt.js';
import { mapItemSlider } from './modules/mapItemSlider.js';
import { mobmenu } from './modules/mobmenu.js';
import { normalSelect } from './modules/normalSelect.js';
import { pressSlider } from './modules/pressSlider.js';
import { prodChart } from './modules/prodChar.js';
import { rangeSlider } from './modules/rangeSlider.js';
import { tabs } from './modules/tabs.js';
import { tmSliders } from './modules/tmSliders.js';
import { tours } from './modules/tours.js';
import { toursSlider } from './modules/toursSlider.js';
import { up } from './modules/up.js';
import Micromodal from 'micromodal';
import { sqSlider } from './modules/sqSlider.js';
import { routeMap } from './modules/routeMap.js';

flsFuncs.isWebp();

document.addEventListener('DOMContentLoaded', () => {
    heroSlider();
    tours();
    benefitsSlider();
    intSlider();
    tabs('.services', '.services__tabs', '.services__tabs_item', '.services__content_item');
    tabs('.press', '.press__tabs', '.press__tabs_item', '.press__tabscontent_item');
    tabs('.press-page__body_main', '.press-page__body_main_tabs', '.press-page__body_main_tabs_item', '.press-page__body_main_list');
    tabs('.contacts-page__body_main', '.contacts-page__body_main_tabs', '.contacts-page__body_main_tabs_item', '.contacts-page__body_main_tabscontent_item');
    pressSlider();
    up();
    tabs('.product__tm_in', '.product__tm_tabs', '.product__tm_tabs_item', '.product__tm_tabscontent_item');
    tmSliders();
    prodChart();
    tabs('.product__anl', '.product__anl_tabs', '.product__anl_tabs_item', '.product__anl_tabscontent_item');
    rangeSlider();
    mapCluster();
    toursSlider();
    mobmenu();
    mapCt();
    mapItemSlider();
    filterSelect();
    fltr();
    normalSelect();
    careerAcc();
    tabs('.docs-page__body_ex', '.docs-page__body_ex_tabs', '.docs-page__body_ex_tabs_item', '.docs-page__body_ex_tabscontent_list');
    galleryScript();
    tabs('.partners__in', '.partners__tabs', '.partners__tabs_item', '.partners__body_list');
    tabs('.fav-page__body_in', '.fav-page__body_tabs', '.fav-page__body_tabs_item', '.fav-page__body_content_list');
    sqSlider();
    routeMap();
    
    
    Micromodal.init();

})
