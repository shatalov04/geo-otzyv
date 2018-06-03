import './foundation.js';
import './foundation.css';

const plus = require('./img/plus.svg');
// const vkModule = require('./js/vk');
// const filter = require('./js/filter');
const yellTemplate = require('./yell-template.hbs');

// const initialZone = document.querySelector('#initial-zone');
// const filteredZone = document.querySelector('#filtered-zone');
// const initialList = document.querySelector('#initial-list');
// const filteredList = document.querySelector('#filtered-list');
// const zoneWrapper = document.querySelector('#zone-wrapper');
// const saveButton = document.querySelector('#save-button');
// const initialInput = document.querySelector('#initial-input');
// const filteredInput = document.querySelector('#filtered-input');
// const hiddenItemClass = 'c-friends__item_hidden';


let yMap;
let clusterer;


(async() => {
    try {
        await ymaps.ready();
        yMap = new ymaps.Map('map', {
            center: [55.76, 37.64], // Москва
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        });
        clusterer = new ymaps.Clusterer({
            preset: 'islands#invertedBlackClusterIcons',
            clusterDisableClickZoom: true,
            openBalloonOnClick: false,
            iconColor: '#6f6f6f'
        });

        yMap.geoObjects.add(clusterer);
var geoObjects=[];
        geoObjects.push(new ymaps.Placemark([55.833436, 37.715175], {}, {
                preset: 'islands#blackIcon',
            }));
        geoObjects.push(new ymaps.Placemark([55.833636, 37.715175], {}, {
                preset: 'islands#blackIcon',
            }));
        clusterer.add(geoObjects);
    }
    catch (e) {
        console.error(e);
    }
})();


// // map
//
// let map;
// window.initMap = function () {
//     console.log(document.getElementById('map'));
//     if (!document.getElementById('map'))
//         return;
//     let latLngCenter = {lat: 55.902, lng: 37.7375};
//     // if ($(window).width()<600){
//     //     latLngCenter = {lat: 55.902, lng: 37.7375};
//     // }
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: latLngCenter,
//         zoom: 17,
//         draggable: !("ontouchend" in document),
//         scrollwheel: false,
//         disableDefaultUI: true,
//         styles: [
//             {
//                 "featureType": "all",
//                 "elementType": "geometry",
//                 "stylers": [
//                     {
//                         "visibility": "on"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "administrative",
//                 "elementType": "labels.text.fill",
//                 "stylers": [
//                     {
//                         "color": "#444444"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "landscape",
//                 "elementType": "all",
//                 "stylers": [
//                     {
//                         "color": "#f2f2f2"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "poi",
//                 "elementType": "all",
//                 "stylers": [
//                     {
//                         "visibility": "off"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "poi.attraction",
//                 "elementType": "geometry",
//                 "stylers": [
//                     {
//                         "visibility": "off"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "road",
//                 "elementType": "all",
//                 "stylers": [
//                     {
//                         "saturation": -100
//                     },
//                     {
//                         "lightness": 45
//                     }
//                 ]
//             },
//             {
//                 "featureType": "road.highway",
//                 "elementType": "all",
//                 "stylers": [
//                     {
//                         "visibility": "simplified"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "road.arterial",
//                 "elementType": "labels.icon",
//                 "stylers": [
//                     {
//                         "visibility": "off"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "transit",
//                 "elementType": "all",
//                 "stylers": [
//                     {
//                         "visibility": "off"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "transit.station.rail",
//                 "elementType": "geometry",
//                 "stylers": [
//                     {
//                         "visibility": "on"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "water",
//                 "elementType": "all",
//                 "stylers": [
//                     {
//                         "color": "#4369aa"
//                     },
//                     {
//                         "visibility": "on"
//                     }
//                 ]
//             },
//             {
//                 "featureType": "water",
//                 "elementType": "geometry",
//                 "stylers": [
//                     {
//                         "visibility": "on"
//                     },
//                     {
//                         "hue": "#005eff"
//                     }
//                 ]
//             }
//         ]
//     });
// }
//
// // marker
//     var latLngHome = {lat: 55.90085, lng: 37.73885};
//     var image = 'assets/img/marker.png';
//     var marker = new google.maps.Marker({
//         position: latLngHome,
//         map: map,
//         icon: image
//     });
// }


