<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Computación en la nube

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La computación en la nube, también conocida como #[i cloud computing], es un modelo tecnológico que permite acceder de forma remota a servicios, aplicaciones y almacenamiento a través de Internet, sin depender de una infraestructura localizada en un único lugar físico. Sus orígenes se remontan a las décadas de 1950 y 1960, con los primeros intentos de compartir recursos informáticos; sin embargo, el término comenzó a difundirse en 1997 y alcanzó gran popularidad a finales de la década de 2000.
    
    p.mb-4 Este enfoque distribuye el #[i software], los datos y los recursos de procesamiento en múltiples servidores, lo que permite a los usuarios acceder a infraestructuras con alta capacidad para gestionar información. Gracias a ello, se facilita la escalabilidad, la flexibilidad y el uso eficiente de los recursos tecnológicos, convirtiéndose en una de las bases fundamentales de la transformación digital.
    .row.justify-content-center
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema1/img-02.svg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0(data-aos="fade-down") De acuerdo con el National Institute of Standards and Technology, la computación en la nube corresponde a un modelo que posibilita el acceso bajo demanda a un conjunto compartido de recursos informáticos configurables, como redes, servidores, almacenamiento y aplicaciones, que pueden aprovisionarse y liberarse rápidamente con un mínimo esfuerzo de gestión o interacción con el proveedor del servicio.
    
    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1 Características principales

    p La computación en la nube presenta un conjunto de características que la convierten en una de las tecnologías más influyentes de la era digital. De acuerdo con el National Institute of Standards and Technology, este modelo se distingue por ofrecer acceso flexible, escalabilidad y disponibilidad de recursos informáticos a través de Internet.
    p.mb-4 Entre sus principales características se encuentran:

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img-03.svg' alt='AvatarTop')
          h4.text-center Accesibilidad
          p Permite acceder a los recursos desde cualquier lugar mediante un dispositivo con conexión a Internet.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img-04.svg' alt='AvatarTop')
          h4.text-center Almacenamiento en línea
          p Los archivos y aplicaciones se alojan en servidores remotos, lo que reduce la necesidad de almacenamiento local en los dispositivos.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img-05.svg' alt='AvatarTop')
          h4.text-center Escalabilidad y elasticidad
          p Los recursos pueden aumentar o disminuir según la demanda, optimizando el rendimiento y los costos.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img-06.svg' alt='AvatarTop')
          h4.text-center Virtualización 
          p El #[i software] funciona de forma independiente del hardware físico, lo que facilita la ejecución de aplicaciones en diferentes plataformas.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img-07.svg' alt='AvatarTop')
          h4.text-center Disponibilidad
          p La información permanece accesible en todo momento y desde diferentes ubicaciones.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img-08.svg' alt='AvatarTop')
          h4.text-center Seguridad
          p Los proveedores implementan mecanismos de cifrado, respaldo y recuperación de datos para proteger la información.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img-09.svg' alt='AvatarTop')
          h4.text-center Autorreparación
          p Ante posibles fallos, los sistemas pueden restaurarse automáticamente a partir de copias de seguridad recientes.

    p.mb-4 Además de estas características, la nube ofrece ventajas prácticas en distintos ámbitos. Permite almacenar y organizar documentos, imágenes y contactos, compartirlos fácilmente y trabajar de manera colaborativa en tiempo real. Gracias a sus aplicaciones en línea, es posible crear y editar documentos, hojas de cálculo y presentaciones sin necesidad de instalar #[i software] especializado, lo que optimiza el trabajo individual y en equipo.

    .row.justify-content-center
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3.g-0
        figure
          img(src='@/assets/curso/tema1/img-11.png', alt='')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .row.mb-4
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img-10.svg', alt='')
          .col-lg-10.col-12
            p.mb-0 Una de sus propiedades más relevantes es la flexibilidad, entendida como la capacidad de adaptarse rápidamente a cambios en la demanda. Este aspecto resulta especialmente importante para organizaciones y empresas, ya que permite aumentar o reducir recursos como almacenamiento, procesamiento o ancho de banda sin realizar grandes inversiones en infraestructura física.
        .cajon.cajon.C01.p-4.mb-3
          p.mb-0(data-aos="fade-down") En el ámbito educativo, la nube facilita el acceso a materiales de aprendizaje y fomenta la colaboración entre docentes y estudiantes. En el contexto empresarial, impulsa la innovación al permitir probar aplicaciones o servicios con un bajo costo inicial. En general, la computación en la nube ha transformado la forma de trabajar, estudiar y comunicarse, consolidándose como una herramienta clave para la productividad y la gestión eficiente de los recursos tecnológicos.

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2 Evolución histórica de la computación en la nube

    p.mb-4 La evolución de la computación en la nube se ha desarrollado a lo largo de varias décadas, marcada por avances tecnológicos que transformaron la forma en que las personas y las organizaciones almacenan, procesan y acceden a la información.
    .tarjeta.tarjeta--C02.p-4.mb-4
      LineaTiempoC.color-acento-botones(text-small)(data-aos="flip-up")
        .row.py-5.px-4(titulo="a.")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Décadas de 1950 y 1960 – Sistemas de tiempo compartido
            p.mb-0 Con el auge de las computadoras centrales o #[i mainframes], surgieron los primeros sistemas que permitían a varios usuarios conectarse a una misma máquina mediante terminales. Este modelo de uso compartido optimizó el aprovechamiento de recursos informáticos y sentó las bases del acceso remoto.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img-12.png', alt='')
        .row.py-5.px-4(titulo="b.")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Década de 1970 – Virtualización
            p.mb-0 El desarrollo de máquinas virtuales permitió ejecutar múltiples entornos en una sola computadora física. Esta innovación hizo más eficiente el uso del #[i hardware] y abrió el camino hacia la gestión flexible de recursos, principio fundamental de la computación en la nube.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img-13.png', alt='')
        .row.py-5.px-4(titulo="c.")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Década de 1990 – Expansión de Internet
            p.mb-0 La expansión de Internet posibilitó que servicios y aplicaciones pudieran ofrecerse de forma remota a escala global. Aunque aún limitados, estos servicios evidenciaron el potencial de un modelo distribuido de recursos tecnológicos.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img-14.png', alt='')
        .row.py-5.px-4(titulo="d.")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 2006 – Lanzamiento de Amazon Web Services
            p.mb-0 El lanzamiento de los servicios de infraestructura bajo demanda marcó un punto de inflexión al permitir a empresas y usuarios acceder a almacenamiento y capacidad de procesamiento sin necesidad de invertir en infraestructura propia.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img-15.png', alt='')
        .row.py-5.px-4(titulo="e.")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Década de 2010 – Consolidación del modelo de nube
            p.mb-0 Empresas como Google, Microsoft y IBM ampliaron los servicios en la nube hacia áreas como análisis de datos, inteligencia artificial, bases de datos y plataformas de desarrollo, consolidando este modelo como uno de los pilares de la transformación digital.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img-16.png', alt='')
        .row.py-5.px-4(titulo="f.")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 2015 en adelante – Modelos híbridos y #[i multicloud]
            p.mb-0 Las organizaciones comenzaron a combinar nubes públicas y privadas para mejorar la seguridad, la flexibilidad y la gestión de datos, optimizando costos y cumpliendo con regulaciones cada vez más exigentes.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img-17.png', alt='')
        .row.py-5.px-4(titulo="g.")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 2020–2025 – Automatización e inteligencia artificial
            p.mb-0 La integración de inteligencia artificial, aprendizaje automático y análisis de grandes volúmenes de datos dentro de la nube ha impulsado soluciones más inteligentes, capaces de automatizar procesos, mejorar la seguridad y ofrecer servicios personalizados.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img-18.png', alt='')
        .row.py-5.px-4(titulo="h.")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Computación en el borde #[i (Edge Computing)]
            p.mb-0 Como complemento de la nube tradicional, este enfoque acerca el procesamiento de datos al lugar donde se generan, reduciendo la latencia y mejorando el rendimiento en aplicaciones como el Internet de las cosas, los vehículos autónomos o la realidad aumentada.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img-19.png', alt='')

    p En la actualidad, la computación en la nube constituye un ecosistema tecnológico robusto que integra almacenamiento, procesamiento, colaboración en línea y capacidades avanzadas de análisis de datos, transformando la educación, el trabajo y la vida cotidiana en la era digital.
    
    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.3 Acceso y formas de uso de los servicios #[i cloud]

    p.mb-4 El acceso a la computación en la nube es sencillo y está diseñado para que cualquier persona pueda utilizar sus servicios sin necesidad de conocimientos técnicos avanzados. Para acceder, lo único que se necesita es una conexión a Internet y un dispositivo, como una computadora, tableta o teléfono móvil.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          p.mb-3 El proceso comienza ingresando a la plataforma o sitio #[i web] que ofrece servicios en la nube, como Google Drive, Microsoft OneDrive o los servicios de infraestructura de Amazon Web Services. Si es la primera vez que se utiliza el servicio, se debe crear una cuenta proporcionando datos básicos como un correo electrónico y una contraseña segura. Esta cuenta permitirá iniciar sesión y acceder a todos los recursos y aplicaciones disponibles en esa plataforma.
          .row.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema1/img-21.svg', alt='')
            .col-lg-10.col-12
              p.mb-0 Una vez dentro, es posible cargar archivos, editarlos, compartirlos con otros usuarios e incluso usar aplicaciones para crear documentos, hojas de cálculo o presentaciones, todo sin necesidad de instalar programas en el dispositivo. Además, muchas plataformas permiten sincronizar automáticamente los archivos para que siempre se tenga la versión más actualizada en cualquier dispositivo que se utilice.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema1/img-20.svg', alt='')
    
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema1/img-22.svg', alt='')
      .col.col-lg-6.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") Por último, el acceso a la nube es flexible y seguro. Se puede conectar desde cualquier lugar y en cualquier momento, siempre que se cuente con Internet, y las plataformas cuentan con medidas de seguridad para proteger la información, garantizando privacidad y control sobre los datos almacenados. Esto hace que la computación en la nube sea una solución práctica y eficiente para almacenar, gestionar y colaborar con información digital.
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0(data-aos="fade-down") Antes de profundizar en ejemplos prácticos, resulta útil describir de manera comparativa cómo se realiza el acceso a diferentes servicios de almacenamiento en la nube. La siguiente tabla presenta los pasos básicos para ingresar y utilizar Google Drive y Microsoft OneDrive, dos de las plataformas más reconocidas a nivel global.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 1.
          span Acceso a servicios de almacenamiento en la nube
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 5%; background-color: #FFF7DF;") Paso
                th(style="width: 20%; background-color: #FFF7DF;") Google Drive
                th(style="width: 20%; background-color: #FFF7DF;") Microsoft OneDrive
            tbody
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") 1
                td(style="background-color: #F0F8FF;") Abrir el navegador #[i web] en el dispositivo.
                td(style="background-color: #F0F8FF;") Abrir el navegador #[i web] en el dispositivo.
              tr(data-aos="fade-right")
                td.text-center 2
                td Escribir en la barra de direcciones: drive.google.com
                td Escribir en la barra de direcciones: onedrive.live.com
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") 3
                td(style="background-color: #F0F8FF;") Si no se tiene cuenta, hacer clic en "Crear cuenta" y registrarse con correo Gmail y contraseña.
                td(style="background-color: #F0F8FF;") Si no se tiene cuenta, hacer clic en "Crear cuenta" y registrarse con correo Outlook o Hotmail y contraseña.
              tr(data-aos="fade-right")
                td.text-center 4
                td Si ya se tiene cuenta, hacer clic en "Iniciar sesión" e ingresar correo y contraseña de Google.
                td Si ya se tiene cuenta, hacer clic en "Iniciar sesión" e ingresar correo y contraseña de Microsoft.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") 5
                td.text-center(style="background-color: #F0F8FF;") Una vez dentro, examinar el almacenamiento y opciones para subir archivos, crear carpetas o documentos.
                td.text-center(style="background-color: #F0F8FF;") Una vez dentro, examinar el almacenamiento y opciones para subir archivos, crear carpetas o documentos.
              tr(data-aos="fade-right")
                td.text-center 6
                td Cargar archivos arrastrándolos a la ventana o usando el botón "Nuevo".
                td Cargar archivos arrastrándolos a la ventana o usando el botón "Cargar".
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") 7
                td.text-center(style="background-color: #F0F8FF;") Para compartir archivos, seleccionar el archivo y hacer clic en el ícono de compartir.
                td.text-center(style="background-color: #F0F8FF;") Para compartir archivos, seleccionar el archivo y hacer clic en el ícono de compartir.
              tr(data-aos="fade-right")
                td.text-center 8
                td Acceder a los archivos desde cualquier dispositivo con Internet usando la misma cuenta.
                td Acceder a los archivos desde cualquier dispositivo con Internet usando la misma cuenta.

    p.mb-4 Para comprender mejor cómo se aplican estas formas de acceso, resulta útil presentar un caso sencillo que demuestre la utilidad de la nube en la vida diaria.

    .row.justify-content-center
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema1/img-23.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-3
          p.mb-0(data-aos="fade-down") Un aprendiz puede guardar sus apuntes en Google Drive desde el computador de su casa, revisarlos en el celular camino a clase y compartirlos con sus compañeros para trabajar sobre el mismo documento en tiempo real.

    Separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.4 Escalabilidad y flexibilidad de los recursos en la nube

    p.mb-4 La escalabilidad en la computación en la nube se refiere a la capacidad que tiene esta tecnología para aumentar o reducir recursos informáticos como almacenamiento, potencia de procesamiento y ancho de banda, de acuerdo con las necesidades de cada usuario o empresa en un momento determinado, sin afectar el rendimiento del sistema. Por ejemplo, cuando una aplicación #[i web] recibe un alto número de visitas, la nube puede asignar automáticamente más recursos para mantener la rapidez en la respuesta; y cuando la demanda disminuye, reducirlos para optimizar costos.

    .row.justify-content-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema1/img-24v.png', alt='')
      .col.col-lg-6.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") La flexibilidad consiste en la facilidad con la que la nube se adapta a diferentes contextos, permitiendo acceder a datos y aplicaciones desde cualquier lugar y dispositivo. Esta característica ofrece libertad para trabajar, aprender o comunicarse sin limitaciones físicas, con la posibilidad de modificar configuraciones o capacidades en tiempo real.
        .cajon.cajon.C01.color-primario.p-4.mb-2
          p.mb-0(data-aos="fade-down") Generalmente se distinguen dos tipos principales de escalabilidad: vertical y horizontal. La #[b escalabilidad vertical] aumenta la capacidad de un recurso, por ejemplo, añadiendo más potencia a un servidor existente. La #[b escalabilidad horizontal] consiste en agregar más recursos similares, como servidores adicionales para distribuir la carga de trabajo. La nube integra ambas estrategias para ajustarse a demandas crecientes o fluctuantes.

    p.mb-4 Adicionalmente, la nube ofrece elasticidad, que permite escalar automáticamente sin intervención humana, ajustando los recursos según el volumen de trabajo y garantizando eficiencia en rendimiento y costos. También incorpora sistemas de equilibrio de cargas, los cuales distribuyen las tareas entre varios servidores para prevenir sobrecargas y mantener un funcionamiento continuo.

    p.text-center A continuación, se presentan los ejemplos de plataformas con escalabilidad y flexibilidad:

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema1/img-25.svg', alt='')(style="width: 100%")
            h4.text-center Microsoft Azure
            p.mb-0(data-aos="fade-down") Proporciona escalabilidad flexible para aumentar o reducir recursos informáticos de manera rápida y sencilla. Si el proyecto o empresa crece, asigna automáticamente más servidores, almacenamiento o potencia; cuando la demanda disminuye, ajusta los recursos para optimizar el gasto. Además, se integra con herramientas de Microsoft como Microsoft 365, facilitando el trabajo remoto y el acceso seguro desde distintos dispositivos.
          .col-xl.col-lg-6.tarjeta.tarjeta--C06.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema1/img-26.svg', alt='')(style="width: 100%")
            h4.text-center Google Cloud Platform (GCP)
            p.mb-0(data-aos="fade-down") Se destaca por su capacidad de escalado horizontal, permitiendo añadir múltiples servidores que soportan grandes cantidades de datos y usuarios sin perder rendimiento. Su flexibilidad permite adaptarse a casos de uso que van desde aplicaciones básicas hasta proyectos de inteligencia artificial y análisis de datos.
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema1/img-27.svg', alt='')(style="width: 100%")
            h4.text-center Amazon Web Services (AWS)
            p.mb-0(data-aos="fade-down") Considerada una de las plataformas pioneras en la computación en la nube, ofrece escalabilidad prácticamente ilimitada mediante sistemas de escalado automático que asignan o liberan recursos según la demanda en tiempo real.
    
    p.mb-4 En este punto, resulta esencial identificar los requerimientos tecnológicos necesarios para garantizar un funcionamiento eficiente de la computación en la nube. A continuación, se presenta una tabla con los principales aspectos a considerar.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 2.
          span Principales requerimientos tecnológicos para la computación en la nube
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 10%; background-color: #FFF7DF;") Requerimiento tecnológico
                th(style="width: 20%; background-color: #FFF7DF;") Descripción
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Conexión a Internet estable.
                td(style="background-color: #F0F8FF;") Una red rápida y confiable para evitar interrupciones de acceso.
              tr(data-aos="fade-right")
                td.text-center Dispositivos compatibles.
                td Computadoras, tabletas o teléfonos con acceso a Internet y soporte de aplicaciones en la nube.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") Navegadores y sistemas actualizados.
                td(style="background-color: #F0F8FF;") Programas como Google Chrome o Edge en sus últimas versiones para mayor seguridad y compatibilidad.
              tr(data-aos="fade-right")
                td.text-center Seguridad informática.
                td Uso de antivirus y cortafuegos para proteger datos y prevenir ataques.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") Conocimientos básicos en redes.
                td.text-center(style="background-color: #F0F8FF;") Comprender el funcionamiento de las conexiones a Internet para un mejor uso y solución de problemas.
              tr(data-aos="fade-right")
                td.text-center Virtualización.
                td Tecnología que permite ejecutar múltiples sistemas o aplicaciones en un solo equipo o servidor.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") Almacenamiento escalable.
                td.text-center(style="background-color: #F0F8FF;") Capacidad de aumentar o reducir espacio según las necesidades.
              tr(data-aos="fade-right")
                td.text-center Herramientas de gestión.
                td Programas que facilitan la administración automatizada de recursos.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") Potencia de procesamiento.
                td.text-center(style="background-color: #F0F8FF;") Recursos suficientes para ejecutar aplicaciones o procesar datos sin retrasos.
              tr(data-aos="fade-right")
                td.text-center Protocolos y medidas de seguridad.
                td Sistemas que aseguran el acceso restringido únicamente a usuarios autorizados.

    p En síntesis, la escalabilidad y la flexibilidad representan dos de los mayores beneficios de la computación en la nube, ya que permiten ajustar recursos según la demanda, garantizando eficiencia y ahorro de costos. Gracias a estas características, las organizaciones pueden responder de manera inmediata a cambios en el volumen de trabajo y aprovechar servicios adaptados a sus necesidades específicas. Esto convierte a la nube en una solución clave para la innovación y la transformación digital en cualquier sector.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
