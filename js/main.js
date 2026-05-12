/* ═══════════════════════════════════════════════
   DPIX — Main JavaScript
═══════════════════════════════════════════════ */

/* ─── DATA ─── */
const PLAYERS = [{"Name":"Juan Soto","Season":2024,"Age":25,"PA":713,"wRC+":181.0,"WAR":8.3,"luck_residual":0.043,"reliability_λ":1.0,"DPIX":200.0},{"Name":"Aaron Judge","Season":2024,"Age":32,"PA":704,"wRC+":219.8,"WAR":11.33,"luck_residual":0.005,"reliability_λ":1.0,"DPIX":199.71},{"Name":"Shohei Ohtani","Season":2024,"Age":29,"PA":731,"wRC+":179.7,"WAR":8.95,"luck_residual":0.013,"reliability_λ":1.0,"DPIX":185.76},{"Name":"Yordan Alvarez","Season":2024,"Age":27,"PA":635,"wRC+":167.1,"WAR":5.2,"luck_residual":0.013,"reliability_λ":1.0,"DPIX":181.03},{"Name":"Vladimir Guerrero Jr.","Season":2024,"Age":25,"PA":697,"wRC+":164.5,"WAR":5.32,"luck_residual":0.015,"reliability_λ":1.0,"DPIX":175.72},{"Name":"Kyle Tucker","Season":2024,"Age":27,"PA":339,"wRC+":179.2,"WAR":4.21,"luck_residual":-0.017,"reliability_λ":1.0,"DPIX":169.54},{"Name":"Corey Seager","Season":2024,"Age":30,"PA":533,"wRC+":141.9,"WAR":4.65,"luck_residual":0.026,"reliability_λ":1.0,"DPIX":163.35},{"Name":"Fernando Tatis Jr.","Season":2024,"Age":25,"PA":438,"wRC+":134.5,"WAR":3.27,"luck_residual":0.032,"reliability_λ":1.0,"DPIX":153.08},{"Name":"Bobby Witt Jr.","Season":2024,"Age":24,"PA":709,"wRC+":169.1,"WAR":10.49,"luck_residual":-0.003,"reliability_λ":1.0,"DPIX":153.02},{"Name":"Rafael Devers","Season":2024,"Age":27,"PA":601,"wRC+":135.8,"WAR":4.18,"luck_residual":0.002,"reliability_λ":1.0,"DPIX":152.26},{"Name":"Freddie Freeman","Season":2024,"Age":34,"PA":638,"wRC+":135.8,"WAR":3.95,"luck_residual":0.003,"reliability_λ":1.0,"DPIX":152.17},{"Name":"Ronald Acuna Jr.","Season":2024,"Age":26,"PA":222,"wRC+":105.6,"WAR":0.94,"luck_residual":0.028,"reliability_λ":1.0,"DPIX":150.89},{"Name":"Mookie Betts","Season":2024,"Age":31,"PA":516,"wRC+":139.6,"WAR":4.3,"luck_residual":-0.008,"reliability_λ":1.0,"DPIX":148.87},{"Name":"Marcell Ozuna","Season":2024,"Age":33,"PA":688,"wRC+":154.5,"WAR":4.72,"luck_residual":0.01,"reliability_λ":1.0,"DPIX":147.54},{"Name":"Francisco Lindor","Season":2024,"Age":30,"PA":689,"wRC+":136.9,"WAR":7.68,"luck_residual":0.018,"reliability_λ":1.0,"DPIX":147.53},{"Name":"Ketel Marte","Season":2024,"Age":30,"PA":583,"wRC+":151.6,"WAR":6.32,"luck_residual":0.003,"reliability_λ":1.0,"DPIX":147.5},{"Name":"Gunnar Henderson","Season":2024,"Age":23,"PA":719,"wRC+":153.8,"WAR":7.9,"luck_residual":-0.008,"reliability_λ":0.94,"DPIX":147.36},{"Name":"Bryce Harper","Season":2024,"Age":31,"PA":631,"wRC+":143.7,"WAR":5.1,"luck_residual":-0.021,"reliability_λ":1.0,"DPIX":146.92},{"Name":"Matt Olson","Season":2024,"Age":30,"PA":685,"wRC+":117.4,"WAR":2.61,"luck_residual":0.002,"reliability_λ":1.0,"DPIX":144.56},{"Name":"Kyle Schwarber","Season":2024,"Age":31,"PA":692,"wRC+":134.0,"WAR":3.34,"luck_residual":0.014,"reliability_λ":1.0,"DPIX":143.94},{"Name":"Jose Ramirez","Season":2024,"Age":31,"PA":682,"wRC+":141.4,"WAR":6.4,"luck_residual":-0.031,"reliability_λ":1.0,"DPIX":143.83},{"Name":"Austin Riley","Season":2024,"Age":27,"PA":469,"wRC+":116.4,"WAR":2.41,"luck_residual":0.029,"reliability_λ":1.0,"DPIX":143.19},{"Name":"Mike Trout","Season":2024,"Age":32,"PA":126,"wRC+":139.9,"WAR":0.92,"luck_residual":0.042,"reliability_λ":1.0,"DPIX":141.94},{"Name":"William Contreras","Season":2024,"Age":26,"PA":679,"wRC+":131.6,"WAR":5.49,"luck_residual":0.0,"reliability_λ":1.0,"DPIX":139.74},{"Name":"Matt Chapman","Season":2024,"Age":31,"PA":647,"wRC+":120.7,"WAR":5.47,"luck_residual":0.002,"reliability_λ":1.0,"DPIX":138.95},{"Name":"Carlos Correa","Season":2024,"Age":29,"PA":367,"wRC+":154.3,"WAR":4.22,"luck_residual":-0.027,"reliability_λ":1.0,"DPIX":138.93},{"Name":"Yandy Diaz","Season":2024,"Age":32,"PA":621,"wRC+":120.3,"WAR":1.92,"luck_residual":0.008,"reliability_λ":1.0,"DPIX":137.85},{"Name":"Christian Yelich","Season":2024,"Age":32,"PA":315,"wRC+":153.6,"WAR":3.02,"luck_residual":-0.019,"reliability_λ":1.0,"DPIX":137.0},{"Name":"Pete Alonso","Season":2024,"Age":29,"PA":695,"wRC+":121.4,"WAR":2.06,"luck_residual":0.006,"reliability_λ":1.0,"DPIX":136.98},{"Name":"Alex Bregman","Season":2024,"Age":30,"PA":634,"wRC+":117.2,"WAR":4.17,"luck_residual":-0.005,"reliability_λ":1.0,"DPIX":136.54},{"Name":"Ian Happ","Season":2024,"Age":29,"PA":657,"wRC+":120.7,"WAR":3.56,"luck_residual":0.006,"reliability_λ":1.0,"DPIX":135.48},{"Name":"Manny Machado","Season":2024,"Age":31,"PA":643,"wRC+":121.7,"WAR":3.54,"luck_residual":0.0,"reliability_λ":1.0,"DPIX":133.28},{"Name":"Joc Pederson","Season":2024,"Age":32,"PA":449,"wRC+":151.6,"WAR":2.99,"luck_residual":-0.01,"reliability_λ":1.0,"DPIX":132.52},{"Name":"Riley Greene","Season":2024,"Age":23,"PA":584,"wRC+":133.7,"WAR":3.93,"luck_residual":-0.0,"reliability_λ":1.0,"DPIX":132.5},{"Name":"Willson Contreras","Season":2024,"Age":32,"PA":358,"wRC+":140.7,"WAR":2.66,"luck_residual":-0.003,"reliability_λ":1.0,"DPIX":132.19},{"Name":"Brandon Nimmo","Season":2024,"Age":31,"PA":663,"wRC+":108.4,"WAR":2.77,"luck_residual":0.018,"reliability_λ":1.0,"DPIX":131.84},{"Name":"Will Smith","Season":2024,"Age":29,"PA":544,"wRC+":109.1,"WAR":2.61,"luck_residual":0.011,"reliability_λ":1.0,"DPIX":131.6},{"Name":"Max Muncy","Season":2024,"Age":33,"PA":293,"wRC+":133.3,"WAR":2.31,"luck_residual":-0.008,"reliability_λ":1.0,"DPIX":131.5},{"Name":"Jurickson Profar","Season":2024,"Age":31,"PA":668,"wRC+":138.9,"WAR":4.34,"luck_residual":0.001,"reliability_λ":1.0,"DPIX":131.47},{"Name":"Lars Nootbaar","Season":2024,"Age":26,"PA":405,"wRC+":114.1,"WAR":1.71,"luck_residual":0.028,"reliability_λ":1.0,"DPIX":130.94},{"Name":"Alec Bohm","Season":2024,"Age":27,"PA":606,"wRC+":113.5,"WAR":3.45,"luck_residual":0.01,"reliability_λ":1.0,"DPIX":130.93},{"Name":"Julio Rodriguez","Season":2024,"Age":23,"PA":613,"wRC+":116.1,"WAR":3.94,"luck_residual":0.028,"reliability_λ":1.0,"DPIX":130.51},{"Name":"Willy Adames","Season":2024,"Age":28,"PA":688,"wRC+":120.3,"WAR":4.85,"luck_residual":-0.001,"reliability_λ":1.0,"DPIX":130.51},{"Name":"Cal Raleigh","Season":2024,"Age":27,"PA":628,"wRC+":117.6,"WAR":5.41,"luck_residual":0.024,"reliability_λ":1.0,"DPIX":130.1},{"Name":"Christian Walker","Season":2024,"Age":33,"PA":552,"wRC+":119.6,"WAR":3.06,"luck_residual":0.011,"reliability_λ":1.0,"DPIX":129.75},{"Name":"Bryan Reynolds","Season":2024,"Age":29,"PA":692,"wRC+":118.2,"WAR":2.17,"luck_residual":0.01,"reliability_λ":1.0,"DPIX":128.97},{"Name":"Adley Rutschman","Season":2024,"Age":26,"PA":638,"wRC+":102.8,"WAR":2.72,"luck_residual":0.012,"reliability_λ":1.0,"DPIX":128.08},{"Name":"Seiya Suzuki","Season":2024,"Age":29,"PA":585,"wRC+":136.7,"WAR":3.45,"luck_residual":-0.016,"reliability_λ":1.0,"DPIX":127.9},{"Name":"Brent Rooker","Season":2024,"Age":29,"PA":614,"wRC+":163.6,"WAR":5.11,"luck_residual":-0.011,"reliability_λ":0.92,"DPIX":127.68},{"Name":"Brendan Donovan","Season":2024,"Age":27,"PA":652,"wRC+":115.1,"WAR":3.18,"luck_residual":0.009,"reliability_λ":1.0,"DPIX":126.45},{"Name":"Taylor Ward","Season":2024,"Age":30,"PA":663,"wRC+":111.7,"WAR":2.83,"luck_residual":0.02,"reliability_λ":1.0,"DPIX":126.32},{"Name":"Nathaniel Lowe","Season":2024,"Age":28,"PA":565,"wRC+":122.7,"WAR":2.92,"luck_residual":-0.005,"reliability_λ":1.0,"DPIX":125.98},{"Name":"Teoscar Hernandez","Season":2024,"Age":31,"PA":652,"wRC+":132.1,"WAR":3.41,"luck_residual":-0.013,"reliability_λ":1.0,"DPIX":125.37},{"Name":"Sean Murphy","Season":2024,"Age":29,"PA":264,"wRC+":78.3,"WAR":0.84,"luck_residual":0.03,"reliability_λ":1.0,"DPIX":125.08},{"Name":"Josh Naylor","Season":2024,"Age":27,"PA":633,"wRC+":118.5,"WAR":2.26,"luck_residual":0.006,"reliability_λ":1.0,"DPIX":124.82},{"Name":"Jonathan India","Season":2024,"Age":27,"PA":637,"wRC+":109.0,"WAR":2.92,"luck_residual":0.02,"reliability_λ":1.0,"DPIX":124.2},{"Name":"LaMonte Wade Jr.","Season":2024,"Age":30,"PA":401,"wRC+":118.9,"WAR":1.33,"luck_residual":0.018,"reliability_λ":0.96,"DPIX":124.03},{"Name":"Jorge Soler","Season":2024,"Age":32,"PA":574,"wRC+":119.6,"WAR":1.06,"luck_residual":0.012,"reliability_λ":1.0,"DPIX":123.96},{"Name":"Anthony Santander","Season":2024,"Age":29,"PA":665,"wRC+":128.3,"WAR":3.21,"luck_residual":-0.018,"reliability_λ":1.0,"DPIX":123.67},{"Name":"Paul Goldschmidt","Season":2024,"Age":36,"PA":654,"wRC+":100.0,"WAR":1.16,"luck_residual":0.023,"reliability_λ":1.0,"DPIX":123.09},{"Name":"Vinnie Pasquantino","Season":2024,"Age":26,"PA":554,"wRC+":109.2,"WAR":1.51,"luck_residual":0.012,"reliability_λ":0.7,"DPIX":123.06},{"Name":"Alejandro Kirk","Season":2024,"Age":25,"PA":386,"wRC+":93.5,"WAR":2.75,"luck_residual":0.032,"reliability_λ":1.0,"DPIX":123.06},{"Name":"Ryan Mountcastle","Season":2024,"Age":27,"PA":507,"wRC+":107.4,"WAR":1.43,"luck_residual":0.021,"reliability_λ":1.0,"DPIX":122.87},{"Name":"Tyler O'Neill","Season":2024,"Age":29,"PA":473,"wRC+":132.7,"WAR":2.55,"luck_residual":-0.02,"reliability_λ":0.81,"DPIX":121.41},{"Name":"Corbin Carroll","Season":2024,"Age":23,"PA":684,"wRC+":107.1,"WAR":4.34,"luck_residual":0.005,"reliability_λ":0.95,"DPIX":120.0},{"Name":"Randy Arozarena","Season":2024,"Age":29,"PA":648,"wRC+":114.2,"WAR":1.97,"luck_residual":0.002,"reliability_λ":1.0,"DPIX":119.52},{"Name":"Triston Casas","Season":2024,"Age":24,"PA":243,"wRC+":120.4,"WAR":0.64,"luck_residual":-0.014,"reliability_λ":0.75,"DPIX":119.37},{"Name":"Gleyber Torres","Season":2024,"Age":27,"PA":665,"wRC+":105.1,"WAR":1.82,"luck_residual":0.001,"reliability_λ":1.0,"DPIX":119.28},{"Name":"Byron Buxton","Season":2024,"Age":30,"PA":388,"wRC+":140.4,"WAR":3.69,"luck_residual":-0.01,"reliability_λ":0.91,"DPIX":119.14},{"Name":"Dansby Swanson","Season":2024,"Age":30,"PA":593,"wRC+":97.5,"WAR":4.22,"luck_residual":0.017,"reliability_λ":1.0,"DPIX":118.99},{"Name":"Jesse Winker","Season":2024,"Age":30,"PA":508,"wRC+":117.7,"WAR":1.38,"luck_residual":-0.008,"reliability_λ":0.93,"DPIX":118.98},{"Name":"J.P. Crawford","Season":2024,"Age":29,"PA":451,"wRC+":89.8,"WAR":1.63,"luck_residual":0.029,"reliability_λ":1.0,"DPIX":118.92},{"Name":"Jorge Polanco","Season":2024,"Age":30,"PA":469,"wRC+":92.6,"WAR":0.26,"luck_residual":0.023,"reliability_λ":0.98,"DPIX":118.85},{"Name":"Isaac Paredes","Season":2024,"Age":25,"PA":641,"wRC+":116.4,"WAR":3.31,"luck_residual":-0.018,"reliability_λ":1.0,"DPIX":118.63},{"Name":"Pavin Smith","Season":2024,"Age":28,"PA":158,"wRC+":142.5,"WAR":0.93,"luck_residual":0.019,"reliability_λ":0.63,"DPIX":118.54},{"Name":"Brandon Lowe","Season":2024,"Age":29,"PA":425,"wRC+":123.3,"WAR":2.24,"luck_residual":0.01,"reliability_λ":0.88,"DPIX":118.06},{"Name":"Michael Harris II","Season":2024,"Age":23,"PA":470,"wRC+":99.0,"WAR":1.99,"luck_residual":0.034,"reliability_λ":1.0,"DPIX":117.43},{"Name":"Marcus Semien","Season":2024,"Age":33,"PA":718,"wRC+":100.6,"WAR":4.27,"luck_residual":0.014,"reliability_λ":1.0,"DPIX":117.19},{"Name":"Ryan McMahon","Season":2024,"Age":29,"PA":645,"wRC+":88.3,"WAR":1.92,"luck_residual":0.01,"reliability_λ":1.0,"DPIX":117.16},{"Name":"Salvador Perez","Season":2024,"Age":34,"PA":652,"wRC+":116.6,"WAR":3.28,"luck_residual":0.026,"reliability_λ":1.0,"DPIX":117.05},{"Name":"Steven Kwan","Season":2024,"Age":26,"PA":540,"wRC+":131.0,"WAR":4.18,"luck_residual":-0.013,"reliability_λ":1.0,"DPIX":116.94},{"Name":"Michael Conforto","Season":2024,"Age":31,"PA":488,"wRC+":111.6,"WAR":1.31,"luck_residual":0.026,"reliability_λ":1.0,"DPIX":116.83},{"Name":"Carlos Santana","Season":2024,"Age":38,"PA":594,"wRC+":112.9,"WAR":2.92,"luck_residual":0.006,"reliability_λ":1.0,"DPIX":116.74},{"Name":"Eugenio Suarez","Season":2024,"Age":32,"PA":640,"wRC+":115.4,"WAR":3.87,"luck_residual":-0.001,"reliability_λ":1.0,"DPIX":116.7},{"Name":"Luis Arraez","Season":2024,"Age":27,"PA":672,"wRC+":109.2,"WAR":1.12,"luck_residual":0.008,"reliability_λ":1.0,"DPIX":116.48},{"Name":"Randal Grichuk","Season":2024,"Age":32,"PA":279,"wRC+":139.5,"WAR":1.6,"luck_residual":-0.002,"reliability_λ":1.0,"DPIX":116.01},{"Name":"Trea Turner","Season":2024,"Age":31,"PA":539,"wRC+":122.8,"WAR":3.86,"luck_residual":-0.027,"reliability_λ":1.0,"DPIX":114.86},{"Name":"Jose Altuve","Season":2024,"Age":34,"PA":682,"wRC+":126.7,"WAR":3.86,"luck_residual":-0.025,"reliability_λ":1.0,"DPIX":114.64},{"Name":"Jesus Sanchez","Season":2024,"Age":26,"PA":537,"wRC+":101.4,"WAR":1.61,"luck_residual":0.031,"reliability_λ":0.93,"DPIX":114.55},{"Name":"Jarren Duran","Season":2024,"Age":27,"PA":735,"wRC+":130.7,"WAR":6.84,"luck_residual":-0.017,"reliability_λ":0.73,"DPIX":114.52},{"Name":"J.T. Realmuto","Season":2024,"Age":33,"PA":413,"wRC+":107.3,"WAR":1.96,"luck_residual":0.014,"reliability_λ":1.0,"DPIX":114.48},{"Name":"Trent Grisham","Season":2024,"Age":27,"PA":209,"wRC+":92.8,"WAR":0.52,"luck_residual":0.008,"reliability_λ":1.0,"DPIX":113.76},{"Name":"Jake Cronenworth","Season":2024,"Age":30,"PA":656,"wRC+":105.0,"WAR":2.07,"luck_residual":0.025,"reliability_λ":1.0,"DPIX":113.23},{"Name":"Luis Garcia Jr.","Season":2024,"Age":24,"PA":528,"wRC+":110.3,"WAR":3.03,"luck_residual":0.007,"reliability_λ":1.0,"DPIX":112.7},{"Name":"Jazz Chisholm Jr.","Season":2024,"Age":26,"PA":621,"wRC+":110.7,"WAR":4.0,"luck_residual":-0.01,"reliability_λ":0.78,"DPIX":112.63},{"Name":"Ha-Seong Kim","Season":2024,"Age":28,"PA":470,"wRC+":100.6,"WAR":2.64,"luck_residual":0.009,"reliability_λ":1.0,"DPIX":112.18},{"Name":"Kerry Carpenter","Season":2024,"Age":26,"PA":296,"wRC+":158.4,"WAR":2.38,"luck_residual":-0.014,"reliability_λ":0.72,"DPIX":111.81},{"Name":"Alex Verdugo","Season":2024,"Age":28,"PA":621,"wRC+":84.5,"WAR":0.61,"luck_residual":0.023,"reliability_λ":1.0,"DPIX":111.76},{"Name":"Ryan O'Hearn","Season":2024,"Age":30,"PA":494,"wRC+":117.6,"WAR":1.57,"luck_residual":0.024,"reliability_λ":0.64,"DPIX":111.57},{"Name":"Josh Bell","Season":2024,"Age":31,"PA":603,"wRC+":101.5,"WAR":-0.07,"luck_residual":-0.005,"reliability_λ":1.0,"DPIX":111.55},{"Name":"Gary Sanchez","Season":2024,"Age":31,"PA":280,"wRC+":96.8,"WAR":0.37,"luck_residual":0.008,"reliability_λ":0.92,"DPIX":111.04},{"Name":"Trevor Larnach","Season":2024,"Age":27,"PA":400,"wRC+":119.5,"WAR":1.45,"luck_residual":0.007,"reliability_λ":0.49,"DPIX":110.86},{"Name":"Brandon Marsh","Season":2024,"Age":26,"PA":476,"wRC+":107.1,"WAR":2.27,"luck_residual":0.001,"reliability_λ":1.0,"DPIX":110.44},{"Name":"Andrew Vaughn","Season":2024,"Age":26,"PA":619,"wRC+":97.4,"WAR":-0.14,"luck_residual":0.016,"reliability_λ":1.0,"DPIX":110.3},{"Name":"Adolis Garcia","Season":2024,"Age":31,"PA":637,"wRC+":93.5,"WAR":-0.14,"luck_residual":0.013,"reliability_λ":1.0,"DPIX":110.25},{"Name":"Giancarlo Stanton","Season":2024,"Age":34,"PA":459,"wRC+":117.2,"WAR":0.84,"luck_residual":0.024,"reliability_λ":1.0,"DPIX":110.19},{"Name":"Lourdes Gurriel Jr.","Season":2024,"Age":30,"PA":553,"wRC+":108.3,"WAR":2.13,"luck_residual":-0.002,"reliability_λ":1.0,"DPIX":110.04},{"Name":"Yainer Diaz","Season":2024,"Age":25,"PA":619,"wRC+":115.9,"WAR":2.96,"luck_residual":0.014,"reliability_λ":0.47,"DPIX":109.87},{"Name":"Bo Bichette","Season":2024,"Age":26,"PA":336,"wRC+":70.1,"WAR":0.29,"luck_residual":0.04,"reliability_λ":1.0,"DPIX":109.8},{"Name":"Jake Burger","Season":2024,"Age":28,"PA":579,"wRC+":107.1,"WAR":1.38,"luck_residual":0.014,"reliability_λ":0.9,"DPIX":109.67},{"Name":"Nico Hoerner","Season":2024,"Age":27,"PA":641,"wRC+":101.9,"WAR":3.82,"luck_residual":0.005,"reliability_λ":1.0,"DPIX":109.44},{"Name":"Elly De La Cruz","Season":2024,"Age":22,"PA":696,"wRC+":119.3,"WAR":6.56,"luck_residual":-0.019,"reliability_λ":0.53,"DPIX":109.41},{"Name":"Victor Robles","Season":2024,"Age":27,"PA":295,"wRC+":141.1,"WAR":3.13,"luck_residual":-0.026,"reliability_λ":0.67,"DPIX":109.38},{"Name":"Spencer Steer","Season":2024,"Age":26,"PA":656,"wRC+":97.6,"WAR":1.55,"luck_residual":0.004,"reliability_λ":0.97,"DPIX":109.24},{"Name":"Tyler Stephenson","Season":2024,"Age":27,"PA":515,"wRC+":113.0,"WAR":3.06,"luck_residual":-0.015,"reliability_λ":0.88,"DPIX":109.16},{"Name":"Victor Caratini","Season":2024,"Age":30,"PA":274,"wRC+":112.7,"WAR":1.89,"luck_residual":0.0,"reliability_λ":0.68,"DPIX":108.61},{"Name":"Andrew McCutchen","Season":2024,"Age":37,"PA":515,"wRC+":106.0,"WAR":0.51,"luck_residual":-0.001,"reliability_λ":1.0,"DPIX":108.31},{"Name":"Christopher Morel","Season":2024,"Age":25,"PA":611,"wRC+":81.2,"WAR":-1.0,"luck_residual":0.036,"reliability_λ":1.0,"DPIX":108.21},{"Name":"Ozzie Albies","Season":2024,"Age":27,"PA":435,"wRC+":95.6,"WAR":1.32,"luck_residual":0.001,"reliability_λ":1.0,"DPIX":107.99},{"Name":"Justin Turner","Season":2024,"Age":39,"PA":539,"wRC+":116.5,"WAR":1.15,"luck_residual":0.006,"reliability_λ":1.0,"DPIX":107.82},{"Name":"Rhys Hoskins","Season":2024,"Age":31,"PA":517,"wRC+":101.1,"WAR":0.2,"luck_residual":-0.007,"reliability_λ":1.0,"DPIX":107.8},{"Name":"Josh Smith","Season":2024,"Age":26,"PA":592,"wRC+":112.4,"WAR":2.92,"luck_residual":-0.013,"reliability_λ":0.61,"DPIX":107.74},{"Name":"JJ Bleday","Season":2024,"Age":26,"PA":642,"wRC+":120.0,"WAR":3.2,"luck_residual":-0.009,"reliability_λ":0.68,"DPIX":107.69},{"Name":"George Springer","Season":2024,"Age":34,"PA":614,"wRC+":94.5,"WAR":1.05,"luck_residual":0.027,"reliability_λ":1.0,"DPIX":107.47},{"Name":"Nolan Arenado","Season":2024,"Age":33,"PA":635,"wRC+":102.6,"WAR":3.2,"luck_residual":-0.016,"reliability_λ":1.0,"DPIX":107.2},{"Name":"DJ LeMahieu","Season":2024,"Age":35,"PA":228,"wRC+":53.0,"WAR":-0.46,"luck_residual":0.066,"reliability_λ":1.0,"DPIX":107.11},{"Name":"Jordan Westburg","Season":2024,"Age":25,"PA":447,"wRC+":124.3,"WAR":2.66,"luck_residual":0.015,"reliability_λ":0.28,"DPIX":107.06},{"Name":"Brendan Rodgers","Season":2024,"Age":27,"PA":539,"wRC+":87.1,"WAR":0.76,"luck_residual":-0.014,"reliability_λ":0.97,"DPIX":106.94},{"Name":"Gavin Lux","Season":2024,"Age":26,"PA":487,"wRC+":98.3,"WAR":1.45,"luck_residual":0.009,"reliability_λ":1.0,"DPIX":106.86},{"Name":"Alek Thomas","Season":2024,"Age":24,"PA":103,"wRC+":65.1,"WAR":-0.19,"luck_residual":0.081,"reliability_λ":1.0,"DPIX":106.84},{"Name":"Cody Bellinger","Season":2024,"Age":28,"PA":569,"wRC+":107.8,"WAR":2.08,"luck_residual":-0.017,"reliability_λ":1.0,"DPIX":106.61},{"Name":"Oneil Cruz","Season":2024,"Age":25,"PA":599,"wRC+":110.3,"WAR":3.6,"luck_residual":0.014,"reliability_λ":0.45,"DPIX":106.59},{"Name":"Gabriel Moreno","Season":2024,"Age":24,"PA":351,"wRC+":107.0,"WAR":2.53,"luck_residual":0.003,"reliability_λ":0.48,"DPIX":106.42},{"Name":"Matt Wallner","Season":2024,"Age":26,"PA":261,"wRC+":154.2,"WAR":2.05,"luck_residual":-0.025,"reliability_λ":0.32,"DPIX":106.04},{"Name":"Matt Vierling","Season":2024,"Age":27,"PA":567,"wRC+":107.0,"WAR":2.34,"luck_residual":-0.006,"reliability_λ":1.0,"DPIX":105.97},{"Name":"Alec Burleson","Season":2024,"Age":25,"PA":595,"wRC+":105.9,"WAR":0.66,"luck_residual":0.014,"reliability_λ":0.43,"DPIX":105.54},{"Name":"Luis Urias","Season":2024,"Age":27,"PA":109,"wRC+":108.0,"WAR":0.2,"luck_residual":0.005,"reliability_λ":0.81,"DPIX":105.4},{"Name":"Logan O'Hoppe","Season":2024,"Age":24,"PA":522,"wRC+":101.6,"WAR":2.14,"luck_residual":0.022,"reliability_λ":0.25,"DPIX":105.28},{"Name":"Max Kepler","Season":2024,"Age":31,"PA":399,"wRC+":92.9,"WAR":0.95,"luck_residual":0.004,"reliability_λ":1.0,"DPIX":105.19},{"Name":"Luis Rengifo","Season":2024,"Age":27,"PA":304,"wRC+":118.2,"WAR":1.49,"luck_residual":-0.035,"reliability_λ":1.0,"DPIX":105.03},{"Name":"Ty France","Season":2024,"Age":29,"PA":535,"wRC+":93.5,"WAR":-0.77,"luck_residual":0.01,"reliability_λ":1.0,"DPIX":104.88},{"Name":"Willi Castro","Season":2024,"Age":27,"PA":635,"wRC+":106.3,"WAR":2.92,"luck_residual":0.006,"reliability_λ":1.0,"DPIX":104.87},{"Name":"Ryan Jeffers","Season":2024,"Age":27,"PA":465,"wRC+":105.9,"WAR":1.56,"luck_residual":-0.009,"reliability_λ":0.71,"DPIX":104.75},{"Name":"Mike Yastrzemski","Season":2024,"Age":33,"PA":474,"wRC+":106.3,"WAR":1.71,"luck_residual":-0.015,"reliability_λ":1.0,"DPIX":104.71},{"Name":"Zach Neto","Season":2024,"Age":23,"PA":602,"wRC+":114.9,"WAR":3.55,"luck_residual":-0.011,"reliability_λ":0.41,"DPIX":104.29},{"Name":"Xander Bogaerts","Season":2024,"Age":31,"PA":463,"wRC+":94.8,"WAR":2.02,"luck_residual":0.009,"reliability_λ":1.0,"DPIX":104.28},{"Name":"Rob Refsnyder","Season":2024,"Age":33,"PA":307,"wRC+":131.8,"WAR":1.35,"luck_residual":-0.031,"reliability_λ":0.52,"DPIX":104.23},{"Name":"Royce Lewis","Season":2024,"Age":25,"PA":325,"wRC+":106.5,"WAR":1.14,"luck_residual":0.001,"reliability_λ":0.3,"DPIX":104.05},{"Name":"Dylan Moore","Season":2024,"Age":31,"PA":441,"wRC+":105.8,"WAR":2.41,"luck_residual":-0.007,"reliability_λ":0.52,"DPIX":103.9},{"Name":"Mark Vientos","Season":2024,"Age":24,"PA":454,"wRC+":132.2,"WAR":2.89,"luck_residual":-0.023,"reliability_λ":0.29,"DPIX":103.59},{"Name":"Maikel Garcia","Season":2024,"Age":24,"PA":626,"wRC+":70.9,"WAR":1.25,"luck_residual":0.035,"reliability_λ":0.64,"DPIX":103.45},{"Name":"Patrick Bailey","Season":2024,"Age":25,"PA":448,"wRC+":81.1,"WAR":4.32,"luck_residual":0.04,"reliability_λ":0.44,"DPIX":103.36},{"Name":"Andrew Benintendi","Season":2024,"Age":29,"PA":522,"wRC+":93.3,"WAR":-0.14,"luck_residual":0.012,"reliability_λ":1.0,"DPIX":103.33},{"Name":"Jonathan Aranda","Season":2024,"Age":26,"PA":143,"wRC+":113.0,"WAR":0.4,"luck_residual":0.041,"reliability_λ":0.24,"DPIX":103.25},{"Name":"Tommy Pham","Season":2024,"Age":36,"PA":478,"wRC+":91.6,"WAR":-0.07,"luck_residual":0.025,"reliability_λ":1.0,"DPIX":103.0},{"Name":"Nolan Schanuel","Season":2024,"Age":22,"PA":607,"wRC+":104.7,"WAR":0.71,"luck_residual":0.007,"reliability_λ":0.16,"DPIX":102.79},{"Name":"Lawrence Butler","Season":2024,"Age":23,"PA":451,"wRC+":130.1,"WAR":3.13,"luck_residual":-0.004,"reliability_λ":0.16,"DPIX":102.66},{"Name":"Wilyer Abreu","Season":2024,"Age":25,"PA":447,"wRC+":115.8,"WAR":3.07,"luck_residual":-0.012,"reliability_λ":0.11,"DPIX":102.49},{"Name":"Nolan Jones","Season":2024,"Age":26,"PA":297,"wRC+":69.1,"WAR":-0.85,"luck_residual":0.004,"reliability_λ":0.65,"DPIX":102.26},{"Name":"Nick Castellanos","Season":2024,"Age":32,"PA":659,"wRC+":103.7,"WAR":0.24,"luck_residual":0.015,"reliability_λ":1.0,"DPIX":102.08},{"Name":"CJ Abrams","Season":2024,"Age":23,"PA":602,"wRC+":106.3,"WAR":1.82,"luck_residual":-0.002,"reliability_λ":1.0,"DPIX":102.06},{"Name":"Davis Schneider","Season":2024,"Age":25,"PA":454,"wRC+":79.8,"WAR":0.36,"luck_residual":0.016,"reliability_λ":0.18,"DPIX":101.96},{"Name":"Spencer Torkelson","Season":2024,"Age":24,"PA":381,"wRC+":91.0,"WAR":0.08,"luck_residual":-0.01,"reliability_λ":1.0,"DPIX":101.67},{"Name":"Tyler Soderstrom","Season":2024,"Age":22,"PA":213,"wRC+":114.3,"WAR":0.3,"luck_residual":0.029,"reliability_λ":0.17,"DPIX":101.62},{"Name":"David Fry","Season":2024,"Age":28,"PA":392,"wRC+":129.4,"WAR":1.73,"luck_residual":-0.015,"reliability_λ":0.14,"DPIX":101.59},{"Name":"Bryson Stott","Season":2024,"Age":26,"PA":571,"wRC+":87.0,"WAR":1.78,"luck_residual":0.016,"reliability_λ":1.0,"DPIX":101.33},{"Name":"Masataka Yoshida","Season":2024,"Age":30,"PA":421,"wRC+":116.4,"WAR":0.87,"luck_residual":-0.009,"reliability_λ":0.72,"DPIX":101.31},{"Name":"Mike Tauchman","Season":2024,"Age":33,"PA":350,"wRC+":110.1,"WAR":1.05,"luck_residual":0.007,"reliability_λ":0.74,"DPIX":101.3},{"Name":"Michael Toglia","Season":2024,"Age":25,"PA":458,"wRC+":97.6,"WAR":0.38,"luck_residual":0.032,"reliability_λ":0.34,"DPIX":101.25},{"Name":"Dominic Canzone","Season":2024,"Age":26,"PA":188,"wRC+":87.6,"WAR":0.06,"luck_residual":0.03,"reliability_λ":0.23,"DPIX":101.21},{"Name":"Rowdy Tellez","Season":2024,"Age":29,"PA":421,"wRC+":90.1,"WAR":-0.43,"luck_residual":0.004,"reliability_λ":1.0,"DPIX":100.83},{"Name":"Danny Jansen","Season":2024,"Age":29,"PA":324,"wRC+":90.1,"WAR":0.55,"luck_residual":-0.0,"reliability_λ":0.69,"DPIX":100.82},{"Name":"Andres Gimenez","Season":2024,"Age":25,"PA":633,"wRC+":83.2,"WAR":2.73,"luck_residual":0.02,"reliability_λ":1.0,"DPIX":100.6},{"Name":"Travis d'Arnaud","Season":2024,"Age":35,"PA":341,"wRC+":103.5,"WAR":1.85,"luck_residual":0.007,"reliability_λ":0.9,"DPIX":100.57},{"Name":"Michael Busch","Season":2024,"Age":26,"PA":567,"wRC+":117.6,"WAR":2.2,"luck_residual":-0.012,"reliability_λ":0.1,"DPIX":100.52},{"Name":"Austin Slater","Season":2024,"Age":31,"PA":212,"wRC+":76.2,"WAR":-0.17,"luck_residual":0.034,"reliability_λ":0.66,"DPIX":100.47},{"Name":"Parker Meadows","Season":2024,"Age":24,"PA":298,"wRC+":109.6,"WAR":2.15,"luck_residual":-0.026,"reliability_λ":0.18,"DPIX":100.42},{"Name":"Francisco Alvarez","Season":2024,"Age":22,"PA":342,"wRC+":101.2,"WAR":1.88,"luck_residual":-0.014,"reliability_λ":0.53,"DPIX":100.35},{"Name":"Masyn Winn","Season":2024,"Age":22,"PA":637,"wRC+":103.8,"WAR":3.61,"luck_residual":-0.02,"reliability_λ":0.17,"DPIX":100.3},{"Name":"Tyler Freeman","Season":2024,"Age":25,"PA":383,"wRC+":84.2,"WAR":0.37,"luck_residual":0.024,"reliability_λ":0.32,"DPIX":100.13},{"Name":"Miguel Amaya","Season":2024,"Age":25,"PA":363,"wRC+":81.7,"WAR":0.6,"luck_residual":0.02,"reliability_λ":0.2,"DPIX":100.1},{"Name":"Jeremy Pena","Season":2024,"Age":26,"PA":650,"wRC+":99.2,"WAR":2.74,"luck_residual":0.009,"reliability_λ":1.0,"DPIX":99.77},{"Name":"Jared Triolo","Season":2024,"Age":26,"PA":446,"wRC+":72.3,"WAR":0.42,"luck_residual":0.022,"reliability_λ":0.26,"DPIX":99.75},{"Name":"Nolan Gorman","Season":2024,"Age":24,"PA":402,"wRC+":87.0,"WAR":0.32,"luck_residual":0.017,"reliability_λ":0.97,"DPIX":99.71},{"Name":"Luis Robert Jr.","Season":2024,"Age":26,"PA":425,"wRC+":84.4,"WAR":0.55,"luck_residual":-0.003,"reliability_λ":1.0,"DPIX":99.62},{"Name":"Lenyn Sosa","Season":2024,"Age":24,"PA":369,"wRC+":80.5,"WAR":0.1,"luck_residual":0.042,"reliability_λ":0.22,"DPIX":99.54},{"Name":"Kyle Stowers","Season":2024,"Age":26,"PA":209,"wRC+":67.8,"WAR":-0.72,"luck_residual":0.026,"reliability_λ":0.12,"DPIX":99.46},{"Name":"Shea Langeliers","Season":2024,"Age":26,"PA":534,"wRC+":109.5,"WAR":1.95,"luck_residual":0.013,"reliability_λ":0.8,"DPIX":99.4},{"Name":"Wilmer Flores","Season":2024,"Age":32,"PA":242,"wRC+":68.2,"WAR":-0.66,"luck_residual":0.029,"reliability_λ":1.0,"DPIX":99.39},{"Name":"Jack Suwinski","Season":2024,"Age":25,"PA":277,"wRC+":62.2,"WAR":-1.14,"luck_residual":0.038,"reliability_λ":1.0,"DPIX":99.34},{"Name":"Ramon Urias","Season":2024,"Age":30,"PA":301,"wRC+":114.3,"WAR":0.9,"luck_residual":0.006,"reliability_λ":1.0,"DPIX":99.22},{"Name":"Enmanuel Valdez","Season":2024,"Age":25,"PA":223,"wRC+":73.3,"WAR":-0.59,"luck_residual":0.033,"reliability_λ":0.19,"DPIX":99.2},{"Name":"Mark Canha","Season":2024,"Age":35,"PA":462,"wRC+":101.4,"WAR":0.84,"luck_residual":-0.017,"reliability_λ":1.0,"DPIX":99.17},{"Name":"Jacob Young","Season":2024,"Age":24,"PA":521,"wRC+":84.3,"WAR":2.69,"luck_residual":0.002,"reliability_λ":0.15,"DPIX":99.11},{"Name":"Dominic Smith","Season":2024,"Age":29,"PA":307,"wRC+":94.4,"WAR":0.21,"luck_residual":0.002,"reliability_λ":0.92,"DPIX":99.08},{"Name":"Carson Kelly","Season":2024,"Age":29,"PA":313,"wRC+":98.3,"WAR":1.77,"luck_residual":0.015,"reliability_λ":0.63,"DPIX":99.02},{"Name":"Leody Taveras","Season":2024,"Age":25,"PA":529,"wRC+":83.9,"WAR":1.19,"luck_residual":0.017,"reliability_λ":1.0,"DPIX":99.01},{"Name":"Jordan Walker","Season":2024,"Age":22,"PA":178,"wRC+":71.9,"WAR":-0.65,"luck_residual":0.01,"reliability_λ":0.58,"DPIX":99.01},{"Name":"Luke Raley","Season":2024,"Age":29,"PA":455,"wRC+":129.2,"WAR":2.27,"luck_residual":-0.018,"reliability_λ":0.51,"DPIX":98.89},{"Name":"Ke'Bryan Hayes","Season":2024,"Age":27,"PA":396,"wRC+":59.7,"WAR":0.12,"luck_residual":0.029,"reliability_λ":1.0,"DPIX":98.87},{"Name":"Jonah Bride","Season":2024,"Age":28,"PA":272,"wRC+":124.4,"WAR":1.06,"luck_residual":-0.047,"reliability_λ":0.37,"DPIX":98.79},{"Name":"Cedric Mullins","Season":2024,"Age":29,"PA":499,"wRC+":103.7,"WAR":2.13,"luck_residual":-0.018,"reliability_λ":1.0,"DPIX":98.76},{"Name":"Xavier Edwards","Season":2024,"Age":24,"PA":303,"wRC+":129.4,"WAR":2.23,"luck_residual":-0.058,"reliability_λ":0.1,"DPIX":98.65},{"Name":"Nick Gonzales","Season":2024,"Age":25,"PA":387,"wRC+":94.2,"WAR":1.34,"luck_residual":0.015,"reliability_λ":0.16,"DPIX":98.54},{"Name":"Lane Thomas","Season":2024,"Age":28,"PA":528,"wRC+":98.8,"WAR":1.38,"luck_residual":0.002,"reliability_λ":1.0,"DPIX":98.54},{"Name":"Anthony Volpe","Season":2024,"Age":23,"PA":689,"wRC+":87.3,"WAR":3.49,"luck_residual":-0.009,"reliability_λ":0.75,"DPIX":98.54},{"Name":"Bo Naylor","Season":2024,"Age":24,"PA":389,"wRC+":74.1,"WAR":1.59,"luck_residual":-0.006,"reliability_λ":0.29,"DPIX":98.52},{"Name":"Zack Gelof","Season":2024,"Age":24,"PA":547,"wRC+":82.2,"WAR":1.42,"luck_residual":-0.003,"reliability_λ":0.38,"DPIX":98.52},{"Name":"Noelvi Marte","Season":2024,"Age":22,"PA":242,"wRC+":47.9,"WAR":-1.43,"luck_residual":0.029,"reliability_λ":0.15,"DPIX":98.51},{"Name":"Curtis Mead","Season":2024,"Age":23,"PA":132,"wRC+":67.4,"WAR":-0.29,"luck_residual":0.027,"reliability_λ":0.12,"DPIX":98.44},{"Name":"Tommy Edman","Season":2024,"Age":29,"PA":153,"wRC+":96.5,"WAR":0.82,"luck_residual":-0.035,"reliability_λ":1.0,"DPIX":98.4},{"Name":"Emmanuel Rivera","Season":2024,"Age":28,"PA":302,"wRC+":86.3,"WAR":0.33,"luck_residual":0.03,"reliability_λ":0.8,"DPIX":98.38},{"Name":"Brice Turang","Season":2024,"Age":24,"PA":619,"wRC+":88.2,"WAR":2.56,"luck_residual":0.007,"reliability_λ":0.56,"DPIX":98.36},{"Name":"Blake Perkins","Season":2024,"Age":27,"PA":434,"wRC+":84.1,"WAR":1.56,"luck_residual":-0.009,"reliability_λ":0.21,"DPIX":98.29},{"Name":"Luis Torrens","Season":2024,"Age":28,"PA":130,"wRC+":89.0,"WAR":0.79,"luck_residual":0.032,"reliability_λ":0.68,"DPIX":98.19},{"Name":"Starling Marte","Season":2024,"Age":35,"PA":370,"wRC+":103.3,"WAR":0.6,"luck_residual":0.029,"reliability_λ":1.0,"DPIX":98.15},{"Name":"Christian Encarnacion-Strand","Season":2024,"Age":24,"PA":123,"wRC+":34.8,"WAR":-0.66,"luck_residual":0.078,"reliability_λ":0.3,"DPIX":98.06},{"Name":"Sal Frelick","Season":2024,"Age":24,"PA":524,"wRC+":86.7,"WAR":1.52,"luck_residual":-0.009,"reliability_λ":0.28,"DPIX":98.02},{"Name":"Luis Matos","Season":2024,"Age":22,"PA":156,"wRC+":59.7,"WAR":-0.82,"luck_residual":0.021,"reliability_λ":0.32,"DPIX":97.99},{"Name":"Ceddanne Rafaela","Season":2024,"Age":23,"PA":571,"wRC+":80.9,"WAR":1.03,"luck_residual":-0.01,"reliability_λ":0.11,"DPIX":97.97},{"Name":"Freddy Fermin","Season":2024,"Age":29,"PA":368,"wRC+":92.2,"WAR":1.93,"luck_residual":-0.019,"reliability_λ":0.29,"DPIX":97.9},{"Name":"Ben Rortvedt","Season":2024,"Age":26,"PA":328,"wRC+":87.0,"WAR":1.36,"luck_residual":-0.013,"reliability_λ":0.12,"DPIX":97.83},{"Name":"Edouard Julien","Season":2024,"Age":25,"PA":301,"wRC+":78.6,"WAR":-0.03,"luck_residual":0.008,"reliability_λ":0.51,"DPIX":97.81},{"Name":"Mitch Garver","Season":2024,"Age":33,"PA":430,"wRC+":88.5,"WAR":-0.39,"luck_residual":0.003,"reliability_λ":0.7,"DPIX":97.73},{"Name":"Matt Thaiss","Season":2024,"Age":29,"PA":186,"wRC+":84.0,"WAR":-0.15,"luck_residual":0.008,"reliability_λ":0.48,"DPIX":97.66},{"Name":"Miguel Andujar","Season":2024,"Age":29,"PA":319,"wRC+":102.9,"WAR":0.43,"luck_residual":-0.019,"reliability_λ":0.29,"DPIX":97.65},{"Name":"Brayan Rocchio","Season":2024,"Age":23,"PA":442,"wRC+":79.2,"WAR":1.06,"luck_residual":0.003,"reliability_λ":0.11,"DPIX":97.59},{"Name":"Miguel Vargas","Season":2024,"Age":24,"PA":237,"wRC+":46.3,"WAR":-1.0,"luck_residual":0.032,"reliability_λ":0.38,"DPIX":97.5},{"Name":"Miles Mastrobuoni","Season":2024,"Age":28,"PA":106,"wRC+":35.3,"WAR":-0.39,"luck_residual":0.086,"reliability_λ":0.19,"DPIX":97.48},{"Name":"Brenton Doyle","Season":2024,"Age":26,"PA":603,"wRC+":96.7,"WAR":3.56,"luck_residual":0.003,"reliability_λ":0.54,"DPIX":97.47},{"Name":"Andruw Monasterio","Season":2024,"Age":27,"PA":142,"wRC+":68.8,"WAR":-0.24,"luck_residual":0.03,"reliability_λ":0.39,"DPIX":97.45},{"Name":"Jake Bauers","Season":2024,"Age":28,"PA":346,"wRC+":88.1,"WAR":0.09,"luck_residual":0.011,"reliability_λ":0.73,"DPIX":97.39},{"Name":"Daulton Varsho","Season":2024,"Age":27,"PA":513,"wRC+":98.6,"WAR":3.18,"luck_residual":-0.038,"reliability_λ":1.0,"DPIX":97.09},{"Name":"Donovan Solano","Season":2024,"Age":36,"PA":309,"wRC+":117.3,"WAR":0.78,"luck_residual":-0.021,"reliability_λ":0.94,"DPIX":96.9},{"Name":"Romy Gonzalez","Season":2024,"Age":27,"PA":216,"wRC+":98.4,"WAR":0.24,"luck_residual":0.006,"reliability_λ":0.26,"DPIX":96.88},{"Name":"Casey Schmitt","Season":2024,"Age":25,"PA":113,"wRC+":109.1,"WAR":0.4,"luck_residual":-0.009,"reliability_λ":0.35,"DPIX":96.8},{"Name":"Joey Bart","Season":2024,"Age":27,"PA":282,"wRC+":121.1,"WAR":1.33,"luck_residual":-0.011,"reliability_λ":0.48,"DPIX":96.69},{"Name":"James McCann","Season":2024,"Age":34,"PA":233,"wRC+":88.3,"WAR":0.15,"luck_residual":0.027,"reliability_λ":0.52,"DPIX":96.17},{"Name":"Dylan Carlson","Season":2024,"Age":25,"PA":265,"wRC+":66.7,"WAR":-1.09,"luck_residual":0.001,"reliability_λ":0.93,"DPIX":96.08},{"Name":"Johan Rojas","Season":2024,"Age":23,"PA":363,"wRC+":66.5,"WAR":1.11,"luck_residual":-0.008,"reliability_λ":0.2,"DPIX":95.98},{"Name":"Brett Baty","Season":2024,"Age":24,"PA":171,"wRC+":82.6,"WAR":0.48,"luck_residual":0.001,"reliability_λ":0.49,"DPIX":95.97},{"Name":"Michael Massey","Season":2024,"Age":26,"PA":356,"wRC+":103.6,"WAR":1.55,"luck_residual":-0.002,"reliability_λ":0.82,"DPIX":95.95},{"Name":"James Outman","Season":2024,"Age":27,"PA":156,"wRC+":52.6,"WAR":-0.35,"luck_residual":0.048,"reliability_λ":0.71,"DPIX":95.51},{"Name":"Alex Call","Season":2024,"Age":29,"PA":113,"wRC+":166.7,"WAR":1.17,"luck_residual":-0.093,"reliability_λ":0.71,"DPIX":95.49},{"Name":"Josh Lowe","Season":2024,"Age":26,"PA":387,"wRC+":98.0,"WAR":0.98,"luck_residual":-0.001,"reliability_λ":0.87,"DPIX":95.14},{"Name":"Gio Urshela","Season":2024,"Age":32,"PA":461,"wRC+":80.4,"WAR":0.68,"luck_residual":0.026,"reliability_λ":0.97,"DPIX":95.08},{"Name":"Isiah Kiner-Falefa","Season":2024,"Age":29,"PA":496,"wRC+":92.8,"WAR":2.06,"luck_residual":-0.01,"reliability_λ":1.0,"DPIX":94.98},{"Name":"Jake McCarthy","Season":2024,"Age":26,"PA":495,"wRC+":110.0,"WAR":2.98,"luck_residual":-0.015,"reliability_λ":0.83,"DPIX":94.93},{"Name":"Riley Adams","Season":2024,"Age":28,"PA":130,"wRC+":74.5,"WAR":-0.27,"luck_residual":0.012,"reliability_λ":0.39,"DPIX":94.77},{"Name":"Jo Adell","Season":2024,"Age":25,"PA":451,"wRC+":91.0,"WAR":0.12,"luck_residual":0.018,"reliability_λ":0.53,"DPIX":94.53},{"Name":"Ezequiel Tovar","Season":2024,"Age":22,"PA":695,"wRC+":94.3,"WAR":3.66,"luck_residual":-0.033,"reliability_λ":0.77,"DPIX":94.52},{"Name":"Gabriel Arias","Season":2024,"Age":24,"PA":161,"wRC+":70.4,"WAR":-0.24,"luck_residual":0.016,"reliability_λ":0.43,"DPIX":94.34},{"Name":"Ernie Clement","Season":2024,"Age":28,"PA":452,"wRC+":93.8,"WAR":2.13,"luck_residual":-0.009,"reliability_λ":0.39,"DPIX":94.28},{"Name":"Ramon Laureano","Season":2024,"Age":29,"PA":309,"wRC+":108.0,"WAR":0.88,"luck_residual":-0.011,"reliability_λ":0.98,"DPIX":93.9},{"Name":"Josh Jung","Season":2024,"Age":26,"PA":188,"wRC+":104.0,"WAR":0.35,"luck_residual":-0.015,"reliability_λ":0.77,"DPIX":93.73},{"Name":"Tyrone Taylor","Season":2024,"Age":30,"PA":345,"wRC+":97.0,"WAR":1.0,"luck_residual":0.002,"reliability_λ":0.81,"DPIX":93.66},{"Name":"Henry Davis","Season":2024,"Age":24,"PA":122,"wRC+":30.9,"WAR":-0.7,"luck_residual":0.012,"reliability_λ":0.32,"DPIX":93.11},{"Name":"Jake Rogers","Season":2024,"Age":29,"PA":337,"wRC+":69.6,"WAR":2.15,"luck_residual":0.038,"reliability_λ":0.62,"DPIX":93.05},{"Name":"Will Benson","Season":2024,"Age":26,"PA":388,"wRC+":76.4,"WAR":-0.58,"luck_residual":-0.013,"reliability_λ":0.41,"DPIX":92.98},{"Name":"Jason Heyward","Season":2024,"Age":34,"PA":258,"wRC+":93.0,"WAR":0.84,"luck_residual":-0.008,"reliability_λ":0.66,"DPIX":92.83},{"Name":"Josh Rojas","Season":2024,"Age":30,"PA":476,"wRC+":91.5,"WAR":1.9,"luck_residual":0.01,"reliability_λ":1.0,"DPIX":92.7},{"Name":"Hunter Renfroe","Season":2024,"Age":32,"PA":424,"wRC+":93.4,"WAR":0.1,"luck_residual":-0.008,"reliability_λ":1.0,"DPIX":92.59},{"Name":"Keibert Ruiz","Season":2024,"Age":25,"PA":485,"wRC+":70.1,"WAR":-0.31,"luck_residual":0.014,"reliability_λ":1.0,"DPIX":92.58},{"Name":"Geraldo Perdomo","Season":2024,"Age":24,"PA":388,"wRC+":101.9,"WAR":2.03,"luck_residual":-0.029,"reliability_λ":1.0,"DPIX":92.45},{"Name":"Abraham Toro","Season":2024,"Age":27,"PA":364,"wRC+":86.8,"WAR":0.7,"luck_residual":0.014,"reliability_λ":0.91,"DPIX":92.33},{"Name":"Miguel Rojas","Season":2024,"Age":35,"PA":337,"wRC+":110.0,"WAR":2.77,"luck_residual":-0.015,"reliability_λ":1.0,"DPIX":92.18},{"Name":"Alex Jackson","Season":2024,"Age":28,"PA":155,"wRC+":28.6,"WAR":-0.12,"luck_residual":0.024,"reliability_λ":0.19,"DPIX":92.18},{"Name":"Jose Caballero","Season":2024,"Age":27,"PA":483,"wRC+":82.8,"WAR":1.92,"luck_residual":-0.01,"reliability_λ":0.35,"DPIX":91.83},{"Name":"Kevin Newman","Season":2024,"Age":30,"PA":311,"wRC+":89.3,"WAR":1.37,"luck_residual":-0.023,"reliability_λ":0.7,"DPIX":91.83},{"Name":"Jake Fraley","Season":2024,"Age":29,"PA":382,"wRC+":95.9,"WAR":1.0,"luck_residual":-0.024,"reliability_λ":0.78,"DPIX":91.68},{"Name":"Kody Clemens","Season":2024,"Age":28,"PA":120,"wRC+":90.4,"WAR":0.1,"luck_residual":-0.044,"reliability_λ":0.34,"DPIX":91.66},{"Name":"Jeimer Candelario","Season":2024,"Age":30,"PA":463,"wRC+":88.9,"WAR":-0.25,"luck_residual":-0.018,"reliability_λ":1.0,"DPIX":91.62},{"Name":"Jose Herrera","Season":2024,"Age":27,"PA":114,"wRC+":70.6,"WAR":0.17,"luck_residual":-0.008,"reliability_λ":0.3,"DPIX":91.48},{"Name":"Derek Hill","Season":2024,"Age":28,"PA":172,"wRC+":89.5,"WAR":0.23,"luck_residual":0.001,"reliability_λ":0.3,"DPIX":91.47},{"Name":"Kyle Isbel","Season":2024,"Age":27,"PA":426,"wRC+":82.3,"WAR":1.49,"luck_residual":-0.004,"reliability_λ":0.74,"DPIX":91.42},{"Name":"Oswaldo Cabrera","Season":2024,"Age":25,"PA":326,"wRC+":89.0,"WAR":0.96,"luck_residual":0.003,"reliability_λ":0.63,"DPIX":91.41},{"Name":"Jonah Heim","Season":2024,"Age":29,"PA":491,"wRC+":72.0,"WAR":-0.06,"luck_residual":0.016,"reliability_λ":1.0,"DPIX":91.06},{"Name":"Austin Hays","Season":2024,"Age":28,"PA":255,"wRC+":96.8,"WAR":0.21,"luck_residual":-0.01,"reliability_λ":1.0,"DPIX":90.93},{"Name":"Jeff McNeil","Season":2024,"Age":32,"PA":472,"wRC+":96.9,"WAR":1.26,"luck_residual":-0.011,"reliability_λ":1.0,"DPIX":90.89},{"Name":"Andy Ibanez","Season":2024,"Age":31,"PA":244,"wRC+":85.6,"WAR":0.73,"luck_residual":-0.016,"reliability_λ":0.64,"DPIX":90.81},{"Name":"Kyle Farmer","Season":2024,"Age":33,"PA":242,"wRC+":83.7,"WAR":0.52,"luck_residual":0.011,"reliability_λ":1.0,"DPIX":90.4},{"Name":"Orlando Arcia","Season":2024,"Age":29,"PA":602,"wRC+":72.5,"WAR":0.83,"luck_residual":-0.007,"reliability_λ":0.96,"DPIX":90.28},{"Name":"Connor Joe","Season":2024,"Age":31,"PA":416,"wRC+":92.8,"WAR":0.52,"luck_residual":-0.026,"reliability_λ":1.0,"DPIX":90.18},{"Name":"Amed Rosario","Season":2024,"Age":28,"PA":346,"wRC+":96.4,"WAR":0.22,"luck_residual":-0.015,"reliability_λ":1.0,"DPIX":90.14},{"Name":"Edmundo Sosa","Season":2024,"Age":28,"PA":274,"wRC+":102.2,"WAR":1.87,"luck_residual":-0.013,"reliability_λ":0.61,"DPIX":90.06},{"Name":"Vidal Brujan","Season":2024,"Age":26,"PA":278,"wRC+":73.6,"WAR":-0.29,"luck_residual":-0.008,"reliability_λ":0.31,"DPIX":89.86},{"Name":"Jake Meyers","Season":2024,"Age":28,"PA":513,"wRC+":84.8,"WAR":1.94,"luck_residual":0.022,"reliability_λ":0.63,"DPIX":89.73},{"Name":"Kyle Higashioka","Season":2024,"Age":34,"PA":263,"wRC+":104.3,"WAR":1.56,"luck_residual":-0.015,"reliability_λ":0.64,"DPIX":89.58},{"Name":"Jose Trevino","Season":2024,"Age":31,"PA":234,"wRC+":84.7,"WAR":1.66,"luck_residual":-0.014,"reliability_λ":0.65,"DPIX":89.35},{"Name":"Zach McKinstry","Season":2024,"Age":29,"PA":325,"wRC+":73.9,"WAR":1.01,"luck_residual":0.032,"reliability_λ":0.88,"DPIX":88.85},{"Name":"Chris Taylor","Season":2024,"Age":33,"PA":246,"wRC+":73.0,"WAR":-0.58,"luck_residual":0.025,"reliability_λ":1.0,"DPIX":88.69},{"Name":"Connor Wong","Season":2024,"Age":28,"PA":487,"wRC+":112.0,"WAR":1.13,"luck_residual":-0.039,"reliability_λ":0.5,"DPIX":88.42},{"Name":"Garrett Hampson","Season":2024,"Age":29,"PA":231,"wRC+":60.3,"WAR":0.49,"luck_residual":-0.005,"reliability_λ":0.6,"DPIX":88.22},{"Name":"Chas McCormick","Season":2024,"Age":29,"PA":267,"wRC+":65.3,"WAR":-0.23,"luck_residual":0.029,"reliability_λ":1.0,"DPIX":88.11},{"Name":"Gavin Sheets","Season":2024,"Age":28,"PA":501,"wRC+":88.2,"WAR":-0.82,"luck_residual":0.021,"reliability_λ":0.94,"DPIX":87.79},{"Name":"Mickey Moniak","Season":2024,"Age":26,"PA":418,"wRC+":80.2,"WAR":0.12,"luck_residual":0.006,"reliability_λ":0.54,"DPIX":87.54},{"Name":"Enrique Hernandez","Season":2024,"Age":32,"PA":393,"wRC+":81.8,"WAR":0.63,"luck_residual":0.004,"reliability_λ":1.0,"DPIX":87.1},{"Name":"Tyler Wade","Season":2024,"Age":29,"PA":156,"wRC+":56.2,"WAR":-0.32,"luck_residual":0.043,"reliability_λ":0.38,"DPIX":87.06},{"Name":"Harrison Bader","Season":2024,"Age":30,"PA":437,"wRC+":84.7,"WAR":1.23,"luck_residual":0.014,"reliability_λ":0.82,"DPIX":87.03},{"Name":"Santiago Espinal","Season":2024,"Age":29,"PA":391,"wRC+":76.2,"WAR":0.04,"luck_residual":0.01,"reliability_λ":0.93,"DPIX":86.9},{"Name":"Paul DeJong","Season":2024,"Age":30,"PA":482,"wRC+":95.7,"WAR":1.78,"luck_residual":-0.009,"reliability_λ":0.8,"DPIX":86.33},{"Name":"Cavan Biggio","Season":2024,"Age":29,"PA":224,"wRC+":83.5,"WAR":0.11,"luck_residual":-0.025,"reliability_λ":0.8,"DPIX":86.12},{"Name":"TJ Friedl","Season":2024,"Age":28,"PA":341,"wRC+":89.9,"WAR":0.28,"luck_residual":-0.008,"reliability_λ":1.0,"DPIX":85.72},{"Name":"Jorge Mateo","Season":2024,"Age":29,"PA":208,"wRC+":86.5,"WAR":0.76,"luck_residual":-0.008,"reliability_λ":1.0,"DPIX":85.61},{"Name":"Ildemaro Vargas","Season":2024,"Age":32,"PA":303,"wRC+":71.8,"WAR":0.02,"luck_residual":0.015,"reliability_λ":0.64,"DPIX":85.51},{"Name":"Reese McGuire","Season":2024,"Age":29,"PA":158,"wRC+":61.6,"WAR":0.18,"luck_residual":0.025,"reliability_λ":0.6,"DPIX":85.41},{"Name":"Ezequiel Duran","Season":2024,"Age":25,"PA":285,"wRC+":75.2,"WAR":0.19,"luck_residual":-0.013,"reliability_λ":0.82,"DPIX":85.25},{"Name":"Jacob Stallings","Season":2024,"Age":34,"PA":281,"wRC+":113.3,"WAR":0.91,"luck_residual":-0.032,"reliability_λ":0.82,"DPIX":84.84},{"Name":"Adam Frazier","Season":2024,"Age":32,"PA":294,"wRC+":64.7,"WAR":-0.52,"luck_residual":0.029,"reliability_λ":1.0,"DPIX":84.31},{"Name":"Mauricio Dubon","Season":2024,"Age":29,"PA":428,"wRC+":86.0,"WAR":1.11,"luck_residual":-0.011,"reliability_λ":0.95,"DPIX":83.04},{"Name":"Trevor Story","Season":2024,"Age":31,"PA":106,"wRC+":103.1,"WAR":0.66,"luck_residual":-0.058,"reliability_λ":0.7,"DPIX":82.7},{"Name":"Andrew Knizner","Season":2024,"Age":29,"PA":93,"wRC+":7.8,"WAR":-0.61,"luck_residual":0.079,"reliability_λ":0.67,"DPIX":82.12},{"Name":"Nick Fortes","Season":2024,"Age":27,"PA":335,"wRC+":58.0,"WAR":0.57,"luck_residual":-0.006,"reliability_λ":0.7,"DPIX":81.79},{"Name":"Javier Baez","Season":2024,"Age":31,"PA":289,"wRC+":41.5,"WAR":-0.73,"luck_residual":0.044,"reliability_λ":1.0,"DPIX":81.19},{"Name":"Taylor Walls","Season":2024,"Age":27,"PA":252,"wRC+":60.3,"WAR":-0.16,"luck_residual":0.01,"reliability_λ":1.0,"DPIX":80.38},{"Name":"Jose Iglesias","Season":2024,"Age":34,"PA":291,"wRC+":136.1,"WAR":2.54,"luck_residual":-0.046,"reliability_λ":1.0,"DPIX":77.92},{"Name":"Thairo Estrada","Season":2024,"Age":28,"PA":381,"wRC+":64.3,"WAR":0.4,"luck_residual":0.009,"reliability_λ":1.0,"DPIX":76.87},{"Name":"Elias Diaz","Season":2024,"Age":33,"PA":351,"wRC+":80.8,"WAR":0.48,"luck_residual":-0.022,"reliability_λ":1.0,"DPIX":76.59},{"Name":"Christian Vazquez","Season":2024,"Age":33,"PA":315,"wRC+":59.1,"WAR":0.73,"luck_residual":0.022,"reliability_λ":0.98,"DPIX":76.51},{"Name":"Michael A. Taylor","Season":2024,"Age":33,"PA":300,"wRC+":50.4,"WAR":0.42,"luck_residual":0.028,"reliability_λ":1.0,"DPIX":75.55},{"Name":"Nick Allen","Season":2024,"Age":25,"PA":105,"wRC+":33.2,"WAR":-0.59,"luck_residual":0.017,"reliability_λ":0.82,"DPIX":73.49},{"Name":"Tim Anderson","Season":2024,"Age":31,"PA":241,"wRC+":27.8,"WAR":-1.4,"luck_residual":0.028,"reliability_λ":1.0,"DPIX":69.28},{"Name":"Austin Hedges","Season":2024,"Age":31,"PA":146,"wRC+":19.9,"WAR":0.41,"luck_residual":-0.021,"reliability_λ":0.69,"DPIX":66.74},{"Name":"Martin Maldonado","Season":2024,"Age":37,"PA":147,"wRC+":11.4,"WAR":-1.51,"luck_residual":0.04,"reliability_λ":0.98,"DPIX":60.24}];

