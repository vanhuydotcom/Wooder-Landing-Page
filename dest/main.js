//menu mobile
// let nav = document.querySelector(".nav");
// let btnMenu = document.querySelector("header .btnMenu");
// btnMenu.onclick = function () {
//     // nav.classList.toggle("active")

//     if (nav.classList.contains("active")) {
//         //nlhd toggle
//         nav.classList.remove("active");
//     } else {
//         nav.classList.add("active");
//     }
// }
/***************Jq Nav ******************** */
let nav = $('.nav');
let btnMenu = $('header .btnMenu')
btnMenu.on('click', function (e) {
    e.stopPropagation();
    nav.toggleClass('active');
});
$(document).on('click', function () {
    $('.nav').removeClass('active');
});

/*************end******* */
//Lang Option
// let langCur = document.querySelector(".lang__current");
// let langOpt = document.querySelector(".lang__option");
// let itemOpt = document.querySelectorAll(".lang__option .opt")
// langCur.addEventListener('click', langOption);

// let langCurspan = langCur.querySelector("span")

// function langOption(element) {
//     langOpt.classList.toggle("active");
//     element.stopPropagation();

// };
// itemOpt.forEach(function (item) {
//     item.addEventListener('click', function () {
//         console.log(item)
//         let temp = langCurspan.textContent;
//         langCurspan.textContent = item.textContent;
//         item.textContent = temp;
//         langOpt.classList.remove("active");
//     });
// });
// document.addEventListener('click', function () {
//     langOpt.classList.remove("active");
// });
/**********************jq lang option***************************/


let opt = $('.lang__option .opt');
$('.lang__current').on('click', langOption);
function langOption(element) {
    $('.lang__option').toggleClass('active');
    element.stopPropagation();
};
// opt.each(function (index, item) {
opt.on('click', function () {
    let temp = $('.lang__current span').text();
    $('.lang__current span').text($(this).text())
    $(this).text(temp);
    console.log(temp);
    $('.lang__option').removeClass('active');
});
// });
$(document).on('click', function () {
    $('.lang__option').removeClass('active');
});
/**********************end jq lang option***************************/

//Sự kiện neo 
let menus = document.querySelectorAll("header .menu a");
let heighHeader = document.querySelector("header").offsetHeight;
//lay chieu cao bao gom border
function removeActiveMove() {
    menus.forEach(function (element__menus_item, indes__menus_item) {
        element__menus_item.classList.remove("active");
    });
}
let sections = [];
menus.forEach(function (element_menus, index_menus) {
    let href = element_menus.getAttribute("href");
    let className = href.replace("#", "");
    let section = document.querySelector("." + className);
    sections.push(section)

    element_menus.addEventListener('click', function (even) {
        even.preventDefault();
        let positionSection = section.offsetTop;
        window.scrollTo({
            top: positionSection - heighHeader + 1,
            behavior: 'smooth'
        });
        removeActiveMove();
        element_menus.classList.add("active");
    });

});
//sự kiện active khi scroll khi đi tới section
window.addEventListener('scroll', function (even) {
    let positionScroll = window.pageYOffset;
    sections.forEach(function (section, index) {
        if (positionScroll > section.offsetTop - heighHeader && positionScroll < section.offsetHeight + section.offsetTop)
        //vị trí top của section
        {
            removeActiveMove();
            menus[index].classList.add("active");
        } else {
            menus[index].classList.remove("active");
        };

    })

})
//btt-btn
let btt = document.querySelector('.btt-btn')
let positionScrollProduct = document.querySelector('.products').offsetTop;
let positionScrollFooter = document.querySelector('#footer').offsetTop;
let heighFooter = footer.offsetHeight;
console.log(heighFooter)
// console.log(positionScrollFooter)
btt.addEventListener('click', function () {
    window.scrollTo({
        top: 0
    });

});
console.log("jgjg", window.innerHeight)
window.addEventListener('scroll', function () {
    let positionScrollTop = window.pageYOffset;
    console.log(positionScrollTop)
    console.log("ff", positionScrollFooter - (window.innerHeight + $("footer").height()));
    if (positionScrollTop < positionScrollProduct ||
        positionScrollTop > positionScrollFooter - (window.innerHeight + $("footer").height())) {
        btt.style.display = 'none';
    } else {
        btt.style.display = 'block';
    };
});
//popup-video
let btnVideo = document.querySelectorAll('.playButon');
let popupVideo = document.querySelector('.popup-video');
let closePopupVideo = document.querySelector('.close-popup');
let iframe = document.querySelector('.popup-video  iframe');
btnVideo.forEach(function (button) {
    button.addEventListener('click', function () {
        let videoId = button.getAttribute('data-video-id');
        iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId + "?autoplay=1");
        popupVideo.style.display = 'flex';
    });
});
closePopupVideo.addEventListener('click', function () {
    iframe.setAttribute('src', "");
    popupVideo.style.display = 'none';
});
document.querySelector('.popup-video').addEventListener('click', function (even) {
    iframe.setAttribute('src', "");
    popupVideo.style.display = 'none';
});
//slider
// let listItemSlider = document.querySelectorAll('.slider__item');
// let number = document.querySelector('.slider__ctrl-paging .number');
// let dotLi = document.querySelectorAll('.slider__ctrl-paging .dot li')
// let currentSlider = 0;
// listItemSlider.forEach(function (itemSlider, indexSlider) {
//     if (itemSlider.classList.contains('active')) {
//         currentSlider = indexSlider;
//     };

