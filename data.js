var APP_DATA = {
  "scenes": [
    {
      "id": "0-obvacia-as-s-kuchyou",
      "name": "Obývacia časť s kuchyňou",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 1.5636591220264613,
        "pitch": 0.003756747131021143,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": 2.8063955432807326,
          "pitch": 0.03516981907343464,
          "rotation": 0,
          "target": "5-chodba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kpea",
      "name": "Kúpeľňa",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.0021430861042119886,
        "pitch": 0.0024559180269108083,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": 1.7595155544731993,
          "pitch": 0.06226337352480016,
          "rotation": 0,
          "target": "5-chodba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-spla",
      "name": "Spálňa",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.5654818743912031,
        "pitch": 0.02987637679149202,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": 0.2675133263310361,
          "pitch": 0.04483472775259578,
          "rotation": 0,
          "target": "5-chodba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-izba",
      "name": "Izba",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.9864789140278507,
        "pitch": 0.019776575091956516,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": 1.2838800777347128,
          "pitch": 0.0662322530958015,
          "rotation": 0,
          "target": "5-chodba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-wc",
      "name": "WC",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.5686853557070606,
        "pitch": 0.02512629717953274,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": 1.5134441034083856,
          "pitch": 0.08540560185088708,
          "rotation": 0,
          "target": "5-chodba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-chodba",
      "name": "Chodba",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": -0.3022913488387253,
          "pitch": 0.06060667529838071,
          "rotation": 0,
          "target": "4-wc"
        },
        {
          "yaw": -1.7550560113966274,
          "pitch": 0.08615990711798638,
          "rotation": 0,
          "target": "1-kpea"
        },
        {
          "yaw": -2.7352223048621287,
          "pitch": 0.05136992640146154,
          "rotation": 0,
          "target": "3-izba"
        },
        {
          "yaw": -3.131414688454818,
          "pitch": 0.04086866007705048,
          "rotation": 0,
          "target": "2-spla"
        },
        {
          "yaw": -0.010779286455266046,
          "pitch": 0.055928021266344885,
          "rotation": 0,
          "target": "0-obvacia-as-s-kuchyou"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