const WEIGHTS = [
  { name: 'marcel_xwOBA',    value: 0.1817 },
  { name: 'marcel_wRC+',     value: 0.1747 },
  { name: 'wRC+_age_resid',  value: 0.1691 },
  { name: 'marcel_Barrel%',  value: 0.1529 },
  { name: 'marcel_BB%',      value: 0.1440 },
  { name: 'marcel_K%',       value: 0.0741 },
  { name: 'luck_residual',   value: 0.0657 },
  { name: 'delta_wRC+',      value: 0.0379 },
];

const MODEL_PERF = {
  labels: ['Ridge', 'GBM', 'Ensemble'],
  rmse:   [24.662, 24.101, 24.135],
  r2:     [0.3008, 0.3322, 0.3303],
};

const CV_RMSE = {
  ratios: [0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
  values: [23.3494, 23.3343, 23.3542, 23.409, 23.4985, 23.6221],
};

/* ─── NAV scroll behavior ─── */
(function initNav() {
  const nav = document.getElementById('nav');
  const links = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);

    let current = '';
    document.querySelectorAll('section[id]').forEach(s => {
      if (window.scrollY >= s.offsetTop - 90) current = s.id;
    });
    links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  });
})();

/* ─── Hamburger menu ─── */
(function initHamburger() {
  const btn     = document.getElementById('nav-hamburger');
  const panel   = document.getElementById('nav-mobile');
  const overlay = document.getElementById('nav-overlay');
  if (!btn) return;

  function open() {
    btn.classList.add('open');
    panel.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    btn.setAttribute('aria-label', '메뉴 닫기');
  }
  function close() {
    btn.classList.remove('open');
    panel.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    btn.setAttribute('aria-label', '메뉴 열기');
  }

  btn.addEventListener('click', () => btn.classList.contains('open') ? close() : open());
  overlay.addEventListener('click', close);
  panel.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  // Sync active state with desktop nav
  window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section[id]').forEach(s => {
      if (window.scrollY >= s.offsetTop - 90) current = s.id;
    });
    panel.querySelectorAll('a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  });
})();

