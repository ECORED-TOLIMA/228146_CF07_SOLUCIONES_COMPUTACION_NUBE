export default {
  global: {
    Name: 'Fundamentos y uso de plataformas de computación en la nube',
    Description:
      'Este componente aborda los fundamentos de la computación en la nube y el uso de sus principales plataformas para el desarrollo y despliegue de servicios digitales. Se analizan los modelos de servicio y despliegue, la infraestructura <em>cloud</em>, los proveedores más utilizados y las estrategias de migración, permitiendo comprender cómo implementar soluciones tecnológicas en entornos de nube.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Computación en la nube',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características principales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Evolución histórica de la computación en la nube',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Acceso y formas de uso de los servicios <em>cloud</em>',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Escalabilidad y flexibilidad de los recursos en la nube',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Modelos tradicionales y transición a la nube',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Infraestructura de modelos tradicionales de computación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Limitaciones de los modelos tradicionales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Ventajas y desventajas frente a la computación en la nube',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Transformación digital y adopción de servicios <em>cloud</em>',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Servicios en la nube',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Infraestructura como Servicio (IaaS)',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Plataforma como Servicio (PaaS)',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Software como Servicio (SaaS)',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Comparación entre IaaS, PaaS y SaaS',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Modelos de despliegue en la nube',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Nube pública',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Nube privada',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Nube híbrida',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Plataformas de <em>cloud computing</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Amazon Web Services (AWS)',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Microsoft Azure',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Google Cloud Platform',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Oracle Cloud Infrastructure',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Comparación entre plataformas de nube',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Infraestructura y arquitectura de servicios en la nube',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo:
              'Requisitos técnicos básicos para implementar servicios <em>cloud</em>',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Componentes de la infraestructura en la nube',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Arquitectura base de servicios en la nube',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Consideraciones de seguridad en entornos <em>cloud</em>',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Administración y optimización de recursos',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Migración y despliegue de servicios en la nube',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Estrategias de migración de aplicaciones',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Herramientas de migración a plataformas <em>cloud</em>',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo:
              'Buenas prácticas para el despliegue de servicios en la nube',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Implementación de un entorno práctico en la nube',
            hash: 't_7_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'API (Application Programming Interface)',
      significado:
        'conjunto de reglas y protocolos que permiten que diferentes aplicaciones o sistemas se comuniquen entre sí. En la computación en la nube facilita la integración y automatización de servicios entre plataformas.',
    },
    {
      termino: 'Arquitectura en la nube',
      significado:
        'estructura que define cómo se organizan e interconectan los componentes de un sistema <em>cloud</em>, incluyendo infraestructura, plataformas, aplicaciones, redes y servicios.',
    },
    {
      termino: 'Autenticación multifactor',
      significado:
        'mecanismo de seguridad que requiere más de una forma de verificación para acceder a un sistema, como contraseña, código temporal o verificación biométrica.',
    },
    {
      termino: '<em>Big data</em>',
      significado:
        'conjunto de tecnologías y metodologías utilizadas para almacenar, procesar y analizar grandes volúmenes de datos que no pueden gestionarse fácilmente con herramientas tradicionales.',
    },
    {
      termino: 'Centro de datos',
      significado:
        'instalación física donde se alojan servidores, sistemas de almacenamiento, redes y otros equipos que permiten el funcionamiento de servicios digitales y plataformas en la nube.',
    },
    {
      termino: 'Computación en la nube',
      significado:
        'modelo tecnológico que permite acceder a recursos informáticos como almacenamiento, procesamiento y aplicaciones a través de Internet, sin necesidad de contar con infraestructura propia.',
    },
    {
      termino: 'Escalabilidad',
      significado:
        'capacidad de un sistema en la nube para aumentar o disminuir sus recursos de manera automática o manual según la demanda de los usuarios o aplicaciones.',
    },
    {
      termino: 'Infraestructura como Servicio (IaaS)',
      significado:
        'modelo de servicio en la nube que ofrece recursos de infraestructura virtualizada como servidores, redes y almacenamiento, permitiendo a los usuarios configurar y administrar sus propios entornos.',
    },
    {
      termino: 'Máquina virtual',
      significado:
        'sistema informático que simula el funcionamiento de un computador físico dentro de otro sistema, permitiendo ejecutar sistemas operativos y aplicaciones de forma aislada.',
    },
    {
      termino: 'Migración a la nube',
      significado:
        'proceso mediante el cual aplicaciones, datos o sistemas informáticos se trasladan desde infraestructuras locales o tradicionales hacia plataformas de computación en la nube.',
    },
    {
      termino: 'Orquestación',
      significado:
        'proceso de automatización que coordina múltiples recursos y servicios en la nube para desplegar, gestionar y escalar aplicaciones de forma eficiente.',
    },
    {
      termino: 'Plataforma como Servicio (PaaS)',
      significado:
        'modelo de servicio cloud que proporciona un entorno completo para desarrollar, ejecutar y gestionar aplicaciones sin que el usuario tenga que administrar la infraestructura subyacente.',
    },
    {
      termino: 'Software como Servicio (SaaS)',
      significado:
        'modelo de distribución de <em>software</em> en el cual las aplicaciones se ofrecen a través de Internet y se utilizan mediante un navegador <em>web</em>, sin necesidad de instalación local.',
    },
    {
      termino: 'Virtualización',
      significado:
        'tecnología que permite crear versiones virtuales de recursos físicos como servidores, sistemas operativos o redes, optimizando el uso del <em>hardware</em> disponible.',
    },
    {
      termino: 'Zero Trust',
      significado:
        'modelo de seguridad que establece que ningún usuario o sistema debe considerarse confiable por defecto, por lo que cada acceso debe ser verificado continuamente.',
    },
  ],
  referencias: [
    {
      referencia:
        'American Web Services. (2024). Descripción general de Amazon Web Services.',
      link:
        'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/introduction.html',
    },
    {
      referencia:
        'Celaya Luna, A. (2013). Cloud: herramientas para trabajar en la nube. ICB Editores.',
    },
    {
      referencia: 'Google Cloud. (2025). Documentación de Google Cloud.',
      link: 'https://cloud.google.com/docs',
    },
    {
      referencia:
        'Ibáñez Carrasco, P. (2018). Informática I. Cengage Learning.',
    },
    {
      referencia:
        'Ibáñez Carrasco, P. (2018). Informática II. Cengage Learning.',
    },
    {
      referencia:
        'Menchén, A. (2016). Software ofimático de productividad en la nube. Rama Editorial.',
    },
    {
      referencia: 'Microsoft Azure. (2025). Azure documentation',
      link: 'https://learn.microsoft.com/en-us/azure/',
    },
    {
      referencia:
        'Mosco, V. (2016). La nube: Big Data en un mundo turbulento. Biblioteca Buridán.',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (2011). The NIST Definition of Cloud Computing (Special Publication 800-145).',
      link:
        'https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf',
    },
    {
      referencia:
        'Oracle. (2025). Documentación de Oracle Cloud Infrastructure.',
      link: 'https://docs.oracle.com/iaas/',
    },
    {
      referencia:
        'Postigo Palacios, A. (2020). Seguridad informática. Editorial Paraninfo.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
