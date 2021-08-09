import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
  private categories = [
    {
        "id": 2,
        "Name": "iPhone",
        "published_at": "2021-07-16T15:24:25.340Z",
        "created_at": "2021-07-16T15:24:23.583Z",
        "updated_at": "2021-07-16T15:24:25.367Z",
        "under_categories": [
            {
                "id": 37,
                "Name": "iPhone SE",
                "category": 2,
                "published_at": "2021-07-24T11:31:50.253Z",
                "created_at": "2021-07-24T11:31:44.560Z",
                "updated_at": "2021-07-24T11:32:05.070Z"
            },
            {
                "id": 38,
                "Name": "iPhone 11",
                "category": 2,
                "published_at": "2021-07-24T11:32:18.409Z",
                "created_at": "2021-07-24T11:32:15.862Z",
                "updated_at": "2021-07-24T11:32:18.469Z"
            },
            {
                "id": 36,
                "Name": "iPhone 12",
                "category": 2,
                "published_at": "2021-07-24T11:31:33.180Z",
                "created_at": "2021-07-24T11:31:30.323Z",
                "updated_at": "2021-07-24T11:31:33.232Z"
            },
            {
                "id": 3,
                "Name": "iPhone 12 Pro",
                "category": 2,
                "published_at": "2021-07-16T15:31:01.826Z",
                "created_at": "2021-07-16T15:30:59.806Z",
                "updated_at": "2021-07-16T15:31:01.919Z"
            }
        ]
    },
    {
        "id": 3,
        "Name": "iMac",
        "published_at": "2021-07-16T15:24:50.371Z",
        "created_at": "2021-07-16T15:24:48.589Z",
        "updated_at": "2021-07-16T15:24:50.410Z",
        "under_categories": [
            {
                "id": 41,
                "Name": "Mac Book Pro 16",
                "category": 3,
                "published_at": "2021-07-24T11:49:10.855Z",
                "created_at": "2021-07-24T11:49:09.586Z",
                "updated_at": "2021-07-24T11:49:10.882Z"
            },
            {
                "id": 39,
                "Name": "Mac Book Pro 13",
                "category": 3,
                "published_at": "2021-07-24T11:48:10.811Z",
                "created_at": "2021-07-24T11:48:09.180Z",
                "updated_at": "2021-07-24T11:48:10.857Z"
            },
            {
                "id": 40,
                "Name": "iMac 24",
                "category": 3,
                "published_at": "2021-07-24T11:48:32.257Z",
                "created_at": "2021-07-24T11:48:30.928Z",
                "updated_at": "2021-07-24T11:48:42.197Z"
            },
            {
                "id": 42,
                "Name": "iMac 27",
                "category": 3,
                "published_at": "2021-07-24T11:49:27.563Z",
                "created_at": "2021-07-24T11:49:26.268Z",
                "updated_at": "2021-07-24T11:49:27.612Z"
            },
            {
                "id": 1,
                "Name": "MacBook Air",
                "category": 3,
                "published_at": "2021-07-16T15:30:19.130Z",
                "created_at": "2021-07-16T15:30:15.656Z",
                "updated_at": "2021-07-16T15:30:19.166Z"
            },
            {
                "id": 43,
                "Name": "Mac Pro",
                "category": 3,
                "published_at": "2021-07-24T11:49:39.821Z",
                "created_at": "2021-07-24T11:49:38.391Z",
                "updated_at": "2021-07-24T11:49:39.938Z"
            },
            {
                "id": 44,
                "Name": "Mac Mini",
                "category": 3,
                "published_at": "2021-07-24T11:49:51.591Z",
                "created_at": "2021-07-24T11:49:50.181Z",
                "updated_at": "2021-07-24T11:49:51.626Z"
            }
        ]
    },
    {
        "id": 4,
        "Name": "Watch",
        "published_at": "2021-07-16T15:24:59.316Z",
        "created_at": "2021-07-16T15:24:57.896Z",
        "updated_at": "2021-07-16T15:24:59.334Z",
        "under_categories": [
            {
                "id": 4,
                "Name": "Apple Watch Series 6",
                "category": 4,
                "published_at": "2021-07-16T15:31:26.357Z",
                "created_at": "2021-07-16T15:31:24.962Z",
                "updated_at": "2021-07-16T15:31:26.469Z"
            },
            {
                "id": 46,
                "Name": "Apple Watch Series 3",
                "category": 4,
                "published_at": "2021-07-24T11:50:49.937Z",
                "created_at": "2021-07-24T11:50:47.973Z",
                "updated_at": "2021-07-24T11:50:50.023Z"
            },
            {
                "id": 45,
                "Name": "Apple Watch SE",
                "category": 4,
                "published_at": "2021-07-24T11:50:35.723Z",
                "created_at": "2021-07-24T11:50:33.985Z",
                "updated_at": "2021-07-24T11:50:35.784Z"
            }
        ]
    },
    {
        "id": 1,
        "Name": "iPad",
        "published_at": "2021-07-16T15:24:13.630Z",
        "created_at": "2021-07-16T15:24:11.259Z",
        "updated_at": "2021-07-16T15:30:41.933Z",
        "under_categories": [
            {
                "id": 48,
                "Name": "iPadAir",
                "category": 1,
                "published_at": "2021-07-24T11:51:13.241Z",
                "created_at": "2021-07-24T11:51:11.583Z",
                "updated_at": "2021-07-24T11:51:13.294Z"
            },
            {
                "id": 2,
                "Name": "iPad Pro",
                "category": 1,
                "published_at": "2021-07-16T15:30:35.392Z",
                "created_at": "2021-07-16T15:30:33.964Z",
                "updated_at": "2021-07-16T15:30:41.931Z"
            },
            {
                "id": 50,
                "Name": "iPad",
                "category": 1,
                "published_at": "2021-07-24T11:51:52.401Z",
                "created_at": "2021-07-24T11:51:33.149Z",
                "updated_at": "2021-07-24T11:51:52.433Z"
            },
            {
                "id": 49,
                "Name": "iPad Mini",
                "category": 1,
                "published_at": "2021-07-24T11:51:23.741Z",
                "created_at": "2021-07-24T11:51:22.435Z",
                "updated_at": "2021-07-24T11:51:23.782Z"
            }
        ]
    }
]

  private underCategories = [
    {
        "id": 1,
        "Name": "MacBook Air",
        "category": {
            "id": 3,
            "Name": "iMac",
            "published_at": "2021-07-16T15:24:50.371Z",
            "created_at": "2021-07-16T15:24:48.589Z",
            "updated_at": "2021-07-16T15:24:50.410Z"
        },
        "published_at": "2021-07-16T15:30:19.130Z",
        "created_at": "2021-07-16T15:30:15.656Z",
        "updated_at": "2021-07-16T15:30:19.166Z",
        "products": [
            {
                "id": 14,
                "Name": "MacBook Air 2019",
                "Descriptions": "13` retina display\nApple M1 chip\nUp to 16GB unified memory\n2 TB Maximum configurable storage\nUp to 18 hours battery life\n720p FaceTime HD camera\n2.8 lb. weight Touch ID",
                "Price": 899,
                "published_at": "2021-07-24T12:16:21.962Z",
                "created_at": "2021-07-24T12:16:20.276Z",
                "updated_at": "2021-07-24T12:16:22.210Z",
                "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_mba__gdncw5gbxoq6_large.png",
                "Photo": null
            },
            {
                "id": 13,
                "Name": "MacBook Air 2020",
                "Descriptions": "13` retina display\nApple M1 chip\nUp to 16GB unified memory\n2 TB Maximum configurable storage\nUp to 18 hours battery life\n720p FaceTime HD camera\n2.8 lb. weight Touch ID",
                "Price": 999,
                "published_at": "2021-07-24T12:14:47.943Z",
                "created_at": "2021-07-24T12:14:46.169Z",
                "updated_at": "2021-07-24T12:14:48.066Z",
                "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_mba__gdncw5gbxoq6_large.png",
                "Photo": null
            },
            {
                "id": 15,
                "Name": "MacBook Air 2018",
                "Descriptions": "13` retina display\nApple M1 chip\nUp to 16GB unified memory\n2 TB Maximum configurable storage\nUp to 18 hours battery life\n720p FaceTime HD camera\n2.8 lb. weight Touch ID",
                "Price": 799,
                "published_at": "2021-07-24T12:17:41.417Z",
                "created_at": "2021-07-24T12:17:39.689Z",
                "updated_at": "2021-07-24T12:18:12.920Z",
                "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_mba__gdncw5gbxoq6_large.png",
                "Photo": null
            }
        ]
    },
    {
        "id": 2,
        "Name": "iPad Pro",
        "category": {
            "id": 1,
            "Name": "iPad",
            "published_at": "2021-07-16T15:24:13.630Z",
            "created_at": "2021-07-16T15:24:11.259Z",
            "updated_at": "2021-07-16T15:30:41.933Z"
        },
        "published_at": "2021-07-16T15:30:35.392Z",
        "created_at": "2021-07-16T15:30:33.964Z",
        "updated_at": "2021-07-16T15:30:41.931Z",
        "products": [
            {
                "id": 45,
                "Name": "Ipad Pro 2018",
                "Descriptions": "12.9” Liquid Retina XDR display1\n11” Liquid Retina display1\nM1 chip\nUSB-C connector with support for Thunderbolt / USB 4\n5G cellular2\nCompatible with Apple Pencil (2nd generation)\nCompatible with Magic Keyboard and Smart Keyboard Folio",
                "Price": 599,
                "published_at": "2021-07-24T12:57:22.568Z",
                "created_at": "2021-07-24T12:57:20.908Z",
                "updated_at": "2021-07-24T12:57:22.589Z",
                "PhotoURL": "https://www.apple.com/v/ipad/home/bo/images/overview/compare_ipad_pro__erf9x8mw04sy_large.png",
                "Photo": null
            },
            {
                "id": 44,
                "Name": "Ipad Pro 2019",
                "Descriptions": "12.9” Liquid Retina XDR display1\n11” Liquid Retina display1\nM1 chip\nUSB-C connector with support for Thunderbolt / USB 4\n5G cellular2\nCompatible with Apple Pencil (2nd generation)\nCompatible with Magic Keyboard and Smart Keyboard Folio",
                "Price": 699,
                "published_at": "2021-07-24T12:56:51.187Z",
                "created_at": "2021-07-24T12:56:48.931Z",
                "updated_at": "2021-07-24T12:56:51.205Z",
                "PhotoURL": "https://www.apple.com/v/ipad/home/bo/images/overview/compare_ipad_pro__erf9x8mw04sy_large.png",
                "Photo": null
            },
            {
                "id": 43,
                "Name": "iPad Pro 2020",
                "Descriptions": "12.9” Liquid Retina XDR display1\n11” Liquid Retina display1\nM1 chip\nUSB-C connector with support for Thunderbolt / USB 4\n5G cellular2\nCompatible with Apple Pencil (2nd generation)\nCompatible with Magic Keyboard and Smart Keyboard Folio",
                "Price": 799,
                "published_at": "2021-07-24T12:56:23.692Z",
                "created_at": "2021-07-24T12:55:24.153Z",
                "updated_at": "2021-07-24T12:56:23.726Z",
                "PhotoURL": "https://www.apple.com/v/ipad/home/bo/images/overview/compare_ipad_pro__erf9x8mw04sy_large.png",
                "Photo": null
            }
        ]
    },
    {
        "id": 3,
        "Name": "iPhone 12 Pro",
        "category": {
            "id": 2,
            "Name": "iPhone",
            "published_at": "2021-07-16T15:24:25.340Z",
            "created_at": "2021-07-16T15:24:23.583Z",
            "updated_at": "2021-07-16T15:24:25.367Z"
        },
        "published_at": "2021-07-16T15:31:01.826Z",
        "created_at": "2021-07-16T15:30:59.806Z",
        "updated_at": "2021-07-16T15:31:01.919Z",
        "products": [
            {
                "id": 2,
                "Name": "iPhone 12 Pro 2019",
                "Descriptions": "6.1″ or 6.7″\nall-screen OLED display3\n5G cellular4\nA14 Bionic chip\nFastest chip in a smartphone\nPro camera system\nUltra Wide, Wide, Telephoto\nLiDAR Scanner\nFor Night mode portraits\nand next‑level AR\nCompatible with MagSafe accessories",
                "Price": 899,
                "published_at": "2021-07-24T11:57:06.406Z",
                "created_at": "2021-07-24T11:57:04.682Z",
                "updated_at": "2021-07-24T11:57:06.431Z",
                "PhotoURL": "https://www.apple.com/v/iphone/home/az/images/overview/compare/compare_iphone_12_pro__gmn3556ju3am_large.jpg",
                "Photo": null
            },
            {
                "id": 1,
                "Name": "IPhone 12 Pro 2020",
                "Descriptions": "6.1″ or 6.7″\nall-screen OLED display3\n5G cellular4\nA14 Bionic chip\nFastest chip in a smartphone\nPro camera system\nUltra Wide, Wide, Telephoto\nLiDAR Scanner\nFor Night mode portraits\nand next‑level AR\nCompatible with MagSafe accessories",
                "Price": 999,
                "published_at": "2021-07-21T08:36:38.049Z",
                "created_at": "2021-07-21T08:36:36.032Z",
                "updated_at": "2021-07-24T11:56:31.828Z",
                "PhotoURL": "https://www.apple.com/v/iphone/home/az/images/overview/compare/compare_iphone_12_pro__gmn3556ju3am_large.jpg",
                "Photo": null
            },
            {
                "id": 3,
                "Name": "iPhone 12 Pro 2018",
                "Descriptions": "6.1″ or 6.7″\nall-screen OLED display3\n5G cellular4\nA14 Bionic chip\nFastest chip in a smartphone\nPro camera system\nUltra Wide, Wide, Telephoto\nLiDAR Scanner\nFor Night mode portraits\nand next‑level AR\nCompatible with MagSafe accessories",
                "Price": 799,
                "published_at": "2021-07-24T11:57:35.057Z",
                "created_at": "2021-07-24T11:57:33.556Z",
                "updated_at": "2021-07-24T11:57:35.155Z",
                "PhotoURL": "https://www.apple.com/v/iphone/home/az/images/overview/compare/compare_iphone_12_pro__gmn3556ju3am_large.jpg",
                "Photo": null
            }
        ]
    },
    {
        "id": 4,
        "Name": "Apple Watch Series 6",
        "category": {
            "id": 4,
            "Name": "Watch",
            "published_at": "2021-07-16T15:24:59.316Z",
            "created_at": "2021-07-16T15:24:57.896Z",
            "updated_at": "2021-07-16T15:24:59.334Z"
        },
        "published_at": "2021-07-16T15:31:26.357Z",
        "created_at": "2021-07-16T15:31:24.962Z",
        "updated_at": "2021-07-16T15:31:26.469Z",
        "products": [
            {
                "id": 35,
                "Name": "Apple Watch Series 6 2019",
                "Descriptions": "44mm or 40mm case size\nAlways-On Retina display\nGPS + Cellular1\nBlood Oxygen app2\nECG app3\nHigh and low heart rate notifications\nIrregular heart rhythm notification4\nSupports Family Setup5\n(GPS + Cellular models)\nWater resistant 50 meters",
                "Price": 299,
                "published_at": "2021-07-24T12:48:12.656Z",
                "created_at": "2021-07-24T12:48:10.819Z",
                "updated_at": "2021-07-24T12:48:12.706Z",
                "PhotoURL": "https://www.apple.com/v/watch/shared/compare/e/images/overview/compare_s6__evsi0wlzp4ya_large.jpg",
                "Photo": null
            },
            {
                "id": 36,
                "Name": "Apple Watch Series 6 2018",
                "Descriptions": "44mm or 40mm case size\nAlways-On Retina display\nGPS + Cellular1\nBlood Oxygen app2\nECG app3\nHigh and low heart rate notifications\nIrregular heart rhythm notification4\nSupports Family Setup5\n(GPS + Cellular models)\nWater resistant 50 meters",
                "Price": 199,
                "published_at": "2021-07-24T12:48:40.616Z",
                "created_at": "2021-07-24T12:48:39.214Z",
                "updated_at": "2021-07-24T12:48:40.702Z",
                "PhotoURL": "https://www.apple.com/v/watch/shared/compare/e/images/overview/compare_s6__evsi0wlzp4ya_large.jpg",
                "Photo": null
            },
            {
                "id": 34,
                "Name": "Apple Watch Series 6 2020",
                "Descriptions": "44mm or 40mm case size\nAlways-On Retina display\nGPS + Cellular1\nBlood Oxygen app2\nECG app3\nHigh and low heart rate notifications\nIrregular heart rhythm notification4\nSupports Family Setup5\n(GPS + Cellular models)\nWater resistant 50 meters",
                "Price": 399,
                "published_at": "2021-07-24T12:47:45.904Z",
                "created_at": "2021-07-24T12:47:44.458Z",
                "updated_at": "2021-07-24T12:47:45.934Z",
                "PhotoURL": "https://www.apple.com/v/watch/shared/compare/e/images/overview/compare_s6__evsi0wlzp4ya_large.jpg",
                "Photo": null
            }
        ]
    },
    {
        "id": 36,
        "Name": "iPhone 12",
        "category": {
            "id": 2,
            "Name": "iPhone",
            "published_at": "2021-07-16T15:24:25.340Z",
            "created_at": "2021-07-16T15:24:23.583Z",
            "updated_at": "2021-07-16T15:24:25.367Z"
        },
        "published_at": "2021-07-24T11:31:33.180Z",
        "created_at": "2021-07-24T11:31:30.323Z",
        "updated_at": "2021-07-24T11:31:33.232Z",
        "products": [
            {
                "id": 5,
                "Name": "iPhone 12 2019",
                "Descriptions": "all-screen OLED display3\n5G cellular4\nA14 Bionic chip\nFastest chip in a smartphone \nAdvanced dual‑camera system\nUltra Wide, Wide\nLiDAR Scanner not-available\nCompatible with MagSafe accessories",
                "Price": 599,
                "published_at": "2021-07-24T11:59:33.511Z",
                "created_at": "2021-07-24T11:59:31.982Z",
                "updated_at": "2021-07-24T11:59:33.535Z",
                "PhotoURL": "https://www.apple.com/v/iphone/home/az/images/overview/compare/compare_iphone_12__btq63lk8td7m_large.jpg",
                "Photo": null
            },
            {
                "id": 4,
                "Name": "iPhone 12 2020",
                "Descriptions": "all-screen OLED display3\n5G cellular4\nA14 Bionic chip\nFastest chip in a smartphone \nAdvanced dual‑camera system\nUltra Wide, Wide\nLiDAR Scanner not-available\nCompatible with MagSafe accessories",
                "Price": 699,
                "published_at": "2021-07-24T11:59:09.502Z",
                "created_at": "2021-07-24T11:59:08.242Z",
                "updated_at": "2021-07-24T11:59:09.537Z",
                "PhotoURL": "https://www.apple.com/v/iphone/home/az/images/overview/compare/compare_iphone_12__btq63lk8td7m_large.jpg",
                "Photo": null
            },
            {
                "id": 6,
                "Name": "iPhone 12 2018",
                "Descriptions": "all-screen OLED display3\n5G cellular4\nA14 Bionic chip\nFastest chip in a smartphone \nAdvanced dual‑camera system\nUltra Wide, Wide\nLiDAR Scanner not-available\nCompatible with MagSafe accessories",
                "Price": 499,
                "published_at": "2021-07-24T12:00:12.318Z",
                "created_at": "2021-07-24T12:00:10.948Z",
                "updated_at": "2021-07-24T12:00:12.371Z",
                "PhotoURL": "https://www.apple.com/v/iphone/home/az/images/overview/compare/compare_iphone_12__btq63lk8td7m_large.jpg",
                "Photo": null
            }
        ]
    },
    {
        "id": 37,
        "Name": "iPhone SE",
        "category": {
            "id": 2,
            "Name": "iPhone",
            "published_at": "2021-07-16T15:24:25.340Z",
            "created_at": "2021-07-16T15:24:23.583Z",
            "updated_at": "2021-07-16T15:24:25.367Z"
        },
        "published_at": "2021-07-24T11:31:50.253Z",
        "created_at": "2021-07-24T11:31:44.560Z",
        "updated_at": "2021-07-24T11:32:05.070Z",
        "products": [
            {
                "id": 7,
                "Name": "iPhone SE 2020",
                "Descriptions": "LCD display\n4G LTE cellular4\nA13 Bionic chip\nSingle-camera system wide",
                "Price": 399,
                "published_at": "2021-07-24T12:01:25.232Z",
                "created_at": "2021-07-24T12:01:23.282Z",
                "updated_at": "2021-07-24T12:01:25.269Z",
                "PhotoURL": "https://www.apple.com/v/iphone/home/az/images/overview/compare/compare_iphone_se__1uyg4tzyd4ya_large.jpg",
                "Photo": null
            },
            {
                "id": 8,
                "Name": "iPhone SE 2019",
                "Descriptions": "LCD display\n4G LTE cellular4\nA13 Bionic chip\nSingle-camera system wide",
                "Price": 349,
                "published_at": "2021-07-24T12:02:18.520Z",
                "created_at": "2021-07-24T12:02:17.091Z",
                "updated_at": "2021-07-24T12:02:18.549Z",
                "PhotoURL": "https://www.apple.com/v/iphone/home/az/images/overview/compare/compare_iphone_se__1uyg4tzyd4ya_large.jpg",
                "Photo": null
            },
            {
                "id": 9,
                "Name": "iPhone 2018",
                "Descriptions": "LCD display\n4G LTE cellular4\nA13 Bionic chip\nSingle-camera system wide",
                "Price": 299,
                "published_at": "2021-07-24T12:02:50.484Z",
                "created_at": "2021-07-24T12:02:49.207Z",
                "updated_at": "2021-07-24T12:02:50.510Z",
                "PhotoURL": "https://www.apple.com/v/iphone/home/az/images/overview/compare/compare_iphone_se__1uyg4tzyd4ya_large.jpg",
                "Photo": null
            }
        ]
    },
    {
        "id": 38,
        "Name": "iPhone 11",
        "category": {
            "id": 2,
            "Name": "iPhone",
            "published_at": "2021-07-16T15:24:25.340Z",
            "created_at": "2021-07-16T15:24:23.583Z",
            "updated_at": "2021-07-16T15:24:25.367Z"
        },
        "published_at": "2021-07-24T11:32:18.409Z",
        "created_at": "2021-07-24T11:32:15.862Z",
        "updated_at": "2021-07-24T11:32:18.469Z",
        "products": [
            {
                "id": 11,
                "Name": "iPhone 11 2019",
                "Descriptions": "all-screen LCD display3\n4G LTE cellular4\nA13 Bionic chip\nDual-camera system\nUltra Wide, Wide",
                "Price": 499,
                "published_at": "2021-07-24T12:05:30.189Z",
                "created_at": "2021-07-24T12:05:28.523Z",
                "updated_at": "2021-07-24T12:05:30.236Z",
                "PhotoURL": "https://www.apple.com/v/iphone/home/az/images/overview/compare/compare_iphone_11__bzjboswm5hbm_large.jpg",
                "Photo": null
            },
            {
                "id": 10,
                "Name": "iPhone 11 2020",
                "Descriptions": "all-screen LCD display3\n4G LTE cellular4\nA13 Bionic chip\nDual-camera system\nUltra Wide, Wide",
                "Price": 599,
                "published_at": "2021-07-24T12:04:51.235Z",
                "created_at": "2021-07-24T12:04:49.788Z",
                "updated_at": "2021-07-24T12:04:51.280Z",
                "PhotoURL": "https://www.apple.com/v/iphone/home/az/images/overview/compare/compare_iphone_11__bzjboswm5hbm_large.jpg",
                "Photo": null
            },
            {
                "id": 12,
                "Name": "iPhone 11 2018",
                "Descriptions": "all-screen LCD display3\n4G LTE cellular4\nA13 Bionic chip\nDual-camera system\nUltra Wide, Wide",
                "Price": 399,
                "published_at": "2021-07-24T12:06:50.356Z",
                "created_at": "2021-07-24T12:06:48.563Z",
                "updated_at": "2021-07-24T12:06:50.422Z",
                "PhotoURL": "https://www.apple.com/v/iphone/home/az/images/overview/compare/compare_iphone_11__bzjboswm5hbm_large.jpg",
                "Photo": null
            }
        ]
    },
    {
        "id": 39,
        "Name": "Mac Book Pro 13",
        "category": {
            "id": 3,
            "Name": "iMac",
            "published_at": "2021-07-16T15:24:50.371Z",
            "created_at": "2021-07-16T15:24:48.589Z",
            "updated_at": "2021-07-16T15:24:50.410Z"
        },
        "published_at": "2021-07-24T11:48:10.811Z",
        "created_at": "2021-07-24T11:48:09.180Z",
        "updated_at": "2021-07-24T11:48:10.857Z",
        "products": [
            {
                "id": 16,
                "Name": "MacBook Pro 13 2020",
                "Descriptions": "13.3'' Retina display1\nApple M1 chip\nAlso available with Intel Core i5 or i7 processor\nUp to 16GB unified memory4\nFor increased performance and power efficiency\n2TB Maximum configurable storage4\nUp to 20 hours battery life5\n720p FaceTime HD camera\n3.0 lb. Weight Touch Bar and Touch ID",
                "Price": 1299,
                "published_at": "2021-07-24T12:19:24.364Z",
                "created_at": "2021-07-24T12:19:22.951Z",
                "updated_at": "2021-07-24T12:20:03.001Z",
                "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_mbp13__geounnnz6oa6_large.png",
                "Photo": null
            },
            {
                "id": 17,
                "Name": "MacBook Pro 13 2019",
                "Descriptions": "13.3'' Retina display1\nApple M1 chip\nAlso available with Intel Core i5 or i7 processor\nUp to 16GB unified memory4\nFor increased performance and power efficiency\n2TB Maximum configurable storage4\nUp to 20 hours battery life5\n720p FaceTime HD camera\n3.0 lb. Weight Touch Bar and Touch ID",
                "Price": 1199,
                "published_at": "2021-07-24T12:20:44.149Z",
                "created_at": "2021-07-24T12:20:42.689Z",
                "updated_at": "2021-07-24T12:20:44.181Z",
                "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_mbp13__geounnnz6oa6_large.png",
                "Photo": null
            },
            {
                "id": 18,
                "Name": "MacBook Pro 13 2018",
                "Descriptions": "13.3'' Retina display1\nApple M1 chip\nAlso available with Intel Core i5 or i7 processor\nUp to 16GB unified memory4\nFor increased performance and power efficiency\n2TB Maximum configurable storage4\nUp to 20 hours battery life5\n720p FaceTime HD camera\n3.0 lb. Weight Touch Bar and Touch ID",
                "Price": 1099,
                "published_at": "2021-07-24T12:21:32.946Z",
                "created_at": "2021-07-24T12:21:31.262Z",
                "updated_at": "2021-07-24T12:21:33.019Z",
                "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_mbp13__geounnnz6oa6_large.png",
                "Photo": null
            }
        ]
    },
    {
        "id": 40,
        "Name": "iMac 24",
        "category": {
            "id": 3,
            "Name": "iMac",
            "published_at": "2021-07-16T15:24:50.371Z",
            "created_at": "2021-07-16T15:24:48.589Z",
            "updated_at": "2021-07-16T15:24:50.410Z"
        },
        "published_at": "2021-07-24T11:48:32.257Z",
        "created_at": "2021-07-24T11:48:30.928Z",
        "updated_at": "2021-07-24T11:48:42.197Z",
        "products": [
            {
                "id": 23,
                "Name": "iMac 24 2019",
                "Descriptions": "4.5K Retina display7\nApple M1 chip\nUp to 16GB unified memory\nFor increased performance and power efficiency\n2TB Maximum configurable storage2\n1080p FaceTime HD camera\nWith the image signal processor of M1 for drastically improved performance\nConfigurable with Magic Keyboard with Touch ID and Numeric Keypad",
                "Price": 1199,
                "published_at": "2021-07-24T12:30:31.633Z",
                "created_at": "2021-07-24T12:30:29.455Z",
                "updated_at": "2021-07-24T12:30:31.691Z",
                "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_imac24__5aryzjnxeki2_large.png",
                "Photo": null
            },
            {
                "id": 22,
                "Name": "iMac 24 2020",
                "Descriptions": "4.5K Retina display7\nApple M1 chip\nUp to 16GB unified memory\nFor increased performance and power efficiency\n2TB Maximum configurable storage2\n1080p FaceTime HD camera\nWith the image signal processor of M1 for drastically improved performance\nConfigurable with Magic Keyboard with Touch ID and Numeric Keypad",
                "Price": 1299,
                "published_at": "2021-07-24T12:29:39.747Z",
                "created_at": "2021-07-24T12:29:38.425Z",
                "updated_at": "2021-07-24T12:29:39.776Z",
                "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_imac24__5aryzjnxeki2_large.png",
                "Photo": null
            },
            {
                "id": 24,
                "Name": "iMac 24 2018",
                "Descriptions": "4.5K Retina display7\nApple M1 chip\nUp to 16GB unified memory\nFor increased performance and power efficiency\n2TB Maximum configurable storage2\n1080p FaceTime HD camera\nWith the image signal processor of M1 for drastically improved performance\nConfigurable with Magic Keyboard with Touch ID and Numeric Keypad",
                "Price": 1099,
                "published_at": "2021-07-24T12:31:32.591Z",
                "created_at": "2021-07-24T12:31:30.947Z",
                "updated_at": "2021-07-24T12:31:32.614Z",
                "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_imac24__5aryzjnxeki2_large.png",
                "Photo": null
            }
        ]
    },
    {
        "id": 41,
        "Name": "Mac Book Pro 16",
        "category": {
            "id": 3,
            "Name": "iMac",
            "published_at": "2021-07-16T15:24:50.371Z",
            "created_at": "2021-07-16T15:24:48.589Z",
            "updated_at": "2021-07-16T15:24:50.410Z"
        },
        "published_at": "2021-07-24T11:49:10.855Z",
        "created_at": "2021-07-24T11:49:09.586Z",
        "updated_at": "2021-07-24T11:49:10.882Z",
        "products": [
            {
                "id": 19,
                "Name": "MacBook Pro 16 2020",
                "Descriptions": "Retina display1\nUp to Intel Core i9 processor\nUp to 64GB memory 8TB\nMaximum configurable storage2\nUp to 11 hours battery life6\n720p FaceTime HD camera\nTouch Bar and Touch ID",
                "Price": 2399,
                "published_at": "2021-07-24T12:22:59.554Z",
                "created_at": "2021-07-24T12:22:57.586Z",
                "updated_at": "2021-07-24T12:22:59.597Z",
                "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_mbp16__fykfvftfaeuu_large.png",
                "Photo": null
            },
            {
                "id": 20,
                "Name": "MacBook Pro 16 2019",
                "Descriptions": "Retina display1\nUp to Intel Core i9 processor\nUp to 64GB memory 8TB\nMaximum configurable storage2\nUp to 11 hours battery life6\n720p FaceTime HD camera\nTouch Bar and Touch ID",
                "Price": 2299,
                "published_at": "2021-07-24T12:23:34.927Z",
                "created_at": "2021-07-24T12:23:32.649Z",
                "updated_at": "2021-07-24T12:23:34.958Z",
                "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_mbp16__fykfvftfaeuu_large.png",
                "Photo": null
            },
            {
                "id": 21,
                "Name": "MacBook Pro 16 2018",
                "Descriptions": "Retina display1\nUp to Intel Core i9 processor\nUp to 64GB memory 8TB\nMaximum configurable storage2\nUp to 11 hours battery life6\n720p FaceTime HD camera\nTouch Bar and Touch ID",
                "Price": 2199,
                "published_at": "2021-07-24T12:26:33.514Z",
                "created_at": "2021-07-24T12:26:30.619Z",
                "updated_at": "2021-07-24T12:26:33.541Z",
                "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_mbp16__fykfvftfaeuu_large.png",
                "Photo": null
            }
        ]
    },
    {
        "id": 42,
        "Name": "iMac 27",
        "category": {
            "id": 3,
            "Name": "iMac",
            "published_at": "2021-07-16T15:24:50.371Z",
            "created_at": "2021-07-16T15:24:48.589Z",
            "updated_at": "2021-07-16T15:24:50.410Z"
        },
        "published_at": "2021-07-24T11:49:27.563Z",
        "created_at": "2021-07-24T11:49:26.268Z",
        "updated_at": "2021-07-24T11:49:27.612Z",
        "products": [
            {
                "id": 27,
                "Name": "iMac 27 2018",
                "Descriptions": "5K Retina display\nUp to Intel Core i9 processor\nUp to 128GB memory\n8TB Maximum configurable storage\n1080p FaceTime HD camera\nConfigurable with Magic Keyboard with Numeric Keypad",
                "Price": 1599,
                "published_at": "2021-07-24T12:36:02.916Z",
                "created_at": "2021-07-24T12:36:01.286Z",
                "updated_at": "2021-07-24T12:36:02.941Z",
                "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_imac27__ftc2wevwltym_large.png",
                "Photo": null
            },
            {
                "id": 26,
                "Name": "iMac 27 2019",
                "Descriptions": "5K Retina display\nUp to Intel Core i9 processor\nUp to 128GB memory\n8TB Maximum configurable storage\n1080p FaceTime HD camera\nConfigurable with Magic Keyboard with Numeric Keypad",
                "Price": 1699,
                "published_at": "2021-07-24T12:35:35.568Z",
                "created_at": "2021-07-24T12:35:08.107Z",
                "updated_at": "2021-07-24T12:35:35.592Z",
                "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_imac27__ftc2wevwltym_large.png",
                "Photo": null
            },
            {
                "id": 25,
                "Name": "iMac 27 2020",
                "Descriptions": "5K Retina display\nUp to Intel Core i9 processor\nUp to 128GB memory\n8TB Maximum configurable storage\n1080p FaceTime HD camera\nConfigurable with Magic Keyboard with Numeric Keypad",
                "Price": 1799,
                "published_at": "2021-07-24T12:34:30.738Z",
                "created_at": "2021-07-24T12:34:29.316Z",
                "updated_at": "2021-07-24T12:34:30.760Z",
                "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_imac27__ftc2wevwltym_large.png",
                "Photo": null
            }
        ]
    },
    {
        "id": 43,
        "Name": "Mac Pro",
        "category": {
            "id": 3,
            "Name": "iMac",
            "published_at": "2021-07-16T15:24:50.371Z",
            "created_at": "2021-07-16T15:24:48.589Z",
            "updated_at": "2021-07-16T15:24:50.410Z"
        },
        "published_at": "2021-07-24T11:49:39.821Z",
        "created_at": "2021-07-24T11:49:38.391Z",
        "updated_at": "2021-07-24T11:49:39.938Z",
        "products": [
            {
                "id": 28,
                "Name": "Mac Pro 2020",
                "Descriptions": "Intel Xeon W processor\nUp to 1.5TB memory\n8TB Maximum configurable storage2\nMagic Keyboard with Numeric Keypad",
                "Price": 5999,
                "published_at": "2021-07-24T12:42:38.911Z",
                "created_at": "2021-07-24T12:42:36.748Z",
                "updated_at": "2021-07-24T12:42:38.933Z",
                "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_macpro__en2pd7zwtl6q_large.png",
                "Photo": null
            },
            {
                "id": 30,
                "Name": "Mac Pro 2018",
                "Descriptions": "Intel Xeon W processor\nUp to 1.5TB memory\n8TB Maximum configurable storage2\nMagic Keyboard with Numeric Keypad",
                "Price": 3999,
                "published_at": "2021-07-24T12:43:48.666Z",
                "created_at": "2021-07-24T12:43:46.504Z",
                "updated_at": "2021-07-24T12:43:48.691Z",
                "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_macpro__en2pd7zwtl6q_large.png",
                "Photo": null
            },
            {
                "id": 29,
                "Name": "Mac Pro 2019",
                "Descriptions": "Intel Xeon W processor\nUp to 1.5TB memory\n8TB Maximum configurable storage2\nMagic Keyboard with Numeric Keypad",
                "Price": 4999,
                "published_at": "2021-07-24T12:42:58.410Z",
                "created_at": "2021-07-24T12:42:57.126Z",
                "updated_at": "2021-07-24T12:42:58.429Z",
                "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_macpro__en2pd7zwtl6q_large.png",
                "Photo": null
            }
        ]
    },
    {
        "id": 44,
        "Name": "Mac Mini",
        "category": {
            "id": 3,
            "Name": "iMac",
            "published_at": "2021-07-16T15:24:50.371Z",
            "created_at": "2021-07-16T15:24:48.589Z",
            "updated_at": "2021-07-16T15:24:50.410Z"
        },
        "published_at": "2021-07-24T11:49:51.591Z",
        "created_at": "2021-07-24T11:49:50.181Z",
        "updated_at": "2021-07-24T11:49:51.626Z",
        "products": [
            {
                "id": 31,
                "Name": "Mac mini 2020",
                "Descriptions": "Apple M1 chip\nUp to 16GB unified memory\n2TB Maximum configurable storage",
                "Price": 699,
                "published_at": "2021-07-24T12:45:10.236Z",
                "created_at": "2021-07-24T12:45:08.702Z",
                "updated_at": "2021-07-24T12:45:10.264Z",
                "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_macmini__f53ds86a9eq2_large.png",
                "Photo": null
            },
            {
                "id": 32,
                "Name": "Mac mini 2019",
                "Descriptions": "Apple M1 chip\nUp to 16GB unified memory\n2TB Maximum configurable storage",
                "Price": 599,
                "published_at": "2021-07-24T12:45:40.620Z",
                "created_at": "2021-07-24T12:45:39.370Z",
                "updated_at": "2021-07-24T12:45:40.647Z",
                "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_macmini__f53ds86a9eq2_large.png",
                "Photo": null
            },
            {
                "id": 33,
                "Name": "Mac mini 2018",
                "Descriptions": "Apple M1 chip\nUp to 16GB unified memory\n2TB Maximum configurable storage",
                "Price": 499,
                "published_at": "2021-07-24T12:46:16.483Z",
                "created_at": "2021-07-24T12:46:14.640Z",
                "updated_at": "2021-07-24T12:46:16.520Z",
                "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_macmini__f53ds86a9eq2_large.png",
                "Photo": null
            }
        ]
    },
    {
        "id": 45,
        "Name": "Apple Watch SE",
        "category": {
            "id": 4,
            "Name": "Watch",
            "published_at": "2021-07-16T15:24:59.316Z",
            "created_at": "2021-07-16T15:24:57.896Z",
            "updated_at": "2021-07-16T15:24:59.334Z"
        },
        "published_at": "2021-07-24T11:50:35.723Z",
        "created_at": "2021-07-24T11:50:33.985Z",
        "updated_at": "2021-07-24T11:50:35.784Z",
        "products": [
            {
                "id": 38,
                "Name": "Apple Watch SE 2019",
                "Descriptions": "44mm or 40mm case size\nRetina display\nGPS + Cellular1\nHigh and low heart rate notifications\nIrregular heart rhythm notification4\nSupports Family Setup5\nWater resistant 50 meters6",
                "Price": 199,
                "published_at": "2021-07-24T12:50:22.920Z",
                "created_at": "2021-07-24T12:50:21.490Z",
                "updated_at": "2021-07-24T12:50:22.995Z",
                "PhotoURL": "https://www.apple.com/v/watch/shared/compare/e/images/overview/compare_se__crebhd9hhdea_large.jpg",
                "Photo": null
            },
            {
                "id": 39,
                "Name": "Apple Watch SE 2018",
                "Descriptions": "44mm or 40mm case size\nRetina display\nGPS + Cellular1\nHigh and low heart rate notifications\nIrregular heart rhythm notification4\nSupports Family Setup5\nWater resistant 50 meters6",
                "Price": 149,
                "published_at": "2021-07-24T12:51:36.672Z",
                "created_at": "2021-07-24T12:51:34.867Z",
                "updated_at": "2021-07-24T12:51:36.707Z",
                "PhotoURL": "https://www.apple.com/v/watch/shared/compare/e/images/overview/compare_se__crebhd9hhdea_large.jpg",
                "Photo": null
            },
            {
                "id": 37,
                "Name": "Apple Watch SE 2020",
                "Descriptions": "44mm or 40mm case size\nRetina display\nGPS + Cellular1\nHigh and low heart rate notifications\nIrregular heart rhythm notification4\nSupports Family Setup5\nWater resistant 50 meters6",
                "Price": 279,
                "published_at": "2021-07-24T12:49:54.976Z",
                "created_at": "2021-07-24T12:49:53.434Z",
                "updated_at": "2021-07-24T12:49:55.040Z",
                "PhotoURL": "https://www.apple.com/v/watch/shared/compare/e/images/overview/compare_se__crebhd9hhdea_large.jpg",
                "Photo": null
            }
        ]
    },
    {
        "id": 46,
        "Name": "Apple Watch Series 3",
        "category": {
            "id": 4,
            "Name": "Watch",
            "published_at": "2021-07-16T15:24:59.316Z",
            "created_at": "2021-07-16T15:24:57.896Z",
            "updated_at": "2021-07-16T15:24:59.334Z"
        },
        "published_at": "2021-07-24T11:50:49.937Z",
        "created_at": "2021-07-24T11:50:47.973Z",
        "updated_at": "2021-07-24T11:50:50.023Z",
        "products": [
            {
                "id": 42,
                "Name": "Apple Watch Series 3 2018",
                "Descriptions": "42mm or 38mm case size\nRetina display\nGPS\nHigh and low heart rate notifications\nIrregular heart rhythm notification4\nWater resistant 50 meters",
                "Price": 99,
                "published_at": "2021-07-24T12:53:26.860Z",
                "created_at": "2021-07-24T12:53:25.050Z",
                "updated_at": "2021-07-24T12:53:26.890Z",
                "PhotoURL": "https://www.apple.com/v/watch/shared/compare/e/images/overview/compare_s3__clzj8ukygo5e_large.jpg",
                "Photo": null
            },
            {
                "id": 41,
                "Name": "Apple Watch Series 3 2019",
                "Descriptions": "42mm or 38mm case size\nRetina display\nGPS\nHigh and low heart rate notifications\nIrregular heart rhythm notification4\nWater resistant 50 meters",
                "Price": 149,
                "published_at": "2021-07-24T12:53:03.983Z",
                "created_at": "2021-07-24T12:53:02.376Z",
                "updated_at": "2021-07-24T12:53:04.020Z",
                "PhotoURL": "https://www.apple.com/v/watch/shared/compare/e/images/overview/compare_s3__clzj8ukygo5e_large.jpg",
                "Photo": null
            },
            {
                "id": 40,
                "Name": "Apple Watch Series 3 2020",
                "Descriptions": "42mm or 38mm case size\nRetina display\nGPS\nHigh and low heart rate notifications\nIrregular heart rhythm notification4\nWater resistant 50 meters",
                "Price": 199,
                "published_at": "2021-07-24T12:52:35.946Z",
                "created_at": "2021-07-24T12:52:34.306Z",
                "updated_at": "2021-07-24T12:52:35.987Z",
                "PhotoURL": "https://www.apple.com/v/watch/shared/compare/e/images/overview/compare_s3__clzj8ukygo5e_large.jpg",
                "Photo": null
            }
        ]
    },
    {
        "id": 48,
        "Name": "iPadAir",
        "category": {
            "id": 1,
            "Name": "iPad",
            "published_at": "2021-07-16T15:24:13.630Z",
            "created_at": "2021-07-16T15:24:11.259Z",
            "updated_at": "2021-07-16T15:30:41.933Z"
        },
        "published_at": "2021-07-24T11:51:13.241Z",
        "created_at": "2021-07-24T11:51:11.583Z",
        "updated_at": "2021-07-24T11:51:13.294Z",
        "products": [
            {
                "id": 48,
                "Name": "iPad Air 2018",
                "Descriptions": "Liquid Retina display1\nA14 Bionic chip\nUSB-C connector\n4G LTE cellular2\nCompatible with\nApple Pencil (2nd generation)\nCompatible with Magic Keyboard and Smart Keyboard Folio",
                "Price": 399,
                "published_at": "2021-07-24T13:01:18.050Z",
                "created_at": "2021-07-24T13:01:16.773Z",
                "updated_at": "2021-07-24T13:01:18.085Z",
                "PhotoURL": "https://www.apple.com/v/ipad/home/bo/images/overview/compare_ipad_air__bxjv33pk6nte_large.png",
                "Photo": null
            },
            {
                "id": 47,
                "Name": "iPad Air 2019",
                "Descriptions": "Liquid Retina display1\nA14 Bionic chip\nUSB-C connector\n4G LTE cellular2\nCompatible with\nApple Pencil (2nd generation)\nCompatible with Magic Keyboard and Smart Keyboard Folio",
                "Price": 499,
                "published_at": "2021-07-24T13:00:55.140Z",
                "created_at": "2021-07-24T13:00:53.495Z",
                "updated_at": "2021-07-24T13:00:55.204Z",
                "PhotoURL": "https://www.apple.com/v/ipad/home/bo/images/overview/compare_ipad_air__bxjv33pk6nte_large.png",
                "Photo": null
            },
            {
                "id": 46,
                "Name": "iPad Air 2020",
                "Descriptions": "Liquid Retina display1\nA14 Bionic chip\nUSB-C connector\n4G LTE cellular2\nCompatible with\nApple Pencil (2nd generation)\nCompatible with Magic Keyboard and Smart Keyboard Folio",
                "Price": 599,
                "published_at": "2021-07-24T12:59:14.594Z",
                "created_at": "2021-07-24T12:59:13.086Z",
                "updated_at": "2021-07-24T12:59:14.677Z",
                "PhotoURL": "https://www.apple.com/v/ipad/home/bo/images/overview/compare_ipad_air__bxjv33pk6nte_large.png",
                "Photo": null
            }
        ]
    },
    {
        "id": 49,
        "Name": "iPad Mini",
        "category": {
            "id": 1,
            "Name": "iPad",
            "published_at": "2021-07-16T15:24:13.630Z",
            "created_at": "2021-07-16T15:24:11.259Z",
            "updated_at": "2021-07-16T15:30:41.933Z"
        },
        "published_at": "2021-07-24T11:51:23.741Z",
        "created_at": "2021-07-24T11:51:22.435Z",
        "updated_at": "2021-07-24T11:51:23.782Z",
        "products": [
            {
                "id": 49,
                "Name": "iPad mini 2020",
                "Descriptions": "Retina display\nA12 Bionic chip\nLightning connector\n4G LTE cellular2\nCompatible with\nApple Pencil (1st generation)\nCompatible with Bluetooth keyboards",
                "Price": 399,
                "published_at": "2021-07-24T13:02:37.460Z",
                "created_at": "2021-07-24T13:02:36.040Z",
                "updated_at": "2021-07-24T13:03:27.792Z",
                "PhotoURL": "https://www.apple.com/v/ipad/home/bo/images/overview/compare_ipad_mini__czcsk9ukpeie_large.png",
                "Photo": null
            },
            {
                "id": 50,
                "Name": "iPad mini 2019",
                "Descriptions": "Retina display\nA12 Bionic chip\nLightning connector\n4G LTE cellular2\nCompatible with\nApple Pencil (1st generation)\nCompatible with Bluetooth keyboards",
                "Price": 249,
                "published_at": "2021-07-24T13:03:16.726Z",
                "created_at": "2021-07-24T13:03:14.973Z",
                "updated_at": "2021-07-24T13:03:16.757Z",
                "PhotoURL": "https://www.apple.com/v/ipad/home/bo/images/overview/compare_ipad_mini__czcsk9ukpeie_large.png",
                "Photo": null
            },
            {
                "id": 51,
                "Name": "iPad mini 2018",
                "Descriptions": "Retina display\nA12 Bionic chip\nLightning connector\n4G LTE cellular2\nCompatible with\nApple Pencil (1st generation)\nCompatible with Bluetooth keyboards",
                "Price": 199,
                "published_at": "2021-07-24T13:03:53.725Z",
                "created_at": "2021-07-24T13:03:52.396Z",
                "updated_at": "2021-07-24T13:03:53.764Z",
                "PhotoURL": "https://www.apple.com/v/ipad/home/bo/images/overview/compare_ipad_mini__czcsk9ukpeie_large.png",
                "Photo": null
            }
        ]
    },
    {
        "id": 50,
        "Name": "iPad",
        "category": {
            "id": 1,
            "Name": "iPad",
            "published_at": "2021-07-16T15:24:13.630Z",
            "created_at": "2021-07-16T15:24:11.259Z",
            "updated_at": "2021-07-16T15:30:41.933Z"
        },
        "published_at": "2021-07-24T11:51:52.401Z",
        "created_at": "2021-07-24T11:51:33.149Z",
        "updated_at": "2021-07-24T11:51:52.433Z",
        "products": [
            {
                "id": 52,
                "Name": "iPad 2020",
                "Descriptions": "Retina display\nA12 Bionic chip\nLightning connector\n4G LTE cellular2\nCompatible with\nApple Pencil (1st generation)\nCompatible with Smart Keyboard",
                "Price": 329,
                "published_at": "2021-07-24T13:07:56.089Z",
                "created_at": "2021-07-24T13:07:54.904Z",
                "updated_at": "2021-07-24T13:07:56.111Z",
                "PhotoURL": "https://www.apple.com/v/ipad/home/bo/images/overview/compare_ipad_10_2__fwgwy7jydtea_large.png",
                "Photo": null
            },
            {
                "id": 54,
                "Name": "iPad 2018",
                "Descriptions": "Retina display\nA12 Bionic chip\nLightning connector\n4G LTE cellular2\nCompatible with\nApple Pencil (1st generation)\nCompatible with Smart Keyboard",
                "Price": 249,
                "published_at": "2021-07-24T13:08:56.201Z",
                "created_at": "2021-07-24T13:08:54.556Z",
                "updated_at": "2021-07-24T13:08:56.223Z",
                "PhotoURL": "https://www.apple.com/v/ipad/home/bo/images/overview/compare_ipad_10_2__fwgwy7jydtea_large.png",
                "Photo": null
            },
            {
                "id": 53,
                "Name": "iPad 2019",
                "Descriptions": "Retina display\nA12 Bionic chip\nLightning connector\n4G LTE cellular2\nCompatible with\nApple Pencil (1st generation)\nCompatible with Smart Keyboard",
                "Price": 299,
                "published_at": "2021-07-24T13:08:33.495Z",
                "created_at": "2021-07-24T13:08:31.969Z",
                "updated_at": "2021-07-24T13:08:33.533Z",
                "PhotoURL": "https://www.apple.com/v/ipad/home/bo/images/overview/compare_ipad_10_2__fwgwy7jydtea_large.png",
                "Photo": null
            }
        ]
    }
]

  private products = [
    {
        "id": 6,
        "Name": "iPhone 12 2018",
        "Descriptions": "all-screen OLED display3\n5G cellular4\nA14 Bionic chip\nFastest chip in a smartphone \nAdvanced dual‑camera system\nUltra Wide, Wide\nLiDAR Scanner not-available\nCompatible with MagSafe accessories",
        "Price": 499,
        "published_at": "2021-07-24T12:00:12.318Z",
        "created_at": "2021-07-24T12:00:10.948Z",
        "updated_at": "2021-07-24T12:00:12.371Z",
        "PhotoURL": "https://www.apple.com/v/iphone/home/az/images/overview/compare/compare_iphone_12__btq63lk8td7m_large.jpg",
        "Photo": null,
        "under_categories": [
            {
                "id": 36,
                "Name": "iPhone 12",
                "category": 2,
                "published_at": "2021-07-24T11:31:33.180Z",
                "created_at": "2021-07-24T11:31:30.323Z",
                "updated_at": "2021-07-24T11:31:33.232Z"
            }
        ]
    },
    {
        "id": 7,
        "Name": "iPhone SE 2020",
        "Descriptions": "LCD display\n4G LTE cellular4\nA13 Bionic chip\nSingle-camera system wide",
        "Price": 399,
        "published_at": "2021-07-24T12:01:25.232Z",
        "created_at": "2021-07-24T12:01:23.282Z",
        "updated_at": "2021-07-24T12:01:25.269Z",
        "PhotoURL": "https://www.apple.com/v/iphone/home/az/images/overview/compare/compare_iphone_se__1uyg4tzyd4ya_large.jpg",
        "Photo": null,
        "under_categories": [
            {
                "id": 37,
                "Name": "iPhone SE",
                "category": 2,
                "published_at": "2021-07-24T11:31:50.253Z",
                "created_at": "2021-07-24T11:31:44.560Z",
                "updated_at": "2021-07-24T11:32:05.070Z"
            }
        ]
    },
    {
        "id": 1,
        "Name": "IPhone 12 Pro 2020",
        "Descriptions": "6.1″ or 6.7″\nall-screen OLED display3\n5G cellular4\nA14 Bionic chip\nFastest chip in a smartphone\nPro camera system\nUltra Wide, Wide, Telephoto\nLiDAR Scanner\nFor Night mode portraits\nand next‑level AR\nCompatible with MagSafe accessories",
        "Price": 999,
        "published_at": "2021-07-21T08:36:38.049Z",
        "created_at": "2021-07-21T08:36:36.032Z",
        "updated_at": "2021-07-24T11:56:31.828Z",
        "PhotoURL": "https://www.apple.com/v/iphone/home/az/images/overview/compare/compare_iphone_12_pro__gmn3556ju3am_large.jpg",
        "Photo": null,
        "under_categories": [
            {
                "id": 3,
                "Name": "iPhone 12 Pro",
                "category": 2,
                "published_at": "2021-07-16T15:31:01.826Z",
                "created_at": "2021-07-16T15:30:59.806Z",
                "updated_at": "2021-07-16T15:31:01.919Z"
            }
        ]
    },
    {
        "id": 17,
        "Name": "MacBook Pro 13 2019",
        "Descriptions": "13.3'' Retina display1\nApple M1 chip\nAlso available with Intel Core i5 or i7 processor\nUp to 16GB unified memory4\nFor increased performance and power efficiency\n2TB Maximum configurable storage4\nUp to 20 hours battery life5\n720p FaceTime HD camera\n3.0 lb. Weight Touch Bar and Touch ID",
        "Price": 1199,
        "published_at": "2021-07-24T12:20:44.149Z",
        "created_at": "2021-07-24T12:20:42.689Z",
        "updated_at": "2021-07-24T12:20:44.181Z",
        "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_mbp13__geounnnz6oa6_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 39,
                "Name": "Mac Book Pro 13",
                "category": 3,
                "published_at": "2021-07-24T11:48:10.811Z",
                "created_at": "2021-07-24T11:48:09.180Z",
                "updated_at": "2021-07-24T11:48:10.857Z"
            }
        ]
    },
    {
        "id": 2,
        "Name": "iPhone 12 Pro 2019",
        "Descriptions": "6.1″ or 6.7″\nall-screen OLED display3\n5G cellular4\nA14 Bionic chip\nFastest chip in a smartphone\nPro camera system\nUltra Wide, Wide, Telephoto\nLiDAR Scanner\nFor Night mode portraits\nand next‑level AR\nCompatible with MagSafe accessories",
        "Price": 899,
        "published_at": "2021-07-24T11:57:06.406Z",
        "created_at": "2021-07-24T11:57:04.682Z",
        "updated_at": "2021-07-24T11:57:06.431Z",
        "PhotoURL": "https://www.apple.com/v/iphone/home/az/images/overview/compare/compare_iphone_12_pro__gmn3556ju3am_large.jpg",
        "Photo": null,
        "under_categories": [
            {
                "id": 3,
                "Name": "iPhone 12 Pro",
                "category": 2,
                "published_at": "2021-07-16T15:31:01.826Z",
                "created_at": "2021-07-16T15:30:59.806Z",
                "updated_at": "2021-07-16T15:31:01.919Z"
            }
        ]
    },
    {
        "id": 8,
        "Name": "iPhone SE 2019",
        "Descriptions": "LCD display\n4G LTE cellular4\nA13 Bionic chip\nSingle-camera system wide",
        "Price": 349,
        "published_at": "2021-07-24T12:02:18.520Z",
        "created_at": "2021-07-24T12:02:17.091Z",
        "updated_at": "2021-07-24T12:02:18.549Z",
        "PhotoURL": "https://www.apple.com/v/iphone/home/az/images/overview/compare/compare_iphone_se__1uyg4tzyd4ya_large.jpg",
        "Photo": null,
        "under_categories": [
            {
                "id": 37,
                "Name": "iPhone SE",
                "category": 2,
                "published_at": "2021-07-24T11:31:50.253Z",
                "created_at": "2021-07-24T11:31:44.560Z",
                "updated_at": "2021-07-24T11:32:05.070Z"
            }
        ]
    },
    {
        "id": 3,
        "Name": "iPhone 12 Pro 2018",
        "Descriptions": "6.1″ or 6.7″\nall-screen OLED display3\n5G cellular4\nA14 Bionic chip\nFastest chip in a smartphone\nPro camera system\nUltra Wide, Wide, Telephoto\nLiDAR Scanner\nFor Night mode portraits\nand next‑level AR\nCompatible with MagSafe accessories",
        "Price": 799,
        "published_at": "2021-07-24T11:57:35.057Z",
        "created_at": "2021-07-24T11:57:33.556Z",
        "updated_at": "2021-07-24T11:57:35.155Z",
        "PhotoURL": "https://www.apple.com/v/iphone/home/az/images/overview/compare/compare_iphone_12_pro__gmn3556ju3am_large.jpg",
        "Photo": null,
        "under_categories": [
            {
                "id": 3,
                "Name": "iPhone 12 Pro",
                "category": 2,
                "published_at": "2021-07-16T15:31:01.826Z",
                "created_at": "2021-07-16T15:30:59.806Z",
                "updated_at": "2021-07-16T15:31:01.919Z"
            }
        ]
    },
    {
        "id": 4,
        "Name": "iPhone 12 2020",
        "Descriptions": "all-screen OLED display3\n5G cellular4\nA14 Bionic chip\nFastest chip in a smartphone \nAdvanced dual‑camera system\nUltra Wide, Wide\nLiDAR Scanner not-available\nCompatible with MagSafe accessories",
        "Price": 699,
        "published_at": "2021-07-24T11:59:09.502Z",
        "created_at": "2021-07-24T11:59:08.242Z",
        "updated_at": "2021-07-24T11:59:09.537Z",
        "PhotoURL": "https://www.apple.com/v/iphone/home/az/images/overview/compare/compare_iphone_12__btq63lk8td7m_large.jpg",
        "Photo": null,
        "under_categories": [
            {
                "id": 36,
                "Name": "iPhone 12",
                "category": 2,
                "published_at": "2021-07-24T11:31:33.180Z",
                "created_at": "2021-07-24T11:31:30.323Z",
                "updated_at": "2021-07-24T11:31:33.232Z"
            }
        ]
    },
    {
        "id": 12,
        "Name": "iPhone 11 2018",
        "Descriptions": "all-screen LCD display3\n4G LTE cellular4\nA13 Bionic chip\nDual-camera system\nUltra Wide, Wide",
        "Price": 399,
        "published_at": "2021-07-24T12:06:50.356Z",
        "created_at": "2021-07-24T12:06:48.563Z",
        "updated_at": "2021-07-24T12:06:50.422Z",
        "PhotoURL": "https://www.apple.com/v/iphone/home/az/images/overview/compare/compare_iphone_11__bzjboswm5hbm_large.jpg",
        "Photo": null,
        "under_categories": [
            {
                "id": 38,
                "Name": "iPhone 11",
                "category": 2,
                "published_at": "2021-07-24T11:32:18.409Z",
                "created_at": "2021-07-24T11:32:15.862Z",
                "updated_at": "2021-07-24T11:32:18.469Z"
            }
        ]
    },
    {
        "id": 5,
        "Name": "iPhone 12 2019",
        "Descriptions": "all-screen OLED display3\n5G cellular4\nA14 Bionic chip\nFastest chip in a smartphone \nAdvanced dual‑camera system\nUltra Wide, Wide\nLiDAR Scanner not-available\nCompatible with MagSafe accessories",
        "Price": 599,
        "published_at": "2021-07-24T11:59:33.511Z",
        "created_at": "2021-07-24T11:59:31.982Z",
        "updated_at": "2021-07-24T11:59:33.535Z",
        "PhotoURL": "https://www.apple.com/v/iphone/home/az/images/overview/compare/compare_iphone_12__btq63lk8td7m_large.jpg",
        "Photo": null,
        "under_categories": [
            {
                "id": 36,
                "Name": "iPhone 12",
                "category": 2,
                "published_at": "2021-07-24T11:31:33.180Z",
                "created_at": "2021-07-24T11:31:30.323Z",
                "updated_at": "2021-07-24T11:31:33.232Z"
            }
        ]
    },
    {
        "id": 9,
        "Name": "iPhone 2018",
        "Descriptions": "LCD display\n4G LTE cellular4\nA13 Bionic chip\nSingle-camera system wide",
        "Price": 299,
        "published_at": "2021-07-24T12:02:50.484Z",
        "created_at": "2021-07-24T12:02:49.207Z",
        "updated_at": "2021-07-24T12:02:50.510Z",
        "PhotoURL": "https://www.apple.com/v/iphone/home/az/images/overview/compare/compare_iphone_se__1uyg4tzyd4ya_large.jpg",
        "Photo": null,
        "under_categories": [
            {
                "id": 37,
                "Name": "iPhone SE",
                "category": 2,
                "published_at": "2021-07-24T11:31:50.253Z",
                "created_at": "2021-07-24T11:31:44.560Z",
                "updated_at": "2021-07-24T11:32:05.070Z"
            }
        ]
    },
    {
        "id": 10,
        "Name": "iPhone 11 2020",
        "Descriptions": "all-screen LCD display3\n4G LTE cellular4\nA13 Bionic chip\nDual-camera system\nUltra Wide, Wide",
        "Price": 599,
        "published_at": "2021-07-24T12:04:51.235Z",
        "created_at": "2021-07-24T12:04:49.788Z",
        "updated_at": "2021-07-24T12:04:51.280Z",
        "PhotoURL": "https://www.apple.com/v/iphone/home/az/images/overview/compare/compare_iphone_11__bzjboswm5hbm_large.jpg",
        "Photo": null,
        "under_categories": [
            {
                "id": 38,
                "Name": "iPhone 11",
                "category": 2,
                "published_at": "2021-07-24T11:32:18.409Z",
                "created_at": "2021-07-24T11:32:15.862Z",
                "updated_at": "2021-07-24T11:32:18.469Z"
            }
        ]
    },
    {
        "id": 16,
        "Name": "MacBook Pro 13 2020",
        "Descriptions": "13.3'' Retina display1\nApple M1 chip\nAlso available with Intel Core i5 or i7 processor\nUp to 16GB unified memory4\nFor increased performance and power efficiency\n2TB Maximum configurable storage4\nUp to 20 hours battery life5\n720p FaceTime HD camera\n3.0 lb. Weight Touch Bar and Touch ID",
        "Price": 1299,
        "published_at": "2021-07-24T12:19:24.364Z",
        "created_at": "2021-07-24T12:19:22.951Z",
        "updated_at": "2021-07-24T12:20:03.001Z",
        "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_mbp13__geounnnz6oa6_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 39,
                "Name": "Mac Book Pro 13",
                "category": 3,
                "published_at": "2021-07-24T11:48:10.811Z",
                "created_at": "2021-07-24T11:48:09.180Z",
                "updated_at": "2021-07-24T11:48:10.857Z"
            }
        ]
    },
    {
        "id": 11,
        "Name": "iPhone 11 2019",
        "Descriptions": "all-screen LCD display3\n4G LTE cellular4\nA13 Bionic chip\nDual-camera system\nUltra Wide, Wide",
        "Price": 499,
        "published_at": "2021-07-24T12:05:30.189Z",
        "created_at": "2021-07-24T12:05:28.523Z",
        "updated_at": "2021-07-24T12:05:30.236Z",
        "PhotoURL": "https://www.apple.com/v/iphone/home/az/images/overview/compare/compare_iphone_11__bzjboswm5hbm_large.jpg",
        "Photo": null,
        "under_categories": [
            {
                "id": 38,
                "Name": "iPhone 11",
                "category": 2,
                "published_at": "2021-07-24T11:32:18.409Z",
                "created_at": "2021-07-24T11:32:15.862Z",
                "updated_at": "2021-07-24T11:32:18.469Z"
            }
        ]
    },
    {
        "id": 13,
        "Name": "MacBook Air 2020",
        "Descriptions": "13` retina display\nApple M1 chip\nUp to 16GB unified memory\n2 TB Maximum configurable storage\nUp to 18 hours battery life\n720p FaceTime HD camera\n2.8 lb. weight Touch ID",
        "Price": 999,
        "published_at": "2021-07-24T12:14:47.943Z",
        "created_at": "2021-07-24T12:14:46.169Z",
        "updated_at": "2021-07-24T12:14:48.066Z",
        "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_mba__gdncw5gbxoq6_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 1,
                "Name": "MacBook Air",
                "category": 3,
                "published_at": "2021-07-16T15:30:19.130Z",
                "created_at": "2021-07-16T15:30:15.656Z",
                "updated_at": "2021-07-16T15:30:19.166Z"
            }
        ]
    },
    {
        "id": 15,
        "Name": "MacBook Air 2018",
        "Descriptions": "13` retina display\nApple M1 chip\nUp to 16GB unified memory\n2 TB Maximum configurable storage\nUp to 18 hours battery life\n720p FaceTime HD camera\n2.8 lb. weight Touch ID",
        "Price": 799,
        "published_at": "2021-07-24T12:17:41.417Z",
        "created_at": "2021-07-24T12:17:39.689Z",
        "updated_at": "2021-07-24T12:18:12.920Z",
        "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_mba__gdncw5gbxoq6_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 1,
                "Name": "MacBook Air",
                "category": 3,
                "published_at": "2021-07-16T15:30:19.130Z",
                "created_at": "2021-07-16T15:30:15.656Z",
                "updated_at": "2021-07-16T15:30:19.166Z"
            }
        ]
    },
    {
        "id": 14,
        "Name": "MacBook Air 2019",
        "Descriptions": "13` retina display\nApple M1 chip\nUp to 16GB unified memory\n2 TB Maximum configurable storage\nUp to 18 hours battery life\n720p FaceTime HD camera\n2.8 lb. weight Touch ID",
        "Price": 899,
        "published_at": "2021-07-24T12:16:21.962Z",
        "created_at": "2021-07-24T12:16:20.276Z",
        "updated_at": "2021-07-24T12:16:22.210Z",
        "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_mba__gdncw5gbxoq6_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 1,
                "Name": "MacBook Air",
                "category": 3,
                "published_at": "2021-07-16T15:30:19.130Z",
                "created_at": "2021-07-16T15:30:15.656Z",
                "updated_at": "2021-07-16T15:30:19.166Z"
            }
        ]
    },
    {
        "id": 18,
        "Name": "MacBook Pro 13 2018",
        "Descriptions": "13.3'' Retina display1\nApple M1 chip\nAlso available with Intel Core i5 or i7 processor\nUp to 16GB unified memory4\nFor increased performance and power efficiency\n2TB Maximum configurable storage4\nUp to 20 hours battery life5\n720p FaceTime HD camera\n3.0 lb. Weight Touch Bar and Touch ID",
        "Price": 1099,
        "published_at": "2021-07-24T12:21:32.946Z",
        "created_at": "2021-07-24T12:21:31.262Z",
        "updated_at": "2021-07-24T12:21:33.019Z",
        "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_mbp13__geounnnz6oa6_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 39,
                "Name": "Mac Book Pro 13",
                "category": 3,
                "published_at": "2021-07-24T11:48:10.811Z",
                "created_at": "2021-07-24T11:48:09.180Z",
                "updated_at": "2021-07-24T11:48:10.857Z"
            }
        ]
    },
    {
        "id": 19,
        "Name": "MacBook Pro 16 2020",
        "Descriptions": "Retina display1\nUp to Intel Core i9 processor\nUp to 64GB memory 8TB\nMaximum configurable storage2\nUp to 11 hours battery life6\n720p FaceTime HD camera\nTouch Bar and Touch ID",
        "Price": 2399,
        "published_at": "2021-07-24T12:22:59.554Z",
        "created_at": "2021-07-24T12:22:57.586Z",
        "updated_at": "2021-07-24T12:22:59.597Z",
        "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_mbp16__fykfvftfaeuu_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 41,
                "Name": "Mac Book Pro 16",
                "category": 3,
                "published_at": "2021-07-24T11:49:10.855Z",
                "created_at": "2021-07-24T11:49:09.586Z",
                "updated_at": "2021-07-24T11:49:10.882Z"
            }
        ]
    },
    {
        "id": 20,
        "Name": "MacBook Pro 16 2019",
        "Descriptions": "Retina display1\nUp to Intel Core i9 processor\nUp to 64GB memory 8TB\nMaximum configurable storage2\nUp to 11 hours battery life6\n720p FaceTime HD camera\nTouch Bar and Touch ID",
        "Price": 2299,
        "published_at": "2021-07-24T12:23:34.927Z",
        "created_at": "2021-07-24T12:23:32.649Z",
        "updated_at": "2021-07-24T12:23:34.958Z",
        "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_mbp16__fykfvftfaeuu_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 41,
                "Name": "Mac Book Pro 16",
                "category": 3,
                "published_at": "2021-07-24T11:49:10.855Z",
                "created_at": "2021-07-24T11:49:09.586Z",
                "updated_at": "2021-07-24T11:49:10.882Z"
            }
        ]
    },
    {
        "id": 21,
        "Name": "MacBook Pro 16 2018",
        "Descriptions": "Retina display1\nUp to Intel Core i9 processor\nUp to 64GB memory 8TB\nMaximum configurable storage2\nUp to 11 hours battery life6\n720p FaceTime HD camera\nTouch Bar and Touch ID",
        "Price": 2199,
        "published_at": "2021-07-24T12:26:33.514Z",
        "created_at": "2021-07-24T12:26:30.619Z",
        "updated_at": "2021-07-24T12:26:33.541Z",
        "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_mbp16__fykfvftfaeuu_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 41,
                "Name": "Mac Book Pro 16",
                "category": 3,
                "published_at": "2021-07-24T11:49:10.855Z",
                "created_at": "2021-07-24T11:49:09.586Z",
                "updated_at": "2021-07-24T11:49:10.882Z"
            }
        ]
    },
    {
        "id": 22,
        "Name": "iMac 24 2020",
        "Descriptions": "4.5K Retina display7\nApple M1 chip\nUp to 16GB unified memory\nFor increased performance and power efficiency\n2TB Maximum configurable storage2\n1080p FaceTime HD camera\nWith the image signal processor of M1 for drastically improved performance\nConfigurable with Magic Keyboard with Touch ID and Numeric Keypad",
        "Price": 1299,
        "published_at": "2021-07-24T12:29:39.747Z",
        "created_at": "2021-07-24T12:29:38.425Z",
        "updated_at": "2021-07-24T12:29:39.776Z",
        "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_imac24__5aryzjnxeki2_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 40,
                "Name": "iMac 24",
                "category": 3,
                "published_at": "2021-07-24T11:48:32.257Z",
                "created_at": "2021-07-24T11:48:30.928Z",
                "updated_at": "2021-07-24T11:48:42.197Z"
            }
        ]
    },
    {
        "id": 30,
        "Name": "Mac Pro 2018",
        "Descriptions": "Intel Xeon W processor\nUp to 1.5TB memory\n8TB Maximum configurable storage2\nMagic Keyboard with Numeric Keypad",
        "Price": 3999,
        "published_at": "2021-07-24T12:43:48.666Z",
        "created_at": "2021-07-24T12:43:46.504Z",
        "updated_at": "2021-07-24T12:43:48.691Z",
        "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_macpro__en2pd7zwtl6q_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 43,
                "Name": "Mac Pro",
                "category": 3,
                "published_at": "2021-07-24T11:49:39.821Z",
                "created_at": "2021-07-24T11:49:38.391Z",
                "updated_at": "2021-07-24T11:49:39.938Z"
            }
        ]
    },
    {
        "id": 23,
        "Name": "iMac 24 2019",
        "Descriptions": "4.5K Retina display7\nApple M1 chip\nUp to 16GB unified memory\nFor increased performance and power efficiency\n2TB Maximum configurable storage2\n1080p FaceTime HD camera\nWith the image signal processor of M1 for drastically improved performance\nConfigurable with Magic Keyboard with Touch ID and Numeric Keypad",
        "Price": 1199,
        "published_at": "2021-07-24T12:30:31.633Z",
        "created_at": "2021-07-24T12:30:29.455Z",
        "updated_at": "2021-07-24T12:30:31.691Z",
        "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_imac24__5aryzjnxeki2_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 40,
                "Name": "iMac 24",
                "category": 3,
                "published_at": "2021-07-24T11:48:32.257Z",
                "created_at": "2021-07-24T11:48:30.928Z",
                "updated_at": "2021-07-24T11:48:42.197Z"
            }
        ]
    },
    {
        "id": 26,
        "Name": "iMac 27 2019",
        "Descriptions": "5K Retina display\nUp to Intel Core i9 processor\nUp to 128GB memory\n8TB Maximum configurable storage\n1080p FaceTime HD camera\nConfigurable with Magic Keyboard with Numeric Keypad",
        "Price": 1699,
        "published_at": "2021-07-24T12:35:35.568Z",
        "created_at": "2021-07-24T12:35:08.107Z",
        "updated_at": "2021-07-24T12:35:35.592Z",
        "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_imac27__ftc2wevwltym_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 42,
                "Name": "iMac 27",
                "category": 3,
                "published_at": "2021-07-24T11:49:27.563Z",
                "created_at": "2021-07-24T11:49:26.268Z",
                "updated_at": "2021-07-24T11:49:27.612Z"
            }
        ]
    },
    {
        "id": 24,
        "Name": "iMac 24 2018",
        "Descriptions": "4.5K Retina display7\nApple M1 chip\nUp to 16GB unified memory\nFor increased performance and power efficiency\n2TB Maximum configurable storage2\n1080p FaceTime HD camera\nWith the image signal processor of M1 for drastically improved performance\nConfigurable with Magic Keyboard with Touch ID and Numeric Keypad",
        "Price": 1099,
        "published_at": "2021-07-24T12:31:32.591Z",
        "created_at": "2021-07-24T12:31:30.947Z",
        "updated_at": "2021-07-24T12:31:32.614Z",
        "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_imac24__5aryzjnxeki2_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 40,
                "Name": "iMac 24",
                "category": 3,
                "published_at": "2021-07-24T11:48:32.257Z",
                "created_at": "2021-07-24T11:48:30.928Z",
                "updated_at": "2021-07-24T11:48:42.197Z"
            }
        ]
    },
    {
        "id": 25,
        "Name": "iMac 27 2020",
        "Descriptions": "5K Retina display\nUp to Intel Core i9 processor\nUp to 128GB memory\n8TB Maximum configurable storage\n1080p FaceTime HD camera\nConfigurable with Magic Keyboard with Numeric Keypad",
        "Price": 1799,
        "published_at": "2021-07-24T12:34:30.738Z",
        "created_at": "2021-07-24T12:34:29.316Z",
        "updated_at": "2021-07-24T12:34:30.760Z",
        "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_imac27__ftc2wevwltym_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 42,
                "Name": "iMac 27",
                "category": 3,
                "published_at": "2021-07-24T11:49:27.563Z",
                "created_at": "2021-07-24T11:49:26.268Z",
                "updated_at": "2021-07-24T11:49:27.612Z"
            }
        ]
    },
    {
        "id": 27,
        "Name": "iMac 27 2018",
        "Descriptions": "5K Retina display\nUp to Intel Core i9 processor\nUp to 128GB memory\n8TB Maximum configurable storage\n1080p FaceTime HD camera\nConfigurable with Magic Keyboard with Numeric Keypad",
        "Price": 1599,
        "published_at": "2021-07-24T12:36:02.916Z",
        "created_at": "2021-07-24T12:36:01.286Z",
        "updated_at": "2021-07-24T12:36:02.941Z",
        "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_imac27__ftc2wevwltym_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 42,
                "Name": "iMac 27",
                "category": 3,
                "published_at": "2021-07-24T11:49:27.563Z",
                "created_at": "2021-07-24T11:49:26.268Z",
                "updated_at": "2021-07-24T11:49:27.612Z"
            }
        ]
    },
    {
        "id": 36,
        "Name": "Apple Watch Series 6 2018",
        "Descriptions": "44mm or 40mm case size\nAlways-On Retina display\nGPS + Cellular1\nBlood Oxygen app2\nECG app3\nHigh and low heart rate notifications\nIrregular heart rhythm notification4\nSupports Family Setup5\n(GPS + Cellular models)\nWater resistant 50 meters",
        "Price": 199,
        "published_at": "2021-07-24T12:48:40.616Z",
        "created_at": "2021-07-24T12:48:39.214Z",
        "updated_at": "2021-07-24T12:48:40.702Z",
        "PhotoURL": "https://www.apple.com/v/watch/shared/compare/e/images/overview/compare_s6__evsi0wlzp4ya_large.jpg",
        "Photo": null,
        "under_categories": [
            {
                "id": 4,
                "Name": "Apple Watch Series 6",
                "category": 4,
                "published_at": "2021-07-16T15:31:26.357Z",
                "created_at": "2021-07-16T15:31:24.962Z",
                "updated_at": "2021-07-16T15:31:26.469Z"
            }
        ]
    },
    {
        "id": 28,
        "Name": "Mac Pro 2020",
        "Descriptions": "Intel Xeon W processor\nUp to 1.5TB memory\n8TB Maximum configurable storage2\nMagic Keyboard with Numeric Keypad",
        "Price": 5999,
        "published_at": "2021-07-24T12:42:38.911Z",
        "created_at": "2021-07-24T12:42:36.748Z",
        "updated_at": "2021-07-24T12:42:38.933Z",
        "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_macpro__en2pd7zwtl6q_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 43,
                "Name": "Mac Pro",
                "category": 3,
                "published_at": "2021-07-24T11:49:39.821Z",
                "created_at": "2021-07-24T11:49:38.391Z",
                "updated_at": "2021-07-24T11:49:39.938Z"
            }
        ]
    },
    {
        "id": 34,
        "Name": "Apple Watch Series 6 2020",
        "Descriptions": "44mm or 40mm case size\nAlways-On Retina display\nGPS + Cellular1\nBlood Oxygen app2\nECG app3\nHigh and low heart rate notifications\nIrregular heart rhythm notification4\nSupports Family Setup5\n(GPS + Cellular models)\nWater resistant 50 meters",
        "Price": 399,
        "published_at": "2021-07-24T12:47:45.904Z",
        "created_at": "2021-07-24T12:47:44.458Z",
        "updated_at": "2021-07-24T12:47:45.934Z",
        "PhotoURL": "https://www.apple.com/v/watch/shared/compare/e/images/overview/compare_s6__evsi0wlzp4ya_large.jpg",
        "Photo": null,
        "under_categories": [
            {
                "id": 4,
                "Name": "Apple Watch Series 6",
                "category": 4,
                "published_at": "2021-07-16T15:31:26.357Z",
                "created_at": "2021-07-16T15:31:24.962Z",
                "updated_at": "2021-07-16T15:31:26.469Z"
            }
        ]
    },
    {
        "id": 29,
        "Name": "Mac Pro 2019",
        "Descriptions": "Intel Xeon W processor\nUp to 1.5TB memory\n8TB Maximum configurable storage2\nMagic Keyboard with Numeric Keypad",
        "Price": 4999,
        "published_at": "2021-07-24T12:42:58.410Z",
        "created_at": "2021-07-24T12:42:57.126Z",
        "updated_at": "2021-07-24T12:42:58.429Z",
        "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_macpro__en2pd7zwtl6q_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 43,
                "Name": "Mac Pro",
                "category": 3,
                "published_at": "2021-07-24T11:49:39.821Z",
                "created_at": "2021-07-24T11:49:38.391Z",
                "updated_at": "2021-07-24T11:49:39.938Z"
            }
        ]
    },
    {
        "id": 31,
        "Name": "Mac mini 2020",
        "Descriptions": "Apple M1 chip\nUp to 16GB unified memory\n2TB Maximum configurable storage",
        "Price": 699,
        "published_at": "2021-07-24T12:45:10.236Z",
        "created_at": "2021-07-24T12:45:08.702Z",
        "updated_at": "2021-07-24T12:45:10.264Z",
        "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_macmini__f53ds86a9eq2_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 44,
                "Name": "Mac Mini",
                "category": 3,
                "published_at": "2021-07-24T11:49:51.591Z",
                "created_at": "2021-07-24T11:49:50.181Z",
                "updated_at": "2021-07-24T11:49:51.626Z"
            }
        ]
    },
    {
        "id": 32,
        "Name": "Mac mini 2019",
        "Descriptions": "Apple M1 chip\nUp to 16GB unified memory\n2TB Maximum configurable storage",
        "Price": 599,
        "published_at": "2021-07-24T12:45:40.620Z",
        "created_at": "2021-07-24T12:45:39.370Z",
        "updated_at": "2021-07-24T12:45:40.647Z",
        "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_macmini__f53ds86a9eq2_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 44,
                "Name": "Mac Mini",
                "category": 3,
                "published_at": "2021-07-24T11:49:51.591Z",
                "created_at": "2021-07-24T11:49:50.181Z",
                "updated_at": "2021-07-24T11:49:51.626Z"
            }
        ]
    },
    {
        "id": 35,
        "Name": "Apple Watch Series 6 2019",
        "Descriptions": "44mm or 40mm case size\nAlways-On Retina display\nGPS + Cellular1\nBlood Oxygen app2\nECG app3\nHigh and low heart rate notifications\nIrregular heart rhythm notification4\nSupports Family Setup5\n(GPS + Cellular models)\nWater resistant 50 meters",
        "Price": 299,
        "published_at": "2021-07-24T12:48:12.656Z",
        "created_at": "2021-07-24T12:48:10.819Z",
        "updated_at": "2021-07-24T12:48:12.706Z",
        "PhotoURL": "https://www.apple.com/v/watch/shared/compare/e/images/overview/compare_s6__evsi0wlzp4ya_large.jpg",
        "Photo": null,
        "under_categories": [
            {
                "id": 4,
                "Name": "Apple Watch Series 6",
                "category": 4,
                "published_at": "2021-07-16T15:31:26.357Z",
                "created_at": "2021-07-16T15:31:24.962Z",
                "updated_at": "2021-07-16T15:31:26.469Z"
            }
        ]
    },
    {
        "id": 33,
        "Name": "Mac mini 2018",
        "Descriptions": "Apple M1 chip\nUp to 16GB unified memory\n2TB Maximum configurable storage",
        "Price": 499,
        "published_at": "2021-07-24T12:46:16.483Z",
        "created_at": "2021-07-24T12:46:14.640Z",
        "updated_at": "2021-07-24T12:46:16.520Z",
        "PhotoURL": "https://www.apple.com/v/mac/home/bf/images/overview/compare/compare_macmini__f53ds86a9eq2_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 44,
                "Name": "Mac Mini",
                "category": 3,
                "published_at": "2021-07-24T11:49:51.591Z",
                "created_at": "2021-07-24T11:49:50.181Z",
                "updated_at": "2021-07-24T11:49:51.626Z"
            }
        ]
    },
    {
        "id": 37,
        "Name": "Apple Watch SE 2020",
        "Descriptions": "44mm or 40mm case size\nRetina display\nGPS + Cellular1\nHigh and low heart rate notifications\nIrregular heart rhythm notification4\nSupports Family Setup5\nWater resistant 50 meters6",
        "Price": 279,
        "published_at": "2021-07-24T12:49:54.976Z",
        "created_at": "2021-07-24T12:49:53.434Z",
        "updated_at": "2021-07-24T12:49:55.040Z",
        "PhotoURL": "https://www.apple.com/v/watch/shared/compare/e/images/overview/compare_se__crebhd9hhdea_large.jpg",
        "Photo": null,
        "under_categories": [
            {
                "id": 45,
                "Name": "Apple Watch SE",
                "category": 4,
                "published_at": "2021-07-24T11:50:35.723Z",
                "created_at": "2021-07-24T11:50:33.985Z",
                "updated_at": "2021-07-24T11:50:35.784Z"
            }
        ]
    },
    {
        "id": 38,
        "Name": "Apple Watch SE 2019",
        "Descriptions": "44mm or 40mm case size\nRetina display\nGPS + Cellular1\nHigh and low heart rate notifications\nIrregular heart rhythm notification4\nSupports Family Setup5\nWater resistant 50 meters6",
        "Price": 199,
        "published_at": "2021-07-24T12:50:22.920Z",
        "created_at": "2021-07-24T12:50:21.490Z",
        "updated_at": "2021-07-24T12:50:22.995Z",
        "PhotoURL": "https://www.apple.com/v/watch/shared/compare/e/images/overview/compare_se__crebhd9hhdea_large.jpg",
        "Photo": null,
        "under_categories": [
            {
                "id": 45,
                "Name": "Apple Watch SE",
                "category": 4,
                "published_at": "2021-07-24T11:50:35.723Z",
                "created_at": "2021-07-24T11:50:33.985Z",
                "updated_at": "2021-07-24T11:50:35.784Z"
            }
        ]
    },
    {
        "id": 39,
        "Name": "Apple Watch SE 2018",
        "Descriptions": "44mm or 40mm case size\nRetina display\nGPS + Cellular1\nHigh and low heart rate notifications\nIrregular heart rhythm notification4\nSupports Family Setup5\nWater resistant 50 meters6",
        "Price": 149,
        "published_at": "2021-07-24T12:51:36.672Z",
        "created_at": "2021-07-24T12:51:34.867Z",
        "updated_at": "2021-07-24T12:51:36.707Z",
        "PhotoURL": "https://www.apple.com/v/watch/shared/compare/e/images/overview/compare_se__crebhd9hhdea_large.jpg",
        "Photo": null,
        "under_categories": [
            {
                "id": 45,
                "Name": "Apple Watch SE",
                "category": 4,
                "published_at": "2021-07-24T11:50:35.723Z",
                "created_at": "2021-07-24T11:50:33.985Z",
                "updated_at": "2021-07-24T11:50:35.784Z"
            }
        ]
    },
    {
        "id": 40,
        "Name": "Apple Watch Series 3 2020",
        "Descriptions": "42mm or 38mm case size\nRetina display\nGPS\nHigh and low heart rate notifications\nIrregular heart rhythm notification4\nWater resistant 50 meters",
        "Price": 199,
        "published_at": "2021-07-24T12:52:35.946Z",
        "created_at": "2021-07-24T12:52:34.306Z",
        "updated_at": "2021-07-24T12:52:35.987Z",
        "PhotoURL": "https://www.apple.com/v/watch/shared/compare/e/images/overview/compare_s3__clzj8ukygo5e_large.jpg",
        "Photo": null,
        "under_categories": [
            {
                "id": 46,
                "Name": "Apple Watch Series 3",
                "category": 4,
                "published_at": "2021-07-24T11:50:49.937Z",
                "created_at": "2021-07-24T11:50:47.973Z",
                "updated_at": "2021-07-24T11:50:50.023Z"
            }
        ]
    },
    {
        "id": 41,
        "Name": "Apple Watch Series 3 2019",
        "Descriptions": "42mm or 38mm case size\nRetina display\nGPS\nHigh and low heart rate notifications\nIrregular heart rhythm notification4\nWater resistant 50 meters",
        "Price": 149,
        "published_at": "2021-07-24T12:53:03.983Z",
        "created_at": "2021-07-24T12:53:02.376Z",
        "updated_at": "2021-07-24T12:53:04.020Z",
        "PhotoURL": "https://www.apple.com/v/watch/shared/compare/e/images/overview/compare_s3__clzj8ukygo5e_large.jpg",
        "Photo": null,
        "under_categories": [
            {
                "id": 46,
                "Name": "Apple Watch Series 3",
                "category": 4,
                "published_at": "2021-07-24T11:50:49.937Z",
                "created_at": "2021-07-24T11:50:47.973Z",
                "updated_at": "2021-07-24T11:50:50.023Z"
            }
        ]
    },
    {
        "id": 42,
        "Name": "Apple Watch Series 3 2018",
        "Descriptions": "42mm or 38mm case size\nRetina display\nGPS\nHigh and low heart rate notifications\nIrregular heart rhythm notification4\nWater resistant 50 meters",
        "Price": 99,
        "published_at": "2021-07-24T12:53:26.860Z",
        "created_at": "2021-07-24T12:53:25.050Z",
        "updated_at": "2021-07-24T12:53:26.890Z",
        "PhotoURL": "https://www.apple.com/v/watch/shared/compare/e/images/overview/compare_s3__clzj8ukygo5e_large.jpg",
        "Photo": null,
        "under_categories": [
            {
                "id": 46,
                "Name": "Apple Watch Series 3",
                "category": 4,
                "published_at": "2021-07-24T11:50:49.937Z",
                "created_at": "2021-07-24T11:50:47.973Z",
                "updated_at": "2021-07-24T11:50:50.023Z"
            }
        ]
    },
    {
        "id": 48,
        "Name": "iPad Air 2018",
        "Descriptions": "Liquid Retina display1\nA14 Bionic chip\nUSB-C connector\n4G LTE cellular2\nCompatible with\nApple Pencil (2nd generation)\nCompatible with Magic Keyboard and Smart Keyboard Folio",
        "Price": 399,
        "published_at": "2021-07-24T13:01:18.050Z",
        "created_at": "2021-07-24T13:01:16.773Z",
        "updated_at": "2021-07-24T13:01:18.085Z",
        "PhotoURL": "https://www.apple.com/v/ipad/home/bo/images/overview/compare_ipad_air__bxjv33pk6nte_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 48,
                "Name": "iPadAir",
                "category": 1,
                "published_at": "2021-07-24T11:51:13.241Z",
                "created_at": "2021-07-24T11:51:11.583Z",
                "updated_at": "2021-07-24T11:51:13.294Z"
            }
        ]
    },
    {
        "id": 43,
        "Name": "iPad Pro 2020",
        "Descriptions": "12.9” Liquid Retina XDR display1\n11” Liquid Retina display1\nM1 chip\nUSB-C connector with support for Thunderbolt / USB 4\n5G cellular2\nCompatible with Apple Pencil (2nd generation)\nCompatible with Magic Keyboard and Smart Keyboard Folio",
        "Price": 799,
        "published_at": "2021-07-24T12:56:23.692Z",
        "created_at": "2021-07-24T12:55:24.153Z",
        "updated_at": "2021-07-24T12:56:23.726Z",
        "PhotoURL": "https://www.apple.com/v/ipad/home/bo/images/overview/compare_ipad_pro__erf9x8mw04sy_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 2,
                "Name": "iPad Pro",
                "category": 1,
                "published_at": "2021-07-16T15:30:35.392Z",
                "created_at": "2021-07-16T15:30:33.964Z",
                "updated_at": "2021-07-16T15:30:41.931Z"
            }
        ]
    },
    {
        "id": 44,
        "Name": "Ipad Pro 2019",
        "Descriptions": "12.9” Liquid Retina XDR display1\n11” Liquid Retina display1\nM1 chip\nUSB-C connector with support for Thunderbolt / USB 4\n5G cellular2\nCompatible with Apple Pencil (2nd generation)\nCompatible with Magic Keyboard and Smart Keyboard Folio",
        "Price": 699,
        "published_at": "2021-07-24T12:56:51.187Z",
        "created_at": "2021-07-24T12:56:48.931Z",
        "updated_at": "2021-07-24T12:56:51.205Z",
        "PhotoURL": "https://www.apple.com/v/ipad/home/bo/images/overview/compare_ipad_pro__erf9x8mw04sy_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 2,
                "Name": "iPad Pro",
                "category": 1,
                "published_at": "2021-07-16T15:30:35.392Z",
                "created_at": "2021-07-16T15:30:33.964Z",
                "updated_at": "2021-07-16T15:30:41.931Z"
            }
        ]
    },
    {
        "id": 45,
        "Name": "Ipad Pro 2018",
        "Descriptions": "12.9” Liquid Retina XDR display1\n11” Liquid Retina display1\nM1 chip\nUSB-C connector with support for Thunderbolt / USB 4\n5G cellular2\nCompatible with Apple Pencil (2nd generation)\nCompatible with Magic Keyboard and Smart Keyboard Folio",
        "Price": 599,
        "published_at": "2021-07-24T12:57:22.568Z",
        "created_at": "2021-07-24T12:57:20.908Z",
        "updated_at": "2021-07-24T12:57:22.589Z",
        "PhotoURL": "https://www.apple.com/v/ipad/home/bo/images/overview/compare_ipad_pro__erf9x8mw04sy_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 2,
                "Name": "iPad Pro",
                "category": 1,
                "published_at": "2021-07-16T15:30:35.392Z",
                "created_at": "2021-07-16T15:30:33.964Z",
                "updated_at": "2021-07-16T15:30:41.931Z"
            }
        ]
    },
    {
        "id": 52,
        "Name": "iPad 2020",
        "Descriptions": "Retina display\nA12 Bionic chip\nLightning connector\n4G LTE cellular2\nCompatible with\nApple Pencil (1st generation)\nCompatible with Smart Keyboard",
        "Price": 329,
        "published_at": "2021-07-24T13:07:56.089Z",
        "created_at": "2021-07-24T13:07:54.904Z",
        "updated_at": "2021-07-24T13:07:56.111Z",
        "PhotoURL": "https://www.apple.com/v/ipad/home/bo/images/overview/compare_ipad_10_2__fwgwy7jydtea_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 50,
                "Name": "iPad",
                "category": 1,
                "published_at": "2021-07-24T11:51:52.401Z",
                "created_at": "2021-07-24T11:51:33.149Z",
                "updated_at": "2021-07-24T11:51:52.433Z"
            }
        ]
    },
    {
        "id": 46,
        "Name": "iPad Air 2020",
        "Descriptions": "Liquid Retina display1\nA14 Bionic chip\nUSB-C connector\n4G LTE cellular2\nCompatible with\nApple Pencil (2nd generation)\nCompatible with Magic Keyboard and Smart Keyboard Folio",
        "Price": 599,
        "published_at": "2021-07-24T12:59:14.594Z",
        "created_at": "2021-07-24T12:59:13.086Z",
        "updated_at": "2021-07-24T12:59:14.677Z",
        "PhotoURL": "https://www.apple.com/v/ipad/home/bo/images/overview/compare_ipad_air__bxjv33pk6nte_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 48,
                "Name": "iPadAir",
                "category": 1,
                "published_at": "2021-07-24T11:51:13.241Z",
                "created_at": "2021-07-24T11:51:11.583Z",
                "updated_at": "2021-07-24T11:51:13.294Z"
            }
        ]
    },
    {
        "id": 47,
        "Name": "iPad Air 2019",
        "Descriptions": "Liquid Retina display1\nA14 Bionic chip\nUSB-C connector\n4G LTE cellular2\nCompatible with\nApple Pencil (2nd generation)\nCompatible with Magic Keyboard and Smart Keyboard Folio",
        "Price": 499,
        "published_at": "2021-07-24T13:00:55.140Z",
        "created_at": "2021-07-24T13:00:53.495Z",
        "updated_at": "2021-07-24T13:00:55.204Z",
        "PhotoURL": "https://www.apple.com/v/ipad/home/bo/images/overview/compare_ipad_air__bxjv33pk6nte_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 48,
                "Name": "iPadAir",
                "category": 1,
                "published_at": "2021-07-24T11:51:13.241Z",
                "created_at": "2021-07-24T11:51:11.583Z",
                "updated_at": "2021-07-24T11:51:13.294Z"
            }
        ]
    },
    {
        "id": 50,
        "Name": "iPad mini 2019",
        "Descriptions": "Retina display\nA12 Bionic chip\nLightning connector\n4G LTE cellular2\nCompatible with\nApple Pencil (1st generation)\nCompatible with Bluetooth keyboards",
        "Price": 249,
        "published_at": "2021-07-24T13:03:16.726Z",
        "created_at": "2021-07-24T13:03:14.973Z",
        "updated_at": "2021-07-24T13:03:16.757Z",
        "PhotoURL": "https://www.apple.com/v/ipad/home/bo/images/overview/compare_ipad_mini__czcsk9ukpeie_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 49,
                "Name": "iPad Mini",
                "category": 1,
                "published_at": "2021-07-24T11:51:23.741Z",
                "created_at": "2021-07-24T11:51:22.435Z",
                "updated_at": "2021-07-24T11:51:23.782Z"
            }
        ]
    },
    {
        "id": 53,
        "Name": "iPad 2019",
        "Descriptions": "Retina display\nA12 Bionic chip\nLightning connector\n4G LTE cellular2\nCompatible with\nApple Pencil (1st generation)\nCompatible with Smart Keyboard",
        "Price": 299,
        "published_at": "2021-07-24T13:08:33.495Z",
        "created_at": "2021-07-24T13:08:31.969Z",
        "updated_at": "2021-07-24T13:08:33.533Z",
        "PhotoURL": "https://www.apple.com/v/ipad/home/bo/images/overview/compare_ipad_10_2__fwgwy7jydtea_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 50,
                "Name": "iPad",
                "category": 1,
                "published_at": "2021-07-24T11:51:52.401Z",
                "created_at": "2021-07-24T11:51:33.149Z",
                "updated_at": "2021-07-24T11:51:52.433Z"
            }
        ]
    },
    {
        "id": 49,
        "Name": "iPad mini 2020",
        "Descriptions": "Retina display\nA12 Bionic chip\nLightning connector\n4G LTE cellular2\nCompatible with\nApple Pencil (1st generation)\nCompatible with Bluetooth keyboards",
        "Price": 399,
        "published_at": "2021-07-24T13:02:37.460Z",
        "created_at": "2021-07-24T13:02:36.040Z",
        "updated_at": "2021-07-24T13:03:27.792Z",
        "PhotoURL": "https://www.apple.com/v/ipad/home/bo/images/overview/compare_ipad_mini__czcsk9ukpeie_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 49,
                "Name": "iPad Mini",
                "category": 1,
                "published_at": "2021-07-24T11:51:23.741Z",
                "created_at": "2021-07-24T11:51:22.435Z",
                "updated_at": "2021-07-24T11:51:23.782Z"
            }
        ]
    },
    {
        "id": 51,
        "Name": "iPad mini 2018",
        "Descriptions": "Retina display\nA12 Bionic chip\nLightning connector\n4G LTE cellular2\nCompatible with\nApple Pencil (1st generation)\nCompatible with Bluetooth keyboards",
        "Price": 199,
        "published_at": "2021-07-24T13:03:53.725Z",
        "created_at": "2021-07-24T13:03:52.396Z",
        "updated_at": "2021-07-24T13:03:53.764Z",
        "PhotoURL": "https://www.apple.com/v/ipad/home/bo/images/overview/compare_ipad_mini__czcsk9ukpeie_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 49,
                "Name": "iPad Mini",
                "category": 1,
                "published_at": "2021-07-24T11:51:23.741Z",
                "created_at": "2021-07-24T11:51:22.435Z",
                "updated_at": "2021-07-24T11:51:23.782Z"
            }
        ]
    },
    {
        "id": 54,
        "Name": "iPad 2018",
        "Descriptions": "Retina display\nA12 Bionic chip\nLightning connector\n4G LTE cellular2\nCompatible with\nApple Pencil (1st generation)\nCompatible with Smart Keyboard",
        "Price": 249,
        "published_at": "2021-07-24T13:08:56.201Z",
        "created_at": "2021-07-24T13:08:54.556Z",
        "updated_at": "2021-07-24T13:08:56.223Z",
        "PhotoURL": "https://www.apple.com/v/ipad/home/bo/images/overview/compare_ipad_10_2__fwgwy7jydtea_large.png",
        "Photo": null,
        "under_categories": [
            {
                "id": 50,
                "Name": "iPad",
                "category": 1,
                "published_at": "2021-07-24T11:51:52.401Z",
                "created_at": "2021-07-24T11:51:33.149Z",
                "updated_at": "2021-07-24T11:51:52.433Z"
            }
        ]
    }
]

  async getCategories(res: any): Promise<any | undefined> {
    return res.send(this.categories);
  }

  async getUnderCategories(res: any): Promise<any | undefined> {
    return res.send(this.underCategories);
  }

  async getProducts(res: any): Promise<any | undefined> {
    return res.send(this.products);
  }
}