/* ─── Reveal on scroll ─── */
(function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();

/* ─── Animated counter ─── */
function animateCounter(el, target, decimals = 2, duration = 1200) {
  const start = performance.now();
  (function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - t, 3);
    el.textContent = (target * ease).toFixed(decimals);
    if (t < 1) requestAnimationFrame(tick);
  })(start);
}

/* ─── Animated weight bars ─── */
(function initWeightBars() {
  const maxVal = Math.max(...WEIGHTS.map(w => w.value));
  const container = document.getElementById('weight-bars');
  if (!container) return;

  WEIGHTS.forEach(w => {
    const pct = (w.value / maxVal * 100).toFixed(1);
    const row = document.createElement('div');
    row.className = 'weight-row reveal';
    row.innerHTML = `
      <div class="weight-name">${w.name}</div>
      <div class="weight-bar-track">
        <div class="weight-bar-fill" data-width="${pct}"></div>
      </div>
      <div class="weight-value">${(w.value * 100).toFixed(1)}%</div>
    `;
    container.appendChild(row);
  });

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.weight-bar-fill').forEach(bar => {
          setTimeout(() => {
            bar.style.width = bar.dataset.width + '%';
          }, 100);
        });
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  obs.observe(container);
})();

/* ─── Chart.js defaults ─── */
function applyChartDefaults() {
  if (!window.Chart) return;
  Chart.defaults.color = '#8fa8c8';
  Chart.defaults.font.family = "'Space Mono', monospace";
  Chart.defaults.font.size = 11;
  Chart.defaults.plugins.legend.labels.padding = 20;
  Chart.defaults.plugins.tooltip.backgroundColor = '#0d1829';
  Chart.defaults.plugins.tooltip.borderColor = '#1e3150';
  Chart.defaults.plugins.tooltip.borderWidth = 1;
  Chart.defaults.plugins.tooltip.titleColor = '#e2d9c8';
  Chart.defaults.plugins.tooltip.bodyColor = '#8fa8c8';
  Chart.defaults.plugins.tooltip.padding = 10;
}

