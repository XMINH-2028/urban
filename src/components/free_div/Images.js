const banner = ['./images/slide01.webp','./images/slide02.webp','./images/slide03.webp'];
const underbanner = ['./images/udbn1.webp','./images/udbn2.webp','./images/udbn3.webp'];
const newproduct = [
    {src:'./images/newpr_ft4.jpg',title:'Trang trí'},
    {src:'./images/newpr_ft5.webp',title:'Phòng khách'},
    {src:'./images/newpr_ft6.webp',title:'Ghế phụ'},
    {src:'./images/newpr_ft7.webp',title:'Phòng làm việc'}
];
const news = [
    {src:'./images/news01.jpg',title:'Mua sofa giường mang cả thiên đường đến những căn hộ nhỏ'},
    {src:'./images/news02.jpg',title:'Những điều cần biết để lựa chọn bộ bàn ăn phù hợp với ngôi nhà bạn'},
    {src:'./images/news03.jpg',title:'Thiết kế nội thất chung cư đẹp cho đôi vợ chồng trẻ'}
];
const product = [
    {
        name:'Ấm trà inox không gỉ',
        price:890000,
        sale:29,
        color:[
            {   
                name:'',
                url0:'./images/pr1_0.jpg'
            }
        ]
    },
    {
        name:'Bàn xếp gọn nhẹ TB01',
        price:1300000,
        sale:0,
        color:[
            {
                name:'',
                url0:'./images/pr2_0.webp',
                url1:'./images/pr2_1.jpg'
            }
        ]
    },
    {
        name:'Đèn để bàn gọn nhẹ Petite',
        price:690000,
        sale:0,
        color:[
            {
                name:'Kem',
                url0:'./images/pr3_0.webp'
            },
            {
                name:'Xám',
                url0:'./images/pr3_1.webp'
            },
            {
                name:'',
                url0:'./images/pr3_2.webp'
            }
        ]
    },
    {
        name:'Đèn treo sang trọng Hubert',
        price:1200000,
        sale:12,
        color:[
            {
                name:'',
                url0:'./images/pr4_0.webp',
                url1:'./images/pr4_1.webp'
            }
        ]
    },
    {
        name:'Ghế gỗ bập bênh Iconic',
        price:700000,
        sale:21,
        color:[
            {
                name:'',
                url0:'./images/pr5_0.webp'
            },
            {
                name:'',
                url0:'./images/pr5_1.webp'
            }
        ]
    },
    {
        name:'Ghế phòng khách Arctander',
        price:799000,
        sale:20,
        color:[
            {
                name:'Vàng',
                url0:'./images/pr6_0.webp'
            },
            {
                name:'Kem',
                url0:'./images/pr6_1.webp'
            }
        ]
    },
    {
        name:'Ghế sofa giường kéo Roots',
        price:7200000,
        sale:8,
        color:[
            {
                name:'Kem',
                url0:'./images/pr7_0.jpg',
                url1:'./images/pr7_1.webp'
            },
            {
                name:'Xám',
                url0:'./images/pr7_2.jpg',
                url1:'./images/pr7_3.webp',
                url2:'./images/pr7_4.webp'
            }
        ]
    },
    {
        name:'Ghế Sofa phòng khách S003',
        price:6800000,
        sale:14,
        color:[
            {
                name:'Xanh',
                url0:'./images/pr8_0.webp',
                url1:'./images/pr8_1.webp'
            }
        ]
    },
    {
        name:'Ghế trứng treo Oval',
        price:1300000,
        sale:0,
        color:[
            {
                name:'',
                url0:'./images/pr9_0.webp'
            }
        ]
    },
    {
        name:'Ghế tựa lưng phòng khách S004',
        price:2400000,
        sale:25,
        color:[
            {
                name:'Xám',
                url0:'./images/pr10_0.webp'
            },
            {
                name:'Hồng',
                url0:'./images/pr10_1.webp'
            }
        ]
    },
    {
        name:'Loa Bluetooth B&O Beoplay',
        price:4550000,
        sale:0,
        color:[
            {
                name:'Trắng',
                url0:'./images/pr11_0.jpg',
                url1:'./images/pr11_1.jpg'
            },
            {
                name:'Xanh',
                url0:'./images/pr11_2.jpg',
                url1:'./images/pr11_3.jpg'
            }
        ]
    },
    {
        name:'Thang gỗ nhỏ But001',
        price:650000,
        sale:0,
        color:[
            {
                name:'',
                url0:'./images/pr12_0.webp',
                url1:'./images/pr12_1.webp'
            }
        ]
    }

];

const deepCopyFunction = (inObject) => {
    let outObject, value, key;
  
    if (typeof inObject !== "object" || inObject === null) {
      return inObject;
    }
    outObject = Array.isArray(inObject) ? [] : {}
    for (key in inObject) {
      value = inObject[key];
      outObject[key] = deepCopyFunction(value);
    }
  
    return outObject;
}

function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}


const outer = document.createElement('div');
outer.style.visibility = 'hidden';
outer.style.overflow = 'scroll';
outer.style.msOverflowStyle = 'scrollbar';
document.body.appendChild(outer);
const inner = document.createElement('div');
outer.appendChild(inner);
const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
outer.parentNode.removeChild(outer);


    function banner_export() {
        return banner;
    }
    function underbanner_export() {
        return underbanner;
    }
    function getScrollbarWidth() {
       
        return scrollbarWidth;
    }
    function product_export() {
        return product;
    }

    function object_length(x) {
        var number=0;
        for (let item in x) {
            number +=1;
        }
        return number;
    }
    function newproduct_export() {
        return newproduct;
    }
    function news_export() {
        return news;
    }
export {news_export};
export {getOffset};
export {deepCopyFunction};
export {object_length};
export {newproduct_export};
export {product_export};
export {getScrollbarWidth};
export {banner_export};
export {underbanner_export};
