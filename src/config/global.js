export default {
  global: {
    componenteFormativo: 'Exhibición y venta de productos',
    descripcionCurso:
      'La exhibición es la herramienta más efectiva para impulsar la venta de productos, en los formatos comerciales se utilizan diferentes técnicas y estas dependen de la estrategia y las necesidades del negocio. Es importante tener claridad de las características de cada producto, pues dependiendo del tipo, tamaño y forma se debe escoger el mueble ideal para exhibirlo, garantizando la preservación de este.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Exhibición y planimetría',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Demostraciones',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Condiciones comerciales',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Inclusión',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Discapacidad',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Normativas',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Habilidades en ventas',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Objeciones',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Argumentos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Cierre de ventas',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Condiciones de entrega y satisfacción del cliente',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Reportes',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Exhibición y planimetría',
      referencia:
        'Ventasideamarket. (2012). ¿Cómo crear una experiencia en el punto de venta?.',
      tipo: 'Video',
      link: 'https://youtu.be/uOhSL2nx9Rs',
    },
    {
      tema: 'Demostraciones',
      referencia: 'Espinosa, G. (2019). Demostración de producto en ventas.',
      tipo: 'Video',
      link: 'https://youtu.be/8gWGGq_4PvM',
    },
    {
      tema: 'Venta',
      referencia:
        'Red Laboral ICH. (2018). Habilidades de un vendedor efectivo.',
      tipo: 'Video',
      link: 'https://youtu.be/L_JbcOKRR74',
    },
    {
      tema: 'Argumentos',
      referencia:
        '<em>InboundCycle - Marketing</em> y ventas <em>inbound.</em> (2022). Argumentario de ventas - Qué es, cómo crearlo y por qué necesitas uno.',
      tipo: 'Video',
      link: 'https://youtu.be/nvIgid0m8CI',
    },
    {
      tema: 'Condiciones de entrega y satisfacción del cliente',
      referencia:
        'Universidad Corporativa Farmaenlace. (2020). Aseguramiento de la satisfacción del cliente.',
      tipo: 'Video',
      link: 'https://youtu.be/EY3rMwzQfRs',
    },
    {
      tema: 'Exhibición de mercancía',
      referencia:
        '<em>Urban Strand.</em> (2001). Reglas básicas para exhibir mercancías. Oficina Internacional del Trabajo, Ginebra.',
      tipo: 'Documento PDF',
      descarga: '/downloads/wcms_634570.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Argumento',
      significado:
        'Expresión escrita de un razonamiento o idea con la cual se prueba o justifica una tesis.',
    },
    {
      termino: 'Cliente',
      significado:
        'Es la razón de ser de la empresa. Es la persona o empresa que paga por los productos de la empresa.',
    },
    {
      termino: 'Cliente potencial',
      significado:
        'Son aquellos clientes potenciales que tienen como características necesitar el producto que ofrece la empresa y tener la capacidad adquisitiva para adquirirlo.',
    },
    {
      termino: 'Demostraciones',
      significado:
        'Acción de mostrar la verdad o falsedad de una cosa, argumentación, evidencia o indicación de una cosa.',
    },
    {
      termino: 'Exhibición',
      significado: 'Muestra o exposición al público de un producto o servicio.',
    },
    {
      termino: 'Inclusión',
      significado:
        'Actitud, tendencia o política de integrar a todas las personas en la sociedad con el fin de que todas puedan participar y tengan los mismos derechos.',
    },
    {
      termino: 'Logística',
      significado:
        'Medios, métodos e infraestructura para garantizar el almacenamiento, transporte y entrega de productos o servicios.',
    },
    {
      termino: 'Objeciones',
      significado:
        'Argumento u observación que se hace en contra de una opinión o afirmación para negar su validez o deficiencia.',
    },
    {
      termino: 'Planimetría',
      significado: 'Representación gráfica de un espacio.',
    },
    {
      termino: 'Prospectar',
      significado:
        'Ejercicio que realizan las empresas para seleccionar sus posibles clientes.',
    },
    {
      termino: 'Reportes',
      significado:
        'Documentos que contienen los detalles de un evento específico.',
    },
    {
      termino: 'Satisfacción del cliente',
      significado:
        'Sentimiento o actitud del cliente hacia un producto cuando tiene satisfechas las expectativas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aranda, J. (2015). Marketing y promoción en el punto de venta. Editorial Elearning.',
    },
    {
      referencia: 'Ardila, E. y Sastoque, F. (1984). Técnica de ventas.  SENA.',
      link: 'https://repositorio.sena.edu.co/handle/11404/1896',
    },
    {
      referencia: 'Ceupe Blog. (2020). Cierre de la venta. Ceupe Magazine.',
      link:
        'https://www.ceupe.com/blog/en-que-consiste-el-cierre-de-la-venta.html',
    },
    {
      referencia:
        'Cortés, G. (2017). 7 tipos de exhibición en punto de venta. InformaBTL.',
      link: 'https://www.informabtl.com/7-tipos-exhibicion-en-punto-venta/',
    },
    {
      referencia:
        'Euroinnova. (2022). Aprende qué son las condiciones comerciales de una empresa. Euroinnova.',
      link:
        'https://www.euroinnova.co/blog/que-son-las-condiciones-comerciales-de-una-empresa',
    },
    {
      referencia:
        'Forcemanager. (2021). El reporte de ventas mensual o cómo no perderse entre los datos comerciales. Forcemanager.',
      link: 'https://www.forcemanager.com/es/blog/reporte-de-ventas-mensual/',
    },
    {
      referencia:
        'Navarro, M. (2012). Técnicas de ventas. Red Tercer Milenio. Academia.edu.',
      link:
        'https://www.academia.edu/22896902/T%C3%A9cnicas_de_ventas_MARIANA_ELIZABETH_NAVARRO_MEJIA',
    },
    {
      referencia:
        'Palacios, D. (2021). ¿Tienes las 10 habilidades de un vendedor exitoso? <em>HubSpot.</em>',
      link: 'https://blog.hubspot.es/sales/vendedor-exitoso',
    },
    {
      referencia:
        'PMK <em>Digital Learning.</em> (2021). Argumentos de venta: consejos para tener éxito durante la llamada. Pmkvirtual. ',
      link: 'https://pmkvirtual.com/blog/argumentos-de-venta/',
    },
    {
      referencia:
        'Quadminds. (2021). 3 estrategias para mejorar tu servicio de entrega de productos. Quadminds.',
      link: 'https://www.quadminds.com/blog/servicio-de-entrega-de-producto/',
    },
    {
      referencia: 'WDI. (2017). Demostraciones en el punto de venta. Grupowdi.',
      link:
        'https://grupowdi.com/2017/03/07/demostraciones-punto-de-venta-presentar-productos/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Esperanza Cardona Grisales',
        cargo: 'Experta temática',
        centro: 'Centro de Comercio y Servicios - Regional Cauca',
      },
      {
        nombre: 'Giovanna Andrea Escobar Ospina',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios (CIES) - Regional Norte de Santander',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel Ricardo Mutis Gómez',
        cargo: 'Validación Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Díaz Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De La Rosa',
        cargo: 'Validación de Maquetación',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Gabriel Urueta Alvarez',
        cargo: 'Actividades didácticas',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yeimmy Bibiana Barrera Maldonado',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