/* ─── Model performance chart ─── */
function initModelChart() {
  const ctx = document.getElementById('modelChart');
  if (!ctx || !window.Chart) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: MODEL_PERF.labels,
      datasets: [
        {
          label: 'RMSE (낮을수록 우수)',
          data: MODEL_PERF.rmse,
          backgroundColor: [
            'rgba(61,122,181,.6)',
            'rgba(200,168,75,.6)',
            'rgba(42,128,96,.6)',
          ],
          borderColor: [
            'rgba(61,122,181,1)',
            'rgba(200,168,75,1)',
            'rgba(42,128,96,1)',
          ],
          borderWidth: 1,
          borderRadius: 4,
          yAxisID: 'y',
        },
        {
          label: 'R² (높을수록 우수)',
          data: MODEL_PERF.r2,
          backgroundColor: 'transparent',
          borderColor: '#4a5a72',
          borderWidth: 1.5,
          borderDash: [4, 3],
          pointBackgroundColor: ['#3d7ab5','#c8a84b','#2a8060'],
          pointRadius: 5,
          type: 'line',
          yAxisID: 'y2',
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom' },
        tooltip: {
          callbacks: {
            label(ctx) {
              if (ctx.datasetIndex === 0) return `RMSE: ${ctx.raw.toFixed(3)}`;
              return `R²: ${ctx.raw.toFixed(4)}`;
            }
          }
        }
      },
      scales: {
        y: {
          min: 23.8,
          max: 25.0,
          grid: { color: 'rgba(30,49,80,.5)' },
          ticks: { callback: v => v.toFixed(2) },
          title: { display: true, text: 'RMSE', color: '#4d6585' },
        },
        y2: {
          position: 'right',
          min: 0.28,
          max: 0.36,
          grid: { display: false },
          ticks: { callback: v => v.toFixed(3) },
          title: { display: true, text: 'R²', color: '#4d6585' },
        },
        x: { grid: { display: false } }
      }
    }
  });
}