// });

// function showNumber(indexSlider) {
//     number.innerHTML = (currentSlider + 1).toString().padStart(2, '0');
// }
// showNumber(currentSlider + 1);
// dotLi[currentSlider].classList.add('is-slected');
// document.querySelector('.btnctl.arrowLeft').addEventListener('click', function () {
//     if (currentSlider < listItemSlider.length - 1) {
//         goto(currentSlider + 1)
//         // listItemSlider[currentSlider].classList.remove('active');
//         // listItemSlider[currentSlider + 1].classList.add('active');
//         // currentSlider++;
//     } else {
//         // 
//         goto(0);
//     }

// });
// document.querySelector('.btnctl.arrowRight').addEventListener('click', function () {
//     if (currentSlider > 0) {
//         goto(currentSlider - 1)
//         // listItemSlider[currentSlider].classList.remove('active');
//         // listItemSlider[currentSlider - 1].classList.add('active');
//         // currentSlider--;
//     } else {
//         // listItemSlider[currentSlider].classList.remove('active');
//         // listItemSlider[listItemSlider.length -1].classList.add('active');
//         // currentSlider = listItemSlider.length -1;
//         goto(listItemSlider.length - 1);
//     }

// });
// function goto(indexSlider) {
//     listItemSlider[currentSlider].classList.remove('active');

//     listItemSlider[indexSlider].classList.add('active');
//     dotLi[currentSlider].classList.remove('is-slected');
//     dotLi[indexSlider].classList.add('is-slected');
//     currentSlider = indexSlider;
//     showNumber(currentSlider + 1);
// }
// dotLi.forEach(function (li, indexSlider) {
//     li.addEventListener('click', function () {
//         goto(indexSlider);
//     });
// });
/*************end js slider************ */
/***************flickity slider************* */
let $carousel = $('.slider__item-wrap');
$carousel.flickity({
    cellAlign: 'left',
    contains: true,
    prevNextButtons: false,
    pageDots: true,
    // freeScroll: true,
    wrapAround: true,
    autoPlay: 1500,
    on: {
        ready: function () {
            let dots = $('.flickity-page-dots');
            let paging = ('.slider__ctrl-paging .dot');
            dots.appendTo(paging);
        },
        change: function (index) {
            // console.log(index)
            let number = $('.slider__ctrl-paging .number');
            let indexPage = index + 1;
            number.text(indexPage.toString().padStart(2, 0));
        },

    }
});
$('.slider__ctrl-btnctrl .arrowRight').on('click', function () {
    $carousel.flickity('previous');
});
$('.slider__ctrl-btnctrl .arrowLeft').on('click', function () {
    $carousel.flickity('next');
});


/*****************end flickity slider****************** */




//news tab
// let tabBtn = document.querySelectorAll('.tab__wrap .tab__wrap-title span');
// let tabList = document.querySelectorAll('.tab__wrap .news__item-wrap');
// tabBtn.forEach(function (itemBtn, indexBtn) {
//     itemBtn.addEventListener('click', function () {
//         let currentTab = indexBtn + 1;
//         tabBtn.forEach(function (tabTag) {
//             tabTag.classList.remove('active');
//         });
//         tabList.forEach(function (tabList) {
//             tabList.classList.remove('active');
//         });
//         itemBtn.classList.add('active')
//         document.querySelector(".tab-" + currentTab).classList.add('active')

//     })
// });
let news_item = $('.tab__wrap .news__item-wrap');

