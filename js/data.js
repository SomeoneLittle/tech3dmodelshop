/* ТЕСТОВЫЕ ДАННЫЕ. Замените содержимое своими: models (модели + ссылки на площадки в links), works (портфолио), posts (блог), plans (менторство), platforms (площадки), contact, profile.
   Картинки пока ссылками из макета (googleusercontent) — позже подставьте свои пути, например "assets/models/apex.webp". Ссылки links[].url сейчас ведут на главные страницы площадок — замените на реальные. */
window.POLYX_DATA = {
    "models":  [
                   {
                       "id":  "apex-recon-mech-mk2",
                       "title":  "Apex Recon Mech Chassis MK-II",
                       "cat":  "mechs",
                       "catLabel":  "Mechs \u0026 Robots / Chassis",
                       "chips":  [
                                     ".FBX",
                                     ".BLEND",
                                     "UE5"
                                 ],
                       "engines":  [
                                       "ue5",
                                       "blender",
                                       "unity"
                                   ],
                       "tris":  "42k Tris",
                       "extra":  "Quad Topo",
                       "sub":  "Sub-D • 48-Bone IK/FK Rig • 4K PBR Textures",
                       "blurb":  "Rigged for UE5 Control Rig and Blender IK constraints with 4 LOD layers.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuAGjDOJGFMbXE3Dy-Ri2-VxDTzUTG9cZsdNHfQPYWZI_DOapAWotQdz4tcIc2jKOiPJZeuGbIUo9f-CEDoRkuuLN-Gn8PMsuFD_o_CPhy_fxVoO6KX_jzhzhsyKw9Xv2T1Zr9tjgEgdyQ0wvklU_a86qEXZ3KJz81oIwilZ6y32vBhyeCfRHtcIN9Gzo2_z0X-PoEZ4z_ToCNk5fyA0Lj7bQexCrRwlPiUobTO-HZNTXKW77_uqaPhK",
                       "date":  "2025-05-12",
                       "featured":  true,
                       "hero":  "https://lh3.googleusercontent.com/aida-public/AB6AXuCMvOe7yRHkrqB8sbssI1bseSABxWsb6_wPr_2iItdm9wUJPkMX6PBlJ8Gkb_1WAe4pFlNCsJoDzBz1qZptgEXpX7-rc3k011hGkpkEOhDm2sHS3mkTZE1HZYB2BPyadsW1YkcpOrukEtWjEAdrQIN9WmC1MdAKe6jcMYdlsFIZ9siDqLjX60S47LGderbnTqAJzRQPnKRH7XE3RzTc9MIFebGU4GZUeyFP27Jpnu9_qmxAGCEmi-Ta",
                       "detail":  true,
                       "links":  [
                                     {
                                         "platform":  "cgtrader",
                                         "url":  "https://www.cgtrader.com/"
                                     },
                                     {
                                         "platform":  "sketchfab",
                                         "url":  "https://sketchfab.com/"
                                     },
                                     {
                                         "platform":  "gumroad",
                                         "url":  "https://gumroad.com/"
                                     }
                                 ]
                   },
                   {
                       "id":  "mining-drone",
                       "title":  "Heavy Industrial Mining Drone",
                       "cat":  "mechs",
                       "catLabel":  "Mechs \u0026 Robots / Drone",
                       "chips":  [
                                     ".FBX",
                                     ".BLEND",
                                     ".OBJ"
                                 ],
                       "engines":  [
                                       "ue5",
                                       "blender",
                                       "unity"
                                   ],
                       "tris":  "52k Tris",
                       "extra":  "12 Anims",
                       "sub":  "Fully Rigged • Flight \u0026 Mining Loops • 4K Weathered",
                       "blurb":  "Fully rigged mining drone with flight and drilling loops, weathered 4K PBR set.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuCpqqtbyuFoegKuBollV3onz7r52ju8mjnIYnJN0M1dc4jeMc1KN89XW7ZBZxneYAggMXbY-SZq9iEL5580DtT6kCENRO7o5L5tTCU0XIN6-crVgLjkIGhmEVDS_lGE7IZ120chWW3gfMVxejNe3UdakOwidJF_VM_rL2i-s2ijDXFQboRYgBlNShiJAspaftvhO9EArROmGGKWq-EXKi3_vyJy-wQ3ZwiYfUd6vLnw3VQ_fyNXU5AN",
                       "date":  "2025-04-02",
                       "featured":  false,
                       "links":  [
                                     {
                                         "platform":  "cgtrader",
                                         "url":  "https://www.cgtrader.com/"
                                     }
                                 ]
                   },
                   {
                       "id":  "quadruped-recon-robot",
                       "title":  "Combat Quadruped Recon Robot",
                       "cat":  "mechs",
                       "catLabel":  "Mechs \u0026 Robots / Quadruped",
                       "chips":  [
                                     ".FBX",
                                     ".BLEND",
                                     "UE5"
                                 ],
                       "engines":  [
                                       "ue5",
                                       "blender"
                                   ],
                       "tris":  "64k Tris",
                       "extra":  "MoCap Ready",
                       "sub":  "Complex Kinematic Rig • 18 Locomotion Anims",
                       "blurb":  "Complex kinematic rig with 18 locomotion animations, ready for mocap retargeting.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuA_RJ6wTzznXzoTiRQiotZE442kx8s4XmwF_NSMw5w9Y_psW2MaxezcCKq9NIcYjVFuI-I85mP4MWLD5M-lPvr4tEmpuSgYp_XAKR6qD_-arp1Lf7l5dOj6qOjzoNU8jrsTXF3f9Rfk00mySK1YV64nis97NOoQs1HVPs9V2NvVDwY3Huf1PcgZZQ2QA4CwdocArZoFY6iunb_vTm8OLS845lQ_-SAwaXvGQsIRzSVC0bR5GsfH99k_",
                       "date":  "2025-03-18",
                       "featured":  true,
                       "links":  [
                                     {
                                         "platform":  "cgtrader",
                                         "url":  "https://www.cgtrader.com/"
                                     },
                                     {
                                         "platform":  "sketchfab",
                                         "url":  "https://sketchfab.com/"
                                     }
                                 ]
                   },
                   {
                       "id":  "surveillance-drone-scout",
                       "title":  "Surveillance Drone Scout",
                       "cat":  "mechs",
                       "catLabel":  "Mechs \u0026 Robots / Drone",
                       "chips":  [
                                     ".FBX",
                                     "UE5"
                                 ],
                       "engines":  [
                                       "ue5",
                                       "unity"
                                   ],
                       "tris":  "36k Tris",
                       "extra":  "Rigged",
                       "sub":  "Rotatable Optics • Modular Thrusters • 4K PBR",
                       "blurb":  "Compact sci-fi aerial drone with rotatable optics and modular thrusters.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuBqZzjt2hL9p3VlLTIel9e3yFfOs7A90dZNdCDn8kaI19kZ6QWZ_uOdRx1ON7j3f9hwKSD3UUJlpj7H0GurGR30XS_kYISDGZ2hRAnN3HGA67Ent420dWT1HtsdJZpIfCJPPkx-xeF4fUCxxvp472Du3c_UVMsLomHJT0D2ySOYmVr1LXKaJoNxsk1DUH3KpHYVtD3VJijqFeNiSLfJOQQZ_1LaOOfEfNryxyypC_9YBmQpg0Cr-7d3",
                       "date":  "2025-02-26",
                       "featured":  true,
                       "links":  [
                                     {
                                         "platform":  "cgtrader",
                                         "url":  "https://www.cgtrader.com/"
                                     },
                                     {
                                         "platform":  "gumroad",
                                         "url":  "https://gumroad.com/"
                                     }
                                 ]
                   },
                   {
                       "id":  "heavy-industrial-walker",
                       "title":  "Heavy Industrial Walker Rigged",
                       "cat":  "mechs",
                       "catLabel":  "Mechs \u0026 Robots / Walker",
                       "chips":  [
                                     ".FBX",
                                     ".BLEND",
                                     "NANITE"
                                 ],
                       "engines":  [
                                       "ue5",
                                       "blender"
                                   ],
                       "tris":  "120k Tris",
                       "extra":  "Nanite Ready",
                       "sub":  "Quad-Leg Hydraulics • Cockpit Interior • IK Rig",
                       "blurb":  "Quadruped cargo carrier with hydraulic cranes and an IK control rig for Blender 4.2+.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuDcGZcgqmwNegfq7EF9MM9M7yn84OVZsppL52BVhcBknUSwIBOCgQUsuPbPnBXUNH8gfnqxW7DEHOSkfwFtIJqQqqaXw1b5jUyjGuFxK2VS9GeTT98FiX4_VittJfLob_Y2Rjk8eHjd2CDPEi_bHncyuHjNDDyl1qWKzGxBTftQs0no4ymNocrARp3euve4LW3lLHXbu0g91RwN23FgF21KVx64VUbwDux8cRIMX-PsDbKjQqD7pgVJ",
                       "date":  "2025-01-30",
                       "featured":  false,
                       "links":  [
                                     {
                                         "platform":  "cgtrader",
                                         "url":  "https://www.cgtrader.com/"
                                     },
                                     {
                                         "platform":  "sketchfab",
                                         "url":  "https://sketchfab.com/"
                                     }
                                 ]
                   },
                   {
                       "id":  "combat-drone-x1",
                       "title":  "Combat Drone Scout X-1",
                       "cat":  "mechs",
                       "catLabel":  "Mechs \u0026 Robots / Drone",
                       "chips":  [
                                     ".FBX",
                                     ".BLEND"
                                 ],
                       "engines":  [
                                       "blender",
                                       "unity",
                                       "ue5"
                                   ],
                       "tris":  "26k Tris",
                       "extra":  "Stealth Plating",
                       "sub":  "Quad-Rotor UAV • Anti-Radar Carbon Plating",
                       "blurb":  "Stealth quad-rotor UAV with anti-radar carbon plating.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuDB1kbI2B5Li5GqsSwHtJzaKmKw8drkHEilkGQP0CklAZdOtCN8S9_D2o1ahBdEKk5DLlACb90OUs0O_0ahhHjt99KLVzblpELEMHI4_8fLCM8AFYHue_YMeGpEhLTgi7q5dpbMfhIp3gqsh2sZWpl3EiJlmdTBNeC0GGY7UMSzf-7wvFJ6rmWfwruzxyWb3VEPCzZEDPYZNHRrAkM43_Qb81kNpUSzFWW0lLik39vdjQ5ulgWg4SCY",
                       "date":  "2025-04-21",
                       "featured":  false,
                       "links":  [
                                     {
                                         "platform":  "cgtrader",
                                         "url":  "https://www.cgtrader.com/"
                                     }
                                 ]
                   },
                   {
                       "id":  "recon-walker-09",
                       "title":  "Recon Walker 09",
                       "cat":  "mechs",
                       "catLabel":  "Mechs \u0026 Robots / Walker",
                       "chips":  [
                                     ".FBX",
                                     ".BLEND",
                                     ".OBJ"
                                 ],
                       "engines":  [
                                       "ue5",
                                       "blender",
                                       "unity"
                                   ],
                       "tris":  "58k Tris",
                       "extra":  "Clay Pass Incl.",
                       "sub":  "Bipedal Scout • Clay \u0026 Wireframe Renders Included",
                       "blurb":  "Bipedal military scout mech, delivered with clay and wireframe render passes.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuAHawKhK1CrBGOUudhMF-gQ_0gWCJ4TISykR72Exobq1hzuq5s7eMn0WDrv2Zrc8pHnM38Z1IKipzcE26qWLyZV4A21IQw8_gaj9tLIg7JC-yo88os-B0EP562tUgUNNn7d9kLqu3_k-H-ea96PJc4x5pcfUD1qPciRWv9PpEjhhITCaCfD1Z90xxF-V0z_3t8IWoKcOj3CWtdR6GBQwSYjM4MxpqC213oghHp7S3Yg-xrFmVlSv1Kb",
                       "date":  "2025-05-03",
                       "featured":  false,
                       "links":  [
                                     {
                                         "platform":  "cgtrader",
                                         "url":  "https://www.cgtrader.com/"
                                     },
                                     {
                                         "platform":  "sketchfab",
                                         "url":  "https://sketchfab.com/"
                                     },
                                     {
                                         "platform":  "gumroad",
                                         "url":  "https://gumroad.com/"
                                     }
                                 ]
                   },
                   {
                       "id":  "plasma-rifle-system",
                       "title":  "Futuristic Plasma Rifle System",
                       "cat":  "weapons",
                       "catLabel":  "Weapons \u0026 Sci-Fi / Rifle",
                       "chips":  [
                                     ".STL",
                                     ".FBX",
                                     ".OBJ"
                                 ],
                       "engines":  [
                                       "print",
                                       "unity",
                                       "blender",
                                       "ue5"
                                   ],
                       "tris":  "21k Tris",
                       "extra":  "3D Print \u0026 Game",
                       "sub":  "Printable STL Cosplay Shell • Animated Core • 4K PBR",
                       "blurb":  "Printable cosplay shell with an animated plasma core and 4K PBR textures.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuDuxtu-eoLL3hyjWfFgA1-iNo5juPLe0HYCypI2Z4RjRbLVAN-pubhLp_x-RjhMw6qVDTgCLCMnO9K8KdtlxBMMBZR6L_2PZndxC7Buw8xgpe-so7q_KG1zjm271F8e5fpPoF--qPACJmhyj2N-rspM_UB-8nfUX7FMpj7DbRDzakg8wHa656Ml1Kx8eWa8NDqp6JLSK5tQjqxbRFaIJQCrNAyKp47H6-pgF_L-EeYOclux5fPaBWJE",
                       "date":  "2025-05-08",
                       "featured":  false,
                       "free":  true,
                       "links":  [
                                     {
                                         "platform":  "printables",
                                         "url":  "https://www.printables.com/"
                                     },
                                     {
                                         "platform":  "cults3d",
                                         "url":  "https://cults3d.com/"
                                     }
                                 ]
                   },
                   {
                       "id":  "pulse-carbine",
                       "title":  "Pulse Carbine Rifle",
                       "cat":  "weapons",
                       "catLabel":  "Weapons \u0026 Sci-Fi / Rifle",
                       "chips":  [
                                     ".FBX",
                                     ".BLEND",
                                     "UE5"
                                 ],
                       "engines":  [
                                       "ue5",
                                       "blender"
                                   ],
                       "tris":  "18k Tris",
                       "extra":  "Baked Maps",
                       "sub":  "High-to-Low Bakes • Marmoset Scene • Substance Source",
                       "blurb":  "Game-ready carbine with high-to-low bakes and a Marmoset Toolbag scene.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuD70Pbrz9eX6CJ-abHp-GFzR-St6yD-371GsKhQH9L2YyORwCcEp_ejhRLbBwj6wKrZG453I4OctoDY_26OuJ9XzGJPYBwgkyRuVmpdJpbpozDyYTXEhGdLrMpCC_VQ9qjPDC6ivZdLFHzsopcsUogC5hOwzJH02HlsKmNy-oZradDCKf8Vw0vYPZErZ_9Cdch0b9IfPvLVpnwyN4bEcgWq2vYQj0zRY2BBe-77ki-uCCrZc0ajbR3Z",
                       "date":  "2025-04-15",
                       "featured":  false,
                       "links":  [
                                     {
                                         "platform":  "cgtrader",
                                         "url":  "https://www.cgtrader.com/"
                                     },
                                     {
                                         "platform":  "sketchfab",
                                         "url":  "https://sketchfab.com/"
                                     }
                                 ]
                   },
                   {
                       "id":  "arc-railgun",
                       "title":  "Arc Railgun Prototype",
                       "cat":  "weapons",
                       "catLabel":  "Weapons \u0026 Sci-Fi / Heavy",
                       "chips":  [
                                     ".FBX",
                                     ".OBJ",
                                     ".BLEND"
                                 ],
                       "engines":  [
                                       "ue5",
                                       "blender",
                                       "unity"
                                   ],
                       "tris":  "34k Tris",
                       "extra":  "Animated Coils",
                       "sub":  "Capacitor Coil Animations • Emissive Masks",
                       "blurb":  "Heavy railgun prototype with animated capacitor coils and emissive masks.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuAORgCVE-req2wA7xokWDuxaU-8s2_OfMU5-8Pt4g0ZXrwknZBprcFYIt4iZ3d-9gTFQaVLYb8pMovQU6s7qpj6Yh13-HbEAYbD3-aQnTBQRjDvPON-tMyigKxjcSKW4Rk3EZXgL5Jdn5ubmCTzp6km9_wD5GA9ayNvKwHpA1XnVFj5nPRwc222BW0dkRu2zS1mLmz25W4_X9CSMldKvLYCQXgS_JY0e0Xd1-ylbtUYzAeRtSH6VxqB",
                       "date":  "2025-03-07",
                       "featured":  false,
                       "links":  [
                                     {
                                         "platform":  "cgtrader",
                                         "url":  "https://www.cgtrader.com/"
                                     },
                                     {
                                         "platform":  "gumroad",
                                         "url":  "https://gumroad.com/"
                                     }
                                 ]
                   },
                   {
                       "id":  "turret-cannon",
                       "title":  "Cybernetic Drone Turret Cannon",
                       "cat":  "weapons",
                       "catLabel":  "Weapons \u0026 Sci-Fi / Turret",
                       "chips":  [
                                     ".FBX",
                                     ".BLEND",
                                     "UE5"
                                 ],
                       "engines":  [
                                       "ue5",
                                       "blender"
                                   ],
                       "tris":  "29k Tris",
                       "extra":  "Rigged",
                       "sub":  "Rotating Barrels • Recoil Rig • 4K Textures",
                       "blurb":  "Drone-mounted turret cannon with rotating barrels and a recoil rig.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuDEq91q10k0rtpVEqTRlAmlqPbQ39nHPxBSV2IpxGpK0CFzAqFFnIU0ltwMHdC6_toKPY4gbYMv2J7T0NKgQAqQXp8Xon1HODuU4FIFj_yKb_0p-cZMYohZkFavEEmbAUfhcSJmWqrY6a35sKd_NyItw-cmhP4Tuzn3BBVe7zvZadSxpDf_y0Nz3eQuYLv1Y_zIU6ITNydNuSbqIt_s7sXBA-20slkUoU8z3OM03mOzACDqVIUSS23A",
                       "date":  "2025-02-11",
                       "featured":  false,
                       "links":  [
                                     {
                                         "platform":  "cgtrader",
                                         "url":  "https://www.cgtrader.com/"
                                     },
                                     {
                                         "platform":  "sketchfab",
                                         "url":  "https://sketchfab.com/"
                                     }
                                 ]
                   },
                   {
                       "id":  "hardpoint-kitbash",
                       "title":  "Hardpoint Weapon Kitbash Pack",
                       "cat":  "weapons",
                       "catLabel":  "Weapons \u0026 Sci-Fi / Kitbash",
                       "chips":  [
                                     ".FBX",
                                     ".OBJ",
                                     ".STL"
                                 ],
                       "engines":  [
                                       "print",
                                       "blender",
                                       "unity",
                                       "ue5"
                                   ],
                       "tris":  "40 Parts",
                       "extra":  "Grid Snapped",
                       "sub":  "40 Modular Parts • Pistons • Bolts • Chassis Plates",
                       "blurb":  "Forty modular hardpoint parts for fast hard-surface kitbashing.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuDDF5D8Br7tTA4gAZIcbJihxnnjsiFH0GTPg1SxJLfuZAlOYQYCx2HBA8ipAPE7AROKRwfdYphwd6KJl9Idxj7vUw-JIRblhOQAYK5GuP958y90pk0_XX-IXTpGgZsYeCTOoAhBSxRY1Z9CdviexVLdTccfE00QFDoTN-9I7yEy8pXwR7vbPMPJvp9i6WMVFE2nYRwaNwvAvrxx2skqvrdThYD8J9zGKKJeIbp25RSgdPyDF5Jfb_aF",
                       "date":  "2025-01-12",
                       "featured":  false,
                       "links":  [
                                     {
                                         "platform":  "printables",
                                         "url":  "https://www.printables.com/"
                                     },
                                     {
                                         "platform":  "cults3d",
                                         "url":  "https://cults3d.com/"
                                     },
                                     {
                                         "platform":  "cgtrader",
                                         "url":  "https://www.cgtrader.com/"
                                     }
                                 ]
                   },
                   {
                       "id":  "cyber-arm-prosthetic",
                       "title":  "Tactical Cyber-Arm Prosthetic",
                       "cat":  "characters",
                       "catLabel":  "Characters \u0026 Armor / Prosthetic",
                       "chips":  [
                                     ".STL",
                                     ".FBX",
                                     ".OBJ"
                                 ],
                       "engines":  [
                                       "print",
                                       "blender",
                                       "unity",
                                       "ue5"
                                   ],
                       "tris":  "34k Tris",
                       "extra":  "3D Print \u0026 Rigged",
                       "sub":  "Watertight STL Shell • Full Arm IK • 4K Textures",
                       "blurb":  "Watertight STL shell with a full arm IK rig and 4K textures.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuCxCgOcuU-lwed74sLU5ziR9-4ryzsRH2TVDSR856cShHkOfZOUyK1lZQa2R2_QeLmt6ivEnhAmzAcSt6aBsX1CzRwk2g0sywvvbZUe7-qbm0Prgpqd7KPR5m0E0ZbIq7vJVKGdpGjDG88Tfdv3_b7-tC-DzomvHXKKI81Sv6MiMnurQA0gIlRdsgWbdeY4IbVZvafChBBThBmPi91R4idavnmM2-eFNLoRo3pWUOPfO2Tm_b8p0ZRw",
                       "date":  "2025-04-27",
                       "featured":  false,
                       "links":  [
                                     {
                                         "platform":  "printables",
                                         "url":  "https://www.printables.com/"
                                     },
                                     {
                                         "platform":  "cults3d",
                                         "url":  "https://cults3d.com/"
                                     },
                                     {
                                         "platform":  "cgtrader",
                                         "url":  "https://www.cgtrader.com/"
                                     },
                                     {
                                         "platform":  "sketchfab",
                                         "url":  "https://sketchfab.com/"
                                     },
                                     {
                                         "platform":  "gumroad",
                                         "url":  "https://gumroad.com/"
                                     }
                                 ]
                   },
                   {
                       "id":  "tactical-exosuit-helmet",
                       "title":  "Tactical Exosuit Helmet MK-IV",
                       "cat":  "characters",
                       "catLabel":  "Characters \u0026 Armor / Helmet",
                       "chips":  [
                                     ".FBX",
                                     ".BLEND"
                                 ],
                       "engines":  [
                                       "ue5",
                                       "blender"
                                   ],
                       "tris":  "12.4k Tris",
                       "extra":  "Visor Rig",
                       "sub":  "Custom Visor HUD Shader • 3 Camouflages",
                       "blurb":  "Complete with custom visor HUD shader mask and 3 camouflages.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuANzKczlZ8pu0gTZ3bFmwCwLa5shthh6Wc9BlUwjmYcsVteoHLhGbNLUUeiH8u-CvmRHkfcP13Gtk1cCJ2IDetUsHdCA6mKgI-jEBrX75xVsssdK5guQg_Wh_tBfTqsP2yUytvtBC8UEf1rcpPl4t8dhRNCVau3u9oaNSoYWI9LaqUT07WtMJu6hJsnFLVo3jKrqo82rSQQiRgM0-9AgilSCQVmJ19rQFzhGS2y6SBFNlVkCN2PJjRG",
                       "date":  "2025-05-01",
                       "featured":  true,
                       "links":  [
                                     {
                                         "platform":  "cgtrader",
                                         "url":  "https://www.cgtrader.com/"
                                     }
                                 ]
                   },
                   {
                       "id":  "armature-prosthetic",
                       "title":  "Cybernetic Armature Prosthetic",
                       "cat":  "characters",
                       "catLabel":  "Characters \u0026 Armor / Prosthetic",
                       "chips":  [
                                     ".FBX",
                                     ".BLEND",
                                     ".OBJ"
                                 ],
                       "engines":  [
                                       "blender",
                                       "ue5"
                                   ],
                       "tris":  "31.5k Tris",
                       "extra":  "Fully Rigged",
                       "sub":  "Fully Rigged Cyberarm • Carbon-Fiber Plating",
                       "blurb":  "Fully rigged cyberarm with carbon-fiber plating.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuDSKJZzFHvUuNHt646BoCPJUKS25HYjT-8miSU2rTx4DCBrJT-Oua7UA4NNpf7ppPJuO2dG9N2qu6PFVuv8vRVgNG4uLzlYn84-TmDk99zTyidLOxHVh4J7DmnclR5OGx39jqdadA0RFzKxP8a1oriWIoyRWGx9pQyILKKDnFmi2eETb_pprsoS9SpQdJvTuhH9GQQXAYd_5yf8c4bzmf5vfuBn3Ke1Wc_-EgIBvvNFcRlGYCFGJIXR",
                       "date":  "2025-03-24",
                       "featured":  false,
                       "links":  [
                                     {
                                         "platform":  "cgtrader",
                                         "url":  "https://www.cgtrader.com/"
                                     },
                                     {
                                         "platform":  "sketchfab",
                                         "url":  "https://sketchfab.com/"
                                     }
                                 ]
                   },
                   {
                       "id":  "pilot-helm-v04",
                       "title":  "Tactical Pilot Helm Variant-04",
                       "cat":  "characters",
                       "catLabel":  "Characters \u0026 Armor / Helmet",
                       "chips":  [
                                     ".FBX",
                                     ".OBJ",
                                     "UE5"
                                 ],
                       "engines":  [
                                       "ue5",
                                       "unity"
                                   ],
                       "tris":  "15k Tris",
                       "extra":  "Interior Detail",
                       "sub":  "Combat Pilot Helm • Interior Padding • 4K PBR",
                       "blurb":  "Combat pilot helm with interior padding detail and 4K PBR textures.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuB4GosiaCz_CALN2_gW2zfUXQbTVJW05YadvlhZSJ8J5tPuaaJ_Yu-qHVBq_YlSRRC559sXxZ7Az3x22G_aN5SEo466S0sb9yszJZlARWAuxHkm8MwlkS_qhnXH8OR-iF7mntglK9_lLUT4B34cFTdYt8wT4eo0hAym9FPvZ6CNPUJ_5Q3ZsroCdW05n9FXm44c0yjvpR9LILdRmjcg6T_iHiBGGvgt-p0ngqQ-Hi-YIjGQ87w_DJAH",
                       "date":  "2025-02-19",
                       "featured":  false,
                       "links":  [
                                     {
                                         "platform":  "cgtrader",
                                         "url":  "https://www.cgtrader.com/"
                                     },
                                     {
                                         "platform":  "gumroad",
                                         "url":  "https://gumroad.com/"
                                     }
                                 ]
                   },
                   {
                       "id":  "orbital-dropship",
                       "title":  "Orbital Cargo Transport Dropship",
                       "cat":  "vehicles",
                       "catLabel":  "Vehicles / Dropship",
                       "chips":  [
                                     ".FBX",
                                     ".BLEND",
                                     "UE5"
                                 ],
                       "engines":  [
                                       "ue5",
                                       "blender",
                                       "unity"
                                   ],
                       "tris":  "78k Tris",
                       "extra":  "LOD 0-3",
                       "sub":  "Sub-D • Rigged Interiors • 4K UDIM PBR Textures",
                       "blurb":  "Sub-D dropship with rigged interiors and a 4K UDIM PBR set.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuBrjV8NIq82YyK-yJSODgYAlsxzMwXGj7NzYIikVfos_Shvozzaqy0HhFkhH3hx0U528wGHwtiQZ6WHDaFHkFjqtceMZP0COuzWM-ZL8WU__GEUZMLUGGY6LRHINWYyotBcVQ48uscB-xsQzUSCaVHbPMawCwjOlBNDVTI8a_ew_iqe3w9cvoa0zFpQ6Z6nqGuDJ4BPr9iPGOw6wl12XN4egGNKT78K3WjdeNQlmZq1KgsxBLpmZeF_",
                       "date":  "2025-05-10",
                       "featured":  true,
                       "links":  [
                                     {
                                         "platform":  "cgtrader",
                                         "url":  "https://www.cgtrader.com/"
                                     },
                                     {
                                         "platform":  "fab",
                                         "url":  "https://www.fab.com/"
                                     },
                                     {
                                         "platform":  "sketchfab",
                                         "url":  "https://sketchfab.com/"
                                     }
                                 ]
                   },
                   {
                       "id":  "heavy-hauler-cx89",
                       "title":  "Orbital Heavy Hauler CX-89",
                       "cat":  "vehicles",
                       "catLabel":  "Vehicles / Freighter",
                       "chips":  [
                                     ".FBX",
                                     ".BLEND",
                                     ".OBJ"
                                 ],
                       "engines":  [
                                       "ue5",
                                       "blender"
                                   ],
                       "tris":  "96k Tris",
                       "extra":  "Modular Hull",
                       "sub":  "Modular Hull Segments • Cargo Bay Interior",
                       "blurb":  "Deep-space heavy cargo freighter with modular hull segments.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuDRyoSuQObZYEbr_nzb4yUlnTaMEibuI5J6zP6IhcbPun4oJRLQ_lCbGDGWq-XaRcoO4gasAxABpjSeJVdXNsTA1q-S8pqyX383F_OAW3lMx9qhBul0dycChdN72vu-X94cRIyT9M2wn6HPK3jXfFGWyaLf6EX8YiMFKym7BFjUpir1NxB-lqKdsYGRc3zbfgHgNXNBLQ4pDgLFoZ2xVQ4Bi9L3iNOtCFS4PfwJt6iZgFpCwboipNG-",
                       "date":  "2025-03-29",
                       "featured":  false,
                       "links":  [
                                     {
                                         "platform":  "cgtrader",
                                         "url":  "https://www.cgtrader.com/"
                                     },
                                     {
                                         "platform":  "fab",
                                         "url":  "https://www.fab.com/"
                                     }
                                 ]
                   },
                   {
                       "id":  "strata-scout-lander",
                       "title":  "Strata Scout High-G Lander",
                       "cat":  "vehicles",
                       "catLabel":  "Vehicles / Lander",
                       "chips":  [
                                     ".FBX",
                                     ".BLEND"
                                 ],
                       "engines":  [
                                       "ue5",
                                       "blender",
                                       "unity"
                                   ],
                       "tris":  "47k Tris",
                       "extra":  "Landing Rig",
                       "sub":  "Landing Gear Rig • Weathered Hull Variants",
                       "blurb":  "Rugged exploration lander with a landing gear rig and weathered hull variants.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuB9pPqSn1gf50Mqlm46nzBtIlQ43vBF16ZbUG1KTqhTSCpL8AjFjh6P0maXCm8kdDjLyqbtso-QzLqtnw-wDekF9xkzKT3uNcqQeKnbs4a-O1IJRY2talOJuMDUvXhKQy9yn9auqMj1hw3aHWQ9tWXCxez6fq_PzS5xOTtAL-jtN56Op9ALEp0ZYgs1Juv8IausM3lHYjKyrXbZRu9KBDgvE0cldTZZyJO8qzeF7_hnCTHNFi2KgtoU",
                       "date":  "2025-01-22",
                       "featured":  false,
                       "links":  [
                                     {
                                         "platform":  "cgtrader",
                                         "url":  "https://www.cgtrader.com/"
                                     },
                                     {
                                         "platform":  "fab",
                                         "url":  "https://www.fab.com/"
                                     },
                                     {
                                         "platform":  "sketchfab",
                                         "url":  "https://sketchfab.com/"
                                     },
                                     {
                                         "platform":  "gumroad",
                                         "url":  "https://gumroad.com/"
                                     }
                                 ]
                   },
                   {
                       "id":  "modular-corridor-kit",
                       "title":  "Modular Corridor Construction Kit",
                       "cat":  "environments",
                       "catLabel":  "Modular Environments",
                       "chips":  [
                                     ".FBX",
                                     ".BLEND",
                                     "UE5"
                                 ],
                       "engines":  [
                                       "ue5",
                                       "blender",
                                       "unity"
                                   ],
                       "tris":  "42 Pieces",
                       "extra":  "Grid Snapped",
                       "sub":  "Master Materials • Vertex Paintable • 4K Trim",
                       "blurb":  "Forty-two grid-snapped pieces with master materials and vertex paint masks.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuB9FZsFTsMHTa7lSjYspwfWqE6LxR1frTjMuz9MpyKhYgf6HAv9Hhhqf3_pAqy3fdUT7VeYp7EApFAseA6AulZ0sa4yPq-HpLbPgL4lzptnIhMze2zy2jwby02dKJMdYtgnQBcsvvfwKqxBojUJZux_kmvPWKwcH8q_Uvcl8o6UjS5CoVQJzNR0Snducgke_6157WT254WB02u_szkUx0vGpn__f62a7oOVxQoHeuSrNgbX91OHfPFM",
                       "date":  "2025-04-09",
                       "featured":  true,
                       "links":  [
                                     {
                                         "platform":  "cgtrader",
                                         "url":  "https://www.cgtrader.com/"
                                     },
                                     {
                                         "platform":  "fab",
                                         "url":  "https://www.fab.com/"
                                     }
                                 ]
                   },
                   {
                       "id":  "quantum-vault-interior",
                       "title":  "Quantum Server Vault Interior",
                       "cat":  "environments",
                       "catLabel":  "Modular Environments",
                       "chips":  [
                                     ".FBX",
                                     "NANITE",
                                     "UE5"
                                 ],
                       "engines":  [
                                       "ue5"
                                   ],
                       "tris":  "38 Modules",
                       "extra":  "Nanite",
                       "sub":  "Nanite Modules • Emissive Server Racks • Lumen Ready",
                       "blurb":  "Subterranean computing vault built from Nanite modules with emissive racks.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuBkdShgRIKaQDS5lp69QCFXrnPuTYDvuFN4SkhWL-6XlCxi0tpE8psW1SxhfwajetnPP5P6QE57kT2fDRq-jT8JlgGTw5uCvLsqUr0NJ3WeOLtGGt8tTgVgZooASV3qTwfa-loSajtKCb49eLptGkUMKRW6KJxp-OgrOLyLGfTpD0vIKWIDm2Tdlm4wM4qJh_n18ZRqduYvTm0Gzn7iDHMZTedTnOdPDZ6nHp75KU99b5iMrHFE7d7C",
                       "date":  "2025-02-05",
                       "featured":  false,
                       "links":  [
                                     {
                                         "platform":  "cgtrader",
                                         "url":  "https://www.cgtrader.com/"
                                     },
                                     {
                                         "platform":  "fab",
                                         "url":  "https://www.fab.com/"
                                     },
                                     {
                                         "platform":  "sketchfab",
                                         "url":  "https://sketchfab.com/"
                                     }
                                 ]
                   },
                   {
                       "id":  "brutalist-hangar",
                       "title":  "Brutalist Military Hangar Set",
                       "cat":  "environments",
                       "catLabel":  "Modular Environments",
                       "chips":  [
                                     ".FBX",
                                     ".BLEND",
                                     "UE5"
                                 ],
                       "engines":  [
                                       "ue5",
                                       "blender"
                                   ],
                       "tris":  "27 Pieces",
                       "extra":  "Kit-Bash Ready",
                       "sub":  "Concrete Trim Sheets • Gantry Props • Volumetric Ready",
                       "blurb":  "Brutalist sci-fi hangar kit with concrete trim sheets and gantry props.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuCjZhlSQHsKmRgR52BLSTULXPsJAav1J8TEYxfAn6lmbNGCyV7bWxEIEMmMZqAvgi3HXTK_1X1lhwVXwIl8kbrA9BHSI3i5o2r9-ouHJfS48Rrzexuod1e4ZhIsPVKbj5yFLAI3SJYw3_fq0dtzB86qIrVOxKe675u-g4-h8isS2EHXWuxhNW8yOXxUR44ZunCI1_ndGLFnwfoQKSozNe9sheS3HPn9LWpgYSuZX3QzaF6Wn29L53XN",
                       "date":  "2025-01-05",
                       "featured":  false,
                       "links":  [
                                     {
                                         "platform":  "cgtrader",
                                         "url":  "https://www.cgtrader.com/"
                                     },
                                     {
                                         "platform":  "fab",
                                         "url":  "https://www.fab.com/"
                                     },
                                     {
                                         "platform":  "gumroad",
                                         "url":  "https://gumroad.com/"
                                     }
                                 ]
                   },
                   {
                       "id":  "industrial-generator-pack",
                       "title":  "Industrial Generator Pack",
                       "cat":  "props",
                       "catLabel":  "Props / Industrial",
                       "chips":  [
                                     ".FBX",
                                     "NANITE"
                                 ],
                       "engines":  [
                                       "ue5",
                                       "unity"
                                   ],
                       "tris":  "18 Modules",
                       "extra":  "Nanite",
                       "sub":  "18 Snap-Together Pieces • Vertex Paint Dirt Masks",
                       "blurb":  "18 snap-together heavy cyber-industrial pieces with vertex paint dirt masks.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuA2ZZYETmVw9FKyr0QrA2QFcdKqMlbQQ3g7e9aYzjNx95wkWrWKGLl0GQI6EyHCPr3u5_4HMhtf33DmG_mFjZr6M-JDe5_Kb_6OcfcwCbzIwDXZxQCnIOdGDpvMWBs-_d34nfIfg0JanXwHtyov2lHhPxasyG6skDtEFcL95lEeJahoNrc45oRXlH6--kqlnE-Hg-EnvBzq0UNyRDmT7v_ahZ754AQE6SJNzgOSB3UmXRizojAwvX-Z",
                       "date":  "2025-05-06",
                       "featured":  true,
                       "links":  [
                                     {
                                         "platform":  "cgtrader",
                                         "url":  "https://www.cgtrader.com/"
                                     },
                                     {
                                         "platform":  "fab",
                                         "url":  "https://www.fab.com/"
                                     },
                                     {
                                         "platform":  "sketchfab",
                                         "url":  "https://sketchfab.com/"
                                     }
                                 ]
                   },
                   {
                       "id":  "tokamak-fusion-core",
                       "title":  "Tokamak Fusion Core Reactor",
                       "cat":  "props",
                       "catLabel":  "Props / Industrial",
                       "chips":  [
                                     ".FBX",
                                     ".BLEND",
                                     ".OBJ"
                                 ],
                       "engines":  [
                                       "ue5",
                                       "blender",
                                       "unity"
                                   ],
                       "tris":  "64k Tris",
                       "extra":  "Animated Plasma",
                       "sub":  "Toroidal Reactor • Animated Plasma Ring • 4K PBR",
                       "blurb":  "Toroidal fusion reactor core with an animated plasma ring.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuAiDJ0li14Onz67p8gXvLiA6p91vlu-3x7mxG-7Ct2pHhpBrZUwDwjRtXBv56Fq5EV0kisBKC25EcORo6rCP1WOpiKoI2U4ZUlyCZmlJKMpyGQFQjnKbpnP33jQu9tVFEpWHUc_T2aNfP3-GRfE8fmJzCZQfDldLjp7o3YANsIyM5YRvz9Tpdu8BzIA0fyO930scy0Bc89YvZhtOo9Ga-m5ClfJZitz1s-kOiaj6Hgv--wdq5DmsQKf",
                       "date":  "2025-02-28",
                       "featured":  false,
                       "links":  [
                                     {
                                         "platform":  "cgtrader",
                                         "url":  "https://www.cgtrader.com/"
                                     },
                                     {
                                         "platform":  "fab",
                                         "url":  "https://www.fab.com/"
                                     }
                                 ]
                   },
                   {
                       "id":  "holo-hud-shader-vol2",
                       "title":  "Holographic HUD Shader Vol. 2",
                       "cat":  "shaders",
                       "catLabel":  "Shader Pack / HLSL",
                       "chips":  [
                                     "HLSL",
                                     "UE5",
                                     "UNITY"
                                 ],
                       "engines":  [
                                       "ue5",
                                       "unity"
                                   ],
                       "tris":  "24 Materials",
                       "extra":  "HLSL • UE5 + Unity",
                       "sub":  "Glitch • Depth Parallax • Biometric Telemetry",
                       "blurb":  "Real-time glitch, depth parallax and responsive biometric telemetry.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuAsDljwSxG992bstfAgpL8XYEQ5k3gJhfVXzWN5qKuN_0d83YpJLbdWmOPwUUy3_pXNNHdb_p-_NR5shiyOfg1V7mZEsYq1PqId0KhTey8GYejIms7GbseyVW4dJf3XgLD_DN5YpUobcTS1hq6VPpoUH3bk7ZRrErGCfIW2T-Q9zjg9EhziJDOFOuJbpiMs3DCR6QJzfBvUTMeqp3_YzIvkImqPgczSrMYTWsxQAovv_qsZMx0IBthr",
                       "date":  "2025-05-05",
                       "featured":  false,
                       "hidden":  true,
                       "links":  [
                                     {
                                         "platform":  "cgtrader",
                                         "url":  "https://www.cgtrader.com/"
                                     },
                                     {
                                         "platform":  "fab",
                                         "url":  "https://www.fab.com/"
                                     },
                                     {
                                         "platform":  "sketchfab",
                                         "url":  "https://sketchfab.com/"
                                     },
                                     {
                                         "platform":  "gumroad",
                                         "url":  "https://gumroad.com/"
                                     }
                                 ]
                   },
                   {
                       "id":  "hologram-shader-pack-vol2",
                       "title":  "Procedural Sci-Fi Hologram Shader Pack Vol. 2",
                       "cat":  "shaders",
                       "catLabel":  "Shader Pack / Substrate",
                       "chips":  [
                                     "HLSL",
                                     "UE 5.3-5.4 Substrate"
                                 ],
                       "engines":  [
                                       "ue5"
                                   ],
                       "tris":  "24 Materials",
                       "extra":  "Substrate PBR",
                       "sub":  "Procedural Distortion • Flicker • Scanlines",
                       "blurb":  "Procedural holographic materials with dynamic distortion and flicker.",
                       "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuAy5y5V8BoT53zwjjB-6gCJO2AtXqGAjLjv4O25yVOgIgkxkwVPbcEnxMwURMIJtVrGggXuEZBmeJLtZmA_EHZs-OLeolJNoUwI7hP-ROcK-YwgvdiLsfzCbmOxLzAzZMmsxKQh6wKKFrJYs3Mr1HXaPCHGOZ_WDxSA43ewSTJrlri2wdkiZAvNsRnNeKriYUUex-iNWbsoOWDnDJK3gICB2Fe8CWUoe17XOQSJ5AyrjgqJUwf6mH8h",
                       "date":  "2025-04-18",
                       "featured":  false,
                       "hidden":  true,
                       "links":  [
                                     {
                                         "platform":  "cgtrader",
                                         "url":  "https://www.cgtrader.com/"
                                     },
                                     {
                                         "platform":  "fab",
                                         "url":  "https://www.fab.com/"
                                     }
                                 ]
                   }
               ],
    "works":  [
                  {
                      "id":  "apex-recon-mech-night-operations",
                      "title":  "Apex Recon Mech — Night Operations",
                      "cat":  "mechs",
                      "tag":  "MECH RIG",
                      "year":  2025,
                      "tris":  "248,500 Tris",
                      "stack":  "Unreal Engine 5.4 • Blender • Substance Painter • Nanite",
                      "desc":  "Fully articulated scouting chassis with optical camouflage array and telemetry pods. Rendered inside UE5 Lumen under simulated torrential night drizzle.",
                      "aspect":  "3/4",
                      "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuBite0tRaICEij2erPvwhcOuvBKCd2s5CrEypNWnMHQhZOKcIANpTKuqIqRuDU1Yx0FLUFr8fRCj84WgZYzvpvyAUWIejxRqiHjON3xuD1Oez4Cjj3hRMAZ5AbywO_2QbZH7aByzXmUh8f78FFShDs1jkliU_Usg8qzaEPhkOod3xwETefJIi2vmwm9944FM3EZcbZIBbniJycIDuc94eurzcmIXZJLsXHXeecKjeX70BWLI49mNnZR",
                      "model":  "apex-recon-mech-mk2",
                      "featured":  true
                  },
                  {
                      "id":  "orbital-heavy-hauler-cx-89",
                      "title":  "Orbital Heavy Hauler CX-89",
                      "cat":  "vehicles",
                      "tag":  "VEHICLE CONCEPT",
                      "year":  2024,
                      "tris":  "412,000 Tris",
                      "stack":  "ZBrush • 3ds Max • Unreal Engine 5.3 • ACES Color",
                      "desc":  "Industrial deep-space freight vessel with pressurized multi-module storage trusses and fusion thruster cooling conduits. Real-time cinematic lighting setup.",
                      "aspect":  "16/10",
                      "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuDRyoSuQObZYEbr_nzb4yUlnTaMEibuI5J6zP6IhcbPun4oJRLQ_lCbGDGWq-XaRcoO4gasAxABpjSeJVdXNsTA1q-S8pqyX383F_OAW3lMx9qhBul0dycChdN72vu-X94cRIyT9M2wn6HPK3jXfFGWyaLf6EX8YiMFKym7BFjUpir1NxB-lqKdsYGRc3zbfgHgNXNBLQ4pDgLFoZ2xVQ4Bi9L3iNOtCFS4PfwJt6iZgFpCwboipNG-",
                      "model":  "heavy-hauler-cx89",
                      "featured":  true
                  },
                  {
                      "id":  "cybernetic-armature-rig-type-iv",
                      "title":  "Cybernetic Armature Rig Type-IV",
                      "cat":  "mechs",
                      "tag":  "ANATOMY RIG",
                      "year":  2025,
                      "tris":  "86,400 Tris",
                      "stack":  "Blender • RizomUV • Substance Painter • Cycles X",
                      "desc":  "Precision surgical bionic armature engineered for high-dexterity zero-G maintenance. Showcasing carbon fiber sleeves, hydraulic micro-valves, and silicone synth-flesh damping.",
                      "aspect":  "square",
                      "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuDSKJZzFHvUuNHt646BoCPJUKS25HYjT-8miSU2rTx4DCBrJT-Oua7UA4NNpf7ppPJuO2dG9N2qu6PFVuv8vRVgNG4uLzlYn84-TmDk99zTyidLOxHVh4J7DmnclR5OGx39jqdadA0RFzKxP8a1oriWIoyRWGx9pQyILKKDnFmi2eETb_pprsoS9SpQdJvTuhH9GQQXAYd_5yf8c4bzmf5vfuBn3Ke1Wc_-EgIBvvNFcRlGYCFGJIXR",
                      "model":  "armature-prosthetic"
                  },
                  {
                      "id":  "substrate-hologram-research-vault",
                      "title":  "Substrate Hologram Research Vault",
                      "cat":  "environments",
                      "tag":  "ENVIRONMENT",
                      "year":  2024,
                      "tris":  "1,200,000 Tris",
                      "stack":  "Unreal Engine 5.4 • Custom HLSL Shaders • Houdini FX",
                      "desc":  "Subterranean volumetric research laboratory with volumetric laser projectors and optical quantum arrays. Lumen indirect bounce lighting study.",
                      "aspect":  "16/10",
                      "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuBkdShgRIKaQDS5lp69QCFXrnPuTYDvuFN4SkhWL-6XlCxi0tpE8psW1SxhfwajetnPP5P6QE57kT2fDRq-jT8JlgGTw5uCvLsqUr0NJ3WeOLtGGt8tTgVgZooASV3qTwfa-loSajtKCb49eLptGkUMKRW6KJxp-OgrOLyLGfTpD0vIKWIDm2Tdlm4wM4qJh_n18ZRqduYvTm0Gzn7iDHMZTedTnOdPDZ6nHp75KU99b5iMrHFE7d7C",
                      "featured":  true
                  },
                  {
                      "id":  "tactical-exosuit-helm-variant-04",
                      "title":  "Tactical Exosuit Helm Variant-04",
                      "cat":  "props",
                      "tag":  "HARD SURFACE",
                      "year":  2025,
                      "tris":  "52,300 Tris",
                      "stack":  "ZBrush • Marvelous Designer • Marmoset Toolbag 5",
                      "desc":  "Reinforced ballistic titanium helmet with integrated augmented reality heads-up display prism and dual rebreather intake canisters.",
                      "aspect":  "3/4",
                      "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuB4GosiaCz_CALN2_gW2zfUXQbTVJW05YadvlhZSJ8J5tPuaaJ_Yu-qHVBq_YlSRRC559sXxZ7Az3x22G_aN5SEo466S0sb9yszJZlARWAuxHkm8MwlkS_qhnXH8OR-iF7mntglK9_lLUT4B34cFTdYt8wT4eo0hAym9FPvZ6CNPUJ_5Q3ZsroCdW05n9FXm44c0yjvpR9LILdRmjcg6T_iHiBGGvgt-p0ngqQ-Hi-YIjGQ87w_DJAH",
                      "model":  "pilot-helm-v04",
                      "featured":  true
                  },
                  {
                      "id":  "monolith-drone-assembly-hangar",
                      "title":  "Monolith Drone Assembly Hangar",
                      "cat":  "environments",
                      "tag":  "ENVIRONMENT",
                      "year":  2024,
                      "tris":  "2,800,000 Tris",
                      "stack":  "Unreal Engine 5.3 • Megascans • Blender • Sub-D",
                      "desc":  "Cavernous brutalist aircraft manufacturing bay housing vertical launch autonomous interceptor drones suspended by overhead rail cranes.",
                      "aspect":  "3/4",
                      "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuCjZhlSQHsKmRgR52BLSTULXPsJAav1J8TEYxfAn6lmbNGCyV7bWxEIEMmMZqAvgi3HXTK_1X1lhwVXwIl8kbrA9BHSI3i5o2r9-ouHJfS48Rrzexuod1e4ZhIsPVKbj5yFLAI3SJYw3_fq0dtzB86qIrVOxKe675u-g4-h8isS2EHXWuxhNW8yOXxUR44ZunCI1_ndGLFnwfoQKSozNe9sheS3HPn9LWpgYSuZX3QzaF6Wn29L53XN"
                  },
                  {
                      "id":  "orbital-dropship-cockpit-module",
                      "title":  "Orbital Dropship Cockpit Module",
                      "cat":  "vehicles",
                      "tag":  "VEHICLE COCKPIT",
                      "year":  2025,
                      "tris":  "320,000 Tris",
                      "stack":  "Fusion 360 • Blender • Substance 3D • Octane Render",
                      "desc":  "Precision CAD hard-surface ergonomics with holographic flight stick controls, heads-up tactical navigation glass, and anti-g harness seats.",
                      "aspect":  "square",
                      "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuDEht1lCr1RWMT0PgJdVkpp4fRaUqoOWwAYYqw0GdV03MwPyGnXphYtnoiHZLzmIZ3nBvXRTYV02WRfgKdspnfXG5UFzjdCN4ace8h5TlUSEuzzPiWKnc5ipVDExwWNeB0BfZOu0gTEZnLF7aWnLfnDAMilbUlSPI1pv9FTkcgKwgD_gJ1pZvYRZ9sheXKYL_e1MiscQc029mSFrGQ4-49C-fRwA_NsPEITuhCxXZ3uP1eOHtLhF54Q",
                      "model":  "orbital-dropship"
                  },
                  {
                      "id":  "tokamak-magnetic-fusion-core",
                      "title":  "Tokamak Magnetic Fusion Core",
                      "cat":  "props",
                      "tag":  "HERO PROP",
                      "year":  2024,
                      "tris":  "164,000 Tris",
                      "stack":  "Maya • Substance Designer • Unreal Engine 5.4",
                      "desc":  "Superconducting toroidal magnetic coils wrapped in high-pressure cryo piping, finished with heavy industrial procedural hazard decals.",
                      "aspect":  "16/10",
                      "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuAiDJ0li14Onz67p8gXvLiA6p91vlu-3x7mxG-7Ct2pHhpBrZUwDwjRtXBv56Fq5EV0kisBKC25EcORo6rCP1WOpiKoI2U4ZUlyCZmlJKMpyGQFQjnKbpnP33jQu9tVFEpWHUc_T2aNfP3-GRfE8fmJzCZQfDldLjp7o3YANsIyM5YRvz9Tpdu8BzIA0fyO930scy0Bc89YvZhtOo9Ga-m5ClfJZitz1s-kOiaj6Hgv--wdq5DmsQKf",
                      "model":  "tokamak-fusion-core"
                  },
                  {
                      "id":  "recon-walker-09-topology-wireframe-pass",
                      "title":  "Recon Walker 09 — Topology \u0026 Wireframe Pass",
                      "cat":  "clay",
                      "tag":  "TOPOLOGY BREAKDOWN",
                      "year":  2025,
                      "tris":  "198,000 Tris",
                      "stack":  "Blender Modifiers • Marmoset Wireframe Pass • Quad Topology",
                      "desc":  "Clean edge-flow study showing quad-dominant sub-d surface modeling for kinematic deformation and cinematic close-up rendering.",
                      "aspect":  "3/4",
                      "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuAHawKhK1CrBGOUudhMF-gQ_0gWCJ4TISykR72Exobq1hzuq5s7eMn0WDrv2Zrc8pHnM38Z1IKipzcE26qWLyZV4A21IQw8_gaj9tLIg7JC-yo88os-B0EP562tUgUNNn7d9kLqu3_k-H-ea96PJc4x5pcfUD1qPciRWv9PpEjhhITCaCfD1Z90xxF-V0z_3t8IWoKcOj3CWtdR6GBQwSYjM4MxpqC213oghHp7S3Yg-xrFmVlSv1Kb",
                      "model":  "recon-walker-09"
                  },
                  {
                      "id":  "cerebral-interface-splice-link",
                      "title":  "Cerebral Interface Splice Link",
                      "cat":  "props",
                      "tag":  "NEURO PROP",
                      "year":  2025,
                      "tris":  "74,200 Tris",
                      "stack":  "ZBrush • Keyshot 11 Pro • Photoshop Composite",
                      "desc":  "Occipital direct-neural plug-in module with micro-gold contacts, ceramic insulation heat sink vanes, and braided graphene flex cabling.",
                      "aspect":  "square",
                      "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuDIzJxEIuPxCswpmEtFYakmbrQme20uWk-Hw_Li8mSLckQeyHSYDyInA5iA81hE6mhOWpyu4Ofn_vsXpPtDreVPoIjFK5O80SjQJSl8oXIAyn0M-1SBQOX4mnlfUG_8uZrNUjWZtm7HpOKffSOkVQisyYCC_-drQbXS80Ecse2X3LIaone4Rj5JYpAFZ4bpznwAWxjwn1UugQZZTLqp3c-IsO1hyfOJLaECzPB5mQbVRgXuVXKEorh4"
                  },
                  {
                      "id":  "strata-scout-high-g-lander",
                      "title":  "Strata Scout High-G Lander",
                      "cat":  "vehicles",
                      "tag":  "AEROSPACE",
                      "year":  2024,
                      "tris":  "340,000 Tris",
                      "stack":  "Unreal Engine 5.4 • 3ds Max • RizomUV • Quixel Suite",
                      "desc":  "Survey exploration craft fitted with retractable telescopic landing shock absorbers, atmospheric heat ablation tiles, and ventral LIDAR sensor turrets.",
                      "aspect":  "16/10",
                      "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuB9pPqSn1gf50Mqlm46nzBtIlQ43vBF16ZbUG1KTqhTSCpL8AjFjh6P0maXCm8kdDjLyqbtso-QzLqtnw-wDekF9xkzKT3uNcqQeKnbs4a-O1IJRY2talOJuMDUvXhKQy9yn9auqMj1hw3aHWQ9tWXCxez6fq_PzS5xOTtAL-jtN56Op9ALEp0ZYgs1Juv8IausM3lHYjKyrXbZRu9KBDgvE0cldTZZyJO8qzeF7_hnCTHNFi2KgtoU",
                      "model":  "strata-scout-lander"
                  },
                  {
                      "id":  "autonomous-seeker-drone-clay-study",
                      "title":  "Autonomous Seeker Drone Clay Study",
                      "cat":  "clay",
                      "tag":  "CLAY PASS",
                      "year":  2025,
                      "tris":  "62,000 Tris",
                      "stack":  "ZBrush ZModeler • Blender Geometry Nodes • Cycles Wireframe",
                      "desc":  "Low-poly and high-poly subdivision comparison highlighting edge-creasing techniques and seamless curvature continuity.",
                      "aspect":  "square",
                      "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuDB1kbI2B5Li5GqsSwHtJzaKmKw8drkHEilkGQP0CklAZdOtCN8S9_D2o1ahBdEKk5DLlACb90OUs0O_0ahhHjt99KLVzblpELEMHI4_8fLCM8AFYHue_YMeGpEhLTgi7q5dpbMfhIp3gqsh2sZWpl3EiJlmdTBNeC0GGY7UMSzf-7wvFJ6rmWfwruzxyWb3VEPCzZEDPYZNHRrAkM43_Qb81kNpUSzFWW0lLik39vdjQ5ulgWg4SCY"
                  }
              ],
    "posts":  [
                  {
                      "id":  "clean-subd-nanite",
                      "title":  "Clean Sub-D Modeling Rules for Unreal Engine 5 Nanite",
                      "date":  "2025-05-12",
                      "read":  9,
                      "cat":  "topology",
                      "tag":  "MODELING // PIPELINE",
                      "tags":  [
                                   "#SubD",
                                   "#Nanite",
                                   "#Topology"
                               ],
                      "excerpt":  "How to eliminate shading artifacts, avoid unwanted mesh pooling, and manage edge loop tension for seamless low-to-high bake accuracy.",
                      "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuDjMPTUM-HlOv7TL7o9h1ammN-ajfJBwBMYPvo70HHjSnyjtOrzeMjtKCOKVOFNuZPytqW1aRIHyqOuusOVJQYwKiarl7glJ7JHVRhg_bYiv4K-aZWCCMFsiUn6YOTK6kxecxVaOxeWgPWDS4ft27qGnrKkgDUq6FbiXHBKfqjMlUgMMicaIQEvYlvXQwMVrT8pg99o7D3I-RwzHpM0lSy82vh_db5STEGfMP3x0qnJEeCl_hXKoTP-",
                      "body":  [
                                   "Clean topology starts before the first edge loop. Decide which surfaces need to stay perfectly smooth, which edges carry a hard bevel, and where the silhouette will be read from. Everything else is detail that can be cut, floated or baked.",
                                   "Most shading pinches come from poles sitting on curved surfaces. Move poles onto flat areas, terminate loops at natural panel breaks and keep quads as square as the form allows. When a loop has to end, let it end inside a recess instead of the middle of a visible surface.",
                                   "Nanite changes the polygon budget, not the rules. Dense meshes still shade badly if the normals are inconsistent, so check smoothing groups and bevel weights on the high-poly first. Only then decide how much of the mesh you really need to keep as geometry."
                               ]
                  },
                  {
                      "id":  "marmoset-normal-maps",
                      "title":  "Baking Flawless Normal Maps in Marmoset Toolbag 4",
                      "date":  "2025-04-28",
                      "read":  14,
                      "cat":  "texturing",
                      "tag":  "TEXTURING // TOOLS",
                      "tags":  [
                                   "#Baking",
                                   "#Marmoset",
                                   "#PBR"
                               ],
                      "excerpt":  "Master cage offsets, paint-skew tools, and solve the pesky waviness on cylindrical hard-surface insets once and for all.",
                      "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuD70Pbrz9eX6CJ-abHp-GFzR-St6yD-371GsKhQH9L2YyORwCcEp_ejhRLbBwj6wKrZG453I4OctoDY_26OuJ9XzGJPYBwgkyRuVmpdJpbpozDyYTXEhGdLrMpCC_VQ9qjPDC6ivZdLFHzsopcsUogC5hOwzJH02HlsKmNy-oZradDCKf8Vw0vYPZErZ_9Cdch0b9IfPvLVpnwyN4bEcgWq2vYQj0zRY2BBe-77ki-uCCrZc0ajbR3Z",
                      "body":  [
                                   "A bake is only as good as its inputs. Before opening Toolbag, make sure the low-poly has one smoothing group per hard edge, the UV islands are split on those same edges and the high-poly sits exactly where the low-poly expects it.",
                                   "Use a cage or a tight offset instead of a large uniform ray distance. Where cylinders and insets overlap, skew the rays with a paint-skew map so each ray hits the surface it belongs to, instead of the nearest one.",
                                   "Waviness on cylindrical surfaces is usually a tangent-space mismatch, not a resolution problem. Bake in the same tangent basis you will render in, then verify the result with a simple lit sphere before you start texturing."
                               ]
                  },
                  {
                      "id":  "nanite-prep-checklist",
                      "title":  "Preparing Hard-Surface Models for Nanite: a Practical Checklist",
                      "date":  "2025-03-30",
                      "read":  7,
                      "cat":  "nanite",
                      "tag":  "UE5 // NANITE",
                      "tags":  [
                                   "#Nanite",
                                   "#UE5",
                                   "#GameReady"
                               ],
                      "excerpt":  "What to check on a hard-surface mesh before it goes into Unreal Engine 5: topology, materials, pivots and the settings that actually matter.",
                      "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuDLo9lxTzjk_puThUVMksLcG7eK7Qv7cgX09Au3dYyppHeGamoeQym-PfJ2XCOy5BpzpvTCnnvrzRkVQ8K7fhlypQsUUTHiNNpsNGucpOtveNRtg21kRCQ0W6t253aO-iNn5MNe_9Uowa2ymcPUxrXXAipcUSaCM0tXMhLcdx_gXivQsQTFOT7P96Rglwn_Ufhx8A8N4ezeeOTKk6qrD1NlKffZELgHKwiTd7yYesFoD6pnR8UMwyo3",
                      "body":  [
                                   "Start with the boring checks: correct scale, applied transforms, sensible pivots and no duplicate vertices. Most import problems in Unreal are caused by one of these, not by anything related to Nanite itself.",
                                   "Keep the number of materials per mesh low. Each material slot splits the mesh into separate draw ranges, and trim sheets or texture atlases let you cover a whole kit with one or two materials.",
                                   "Check what should not be Nanite. Skinned meshes, masked foliage and anything using unusual vertex deformation still need the traditional path, so keep a lower-poly version with proper LODs for those cases."
                               ]
                  },
                  {
                      "id":  "portfolio-review-checklist",
                      "title":  "Five Things I Check When Reviewing a Hard-Surface Portfolio",
                      "date":  "2025-02-18",
                      "read":  6,
                      "cat":  "career",
                      "tag":  "CAREER // PORTFOLIO",
                      "tags":  [
                                   "#Portfolio",
                                   "#Career",
                                   "#Mentoring"
                               ],
                      "excerpt":  "A short list of the things that make a hard-surface portfolio easy to hire from, and the mistakes I see most often in reviews.",
                      "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuBCiJZgVwTCW79AqLk9PGXhn735jCUm7GrQD3o1Hwy98egCrMCgOEdRpGZ1TyXOlK9sg-_b2Y-vclzRkuozjFlzoxXG9qtlVWEUfDlweJpZvReVW4qAer_UNH64OPzZyVQnhGdx3RVt7QsEZNhOHFtqiMjceoGz8r5RCxRutFY9GRYiJ2Rai51GttZQqCqoFPm-VKNZ4E38x9kTnp4edeKUFBs9_nBNXQK6ninckR8C-4fCZYZyV7tz",
                      "body":  [
                                   "First, show fewer pieces and finish them. Three polished assets with wireframes, texture sheets and in-engine shots tell a hiring manager more than fifteen unfinished renders.",
                                   "Second, show your process. A clay pass, a topology view and a short breakdown of what you decided and why prove that you understand the work, not only the final image.",
                                   "Finally, keep it easy to read. Clear titles, consistent lighting, the software list and a contact link on every page save the reviewer time, and a reviewer with spare time is far more likely to reply."
                               ]
                  }
              ],
    "plans":  [
                  {
                      "id":  "single",
                      "kind":  "Single Focus",
                      "badge":  "neutral",
                      "duration":  "1 Session (75 Mins)",
                      "name":  "Single Teardown Sprint",
                      "desc":  "Rapid technical diagnostic on a specific problematic model or asset before submission.",
                      "price":  120,
                      "priceNote":  "/ one session",
                      "note":  "Booking after a free intro call",
                      "icon":  "arrow_forward",
                      "includes":  [
                                       "Live video screen-share review of your model",
                                       "Real-time mesh topology \u0026 edge-flow feedback",
                                       "Shader \u0026 UV unwrapping tips",
                                       "Session recording + annotated .blend file",
                                       "7-day follow-up Q\u0026A by message"
                                   ]
                  },
                  {
                      "id":  "mastery",
                      "kind":  "Monthly Program",
                      "badge":  "primary",
                      "popular":  true,
                      "popularLabel":  "Most Popular",
                      "duration":  "4 Weeks (Weekly 90-min)",
                      "name":  "4-Week Portfolio Mastery",
                      "desc":  "A focused sprint to produce a hero asset, remove rookie mistakes, and rebuild your ArtStation presence.",
                      "price":  420,
                      "priceNote":  "($105/session)",
                      "note":  "Start date agreed individually",
                      "icon":  "bolt",
                      "includes":  [
                                       {
                                           "strong":  "4x 90-minute",
                                           "rest":  " live 1-on-1 deep-dive calls"
                                       },
                                       "End-to-end asset production review (concept to UE5)",
                                       "Portfolio \u0026 resume polish",
                                       "Private chat with async reviews between calls",
                                       "Mock technical art interview"
                                   ]
                  },
                  {
                      "id":  "intensive",
                      "kind":  "Limited Seats",
                      "badge":  "danger",
                      "duration":  "8 Weeks",
                      "name":  "Studio Intensive",
                      "desc":  "Comprehensive pipeline overhaul and studio onboarding simulation for career changers and mid-level artists.",
                      "price":  780,
                      "priceNote":  "($97/session)",
                      "note":  "Short interview required",
                      "icon":  "arrow_forward",
                      "includes":  [
                                       "8x 90-minute 1-on-1 tailored pipeline coaching sessions",
                                       "Bi-weekly peer critique sessions",
                                       "Custom modular pipeline setup (Sub-D, Marmoset, Substance, UE5)",
                                       "Portfolio sign-off and job-search guidance"
                                   ]
                  }
              ],
    "platforms":  [
                      {
                          "id":  "cgtrader",
                          "name":  "CGTrader",
                          "icon":  "view_in_ar",
                          "url":  "https://www.cgtrader.com/"
                      },
                      {
                          "id":  "sketchfab",
                          "name":  "Sketchfab",
                          "icon":  "3d_rotation",
                          "url":  "https://sketchfab.com/"
                      },
                      {
                          "id":  "fab",
                          "name":  "Fab",
                          "icon":  "deployed_code",
                          "url":  "https://www.fab.com/"
                      },
                      {
                          "id":  "gumroad",
                          "name":  "Gumroad",
                          "icon":  "shopping_bag",
                          "url":  "https://gumroad.com/"
                      },
                      {
                          "id":  "printables",
                          "name":  "Printables",
                          "icon":  "print",
                          "url":  "https://www.printables.com/"
                      },
                      {
                          "id":  "cults3d",
                          "name":  "Cults3D",
                          "icon":  "layers",
                          "url":  "https://cults3d.com/"
                      }
                  ],
    "contact":  {
                    "email":  "contact@example.com",
                    "telegram":  "",
                    "artstation":  "https://www.artstation.com/",
                    "sketchfab":  "https://sketchfab.com/",
                    "youtube":  "",
                    "discord":  ""
                },
    "profile":  {
                    "name":  "Alex Vance",
                    "role":  "3D Hard-Surface Artist \u0026 Mentor",
                    "years":  "9+"
                },
    "workCats":  {
                     "mechs":  "Mechs \u0026 Robotics",
                     "vehicles":  "Vehicles \u0026 Craft",
                     "environments":  "Environments \u0026 Shaders",
                     "props":  "Props \u0026 Kitbash",
                     "clay":  "Clay \u0026 Wireframes"
                 },
    "blogCats":  {
                     "topology":  "Topology \u0026 Sub-D",
                     "nanite":  "UE5 \u0026 Nanite",
                     "texturing":  "Texturing \u0026 Baking",
                     "career":  "Career \u0026 Portfolio"
                 },
    "crumb":  {
                  "mechs":  "Mechs \u0026 Vehicles",
                  "vehicles":  "Mechs \u0026 Vehicles",
                  "weapons":  "Weapons \u0026 Sci-Fi",
                  "characters":  "Characters \u0026 Armor",
                  "environments":  "Modular Environments",
                  "props":  "Props"
              },
    "apexGallery":  [
                        {
                            "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuDfxTjjKBB5LtdqyHh9CIPIhKdZXsgY7ptlm_1KmTSJmcGTOuKWhb8JhD1O8WYw-PDrpiRRjSM9DheFkHCrceHdif8Ydxw464CbOQ5oGSXt2Crpy5ELjdJVscI3T1bHYPtQvair06ZSdph1bP1MHw5PEOiFINtYS8NIoVc63Rbvaiyg4UEJf-K--90yvdw5Hi4BD6cB4lu3l3Uu0GHGUWhjUIQwNkopvL_FRAkt1ozf31iEbVlkfVz2",
                            "label":  "01. Hero Textured"
                        },
                        {
                            "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuB8Cgl6CjVQ7VwDNVtiGPdICaxD07LUkAk4-Jb2NhLzq2lm-onMO16OSwZ5YG8QuA0m-RKO3rctkAN4NFEggOOpOnu7j0Qiy07-tux30PccNzWIa79tINbyfnfstrL3Vul47fW-QY9LMn3DlkRGvsT6NWfuqFeX08oxVAfeXW_HvO3hU8GioZKqzuaKw7uNtbEc_Yqwtn4Kne_Ah8S1LFdjM6syZILLPKN59wOU9gs42S_rTvWxUk9N",
                            "label":  "02. Wireframe Sub-D"
                        },
                        {
                            "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuDTn84BrSeKvHxmfIN0LbE6KcWP2XVeMyWvZrMFp7la67HE5q7iwaUvZPjuXJLnIRuyYTBShSLsSGYjY_cpdSEz3NhCaTGMvSnlT8IsTz_QEgosz6Ai-Xh46tUAWuvRG5Yxeu7xglDxixCwAcvgJFQvfcdDrAk4rMwwb1W4TNDLIlxhYPpZzlv345kWl7wpFhllla6ccemncZI2i_2MJHafv9J23PqUcVd1Mj49e9yA3biwITBS5VsN",
                            "label":  "03. 4K PBR Channels"
                        },
                        {
                            "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuBvb8vTqkVGWMsbHLEWViakOnQjAF9bcNnv0J3Q_r8a-rd0R9WGOFZ4vb-hpGsl7yYBTEoDlsS7xAEf_wJzpzHbJOUT0nsruHG24AG4HeoxXA-bCK8jIxHDgFsTqKG9hnKvhUZL_vht_LmPAugEOqYu6HHNiNq1uFkxVAd0wgIZECYZvri9lsu8UXdKvdpc2SQ0zYPUqwXVJixMcOEU7sDpAH4icouO2agMHiUF0j4UMQF9rqrw4iVC",
                            "label":  "04. Control Rig Armature"
                        },
                        {
                            "img":  "https://lh3.googleusercontent.com/aida-public/AB6AXuBWLzvmckQklw5IdQOFIkk598oIP9X2nYehM6_Rc8b1CXNEVoVgcrBI8ZjkyNtAwoPo7G9-Ljnl4iJGEqi6fjHKYs-Kepy_zyO_RJBHKhWmTLAmY-LWD3hoP9JxlP0n8DAIpI1ArI4gurPCkWIPcIOc9Hvijw2dS5Or-ngtonQ-zedngRHXcrlU9v__aubQkzySJrAS8lRhqJOll7hcM0SizQG7LZtbEtj34U4Nl_Lo4gTNwCEnr2vi",
                            "label":  "05. UE5 In-Engine Lighting"
                        }
                    ],
    "apexTags":  [
                     "#GameReady",
                     "#Rigged",
                     "#PBR-4K",
                     "#CleanTopology",
                     "#UE5",
                     "#Blender",
                     "#SciFi",
                     "#Nanite"
                 ],
    "logo":  "https://lh3.googleusercontent.com/aida/AEtjO1WMQ9f02Cxnk9N48mSpL2cryZbxyJaDxm-d021rk-2jSUzZNak5cYh2bBBoh2EcGOM-m07Row4SaM4ywC4QUDpy7NDJ75BjqZqePgeMrYJ7xMsxmlmVEFhkgOYPMZYKLuluwg4uaHbpJcY5RyTg3KDqin_tgkKhS6rh07VcWg00mbdAE4Figsm6IIDCNdGIStZJQcbEH7NweSd-UiqBMfGEGCdhX6e44tKcT1zWmoJtG_LUrwjOonGgLOQ",
    "avatar":  "https://lh3.googleusercontent.com/aida-public/AB6AXuAmca-V2Al1FYCMz79JSHY2zjrhd2G8Zn2EucgQ-EPmWdtrgLDrSAB6OuBDEEaxr3AIA9uA4exhrxO5McpK1IipKjDORBpV-1D3ykqMsKJSmv7oP94Bi4w5b5NNisaMYtT7hGVjaXoKkkNk4MfjxOPv389rCSJu56Jx-sN0Hw_whYil_fYk-JePFJia2uNlXuYne2oX31L3M8jfntlVE40rMZYBr__q0xTl76c3k_-vCr6hommu2Jw1"
};