/* ─── CV blend chart ─── */
function initBlendChart() {
  const ctx = document.getElementById('blendChart');
  if (!ctx || !window.Chart) return;

  const colors = CV_RMSE.ratios.map(r => r === 0.6 ? '#c8a84b' : 'rgba(61,122,181,.5)');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: CV_RMSE.ratios.map(r => `Ridge ${(r*100).toFixed(0)}%`),
      datasets: [{
        label: 'CV RMSE',
        data: CV_RMSE.values,
        backgroundColor: colors,
        borderColor: colors.map(c => c === '#c8a84b' ? '#e5c96a' : '#3d7ab5'),
        borderWidth: 1,
        borderRadius: 3,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => `CV RMSE: ${ctx.raw.toFixed(4)}`,
            afterLabel: ctx => ctx.dataIndex === 1 ? '← 최적 비율 (Ridge 60% / GBM 40%)' : ''
          }
        }
      },
      scales: {
        y: {
          min: 23.28,
          max: 23.65,
          grid: { color: 'rgba(30,49,80,.5)' },
          ticks: { callback: v => v.toFixed(3) }
        },
        x: { grid: { display: false } }
      }
    }
  });
}

/* ─── Rankings table ─── */
(function initTable() {
  const ROWS_PER_PAGE = 15;
  let sortCol = 'DPIX';
  let sortDir = -1; // -1 = desc, 1 = asc
  let query = '';
  let page = 1;

  const tbody   = document.getElementById('rankings-tbody');
  const search  = document.getElementById('rankings-search');
  const info    = document.getElementById('table-info');
  const paginEl = document.getElementById('pagination');

  if (!tbody) return;

  function getFiltered() {
    const q = query.toLowerCase();
    return PLAYERS
      .filter(p => p.Name.toLowerCase().includes(q))
      .sort((a, b) => {
        const va = a[sortCol] ?? 0, vb = b[sortCol] ?? 0;
        if (typeof va === 'string') return sortDir * va.localeCompare(vb);
        return sortDir * (vb - va);
      });
  }

  function rankMedal(rank) {
    if (rank === 1) return `<span class="rank-medal g">1</span>`;
    if (rank === 2) return `<span class="rank-medal s">2</span>`;
    if (rank === 3) return `<span class="rank-medal b">3</span>`;
    return `<span class="col-rank">${rank}</span>`;
  }

  function render() {
    const data = getFiltered();
    const total = data.length;
    const totalPages = Math.max(1, Math.ceil(total / ROWS_PER_PAGE));
    page = Math.min(page, totalPages);
    const slice = data.slice((page - 1) * ROWS_PER_PAGE, page * ROWS_PER_PAGE);

    const maxDpix = 200;

    tbody.innerHTML = slice.map((p, i) => {
      const rank = (page - 1) * ROWS_PER_PAGE + i + 1;
      const isTop3 = rank <= 3;
      const dpixPct = (p.DPIX / maxDpix * 100).toFixed(1);
      const luck = p.luck_residual;
      const luckFmt = luck >= 0
        ? `<span class="luck-pos">+${luck.toFixed(3)}</span>`
        : `<span class="luck-neg">${luck.toFixed(3)}</span>`;
      const lambda = p['reliability_λ'] < 1
        ? `<span class="lambda-badge lambda-partial">λ ${p['reliability_λ'].toFixed(2)}</span>`
        : `<span class="lambda-badge lambda-full">1.00</span>`;
      return `
        <tr class="${isTop3 ? 'top3' : ''}">
          <td class="col-rank">${rankMedal(rank)}</td>
          <td class="col-name">${p.Name}</td>
          <td class="col-mono">${p.Age}</td>
          <td class="col-mono">${p.PA.toLocaleString()}</td>
          <td class="col-mono">${p['wRC+'].toFixed(1)}</td>
          <td class="col-mono">${p.WAR.toFixed(2)}</td>
          <td>${luckFmt}</td>
          <td>${lambda}</td>
          <td class="col-dpix" style="color: ${dpixColor(p.DPIX)}">
            <div class="dpix-bar-cell">
              <div class="dpix-mini-bar" style="width:${dpixPct}px; max-width:80px"></div>
              ${p.DPIX.toFixed(2)}
            </div>
          </td>
        </tr>`;
    }).join('');

    info.textContent = `${total}명 중 ${(page - 1) * ROWS_PER_PAGE + 1}–${Math.min(page * ROWS_PER_PAGE, total)}번`;

    // Pagination
    const pages = [];
    pages.push(`<button class="page-btn" ${page===1?'disabled':''} id="pg-prev">←</button>`);
    const showPages = getPageNumbers(page, totalPages);
    showPages.forEach(p => {
      if (p === '...') {
        pages.push(`<span style="color:var(--text-muted);padding:0 .3rem">…</span>`);
      } else {
        pages.push(`<button class="page-btn ${p === page ? 'active' : ''}" data-page="${p}">${p}</button>`);
      }
    });
    pages.push(`<button class="page-btn" ${page===totalPages?'disabled':''} id="pg-next">→</button>`);
    paginEl.innerHTML = pages.join('');

    paginEl.querySelectorAll('[data-page]').forEach(btn => {
      btn.addEventListener('click', () => { page = +btn.dataset.page; render(); });
    });
    const prev = paginEl.querySelector('#pg-prev');
    const next = paginEl.querySelector('#pg-next');
    if (prev) prev.addEventListener('click', () => { if (page > 1) { page--; render(); }});
    if (next) next.addEventListener('click', () => { if (page < totalPages) { page++; render(); }});
  }

  function getPageNumbers(current, total) {
    if (total <= 7) return Array.from({length:total},(_,i)=>i+1);
    const pages = [1];
    if (current > 3) pages.push('...');
    for (let p = Math.max(2,current-1); p <= Math.min(total-1,current+1); p++) pages.push(p);
    if (current < total - 2) pages.push('...');
    pages.push(total);
    return pages;
  }

  function dpixColor(v) {
    if (v >= 180) return '#c8a84b';
    if (v >= 150) return '#e2d9c8';
    if (v >= 130) return '#8fa8c8';
    return '#4d6585';
  }

  // Sort headers
  document.querySelectorAll('#rankings-table th[data-col]').forEach(th => {
    th.addEventListener('click', () => {
      const col = th.dataset.col;
      if (sortCol === col) sortDir *= -1;
      else { sortCol = col; sortDir = -1; }
      page = 1;
      document.querySelectorAll('#rankings-table th').forEach(t => t.classList.remove('sorted'));
      th.classList.add('sorted');
      th.querySelector('.sort-indicator').textContent = sortDir === -1 ? '↓' : '↑';
      render();
    });
  });

  search.addEventListener('input', () => {
    query = search.value;
    page = 1;
    render();
  });

  render();
})();

/* ─── Lightbox ─── */
(function initLightbox() {
  const box = document.getElementById('lightbox');
  const boxImg = document.getElementById('lightbox-img');
  if (!box) return;

  document.querySelectorAll('.img-card img').forEach(img => {
    img.addEventListener('click', () => {
      boxImg.src = img.src;
      box.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  box.addEventListener('click', (e) => {
    if (e.target === box || e.target.closest('.lightbox-close')) {
      box.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      box.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
})();

/* ─── Hero counters ─── */
(function initHeroCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll('[data-count]').forEach(el => {
          const target = parseFloat(el.dataset.count);
          const dec = parseInt(el.dataset.dec ?? 0);
          animateCounter(el, target, dec, 1400);
        });
        obs.disconnect();
      }
    });
  }, { threshold: 0.5 });
  const hero = document.getElementById('hero');
  if (hero) obs.observe(hero);
})();

/* ─── Chart init after DOM ─── */
window.addEventListener('load', () => {
  applyChartDefaults();
  initModelChart();
  initBlendChart();
});

/* ─── Re-init reveal after page load (for late observers) ─── */
document.addEventListener('DOMContentLoaded', () => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
});