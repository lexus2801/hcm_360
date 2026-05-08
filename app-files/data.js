var APP_DATA = {
  "scenes": [
    {
      "id": "0-street-view-360",
      "name": "Ben Thanh Market",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.7501848983450987,
        "pitch": 0.03801869739420205,
        "fov": 1.489667856106396
      },
      "linkHotspots": [
        {
          "yaw": 3.1297753878561334,
          "pitch": 0.09546609319908761,
          "rotation": 0,
          "target": "1-takashimaya",
          "label": "Takashimaya Saigon"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.4848916765229205,
          "pitch": -0.3234815355125473,
          "title": "Ben Thanh Market",
          "text": "History: Built in 1912, the most famous landmark of Saigon. Smart Hub: Major interchange for Metro Lines 1, 2, 3a, and 4. Payments: Supports all major e-wallets.",
          "images": [
            {
              "src": "img/BenThanh/ben-thanh-1914.jpg",
              "alt": "Ben Thanh Market around 1914",
              "caption": "Ben Thanh Market in the early 20th century.",
              "text": "1914: Ben Thanh Market became a major trading hub in Saigon, with low-rise architecture and lighter street traffic around the market."
            },
            {
              "src": "img/BenThanh/ben-thanh-1960.jpg",
              "alt": "Ben Thanh Market around 1960",
              "caption": "Ben Thanh Market area during the 1960s.",
              "text": "1960s: The area around Ben Thanh Market grew quickly, with denser commerce and increased urban transport activity."
            },
            {
              "src": "img/BenThanh/ben-thanh-now.jpg",
              "alt": "Ben Thanh Market today",
              "caption": "Current view of Ben Thanh Market.",
              "text": "Today: Ben Thanh Market remains an iconic landmark and a central visitor zone, connected to modern transport and digital services."
            }
          ]
        }
      ]
    },
    {
      "id": "1-takashimaya",
      "name": "Takashimaya Saigon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.17285861012469184,
          "pitch": 0.13918182644625254,
          "rotation": 0,
          "target": "2-ph-i-b-nguyn-hu",
          "label": "Nguyen Hue Walking Street"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7280209505856483,
          "pitch": -0.26298800842140757,
          "title": "Takashimaya Saigon",
          "text": "Location: A luxury shopping hub on Le Loi Street. Smart Features: AI-integrated retail experiences and smart indoor navigation. Services: International brands with cashless payment support."
        }
      ]
    },
    {
      "id": "2-ph-i-b-nguyn-hu",
      "name": "Nguyen Hue Walking Street",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4967683765984212,
          "pitch": 0.10976773129573303,
          "rotation": 0,
          "target": "3-nha-hat",
          "label": "Saigon Opera House"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.0578435308963563,
          "pitch": 0.12901433049032818,
          "title": "Nguyen Hue Walking Street",
          "text": " Culture: The city’s main square for festivals and events. Smart Info: Free public Wi-Fi and AI-powered security cameras. Events: Scan QR codes for real-time fountain show schedules."
        }
      ]
    },
    {
      "id": "3-nha-hat",
      "name": "Saigon Opera House",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8962395046325007,
          "pitch": 0.06823367346247267,
          "rotation": 0,
          "target": "4-cng-truong-lam-son",
          "label": "Lam Son Square"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4672663191558613,
          "pitch": -0.4306618995453455,
          "title": "Saigon Opera House",
          "text": "Architecture: Classic French Flamboyant style built in 1900. Smart Info: Book show tickets instantly via QR codes. Transport: Direct access to Metro Station Opera House.",
          "images": [
            {
              "src": "img/opera/nha-hat-1900.jpg",
              "alt": "Saigon Opera House around 1900",
              "caption": "Saigon Opera House in the early colonial period.",
              "text": "1900: The Municipal Theatre was completed in French architectural style and became a major cultural landmark in central Saigon."
            },
            {
              "src": "img/opera/nha-hat-1960.jpg",
              "alt": "Saigon Opera House around 1960",
              "caption": "Opera House area during the 1960s.",
              "text": "1960s: The building and surrounding square reflected a denser urban core with changing civic functions."
            },
            {
              "src": "img/opera/nha-hat-now.png",
              "alt": "Saigon Opera House today",
              "caption": "Saigon Opera House in the modern era.",
              "text": "Today: The Opera House remains an active performance venue and a key stop on city heritage and night tours."
            }
          ]
        }
      ]
    },
    {
      "id": "4-cng-truong-lam-son",
      "name": "Lam Son Square",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.14171948922403388,
          "pitch": 0.1212189351662829,
          "rotation": 0,
          "target": "5-70-hai-ba-trung",
          "label": "70 Hai Ba Trung Street"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-70-hai-ba-trung",
      "name": "70 Hai Ba Trung Street",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.024216645992073182,
          "pitch": 0.23662237199451397,
          "rotation": 0,
          "target": "6-jw-marriot",
          "label": "JW Marriott Saigon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-jw-marriot",
      "name": "JW Marriott Saigon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9046221592057329,
          "pitch": 0.14950425292214398,
          "rotation": 0,
          "target": "7-nh-th",
          "label": "Notre Dame Cathedral"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-nh-th",
      "name": "Notre Dame Cathedral",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.02941770460901,
          "pitch": 0.16179142189616513,
          "rotation": 0,
          "target": "8-buu-dien",
          "label": "Central Post Office"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5480455083859237,
          "pitch": -0.3530042023320643,
          "title": "Notre Dame Cathedral",
          "text": "Architecture: A neo-Romanesque masterpiece built between 1877 and 1880. Smart Feature: Integrated QR codes for historical restoration updates and digital heritage tours. Travel: A top spiritual and cultural landmark in the heart of Ho Chi Minh City.",
          "images": [
            {
              "src": "img/NotreDame/dame-1890.jpg",
              "alt": "Notre Dame Cathedral around 1890",
              "caption": "Notre Dame Cathedral in the late 19th century.",
              "text": "1890: The cathedral stood out as a new monumental church in colonial Saigon, surrounded by lower-rise development."
            },
            {
              "src": "img/NotreDame/dame-1965.jpg",
              "alt": "Notre Dame Cathedral around 1965",
              "caption": "Notre Dame Cathedral area during the 1960s.",
              "text": "1965: The district became busier with modern traffic and administrative activity while the cathedral remained a central landmark."
            },
            {
              "src": "img/NotreDame/dame-now.jpg",
              "alt": "Notre Dame Cathedral today",
              "caption": "Notre Dame Cathedral in recent years.",
              "text": "Today: Notre Dame Cathedral continues to be one of the city's most recognized heritage sites, especially during restoration-focused visits."
            }
          ]
        }
      ]
    },
    {
      "id": "8-buu-dien",
      "name": "Central Post Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": 1.9875345263817783,
          "pitch": -0.2956440303572023,
          "title": "Central Post Office",
          "text": "Architecture: Designed by Gustave Eiffel with a blend of Gothic and Renaissance styles. Smart Feature: Digital postal services and real-time package tracking via QR codes. Travel: One of the oldest and most beautiful colonial buildings in Ho Chi Minh City",
          "images": [
            {
              "src": "img/post/post-1890.png",
              "alt": "Central Post Office around 1890",
              "caption": "Central Post Office in the early years.",
              "text": "1890s: The post office emerged as a key communication hub and a representative example of colonial-era civic architecture."
            },
            {
              "src": "img/post/post-2000.jpg",
              "alt": "Central Post Office around 2000",
              "caption": "Central Post Office around the 2000s.",
              "text": "2000s: The building remained a functioning public service space while becoming a major stop for visitors and city tours."
            },
            {
              "src": "img/post/post-now.jpg",
              "alt": "Central Post Office today",
              "caption": "Central Post Office in the present day.",
              "text": "Today: The post office blends heritage value with tourism and modern postal services in the center of Ho Chi Minh City."
            }
          ]
        }
      ]
    }
  ],
  "name": "Ho Chi Minh City 360 Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