//
// let vkFriends;
// let friends;
// let filteredFriends;
// let currentDrag;
//
// filter.load();
//
// (async() => {
//     try {
//         const getVkFriends = await vkModule.friends();
//
//         vkFriends = getVkFriends.items;
//
//         renderLists();
//
//         zoneWrapper.addEventListener('click', moveHandler);
//         saveButton.addEventListener('click', saveHandler);
//
//         filteredInput.addEventListener('keyup', refreshList);
//         initialInput.addEventListener('keyup', refreshList);
//
//     }
//     catch (e) {
//         console.error(e);
//     }
// })();
//
// function moveHandler(e) {
//     e.preventDefault();
//     const target = e.target;
//
//     if (!target.classList.contains('c-friends__button')) {
//         return;
//     }
//
//     const zone = target.closest('.c-friends-zone');
//
//     if (!zone) {
//         return;
//     }
//     if (zone === initialZone) {
//         moveFriend(target, 'initial');
//     } else if (zone === filteredZone) {
//         moveFriend(target, 'filtered');
//     }
// }
//
// function saveHandler(e) {
//     localStorage.filteredUsers = JSON.stringify(filter.ids());
//     console.dir(filter.ids);
//     console.dir(localStorage.filteredUsers);
// }
//
// function moveFriend(link, from) {
//     const node = link.closest('[data-user]');
//     filter.move(node.dataset.user, from);
//     if (from === 'initial') {
//         filteredList.appendChild(node);
//     } else {
//         initialList.appendChild(node);
//     }
//     //renderLists();
// }
//
// function renderLists() {
//     let html = yellTemplate({
//         friends: vkFriends.filter(filter.isInitial),
//         plus: plus,
//     });
//
//     initialList.innerHTML = html;
//
//     html = yellTemplate({
//         friends: vkFriends.filter(filter.isFiltered),
//         plus: plus,
//     });
//
//     filteredList.innerHTML = html;
// }
//
//
// function refreshList(e) {
//     const target = e.target;
//     let list = null;
//
//     if (target === initialInput) {
//         list = initialList;
//     } else if (target === filteredInput) {
//         list = filteredList;
//     } else {
//         return;
//     }
//
//     const chunk = target.value;
//     const children = [...list.children];
//
//     children.forEach(item => {
//         const userId = item.dataset.user;
//         const user = vkFriends.find(u => u.id == userId);
//
//         if (filter.isMatching(user, chunk) || chunk === '') {
//             item.classList.remove(hiddenItemClass);
//         } else {
//             item.classList.add(hiddenItemClass);
//         }
//     });
// }
//
// document.addEventListener('dragstart', (e) => {
//     const node = e.target;
//     if (!node.classList.contains('c-friends__item')) {
//         return;
//     }
//     const zone = getCurrentZone(node);
//
//     if (zone) {
//         currentDrag = {startZone: zone, node: node};
//     }
// });
//
// document.addEventListener('dragover', (e) => {
//     e.preventDefault();
// });
//
// document.addEventListener('drop', (e) => {
//     if (!currentDrag) {
//         return;
//     }
//     e.preventDefault();
//
//     const zone = getCurrentZone(e.target);
//
//     if (!zone || currentDrag.startZone === zone) {
//         return;
//     }
//     const subElement = currentDrag.node.firstElementChild;
//
//     if (currentDrag.startZone === initialList) {
//         moveFriend(subElement, 'initial');
//     } else if (currentDrag.startZone === filteredList) {
//         moveFriend(subElement, 'filtered');
//     }
//     currentDrag = null;
// });
//
//
// const getCurrentZone = node =>
//     node.closest('.c-friends__list');