$(document).on('click', '.tab__wrap .tab__wrap-title span', function () {
    $('.tab__wrap .tab__wrap-title span').removeClass('active');
    $(this).addClass('active')
    let index_newsTitle = $(this).index();

    let item_newsTitle = news_item.eq(index_newsTitle);
    news_item.removeClass('active');
    item_newsTitle.addClass('active')
});


//accordian
// let faq = document.querySelectorAll('.faq .row .accordion')
// faq.forEach(function (itemFaq, indexFqa) {
//     itemFaq.addEventListener('click', function () {
//         // console.log(itemFaq.nextElementSibling);
//         itemFaq.classList.toggle('active');
//         faq.forEach(function (itemFaq_b, indexFqa_b) {
//             if (indexFaqa !== indexFqa_b) {
//                 itemFaq_b.classList.remove('active');
//             }
//         })
//         let a = itemFaq.querySelector('.content')
//         console.log(a);
//         if (a.style.maxHeight) {
//             a.style.maxHeight = null;
//         } else {
//             a.style.maxHeight = a.scrollHeight + "px";
//         };
//         // if (itemFaq.classList.contains('active')) {
//         //     itemFaq.classList.remove('active');
//         // } else {
//         //     itemFaq.classList.add('active');
//         // }
//     });
// });
$(document).ready(function () {
    $('.accordion_wrap .accordion .content').hide();
    $(document).on('click', '.accordion_wrap .accordion .accordion__title', function () {
        $('.accordion_wrap .accordion').not($(this).parent()).removeClass('active');
        $('.accordion_wrap .accordion .content').not($(this).next()).slideUp();
        $(this).next().slideToggle();
        $(this).parent().toggleClass('active');
    })

});

//contact- form 
$(document).on('click', '.btn-contact', function (e) {
    e.preventDefault();
    let name = $("input[name='name']").val();
    let phone = $("input[name='phone']").val();
    let email = $("input[name='email']").val();
    let content = $("textarea[name='content']").val();

    let ferrors = {
        name: [],
        phone: [],
        email: []
    };
    if (name == '') {
        ferrors.name.push('errors')
    };
    if (phone == '') {
        ferrors.phone.push('errors')
    } else {
        if (phone.length < 10 || phone.length > 11) {
            ferrors.phone.push('errors')
        }
    };
    if (email == '') {
        ferrors.email.push('errors')
    } else {
        if (IsEmail(email) == false) {
            ferrors.email.push('errors')
        };
    };
    console.log(ferrors)
    let success = true;
    for (let index in ferrors) {
        $(`input[name=${index}]`).parent().find(".errors").remove();
        if (ferrors[index].length > 0) {

            success = false;
            let htmlErrors = `<div class="errors">${ferrors[index][0]}<div>`;
            $(`input[name=${index}]`).parent().append(htmlErrors)
        }
    }
    // if (success == true) {
    //     alert(1)
    // } else {
    //     alert(2)
    // }

    function IsEmail(email) {
        var regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regexEmail.test(email)) {
            return false;
        } else {
            return true;
        }
    };
    // function IsPhone(phone) {
    //     var regexPhone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    //     if (!regexPhone.test(email)) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // };


})

// let phone = document.querySelectorAll('#formContact input');
// document.querySelector('#formContact button').addEventListener('click', function () {
//     phone.getAttribute("value")
//     console.log(phone.value)
// })
// This is the jquery object of the input, do what you will
// $('form#formContact :button').on('click', function () {
//     $("form#formContact :input").each(function () {
//         let input = $(this);
//         if ($(this).val() == '' || $(this).val() == "null") {
//             console('error');
//         } else {
//             return true;
//         }
//     })
// })
/*******************DOM js for thumnail slide photoswipe**********************/
var initPhotoSwipeFromDOM = function (gallerySelector) {
    var parseThumbnailElements = function (el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
        for (var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            if (figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute('data-size').split('x');
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };
            if (figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML;
            }
            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };
    var onThumbnailsClick = function (e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function (el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });
        if (!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }
            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if (index >= 0) {
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };
    var photoswipeParseHash = function () {
        var hash = window.location.hash.substring(1),
            params = {};
        if (hash.length < 5) {
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }
        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function (index) {
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
            },
            showAnimationDuration: 0,
            hideAnimationDuration: 0
        };
        if (fromURL) {
            if (options.galleryPIDs) {
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        if (isNaN(options.index)) {
            return;
        }
        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    var galleryElements = document.querySelectorAll(gallerySelector);
    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
};
$(window).on('load', function () {
    initPhotoSwipeFromDOM('.gallery__grid');
});


/*******************end*************************/