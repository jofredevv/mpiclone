export interface Profile {
  name: string;
  username: string;
  image: string;
  description: string;
  tags: string[];
  tempos: number;
}

export const profiles: Profile[] = [
  {
    name: 'Arturo Pérez-Reverte',
    username: 'PerezReverte',
    image: '/src/assets/profile-images/arturo-perez-reverte.jpg',
    description: 'Este es el buzón público de Arturo Pérez-Reverte, escritor y periodista español, miembro de la Real Academia Española desde 2003. Antiguo corresponsal de RTVE y reportero destacado en diversos con...',
    tags: ['Escritores', 'Autor', 'Cultura', 'Literatura', 'Historia'],
    tempos: 800
  },
  {
    name: 'Cayetana Guillén Cuervo',
    username: 'CayetanaGuillenCuervo',
    image: '/src/assets/profile-images/cayetana-guillen-cuervo.jpg',
    description: 'Debuta en TVE con la serie Segunda enseñanza y compagina su actividad profesional con la Compañía Nacional de Teatro Clásico, a las órdenes de Adolfo Marsillach. Licenciada en Arte Dramático y Ci...',
    tags: ['Actrices y Actores', 'Televisión', 'cine', 'comunicación'],
    tempos: 500
  },
  {
    name: 'Pablo Motos',
    username: 'PabloMotos',
    image: '/src/assets/profile-images/pablo-motos.jpg',
    description: 'Hola, este es el buzón público de Pablo Motos, presentador nacido en Requena, ex DJ, ganador del Festival de Benidorm... y poco más...',
    tags: ['Periodismo', 'Radio', 'Televisión'],
    tempos: 800
  },
  {
    name: 'David Summers',
    username: 'DavidSummers',
    image: '/src/assets/profile-images/david-summers.jpg',
    description: 'Este es el buzón público de David Summers. Músico, compositor y líder de Hombres G, junto con Rafa, Javi y Dani, desde 1982. Autor de 13 discos con Hombres G y de 4 en solitario. Si deseas un víde...',
    tags: ['Música'],
    tempos: 500
  },
  {
    name: 'Fernando Ruiz Hierro',
    username: 'FernandoHierro',
    image: '/src/assets/profile-images/fernando-hierro.jpg',
    description: 'Este es el buzón público de Fernando Hierro jugador de fútbol (Real Valladolid, Real Madrid, Al-Rayyan S. C. y Bolton Wanderers) y entrenador de fútbol (Real Oviedo y Selección Española). Además...',
    tags: ['Deporte', 'Fútbol', 'Real Madrid'],
    tempos: 500
  },
  {
    name: 'Iker Casillas',
    username: 'IkerCasillas',
    image: '/src/assets/profile-images/iker-casillas.jpg',
    description: 'Y como no sabía que era imposible, lo hizo. Este el buzón público de Iker Casillas, ex-futbolista, portero del Real Madrid C.F. y F.C. Porto, y actualmente Adjunto al Director General en la Funda...',
    tags: ['Deporte', 'Business Angel', 'ONG', 'fútbol', 'e-sports', 'Real Madrid'],
    tempos: 800
  },
  {
    name: 'Maria Zabay Bes',
    username: 'MariaZabay',
    image: '/src/assets/profile-images/maria-zabay.jpg',
    description: 'Este es el buzón público de contacto de María Zabay mi móvil. Soy presentadora de televisión y eventos, escritora y asesora de comunicación. Entrevisto a personas interesantes en "El Foco</s...',
    tags: ['Periodismo', 'Escritores', 'Televisión', 'Autor', 'Presentador', 'Coaching', 'Eventos', 'Energía'],
    tempos: 800
  },
  {
    name: 'Iker Jiménez',
    username: 'IkerJimenez',
    image: '/src/assets/profile-images/iker-jimenez.jpg',
    description: 'Soy periodista. Hago televisión y también música. Cuarto Milenio y Horizonte son mis territorios audiovisuales de exploración. Estoy ahora inmerso en la Inteligencia Artificial. Me gusta buscar y...',
    tags: ['Arte & Multimedia', 'Periodismo', 'Música', 'Televisión', 'videomakers'],
    tempos: 300
  },
  {
    name: 'Jorge Valdano',
    username: 'JorgeValdano',
    image: '/src/assets/profile-images/jorge-valdano.jpg',
    description: 'Este es el buzón público de Jorge Valdano [https://MyPublicInbox.com/JorgeValdano] jugador de fútbol (Newell\'s Old Boys, Deportivo Alavés, Real Zaragoza y Real Madrid) y entrenador de fútbol (Depo...',
    tags: ['Periodismo', 'Deporte', 'Divulgador/a', 'fútbol', 'Real Madrid'],
    tempos: 500
  },
  {
    name: 'Lorena Van Heerde',
    username: 'LorenaVanheerde',
    image: '/src/assets/profile-images/lorena-vanheerde.jpg',
    description: 'Figura pública, 👩🏼‍💼 Periodista 🎓 Título propio Experto multimedia Miss 👸 España/ Modelo 👠 Internacional Por favor, utiliza este buzón de contacto para actividades que tengan que ver con m...',
    tags: ['Moda', 'Influencers', 'Modelos'],
    tempos: 300
  },
  {
    name: 'José Ramón de la Morena',
    username: 'JRdelaMorena',
    image: '/src/assets/profile-images/jr-morena.jpg',
    description: 'Este es el buzón público de José Ramón de la Morena Pozuelo un chaval de Bruneteque soñó con ser periodista. Fundé el programa El larguero en la Cadena Ser para acercar el deporte a los aficionado...',
    tags: ['Radio', 'Deporte', 'Asociación sin ánimo de lucro', 'fútbol'],
    tempos: 300
  },
  {
    name: 'Carlos Sobera',
    username: 'Sobera',
    image: '/src/assets/profile-images/carlos-sobera.jpg',
    description: 'Este es el buzón público de Carlos Sobera. Actor, presentador de televisión, empresario teatral y exprofesor universitario español. https://arequipaproduccion.com/ [https://arequipaproduccio...',
    tags: ['Televisión', 'Artes escénicas', 'comunicación', 'Presentador'],
    tempos: 500
  },
  {
    name: 'Francisco Javier Álvarez Beret',
    username: 'beret',
    image: '/src/assets/profile-images/beret.jpg',
    description: 'Beret es uno de los artistas más reconocidos en los últimos tiempos. Para muchos es considerado como el "fenómeno musical pop propio del siglo XXI". ¡Casi nada! En un tiempo verdaderamente récord....',
    tags: ['Música', 'CLEB'],
    tempos: 300
  },
  {
    name: 'David Villa',
    username: 'DavidVilla',
    image: '/src/assets/profile-images/david-villa.jpg',
    description: 'Este el buzón público de David Villa, ex-futbolista y actualmente Presidente de DV7 Group, con el que promovemos las escuelas de fútbol DV7 Academy y el desarrollo de carreras profesionales y mark...',
    tags: ['Deporte', 'Business Angel', 'fútbol'],
    tempos: 500
  },
  {
    name: 'Rodrigo Cortés',
    username: 'RodrigoCortes',
    image: '/src/assets/profile-images/rodrigo-cortes.jpg',
    description: 'Mi nombre es Rodrigo Cortés [https://MyPublicInbox.com/RodrigoCortes]. Tú mataste a mi padre. Si quieres afearme algo, Twitter es el lugar perfecto. Si deseas plantear alguna consulta o hacerme l...',
    tags: ['Música', 'Radio', 'Literatura', 'cine', 'Podcast'],
    tempos: 500
  },
  {
    name: 'Salvador Vicent Martinez',
    username: 'Yunke',
    image: '/src/assets/profile-images/yunke.jpg',
    description: 'Reconocido internacionalmente, El Mago Yunke presenta la nueva gira de Hangar 52 como un viaje histórico a través de la magia en el que se superan los límites de lo imposible con ilusiones revoluc...',
    tags: ['Televisión', 'Magia'],
    tempos: 300
  },
  {
    name: 'Rafael Amargo',
    username: 'RafaelAmargo',
    image: '/src/assets/profile-images/rafael-amargo.jpg',
    description: 'Este es el buzón de contacto público de Rafael Amargo donde puedes contactar conmigo. Artista. Flamenco. Danza. Rafael Amargo es una estrella consumada, habiendo recibido reconocimientos entre los que dest...',
    tags: ['Artes escénicas'],
    tempos: 500
  },
  {
    name: 'Michel González',
    username: 'Michel',
    image: '/src/assets/profile-images/michel-gonzalez.jpg',
    description: 'Hola, este es el buzón público de Miguel González "Michel", entrenador de fútbol, y antes jugador del Real Madrid y la selección Española. Jamás olvides que para ganar, primero hay que competir. Si...',
    tags: ['Deporte', 'Fútbol', 'Real Madrid'],
    tempos: 300
  },
  {
    name: 'José Luis Garci',
    username: 'JoseLuisGarci',
    image: '/src/assets/profile-images/jose-luis-garci.jpg',
    description: 'Hola, bienvenido al buzón público de José Luis Garci. Director de cine y Cóbow de medianoche en la radio. Tiene muy seis directores Oscar de la Academia de Hollywood por su trabajo con "Volver a Em...',
    tags: ['Arte & Multimedia', 'Actores y Actrices', 'Cultura', 'cine'],
    tempos: 500
  },
  {
    name: 'Pablo Casado',
    username: 'PabloCasado',
    image: '/src/assets/profile-images/pablo-casado.jpg',
    description: 'Socio director de Hyperion Fund, que invierte en tecnologías geoespaciales, de ciberseguridad, inteligencia artificial y defensa de doble uso. Presentante de la Iniciativa de la Cuenca Atlántica...',
    tags: ['Tecnología', 'Política', 'Business Angel', 'Ciberdefensa'],
    tempos: 300
  },
  {
    name: 'Isabel Gemio',
    username: 'IsabelGemio',
    image: '/src/assets/profile-images/isabel-gemio.jpg',
    description: 'Hola, éste es buzón público de Isabel Gemio Comunicadora de radio y televisión. A la búsqueda de respuestas y vólcada hoy en la Fundación Isabel Gemio para avanzar en la investigación...',
    tags: ['Radio', 'Televisión', 'ONG', 'Proyectos Solidarios'],
    tempos: 500
  },
  {
    name: 'Leo Harlem',
    username: 'LeoHarlem',
    image: '/src/assets/profile-images/leo-harlem.jpg',
    description: 'Leonardo González Feliz, más conocido como Leo Harlem, es sin duda uno de los mejores cómicos de este país. Con el humor corriendo por sus venas, no tuvo más remedio que cambiar su vida de...',
    tags: ['Actores y Actrices', 'Humor', 'Televisión', 'cine', 'Presentador'],
    tempos: 300
  },
  {
    name: 'Carlos Jean',
    username: 'CarlosJean',
    image: '/src/assets/profile-images/carlos-jean.jpg',
    description: 'Carlos Jean Carlos Jean.jpg Información personal: Nombre de nacimiento Carlos Jean Arriaga Nacimiento 15 de junio de 1973 (48 años), Ferrol, La Coruña Bandera de...',
    tags: ['Música', 'Innovación', 'Cultura'],
    tempos: 500
  },
  {
    name: 'Nicolas Vallejo-Nájera',
    username: 'Colate',
    image: '/src/assets/profile-images/nicolas-vallejo.jpg',
    description: 'Productor, Conector y Comunicador...',
    tags: ['Emprendimiento', 'comunicación', 'Marketing'],
    tempos: 300
  },
  {
    name: 'Angel martin',
    username: 'angelmartin',
    image: '/src/assets/profile-images/angel-martin.jpg',
    description: 'Este es el buzón público de Ángel Martín. Presentador, monologuista, humorista, actor, músico, streamer... y está considerado uno de los humoristas más prestigiosos de nuestro país.',
    tags: ['Humor', 'Influencers', 'comunicación', 'Desarrollo Personal'],
    tempos: 500
  },
  {
    name: 'Clara Lago',
    username: 'ClaraLago',
    image: '/src/assets/profile-images/clara-lago.jpg',
    description: 'Clara Lago, co-fundadora de la Fundación Ochotumbao junto a Dani Rovira. Actriz, activista, comprometida animalista...',
    tags: ['Actores y Actrices', 'Artes escénicas', 'cine'],
    tempos: 300
  },
  {
    name: 'Zina cinker',
    username: 'Zina',
    image: '/src/assets/profile-images/zina-cinker.jpg',
    description: 'Físico de la materia condensada, estratega de materiales de frontera, apasionado por todo lo relacionado con MATTERverse. Mi enfoque es cómo los materiales de frontera, materiales a la...',
    tags: ['Speakers', 'Design', 'Ciencia', 'Metaverso', 'OpenExpo2023'],
    tempos: 500
  },
  {
    name: 'Jorge Blass',
    username: 'JorgeBlass',
    image: '/src/assets/profile-images/jorge-blass.jpg',
    description: 'Ilusionista y comunicador español. Ganador de la "Varita Mágica de Oro" en Mónaco y el premio "Siegfried and Roy" en Las Vegas. Ha presentado sus espectáculos en lugares emblemáticos...',
    tags: ['Actores y Actrices', 'Televisión', 'Magia', 'Artes escénicas', 'cine'],
    tempos: 100
  },
  {
    name: 'Dani Rovira',
    username: 'DaniRovira',
    image: '/src/assets/profile-images/dani-rovira.jpg',
    description: 'Dani Rovira, co-fundador de la Fundación Ochotumbao junto a Clara Lago. Actor, presentador, cómico, activista, optimista y animalista.',
    tags: ['Actores y Actrices', 'Humor', 'Artes escénicas', 'cine'],
    tempos: 500
  },
  {
    name: 'Juan Ignacio Gallardo',
    username: 'Gallardo',
    image: '/src/assets/profile-images/juan-ignacio-gallardo.jpg',
    description: 'Director de Marca desde 2016, líder y referencia internacional del periodismo deportivo. Autor de una docena de libros de temática deportiva. Vicepresidente de la European Sport...',
    tags: ['Periodismo', 'Deporte', 'comunicación', 'Eventos', 'Consultoría', 'Baloncesto', 'Viajes'],
    tempos: 500
  },
  {
    name: 'Guillermo Barcenas',
    username: 'Willy',
    image: '/src/assets/profile-images/guillermo-barcenas.jpg',
    description: 'Me llamo Guillermo Bárcenas. Me dedico a hacer canciones y tocarlas con mi banda, Taburete, que fundé con Antón Carreño...',
    tags: ['Música', 'cine', 'Marketing'],
    tempos: 300
  },
  {
    name: 'David Broncano',
    username: 'DavidBroncano',
    image: '/src/assets/profile-images/david-broncano.jpg',
    description: 'Este es el buzón público de David Broncano, desde el año 2014 trabajando en el programa "La vida moderna" en la Cadena SER, junto a Ignatius Farray y Quequé. Este...',
    tags: ['Actores y Actrices', 'Humor', 'Radio', 'Televisión', 'comunicación', 'Presentador'],
    tempos: 100
  },
  {
    name: 'Alberto Chicote',
    username: 'AlbertoChicote',
    image: '/src/assets/profile-images/alberto-chicote.jpg',
    description: 'Este es el buzón público de Alberto Chicote, cocinero, de esos que les corre el AOVE por las venas, que cocinan más con las tripas que con la cabeza y que comen la vida a bocados de placer. Mi...',
    tags: ['Televisión', 'Nutrición', 'Gastronomía', 'Chef'],
    tempos: 500
  },
  {
    name: 'Luis Herrero-Tejedor Algar',
    username: 'LuisHerrero',
    image: '/src/assets/profile-images/luis-herrero.jpg',
    description: 'Hola, este es el buzón público de Luis Herrero-Tejedor (Castellón, 1955), licenciado en periodismo por la Universidad de Navarra. He trabajado en prensa, radio y televisión, y podéis...',
    tags: ['Periodismo', 'Radio', 'cine', 'Podcast', 'Podcaster'],
    tempos: 500
  },
  {
    name: 'Manuel Quijano',
    username: 'manuelquijano',
    image: '/src/assets/profile-images/manuel-quijano.jpg',
    description: 'Paso la vida cantando y contando historias en Café Quijano con mis hermanos Óscar y Raúl, y alguna cosa más...Este es mi buzón público, puedes contactar conmigo por aquí...',
    tags: ['Música', 'Artes escénicas'],
    tempos: 300
  },
  {
    name: 'Ferran Adrià',
    username: 'FerranAdria',
    image: '/src/assets/profile-images/ferran-adria.jpg',
    description: 'Este es el buzón público de Ferran Adrià, el cocinero español que revolucionó el mundo de la gastronomía y lo introdujo en una nueva era. La revista norteamericana Time incluyó a...',
    tags: ['Innovación', 'Investigación y Desarrollo', 'Autor', 'Nutrición', 'Ciencia', 'Gastronomía'],
    tempos: 60000
  },
  {
    name: 'Ander Herrera',
    username: 'AnderHerrera',
    image: '/src/assets/profile-images/ander-herrera.jpg',
    description: 'Este es el buzón público de Ander Herrera, futbolista español que juega actualmente como centrocampista en el Athletic Club. Ex-jugador del Paris Saint-Germain (Francia), Real Zaragoza...',
    tags: ['Deporte', 'fútbol'],
    tempos: 800
  },
  {
    name: 'Javier Cansado',
    username: 'Cansado',
    image: '/src/assets/profile-images/javier-cansado.jpg',
    description: 'Faemino y Cansado, Ilustres Ignorantes, Todopoderosos, Aquí hay dragones....',
    tags: ['Actores y Actrices', 'Humor', 'Televisión', 'Podcaster'],
    tempos: 500
  },
  {
    name: 'David Otero',
    username: 'DavidOtero',
    image: '/src/assets/profile-images/david-otero.jpg',
    description: 'David Otero es un reconocido cantante, guitarrista, productor y compositor, nacido en Madrid el 17 de Abril de 1980. Fue uno de los dos principales miembros (como compositor y...',
    tags: ['Música', 'Artes escénicas'],
    tempos: 500
  },
  {
    name: 'Guillermo Fesser',
    username: 'GuillermoFesser',
    image: '/src/assets/profile-images/guillermo-fesser.jpg',
    description: 'Guillermo Fesser es el creador, junto a Juan Luis Cano, de un innovador programa de radio, Gomaespuma, que se emitió en España durante 25 años y que llegó a alcanzar 1 millón de...',
    tags: ['Periodismo', 'Humor', 'Radio', 'Televisión', 'Podcast'],
    tempos: 800
  },
  {
    name: 'Jose Angel Gómez Iglesias',
    username: 'Defreds',
    image: '/src/assets/profile-images/defreds.jpg',
    description: 'Autor de nueve libros: Casi sin querer, Cuando abras el paracaídas, 1775 calles, Historias de un náufrago hipocondríaco, Con un cassette y un boli BIC, Sempiterno, Recordar contraseña...',
    tags: ['Escritores', 'Influencers', 'Cultura'],
    tempos: 300
  },
  {
    name: 'Chema Alonso',
    username: 'ChemaAlonso',
    image: '/src/assets/profile-images/chema-alonso.jpg',
    description: 'Hola, éste es el buzón de contacto público de Chema Alonso. Si quieres enviarme una consulta, plantearme alguna pregunta, hacerme llegar una propuesta de conferencia, entrevista...',
    tags: ['Seguridad informática', 'Cómic', 'Emprendimiento', 'Tecnología', 'Speakers'],
    tempos: 500
  },
  {
    name: 'Carme Chaparro',
    username: 'CarmeChaparro',
    image: '/src/assets/profile-images/carme-chaparro.jpg',
    description: 'Periodista. Más de 20 años presentando y editando programas informativos en Mediaset. Ahora mismo grabando "Mujeres al Poder". Escritora, Ganadora del Premio Primavera de...',
    tags: ['Periodismo', 'Escritores', 'Televisión', 'Autor', 'comunicación', 'Creación Audiovisual'],
    tempos: 500
  },
  {
    name: 'Helen Lindes',
    username: 'HelenLindes',
    image: '/src/assets/profile-images/helen-lindes.jpg',
    description: 'Empecé en el mundo de la moda con tan solo 15 años y desde entonces no he parado. Mi trabajo se ha centrado en desfiles, campañas y editoriales por todo el mundo. Nueva York, París, Milán...',
    tags: ['Actores y Actrices', 'Moda', 'Influencers', 'Presentador', 'Modelos'],
    tempos: 200
  },
  {
    name: 'Javi Nieves',
    username: 'JaviNieves',
    image: '/src/assets/profile-images/javi-nieves.jpg',
    description: 'Presentador de Buenos Días Javi y Mar en Cadena 100. Trabajando en la radio desde 1990, ha pasado por Radio España, Onda Cero, Cope, Rock FM. Premio Ondas 2012, Antena de Oro...',
    tags: ['Periodismo', 'Música', 'Radio', 'Presentador'],
    tempos: 300
  },
  {
    name: 'Pedro De la Rosa',
    username: 'PedrodelaRosa',
    image: '/src/assets/profile-images/pedro-delarosa.jpg',
    description: 'Hola a todos, este es el buzón público de Pedro Martínez de la Rosa (Barcelona, España, 24 de febrero de 1971), ex-piloto de automovilismo y comentarista. He competido en...',
    tags: ['Deporte', 'Televisión', 'Motor'],
    tempos: 500
  },
  {
    name: 'Okuda San Miguel',
    username: 'Okuda',
    image: '/src/assets/profile-images/okuda.jpg',
    description: 'Si tienes alguna propuesta o consulta, este es mi buzón público. Animador. Necesito crear para ser feliz. Y eso me convierte en un conformista. Creo tanto obras de gran formato en el...',
    tags: ['Arte & Multimedia', 'Influencers', 'Arquitectura', 'Diseño Artístico', 'Pintores'],
    tempos: 500
  },
  {
    name: 'Cristina Burzako',
    username: 'CristinaBurzako',
    image: '/src/assets/profile-images/cristina-burzako.jpg',
    description: 'Cristina es CEO de Movistar+, Consejera de la compañía y Consejera de Telefónica España. Catalizador de la transformación de equipos de alto rendimiento y "customer centric", dando...',
    tags: ['Speakers', 'Televisión', 'Marketing', 'Creación Audiovisual', 'Desarrollo Personal'],
    tempos: 300
  },
  {
    name: 'Christian Gálvez',
    username: 'ChristianGalvez',
    image: '/src/assets/profile-images/christian-galvez.jpg',
    description: 'Christian Gálvez (Madrid, 1980) es miembro del Leonardo DNA Project, un proyecto internacional cuyo objetivo es crear ideas sobre la vida y obra de Leonardo da Vinci a través de la...',
    tags: ['Radio', 'Escritores', 'Televisión', 'Literatura', 'Presentador', 'Historia'],
    tempos: 300
  },
  {
    name: 'Paloma Sánchez-Garnica',
    username: 'PalomaGarnica',
    image: '/src/assets/profile-images/paloma-garnica.jpg',
    description: 'Paloma Sánchez-Garnica (Madrid, 1962). Licenciada en Geografía e Historia y en Derecho. Lectora empedernida, acaparadora de libros y escritora. Ha publicado ocho novelas. El...',
    tags: ['Escritores', 'Autor', 'Cultura', 'Literatura'],
    tempos: 500
  },
  {
    name: 'Fernando Romay',
    username: 'FernandoRomay',
    image: '/src/assets/profile-images/fernando-romay.jpg',
    description: 'He jugado a Baloncesto y eso me ha enseñado a ver cómo soy a crecer en mis amigos que me asisten a ser mejor y nunca sin mi equipo crecí en ti crecí en ti Buenrollismo siempre Con una sonrisa',
    tags: ['Deporte', 'Presentador', 'Desarrollo Personal', 'Baloncesto'],
    tempos: 100
  },
  {
    name: 'Borja Mayoral',
    username: 'BorjaMayoral',
    image: '/src/assets/profile-images/borja-mayoral.jpg',
    description: 'Jugador polivalente y goleador que ha crecido en las categorías inferiores del Real Madrid C.F., club con el que ganó la Champions League en 2018. Es internacional en las categorías inferiores del...',
    tags: ['Deporte', 'fútbol', 'Real Madrid'],
    tempos: 500
  },
  {
    name: 'Álvaro Benito',
    username: 'AlvaroBenito',
    image: '/src/assets/profile-images/alvaro-benito.jpg',
    description: 'Entrenador de fútbol. Escribo canciones. Colaboro en Carrusel Deportivo y El Larguero de la Cadena SER. Escribo artículos de opinión en el Diario AS y analizo el fútbol en Movistar Plus. Jugó en...',
    tags: ['Música', 'Radio', 'Deporte', 'fútbol', 'e-sports'],
    tempos: 500
  },
  {
    name: 'Carlos Fernández Guerra',
    username: 'CarlosFernandez',
    image: '/src/assets/profile-images/carlos-fernandez.jpg',
    description: 'Periodista de formación (lo sé, nadie es perfecto...), comunicador de vocación y apasionado por la cultura digital y adaptación de las marcas a este nuevo entorno online y su integración en los...',
    tags: ['comunicación', 'Marketing ', 'Digital', 'Redes sociales'],
    tempos: 100
  },
  {
    name: 'Carmen Linares',
    username: 'CarmenLinares',
    image: '/src/assets/profile-images/carmen-linares.jpg',
    description: 'Este es el buzón público de la cantora Carmen Linares, Premio Princesa de Asturias de las Artes 2022 y reconocida cantante flamenca, y de la cultura contemporánea del...',
    tags: ['Música', 'Artes escénicas', 'Cultura'],
    tempos: 500
  },
  {
    name: 'Sergio Fernández',
    username: 'ElPorteroDeTikTok',
    image: '/src/assets/profile-images/sergio-fernandez.jpg',
    description: 'Hola a todos! Soy Sergio, el portero de discoteca más famoso del mundo. Comencé hace menos de un año a crear contenido desde la discoteca en la que trabajaba y en tan sólo unos meses, he conseg...',
    tags: ['Creación Audiovisual', 'Instagram', 'Youtube'],
    tempos: 300
  },
  {
    name: 'Conchita',
    username: 'Conchita',
    image: '/src/assets/profile-images/conchita.jpg',
    description: 'Compositora y cantante española nacida en Finlandia, aunque estuvo muy poco tiempo allí. Pasó sus tres primeros años en Rusia y la mayoría de su niñez en Francia (de ahí que sea bilingüe), donde r...',
    tags: ['Música'],
    tempos: 300
  },
  {
    name: 'Daniel Calparsoro',
    username: 'DanielCalparsoro',
    image: '/src/assets/profile-images/daniel-calparsoro.jpg',
    description: 'Este es el buzón público de Daniel Calparsoro. Director de Cine. Esta es mi filmografía: 1995: Salto al Vacío; BERLINALE 1995 - SPECIAL PANORAMA. GOLDEN PRECOLOMBINE CIRCLE AWARD...',
    tags: ['Arte & Multimedia', 'cine'],
    tempos: 500
  },
  {
    name: 'Julio Salinas',
    username: 'JulioSalinas',
    image: '/src/assets/profile-images/julio-salinas.jpg',
    description: 'Julio Salinas Fernández es un exfutbolista español que jugaba como delantero. Militó en equipos como el Bilbao Athletic, Atlético de Madrid, F. C. Barcelona, R. C. Deportivo de la Coruña, Real Spo...',
    tags: ['CLEB'],
    tempos: 500
  },
  {
    name: 'Inmaculada Quesada',
    username: 'Inmagic',
    image: '/src/assets/profile-images/inmaculada-quesada.jpg',
    description: 'Hola! Soy Inmagic, la maga de las redes sociales. Tengo 19 años y cuento con más de 15 millones de seguidores en redes sociales...',
    tags: ['Influencers', 'Magia', 'Creación Audiovisual'],
    tempos: 50
  },
  {
    name: 'Pablo Laso',
    username: 'PabloLaso',
    image: '/src/assets/profile-images/pablo-laso.jpg',
    description: 'Bienvenido al buzón público de Pablo Laso. Pablo ha sido desde el 2011 hasta 2022 el entrenador del Real Madrid de baloncesto. Club con el que ha dirigido más de 600 partidos. Como jugador prof...',
    tags: ['Deporte', 'Baloncesto', 'Real Madrid'],
    tempos: 500
  },
  {
    name: 'Álvaro Urquijo',
    username: 'AlvaroUrquijo',
    image: '/src/assets/profile-images/alvaro-urquijo.jpg',
    description: 'Este es el buzón público de Álvaro Urquijo, compositor, cantante y guitarrista del grupo español Los Secretos. Fundador junto a sus hermanos mayores Javier y Enrique Urquijo (1960-1999) y José En...',
    tags: ['Música'],
    tempos: 300
  },
  {
    name: 'Agatha Ruiz de la Prada',
    username: 'AgathaRuizDeLaPrada',
    image: '/src/assets/profile-images/agatha-ruiz-de-la-prada.jpg',
    description: 'Agatha Ruiz de la Prada es una diseñadora madrileña, una de las más exitosas de la industria española, ha diseñado crear un universo propio que excede, con mucho, el ámbito de la moda y que pue...',
    tags: ['Emprendimiento', 'Televisión', 'Moda'],
    tempos: 500
  },
  {
    name: 'Daniela Blume',
    username: 'DanielaBlume',
    image: '/src/assets/profile-images/daniela-blume.jpg',
    description: 'Alexandra García Mezcua, más conocida como Daniela Blume, es sexóloga, colaboradora de televisión y presentadora y locutora de radio española. Este es su Buzón Público donde podrás contactar con el...',
    tags: ['Televisión', 'Coaching'],
    tempos: 200
  },
  {
    name: 'Pablo Ibáñez',
    username: 'HombreDeNegro',
    image: '/src/assets/profile-images/pablo-ibanez.jpg',
    description: 'Madridleño. Siempre dedicado a la creatividad como productor, creador de contenido y colaborador de televisión y radio. 12 años colaborando con El Hormiguero como El Hombre de Negro y dirigiéndo...',
    tags: ['Arte & Multimedia', 'Televisión', 'Artes escénicas'],
    tempos: 300
  },
  {
    name: 'Eloy Azorín',
    username: 'EloyAzorin',
    image: '/src/assets/profile-images/eloy-azorin.jpg',
    description: 'Soy un espectador compulsivo. No tengo días sin capítulos y no me pierdo ninguno. Actor, modelo, fotógrafo, teatro, cine o series de televisión. Disfruto de la vida y espero siempre el próximo p...',
    tags: ['Actores y Actrices', 'cine', 'Modelos'],
    tempos: 500
  },
  {
    name: 'Alejandro Valverde Belmont',
    username: 'AlejandroValverde',
    image: '/src/assets/profile-images/alejandro-valverde.jpg',
    description: 'Este es el buzón público de Alejandro Valverde. Ciclista solido desde (or) en Innsbruck 2018, plata en Hamilton 2003, Mondial 2005, y bronce en Salzburgo 2006, Valkenburg 2012, Florencia 2013 y Ponferrada...',
    tags: ['Deporte', 'Ciclismo'],
    tempos: 500
  },
  {
    name: 'Daniel Marco',
    username: 'DanielMarco',
    image: '/src/assets/profile-images/daniel-marco.jpg',
    description: 'Hola. Soy Daniel Marco: cantante, guitarrista y compositor del grupo Despistaos. En los casi 25 años que llevo dedicándome a la música he publicado 10 discos (9 de ellos con Despistaos)...',
    tags: ['Tecnología', 'Música'],
    tempos: 300
  },
  {
    name: 'Pedro García Aguado',
    username: 'PedroAguado',
    image: '/src/assets/profile-images/pedro-aguado.jpg',
    description: 'Después de una exitosa carrera deportiva y numerosos logros de alto nivel competitivo, durante los últimos 15 años he estado vinculado al mundo de las conferencias sobre motivación en empresas...',
    tags: ['Speakers', 'Deporte', 'Televisión', 'Presentador', 'Desarrollo Personal'],
    tempos: 800
  },
  {
    name: 'Rafik Dehni',
    username: 'DrRafik',
    image: '/src/assets/profile-images/rafik-dehni.jpg',
    description: 'Esculpir y armonizar es mi gran pasión. Predilección, elegancia y naturalidad, son los términos que definen mi manera de entender y practicar mi profesión. Siempre buscando una mejora y no una transf...',
    tags: ['Salud', 'Mindfulness', 'Medicina'],
    tempos: 300
  },
  {
    name: 'Lorenzo Caprile',
    username: 'LorenzoCaprile',
    image: '/src/assets/profile-images/lorenzo-caprile.jpg',
    description: 'Nacido en Madrid en 1967, Lorenzo Caprile se formó como modista en el Fashion Institute of Technology de Nueva York y en el Politécnico Internacional de la Moda de Florencia; también es licenciado...',
    tags: ['Emprendimiento', 'Televisión', 'Moda', 'Artes escénicas', 'Diseño Artístico'],
    tempos: 500
  },
  {
    name: 'Ignacio Cirac',
    username: 'IgnacioCirac',
    image: '/src/assets/profile-images/ignacio-cirac.jpg',
    description: 'Soy científico y dirijo el Departamento de Teoría en el Instituto Max-Planck de Óptica Cuántica, en Alemania. Mi especialidad es la Computación Cuántica, en la que explotamos las leyes cuánticas p...',
    tags: ['Tecnología', 'Investigación y Desarrollo', 'Ciencia', 'LibreCON2022'],
    tempos: 500
  },
  {
    name: 'Adriana Cerezo Iglesias',
    username: 'AdrianaCerezo',
    image: '/src/assets/profile-images/adriana-cerezo.jpg',
    description: 'Hola, este es el buzón público de Adriana Cerezo Iglesias deportista española de Taekwondo. En el año 2021 he sido Campeona de Europa en la categoría de -49 kg y en los Juegos Olímpicos de Tokio he...',
    tags: ['Deporte'],
    tempos: 200
  },
  {
    name: 'Daniel Grao',
    username: 'DanielGrao',
    image: '/src/assets/profile-images/daniel-grao.jpg',
    description: '"La interpretación me salvó la vida. El amor es un teatro lleno!" Actor desde hace unos 20 años. Últimamente: HIT (RTVE) PERDIDA (Atresmedia. Netflix) Gigantes (Movistar) LA CATEDRAL DEL...',
    tags: ['Actores y Actrices', 'Televisión'],
    tempos: 500
  },
  {
    name: 'Ángel Gaitán',
    username: 'AngelGaitan',
    image: '/src/assets/profile-images/angel-gaitan.jpg',
    description: 'Mi nombre es Ángel Gaitán, popularmente conocido como el mecánico del TikTok. Administro desde 2016 GT Automoción, taller mecánico que ofrece a sus clientes un servicio premium especializado en...',
    tags: ['Motor', 'Redes sociales'],
    tempos: 7000
  },
  {
    name: 'Antonio Salas',
    username: 'AntonioSalas',
    image: '/src/assets/profile-images/antonio-salas.jpg',
    description: 'Periodista de investigación especializado en periodismo encubierto. Autor de "Diario de un skin: un topo en el movimiento neonazi." El que trafiqué con mujeres, El Palestino, "Operación Prínce...',
    tags: ['Periodismo', 'Escritores', 'Autor'],
    tempos: 300
  },
  {
    name: 'Carmen Lomana',
    username: 'CarmenLomana',
    image: '/src/assets/profile-images/carmen-lomana.jpg',
    description: 'Este es el Buzón Público de Carmen Lomana, empresaria, colaboradora de televisión y coleccionista de alta costura. Carmen es conocida por sus apariciones televisivas y su relación con la prensa ros...',
    tags: ['Televisión', 'Moda', 'Influencers'],
    tempos: 500
  },
  {
    name: 'Mario Kempes',
    username: 'MarioKempes',
    image: '/src/assets/profile-images/mario-kempes.jpg',
    description: 'Mario Alberto Kempes (Bell Ville, provincia de Córdoba, Argentina, 15 de julio de 1954) es un comentarista, entrenador y exfutbolista argentino. Apodado "El Matador", jugaba de mediocampista ofens...',
    tags: ['Radio', 'Deporte', 'Televisión', 'Fútbol'],
    tempos: 500
  },
  {
    name: 'Juan José Ballesta',
    username: 'JuanJoseBallesta',
    image: '/src/assets/profile-images/juan-jose-ballesta.jpg',
    description: 'Su primera interpretación para el cine fue en la película El Bola, papel por el que ganó el premio Goya al mejor actor revelación. También ha realizado, El embrujo de Shanghai, El viaje de Carol...',
    tags: ['Actores y Actrices', 'Artes escénicas', 'cine'],
    tempos: 500
  },
  {
    name: 'David Meca',
    username: 'DavidMeca',
    image: '/src/assets/profile-images/david-meca.jpg',
    description: 'David Meca comenzó a nadar con tan solo 5 años por prescripción médica para tratar mejor sus problemas físicos ya que tenía la columna desviada, pasada la etapa llevaba hierros en las piernas...',
    tags: ['Speakers', 'Deporte', 'Coaching'],
    tempos: 300
  },
  {
    name: 'Alberto Herreros',
    username: 'AlbertoHerreros',
    image: '/src/assets/profile-images/alberto-herreros.jpg',
    description: 'Este es el buzón público de Alberto Herreros, Director deportivo del Real Madrid de Baloncesto y exjugador de baloncesto. Fue jugador destacadísimo en los años 1988 y 1996, y en el Real Madrid h...',
    tags: ['Deporte', 'Baloncesto', 'Real Madrid'],
    tempos: 500
  },
  {
    name: 'Irma Soriano',
    username: 'IrmaSoriano',
    image: '/src/assets/profile-images/irma-soriano.jpg',
    description: 'Hola, soy Irma Soriano y me encanta compartir con aquí, MyPublicInbox, mi asesorarme por aquí, siempre y para el de mí. Mamá muy niña, tigo, tuya y siempre. Comunicación era mi vocación. Desde mi niñ...',
    tags: ['Periodismo', 'Radio', 'Youtube', 'Televisión', 'Artes escénicas', 'comunicación'],
    tempos: 300
  },
  {
    name: 'Eloy Arenas Mora',
    username: 'EloyArenas',
    image: '/src/assets/profile-images/eloy-arenas.jpg',
    description: 'Bienvenido mi buzón público. Soy Eloy Arenas, dramaturgo, guionista, actor, y trovador viajero de la vida con humor. Actualmente desde 2011, me divierto y he divertido a más de millón y medio d...',
    tags: ['Actores y Actrices', 'Humor', 'Radio', 'Escritores', 'Televisión', 'Artes escénicas'],
    tempos: 300
  },
  {
    name: 'Rafael Gutiérrez',
    username: 'RafaG',
    image: '/src/assets/profile-images/rafael-gutierrez.jpg',
    description: 'Larga e interesante, madrileño, ayudándonos del mundo a través de la felicidad proveniente al aire que soy más músico;... creo que me gustaría que me conoce poco y poca gente me conoce mucho...',
    tags: ['Música'],
    tempos: 300
  },
  {
    name: 'Juan Luis Cano Ambros',
    username: 'JuanLuisCano',
    image: '/src/assets/profile-images/juan-luis-cano.jpg',
    description: 'Hola, éste es el buzón público de Juan Luis Cano. Periodista y amante del flamenco. Durante "algúnos" años me he movido siendo "golpeaguas". Ahora puedes contactar conmigo. Todos los Tiempos Irán a F...',
    tags: ['Música', 'Humor', 'Radio'],
    tempos: 500
  },
  {
    name: 'Ale Galán',
    username: 'AleGalan',
    image: '/src/assets/profile-images/ale-galan.jpg',
    description: 'Profesional Padel Player. Dos años Nº1 del mundo ("20 & "21). Embajador de Adidas y RedBull Bio profesional: "La carrera deportiva de Alejandro Galán en el World Padel Tour comenzó después de...',
    tags: ['Deporte', 'Business Angel'],
    tempos: 500
  },
  {
    name: 'Salvador Larroca',
    username: 'SalvadorLarroca',
    image: '/src/assets/profile-images/salvador-larroca.jpg',
    description: 'Salvador Larroca (Valencia, 1964) es un artista autodidacta. La fantasía y los pinceles fueron sus primeros juguetes. Comenzó su carrera pública colaborando con Fran Candil a la delegación europea...',
    tags: ['Cómic', 'Arte & Multimedia', 'Diseño Artístico', 'OpenExpo2022'],
    tempos: 500
  },
  {
    name: 'Alberto Granados',
    username: 'AlbertoGranados',
    image: '/src/assets/profile-images/alberto-granados.jpg',
    description: 'Como líder empresarial de Microsoft durante este tiempo ha gran transformación hacia la era digital, mi objetivo es atraer a las personas más increíbles al mi equipo, porque necesito un talento muy...',
    tags: ['Tecnología', 'Software', 'Big Data', 'Inteligencia Artificial', 'Digital'],
    tempos: 300
  },
  {
    name: 'Aurora Beltrán',
    username: 'AuroraBeltran',
    image: '/src/assets/profile-images/aurora-beltran.jpg',
    description: 'Este es el buzón público de Aurora Beltrán. Soy una mujer que ha dedicado su vida a la música, siendo compositora, guitarrista y cantante en el grupo Tahúres Zurdos. Antes lo fui en la banda Bella...',
    tags: ['Música'],
    tempos: 300
  },
  {
    name: 'Enrique López Lavigne',
    username: 'EnriqueLopezLavigne',
    image: '/src/assets/profile-images/enrique-lopez-lavigne.jpg',
    description: 'Productor Apache con dos hijos Comanches con más de 50 años, películas y series producidas y vividas intensamente al ritmo de Rock. Este es mi buzón público para que contactes conmigo...',
    tags: ['Televisión', 'cine'],
    tempos: 200
  },
  {
    name: 'Rappel Futurólogo',
    username: 'Rappel',
    image: '/src/assets/profile-images/rappel.jpg',
    description: 'Este es el Buzón Público de Rappel, empresario, modisto, colaborador de programas de televisión y vidente. Si quieres hacerme una consulta sobre astrología, numerología y horóscopos o plantearte a...',
    tags: ['Televisión', 'Moda', 'Desarrollo Personal'],
    tempos: 500
  },
  {
    name: 'Nacho Vidal',
    username: 'NachoVidal',
    image: '/src/assets/profile-images/nacho-vidal.jpg',
    description: 'Este es el Perfil Público de Ignacio Jordá González, más conocido por su nombre artístico Nacho Vidal, es un actor, director y productor de cine pornográfico y empresario español. En su carrera ha...',
    tags: ['Actores y Actrices', 'Televisión'],
    tempos: 500
  },
  {
    name: 'Antonio García Villarán',
    username: 'AntonioGarciaVillaran',
    image: '/src/assets/profile-images/antonio-garcia-villaran.jpg',
    description: 'Soy Doctor en Bellas Artes y artista plástico. También imparto clases de dibujo y pintura presenciales y online. Hablo de Arte y Hamparte, entre otras cosas. También podrás encontrar tanto mi dib...',
    tags: ['Arte & Multimedia', 'Formación', 'Youtube', 'Influencers', 'Cultura', 'Pintores'],
    tempos: 300
  },
  {
    name: 'Miguel Lago',
    username: 'MiguelLago',
    image: '/src/assets/profile-images/miguel-lago.jpg',
    description: 'Una Estrella. Los chistes no matan a nadie...',
    tags: ['Actores y Actrices', 'Humor', 'Escritores', 'Youtube', 'Televisión', 'Artes escénicas'],
    tempos: 500
  },
  {
    name: 'Georgina Leon',
    username: 'Georgina',
    image: '/src/assets/profile-images/georgina-leon.jpg',
    description: 'Bienvenidos a mi buzón público. Soy Georgina, cantante y compositora con cuatro discos editados como solista y alguno más con mi primer proyecto, "Tigrix y Georgina". Mi último disco se llama "Bi...',
    tags: ['Música'],
    tempos: 300
  },
  {
    name: 'Pocholo Martínez-Bordiú',
    username: 'Pocholo',
    image: '/src/assets/profile-images/pocholo-martinez-bordiu.jpg',
    description: 'Matador de gallinas bravas y explorador de caracolas. Este es el Perfil Público de Pocholo Martínez-Bordiú en el que podrás contactar con él de forma respetuosa con su tiempo. Si deseas un vídeo...',
    tags: ['Escritores', 'Moda', 'Influencers'],
    tempos: 300
  },
  {
    name: 'Enrique Arce',
    username: 'EnriqueArce',
    image: '/src/assets/profile-images/enrique-arce.jpg',
    description: 'Enrique Arce es un actor valenciano con una prolífica carrera en teatro, cine y televisión. Nací y crecí en Valencia, y en su juventud comenzó a estudiar la carrera de derecho, pero en cuarto de...',
    tags: ['Actores y Actrices', 'Televisión', 'Artes escénicas', 'cine'],
    tempos: 300
  },
  {
    name: 'Augusto Ferrer-Dalmau',
    username: 'AugustoFerrerDalmau',
    image: '/src/assets/profile-images/augusto-ferrer-dalmau.jpg',
    description: 'Augusto Ferrer-Dalmau Nieto (Barcelona, 20 de enero de 1964) es un pintor español de estilo realista y especializado, especializado en pintura histórica. Retrata en muchos casos diversos aspectos...',
    tags: ['Arte & Multimedia', 'Pintores'],
    tempos: 500
  },
  {
    name: 'Los Secretos',
    username: 'LosSecretos',
    image: '/src/assets/profile-images/los-secretos.jpg',
    description: 'Este es el buzón público de Los Secretos. La formación actual de este grupo, de Álvaro Urquijo (voz y guitarras), Ramón Arroyo (guitarras), Jesús Redondo (teclados), Juanjo Ramos (bajo) y Santi Fernán...',
    tags: ['Música'],
    tempos: 500
  },
  {
    name: 'Alfonso G. Aguilar',
    username: 'alfonsogaguilar',
    image: '/src/assets/profile-images/alfonso-g-aguilar.jpg',
    description: '¡Hola y BIENVENIDOS a mi bandeja de entrada! Poní por favor, nombre, en poder ponerse en contacto conmigo para cualquier cosa relacionado con el negocio. Todos los TIEMPOS son dorados a la fantasía...',
    tags: ['Arte & Multimedia', 'Música', 'Speakers', 'cine', 'Creación Audiovisual'],
    tempos: 300
  },
  {
    name: 'Sofia Suescun',
    username: 'SofiaSuescun',
    image: '/src/assets/profile-images/sofia-suescun.jpg',
    description: 'Sofía Suescun es una colaboradora de televisión y concurstante de realities. Ha participado en GH 16, "Supervivientes 2018" y GH Dúo. Se dio a conocer como concursante de "Gran Hermano 16", donde s...',
    tags: ['Música', 'Televisión'],
    tempos: 100
  },
  {
    name: 'Beatriz Rico',
    username: 'BeatrizRico',
    image: '/src/assets/profile-images/beatriz-rico.jpg',
    description: 'Soy actriz, y desde que tengo uso de razón no recuerdo haber querido ser otra cosa. Tuve mi hago Rock con mi banda "Rico & Roll" y estoy metida en varios proyectos de ayuda social, tanto a personas...',
    tags: ['Actores y Actrices', 'Música', 'Escritores', 'cine'],
    tempos: 100
  },
  {
    name: 'Salva Espín',
    username: 'SalvaEspin',
    image: '/src/assets/profile-images/salva-espin.jpg',
    description: 'Salvador Espín Bernabé, conocido artísticamente como Salva Espín, es un ilustrador y diseñador de cómics de nacionalidad española. Es Licenciado en Bellas Artes, en la especialidad de Animación, p...',
    tags: ['Cómic', 'Arte & Multimedia', 'Emprendimiento', 'Formación', 'Freelance'],
    tempos: 500
  },
  {
    name: 'La Fuga',
    username: 'La_Fuga',
    image: '/src/assets/profile-images/la-fuga.jpg',
    description: 'La Fuga es un grupo de Reinosa (Cantabria) con más de 800 conciertos a sus espaldas en más de una decena de giras, y 9 discos publicados hasta la fecha, y una historia de constancia y rock and roll...',
    tags: ['Música'],
    tempos: 500
  },
  {
    name: 'Jorge Luengo',
    username: 'JorgeLuengo',
    image: '/src/assets/profile-images/jorge-luengo.jpg',
    description: 'Nací el 18 de febrero de 1984. Los intereses del mundo de la magia me 4 años. Pero es mi pasión, es labios, eslabón hacia posibles no posibles ilusiones de un modo único, lo que me lleva a recibir Premio...',
    tags: ['Emprendimiento', 'Humor', 'Speakers', 'Innovación', 'Formación', 'Escritores'],
    tempos: 300
  },
  {
    name: 'Nikola Mirotic',
    username: 'NikolaMirotic',
    image: '/src/assets/profile-images/nikola-mirotic.jpg',
    description: 'Nikola Mirotic empezó a jugar con 13 años en la Joker School of Basketball en Podgorica (Montenegro), su ciudad de nacimiento, donde pronto destacó. En el verano de 2005 se incorporó a las categor...',
    tags: ['Deporte', 'Baloncesto', 'Real Madrid'],
    tempos: 500
  },
  {
    name: 'Jorge Marrón Martín',
    username: 'Marron',
    image: '/src/assets/profile-images/jorge-marron-martin.jpg',
    description: 'Hola amigos del metal! Soy Jorge Marrón Martín, más conocido como Marrón, colaborador y guionista del programa de televisión El Hormiguero, con 15 años de emisión a sus espaldas. Amante fiel de l...',
    tags: ['Actores y Actrices', 'Humor', 'Televisión', 'Ciencia'],
    tempos: 100
  },
  {
    name: 'Manu Tenorio',
    username: 'ManuTenorio',
    image: '/src/assets/profile-images/manu-tenorio.jpg',
    description: 'Manuel Ángel Vergara Tenorio conocido como "Manu Tenorio", es un cantante español de música melódica, compositor e intérprete. Nací y crecí en el popular barrio de Triana, en Sevilla. Y es aquí real...',
    tags: ['Música'],
    tempos: 300
  },
{
    name: 'Almudena Ariza',
    username: 'AlmudenaAriza',
    image: '/src/assets/profile-images/almudena-ariza.jpg',
    description: 'Reportera en medio mundo y corresponsal de TVE en Pekín, Nueva York y ahora en París. Hago podcasts como "Callejeros", "Viajadores", "Maratoniana" y salto y salto...',
    tags: ['Periodismo', 'Televisión', 'Podcast', 'comunicación', 'Podcaster'],
    tempos: 500
  },
{
    name: 'Paco Pil',
    username: 'PacoPil',
    image: '/src/assets/profile-images/paco-pil.jpg',
    description: 'Paco Pil es showman, DJ, cantante, actor, productor musical y locutor de radio desde la década de los 90. Pil tambien es conocido por crear la figura de "Gomi", presentó programas en Antena 3 como "La ca...',
    tags: ['Arte & Multimedia', 'Actores y Actrices', 'Música', 'Radio', 'Autor', 'comunicación'],
    tempos: 300
  },
  {
    name: 'Juan Muñoz',
    username: 'JuanMunoz',
    image: '/src/assets/profile-images/juan-munoz.jpg',
    description: 'Humorista, actor, imitador y director de cine español que formó parte del dúo humorístico Cruz y Raya, junto con su compañero José Mota. Sigue activo en el video saludo de Juan Muñoz, tanto para uso part...',
    tags: ['Humor', 'Televisión'],
    tempos: 300
  },
  {
    name: 'Tato Latorre',
    username: 'Tato',
    image: '/src/assets/profile-images/tato-latorre.jpg',
    description: 'Tato Latorre es un productor y músico multi-instrumentista nacido en Sabadell y que actualmente vive entre Barcelona y Miami. En su extensa y arraigada trayectoria ha destacado por su versatilid...',
    tags: ['Música'],
    tempos: 300
  },
  {
    name: 'Miguel Arias',
    username: 'mikelarias',
    image: '/src/assets/profile-images/miguel-arias.jpg',
    description: 'Papá orgulloso. Invertir, ayudar y aprender. Kfundvc. Ex-Director Global de Emprendimiento @ Telefonica @Wayra. Me encantan CARTO y mapas. Soy un generalista hábil que entiende la tecnología y los f...',
    tags: ['Emprendimiento', 'Tecnología', 'Innovación', 'Business Angel', 'OpenExpo2022'],
    tempos: 300
  },
  {
    name: 'Selva Orejon',
    username: 'selvaorejon',
    image: '/src/assets/profile-images/selva-orejon.jpg',
    description: 'Selva Mª Orejón, en twitter @selvaorejon, es perito judicial especializada en identidad digital y reputación. Líder en Ciencias de la Comunicación por la Universitat Ramon Llull y Diplomada en Pro...',
    tags: ['Seguridad Informática', 'Ciberinvestigación', 'Ciberdetective'],
    tempos: 300
  },
  {
    name: 'Daniel Mezquita',
    username: 'DaniMezquita',
    image: '/src/assets/profile-images/daniel-mezquita.jpg',
    description: 'Nacido en Madrid, padre de tres: Pablo Lucas y Manuela. Dedicado profesionalmente a la música desde 1998. Toco la música en Hombres G como ejecutivo durante más de 11 años en Warner Music. Apas...',
    tags: ['Música'],
    tempos: 100
  },
  {
    name: 'Yolanda Couceiro Morín',
    username: 'yolandacmorin',
    image: '/src/assets/profile-images/yolanda-couceiro.jpg',
    description: 'Es autora de innumerables artículos periodísticos publicados en diversos medios de comunicación. Es autora de dos libros: "Inmigración, el camino hacia el conflicto" y "101 claves del avance islá...',
    tags: ['Escritores', 'Televisión', 'Política'],
    tempos: 500
  },
  {
    name: 'Begoña López-Cano Ibarreche',
    username: 'BegoLC',
    image: '/src/assets/profile-images/begona-lopez-cano.jpg',
    description: 'Este es el buzón público de Begoña López-Cano Ibarreche, Directora General de Personas Grupo Inditex, puedes contactar comigo a través de este canal...',
    tags: ['Moda', 'Recursos Humanos'],
    tempos: 500
  },
  {
    name: 'Juan Ibañez',
    username: 'JuanIbanez',
    image: '/src/assets/profile-images/juan-ibanez.jpg',
    description: 'Soy una Hormiga llamada "Trancas" la mayor parte del tiempo... trabajo debajo de una mesa como Mónica Lewinski ...',
    tags: ['Actores y Actrices', 'Humor', 'Televisión', 'cine'],
    tempos: 300
  },
  {
    name: 'Oriol Servia',
    username: 'OriolServia',
    image: '/src/assets/profile-images/oriol-servia.jpg',
    description: 'Ex-Piloto de carreras en IndyCar, residiendo en los EE. UU. desde 1998. Mi carrera incluye la participación en más de 200 carreras de IndyCar, con 11 apariciones en las 500 Millas de Indianápolis...',
    tags: ['Innovación', 'Deporte', 'Motor'],
    tempos: 300
  },
  {
    name: 'Jesús García Calero',
    username: 'JesusCalero',
    image: '/src/assets/profile-images/jesus-garcia-calero.jpg',
    description: 'Periodista sevoviano de 1965, director de ABC Cultural y especializado en la información cultural y la divulgación. Coautor del libro "Don Juan contra Franco" (Plaza y Janés, 2018) sobre el esp...',
    tags: ['Periodismo', 'Autor', 'Cultura', 'Podcast', 'Divulgador', 'Historia'],
    tempos: 300
  },
  {
    name: 'Rafa J. Vegas',
    username: 'RafaVegas',
    image: '/src/assets/profile-images/rafa-vegas.jpg',
    description: 'Rafa J. Vegas (6/06/65) Músico, con más de tres décadas de experiencia a sus espaldas. Paral el gran público fui el bajista que acompañó a Rosendo durante treinta y dos años en los que grabó con él...',
    tags: ['Música', 'Literatura'],
    tempos: 300
  },
  {
    name: 'Manuela Vellés',
    username: 'ManuelaVelles',
    image: '/src/assets/profile-images/manuela-velles.jpg',
    description: 'Manuela Vellés (Madrid, 1987) comienza su carrera en el cine con 18 años en un papel principal y desde entonces ha protagonizado más de 20 películas y series. Inicia su formación de actriz en la...',
    tags: ['Arte', 'Actores y Actrices', 'Música', 'cine'],
    tempos: 300
  },
  {
    name: 'Sara Socas',
    username: 'SaraSocas',
    image: '/src/assets/profile-images/sara-socas.jpg',
    description: 'Escritora, creadora, autora, comunicadora Profesora, directora, no dictadora Dicto lo que me dicta el bolígrafo aquí y ahora Traigo el gallo gafao" al conflicto político, llegó su hora! Puedes c...',
    tags: ['Periodismo', 'Música', 'Radio', 'Escritores'],
    tempos: 100
  },
  {
    name: 'Francisco Nicolás Gómez Iglesias',
    username: 'FranNicolás',
    image: '/src/assets/profile-images/francisco-nicolas.jpg',
    description: 'Presidente del partido político Influencia Joven. Inversor. Estoy involucrado en diferentes sectores, desde la hostelería, deporte, blockchain, construcción, consultoría y demás. Mi vocación la...',
    tags: ['Política', 'Criptomonedas'],
    tempos: 500
  },
  {
    name: 'Paco Gonzalez',
    username: 'PacoGonzalez',
    image: '/src/assets/profile-images/paco-gonzalez.jpg',
    description: 'Francisco González González, más conocido como Paco González, es un periodista especializado en radio y deporte. Desde agosto de 2010, dirige y presenta el espacio deportivo Tiempo de Juego en la...',
    tags: ['Radio', 'Televisión', 'CLEB'],
    tempos: 500
  },
  {
    name: 'Ángel Sáenz de Cenzano',
    username: 'Angelscz',
    image: '/src/assets/profile-images/angel-saenz-de-cenzano.jpg',
    description: 'Country Manager España y Portugal @ LinkedIn Empoderar a nuestros clientes españoles y portugueses en su viaje de Talento y Skilling. Pasó más de 20 años en la industria digital empresarial. Dedic...',
    tags: ['Tecnología', 'Coaching', 'Recursos Humanos'],
    tempos: 300
  },
  {
    name: 'Berta Collado',
    username: 'BertaCollado',
    image: '/src/assets/profile-images/berta-collado.jpg',
    description: 'Licenciada en periodismo, máster en comunicación audiovisual. Presentadora, comunicadora, humorista y actriz. TELEVISIÓN: "Insert Coin" (AXN), Presentadora "Cruce de Palabras" (Canal Extrem...',
    tags: ['Música', 'Humor', 'Radio', 'Televisión', 'Artes escénicas', 'Cultura', 'cine'],
    tempos: 300
  },
  {
    name: 'Xriz',
    username: 'Xriz',
    image: '/src/assets/profile-images/xriz.jpg',
    description: 'Cristian Rodríguez, conocido artísticamente como Xriz, nacido el 28 de abril de 1993 en la isla de Tenerife, Islas Canarias, España. A los 16 años empezó a mostrar sus inquietudes artísticas y a de...',
    tags: ['Música'],
    tempos: 300
  },
  {
    name: 'Nathalie Picquot',
    username: 'NathaliePicquot',
    image: '/src/assets/profile-images/nathalie-picquot.jpg',
    description: 'Actualmente Head of Corporate Marketing, Brand Experience and Digital Engagement en el Banco de Santander. Previamente fue la Directora General de Twitter para España y Portug...',
    tags: ['Tecnología', 'Youtube', 'comunicación', 'Marketing', 'Branding'],
    tempos: 300
  },
  {
    name: 'Charly Gitanos',
    username: 'CharlyGitanos',
    image: '/src/assets/profile-images/charly-gitanos.jpg',
    description: 'El cantante español CHARLY GITANOS es una leyenda en Latinoamérica: con su grupo "Gitanos" entraron en el Top 20 en toda Latinoamérica, con la canción "OLE!" producida por el ganador de múltiples ...',
    tags: ['Música'],
    tempos: 100
  },
  {
    name: 'Malva Vela',
    username: 'MalvaVela',
    image: '/src/assets/profile-images/malva-vela.jpg',
    description: 'Malva Vela, artista polifacética de tan solo 20 años, cantante y compositora, también ha participado en películas como "El Reino" con Rodrigo Sorogoyen, la pintura es otra de sus expresiones artís...',
    tags: ['Actores y Actrices', 'Música', 'Moda', 'cine', 'Pintores'],
    tempos: 500
  },
  {
    name: 'Alberto Pérez',
    username: 'AlbertoPerez',
    image: '/src/assets/profile-images/alberto-perez.jpg',
    description: 'Este es el buzón público de Alberto Pérez, guitarrista del grupo de música Izal...',
    tags: ['Música'],
    tempos: 500
  },
  {
    name: 'Miriam Díaz Aroca',
    username: 'MiriamDiazAroca',
    image: '/src/assets/profile-images/miriam-diaz-aroca.jpg',
    description: 'Miriam Díaz-Aroca es una actriz de Óscar, periodista, conferenciante/speaker, charlas de acompañamiento. Presentadora española muy reconocida. Presidenta de la fundación Elégete por una Vida...',
    tags: ['Actores y Actrices', 'Speakers', 'Radio', 'Televisión', 'CLEB'],
    tempos: 300
  },
  {
    name: 'Fernando Cayo',
    username: 'fernandocayo',
    image: '/src/assets/profile-images/fernando-cayo.jpg',
    description: 'Actor, director y músico. Si deseas un vídeo saludo de Fernando Cayo, tanto para uso particular y privado, como para uso público en eventos, puedes solicitarlo desde aquí: Vídeo Saludo de Fernan...',
    tags: ['Actores y Actrices', 'Artes escénicas', 'cine', 'CLEB'],
    tempos: 500
  }
]
