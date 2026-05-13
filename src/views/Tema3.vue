<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Servicios en la nube

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La computación en la nube se entiende como una forma moderna de acceder a recursos tecnológicos sin necesidad de instalar físicamente todos los equipos y programas en una computadora personal o en los servidores de una organización. En lugar de realizar inversiones en infraestructura costosa, las empresas y los usuarios pueden utilizar recursos informáticos disponibles a través de Internet, pagando únicamente por los servicios que requieren. Esto permite que diversas aplicaciones, plataformas y sistemas estén disponibles desde cualquier lugar, siempre que exista conexión a la red.

    p.mb-4.text-center Los servicios en la nube se clasifican principalmente en tres modelos:

    .row.justify-content-center.mb-4
      .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img-02.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C04(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Infraestructura como Servicio (IaaS)

      .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img-03.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C04(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Plataforma como Servicio (PaaS)

      .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img-04.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C04(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center #[i Software] como Servicio (SaaS)
    
    p.mb-4 Cada uno de estos modelos responde a diferentes necesidades y ofrece distintos niveles de control, gestión y responsabilidad para los usuarios.

    .row.justify-content-center
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img-05.svg', alt='')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .cajon.cajon.C01.px-4.py-4.mb-3
          p.mb-3(data-aos="fade-down") #[b Para comprender mejor estas diferencias, puede utilizarse una analogía con una vivienda:]
          .tarjeta.tarjeta--blanca.p-4(style="border: 1px solid #E6E6E6; box-shadow: 0 2px 6px rgba(0,0,0,0.08); border-radius: 19px;")
            p.mb-0 Cuando una persona necesita un lugar para habitar, puede optar por distintas alternativas: alquilar un terreno con instalaciones básicas para construir desde cero, arrendar una casa parcialmente equipada en la que solo debe añadir ciertos elementos, o vivir en un apartamento completamente amoblado y listo para ser ocupado. De manera similar, IaaS, PaaS y SaaS representan distintos grados de responsabilidad, gestión y personalización dentro de los servicios de computación en la nube.

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Infraestructura como Servicio (IaaS)

    .row.justify-content-center
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img-06.png', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-2
          p.mb-0(data-aos="fade-down") La Infraestructura como Servicio (IaaS) se refiere al modelo en el que el proveedor de la nube ofrece los recursos tecnológicos básicos, como servidores virtuales, almacenamiento y redes de comunicación. En algunos casos, también incluye servicios de balanceo de carga. Este modelo puede compararse con disponer de un “terreno” con servicios esenciales, sobre el cual la organización instala y administra sus propios sistemas operativos, aplicaciones, bases de datos y medidas de seguridad.
        p En este esquema, el usuario conserva un alto nivel de control y flexibilidad, ya que puede configurar la infraestructura tecnológica de acuerdo con sus necesidades específicas. Sin embargo, este nivel de control también implica mayor responsabilidad, debido a que se requieren conocimientos técnicos para administrar y proteger el entorno virtual.

    p.mb-4 Entre las principales ventajas del modelo IaaS se encuentran:

    .row.mb-4
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="fade-right")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema3/img-07.svg' alt="")
        h4.text-center Pago por uso, lo que evita inversiones iniciales en #[i hardware] costoso.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="flip-right")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema3/img-08.svg' alt="")
        h4.text-center Escalabilidad inmediata, permitiendo aumentar o reducir recursos en cuestión de minutos.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="flip-left")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema3/img-09.svg' alt="")
        h4.text-center Flexibilidad para instalar cualquier sistema operativo o #[i software] según los objetivos del usuario.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="fade-left")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema3/img-10.svg' alt="")
        h4.text-center Acceso remoto desde cualquier lugar con conexión a Internet.

    p.mb-4 No obstante, también presenta algunas limitaciones:

    .row.justify-content-center.mb-4
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img-11.svg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.C02.p-4.h-100.w-100
          ol.lista-ol--cuadro.lista-ol--separador
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Requiere personal con conocimientos en administración de sistemas, redes y seguridad.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Una gestión inadecuada puede generar vulnerabilidades en la información.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | No siempre resulta práctico para usuarios que solo necesitan aplicaciones listas para utilizar.
    
    p.mb-4.text-center Entre los proveedores más conocidos que ofrecen servicios de IaaS se encuentran:

    .row.justify-content-center.mb-4
      .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img-12.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C04(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Amazon Web Services
      .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img-13.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C04(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Google Cloud Platform
      .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img-14.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C04(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Microsoft Azure

    p.mb-4 Estas plataformas permiten a las organizaciones configurar servidores virtuales, administrar redes y escalar recursos según sus necesidades, ofreciendo flexibilidad y control en la gestión de la infraestructura tecnológica.

    .row.justify-content-center
      .col.col-lg-3.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img-15.svg', alt='')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .cajon.cajon.C01.px-4.py-4.mb-3
          .tarjeta.tarjeta--blanca.p-4(style="border: 1px solid #E6E6E6; box-shadow: 0 2px 6px rgba(0,0,0,0.08); border-radius: 19px;")
            p.mb-0 En el ámbito educativo, instituciones como el SENA pueden utilizar el modelo IaaS para implementar laboratorios virtuales donde los aprendices configuren servidores, redes y sistemas operativos sin necesidad de contar con infraestructura física. De esta manera, se facilita el aprendizaje práctico y el desarrollo de competencias tecnológicas aplicables al entorno laboral.
    
    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Plataforma como Servicio (PaaS)

    p.mb-4 La Plataforma como Servicio (PaaS) es un modelo de computación en la nube que amplía las capacidades del modelo IaaS. Además de ofrecer infraestructura tecnológica, proporciona herramientas y entornos de desarrollo que permiten crear, probar y desplegar aplicaciones sin necesidad de instalar o configurar sistemas complejos.

    .row.justify-content-center
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img-16.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C04.px-4.py-3
          p.mb-0(data-aos="fade-down") Una forma sencilla de comprender este modelo es mediante la analogía con una vivienda: es como disponer de un edificio ya construido, con instalaciones eléctricas, agua y servicios básicos listos para su uso. En este caso, el usuario solo debe enfocarse en diseñar y organizar su espacio, sin preocuparse por construir la estructura.

    .row.BG01.justify-content-center.align-items-center.px-3.py-5
      .col.col-lg-11.col-12.order-lg-1.order-2
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--blanca.p-4(style="border: 1px solid #E6E6E6; box-shadow: 0 2px 6px rgba(0,0,0,0.08); border-radius: 19px;")
              p.text-bold(data-aos="fade-down") Entre las principales características del modelo PaaS se encuentran:
                ul.lista-ul--color.mt-4(data-aos="fade-down")
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Incluye infraestructura como servidores, almacenamiento y redes, junto con herramientas de desarrollo.
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Ofrece entornos preconfigurados con bases de datos, sistemas operativos, servidores #[i web] y marcos de programación.
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Permite a los desarrolladores concentrarse en la creación y funcionalidad de las aplicaciones, sin administrar el #[i hardware] o el #[i software] base.
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Proporciona escalabilidad automática que ajusta los recursos según las necesidades del proyecto.

    p.mb-4 Este modelo también presenta diversas ventajas:

    .row
      .col-12
        .px-5.py-4
          .row.align-items-center.BG02(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-3
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema3/img-17.png", alt="")
            .col-lg-8.p-5.py-4
              SlyderF.custom.color-acento-botones.px-4.py-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.px-3.py-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema3/img-18.svg", alt="").img100.m-auto
                  p Reduce el tiempo de desarrollo, ya que los entornos están listos para ser utilizados.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema3/img-19.svg", alt="").img100.m-auto
                  p Disminuye los costos asociados a infraestructura física y mantenimiento.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema3/img-20.svg", alt="").img100.m-auto
                  p Favorece la innovación, al permitir que los equipos se concentren en el diseño de soluciones tecnológicas.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema3/img-21.svg", alt="").img100.m-auto
                  p Facilita el aprendizaje en contextos educativos, donde los estudiantes pueden desarrollar aplicaciones sin gestionar servidores.

    p.mb-4.text-center No obstante, también presenta algunas limitaciones:

    .row.justify-content-center.mb-4.g-4
      .col-lg-5.mb-lg-0
        .tarjeta.h-100(data-aos="fade-left")(style="border-radius: 16px !important; overflow: hidden;")
          figure(style="margin:0;")
            img(src='@/assets/curso/tema3/img-22.svg', alt='' style="width:100%; display:block; border-top-left-radius:16px; border-top-right-radius:16px;")
          .p-4(style="background-color:#FFE79E; border-bottom-left-radius:16px; border-bottom-right-radius:16px;")
            p.mb-0 Existe dependencia del proveedor, ya que los cambios en la plataforma pueden requerir ajustes en las aplicaciones.
      .col-lg-5
        .tarjeta.h-100(data-aos="fade-right")(style="border-radius: 16px !important; overflow: hidden;")
          figure(style="margin:0;")
            img(src='@/assets/curso/tema3/img-23.svg', alt='' style="width:100%; display:block; border-top-left-radius:16px; border-top-right-radius:16px;")         
          .p-4(style="background-color:#FFE79E; border-bottom-left-radius:16px; border-bottom-right-radius:16px;")
            p.mb-0 Ofrece menor control que IaaS, debido a que gran parte de la infraestructura es administrada por el proveedor del servicio.

    p.mb-4.text-center Actualmente se encuentran plataformas muy utilizadas en el sector educativo y empresarial, tales como:

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema3/img-24.svg', alt='')(style="width: 100%")
            h4.text-center Google App Engine
            p.mb-0(data-aos="fade-down") Permite desarrollar y desplegar aplicaciones en múltiples lenguajes de programación.
          .col-xl.col-lg-6.tarjeta.tarjeta--C06.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema3/img-25.svg', alt='')(style="width: 100%")
            h4.text-center Microsoft Azure App Service
            p.mb-0(data-aos="fade-down") Facilita la creación de aplicaciones #[i web], móviles y API con integración a otros servicios de Azure.
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema3/img-26.svg', alt='')(style="width: 100%")
            h4.text-center Heroku
            p.mb-0(data-aos="fade-down") Popular por su sencillez, ideal para desarrolladores que buscan rapidez en pruebas y despliegues.

    p.mb-4 En el ámbito educativo, el modelo PaaS ofrece a los aprendices un entorno práctico para experimentar con el desarrollo de #[i software] sin necesidad de administrar servidores o sistemas operativos. 

    .row.justify-content-center.mb-4
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img-27.svg', alt='')
      .col.col-lg-6.col-12.order-lg-2.order-2
        .cajon.cajon.C05.p-4.mb-2
          p.mb-0(data-aos="fade-down") Por ejemplo, un grupo de aprendices puede utilizar Heroku para desplegar una aplicación web como parte de un proyecto académico, concentrándose en la lógica del sistema y en la funcionalidad de la aplicación.

    p En síntesis, PaaS constituye un modelo que equilibra facilidad de uso, innovación y eficiencia en el desarrollo de aplicaciones, aunque ofrece menor control sobre la infraestructura en comparación con el modelo IaaS.

    Separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.3 #[i Software] como Servicio (SaaS)

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img-28.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") El #[i Software] como Servicio (SaaS) es el modelo más accesible dentro de la computación en la nube, ya que ofrece aplicaciones listas para usarse sin necesidad de conocimientos técnicos avanzados. El usuario únicamente debe registrarse o pagar una suscripción para comenzar a utilizar el servicio desde cualquier dispositivo con conexión a Internet.

    p Una forma sencilla de comprender este modelo es mediante la analogía de un apartamento completamente amueblado: la persona solo entra, lo habita y disfruta de sus comodidades, sin preocuparse por la construcción, el mantenimiento o las reparaciones. De manera similar, en SaaS el proveedor se encarga de toda la infraestructura técnica y del funcionamiento del servicio.
    p.mb-4 Entre las principales características de SaaS se encuentran:

    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img-29.svg', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.C02.p-4.h-100.w-100
          ol.lista-ol--cuadro.lista-ol--separador
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              p.mb-0 Aplicaciones accesibles desde navegadores #[i web] o dispositivos móviles.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Administración, mantenimiento y actualizaciones a cargo del proveedor.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Acceso multiplataforma, lo que permite trabajar desde distintos dispositivos y lugares.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Funcionalidades colaborativas que facilitan compartir información y trabajar en tiempo real.

    p.mb-4.text-center Este modelo presenta diversas ventajas:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        .row.justify-content-center.h-100.w-100
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.bg-color-1.p-0.h-100
              img.h-100.my-auto(src='@/assets/curso/tema3/img-30.svg' alt="")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C05.p-4.h-100
              p.mb-0 No requiere instalación local de programas.
      .col-lg-5.mb-4.mb-lg-0
        .row.justify-content-center.h-100.w-100
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.bg-color-1.p-0.h-100
              img.h-100.my-auto(src='@/assets/curso/tema3/img-31.svg' alt="")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.bg-color-2.p-4.h-100
              p.mb-0 Facilita el acceso a herramientas tecnológicas.    
      .col-lg-5.mb-4.mb-lg-0
        .row.justify-content-center.h-100.w-100
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.bg-color-1.p-0.h-100
              img.h-100.my-auto(src='@/assets/curso/tema3/img-32.svg' alt="")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.bg-color-2.p-4.h-100
              p.mb-0 Garantiza actualizaciones automáticas sin intervención del usuario.
      .col-lg-5.mb-4.mb-lg-0
        .row.justify-content-center.h-100.w-100
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.bg-color-1.p-0.h-100
              img.h-100.my-auto(src='@/assets/curso/tema3/img-33.svg' alt="")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.bg-color-2.p-4.h-100
              p.mb-0 Favorece el trabajo colaborativo entre múltiples usuarios.

    p.mb-4.text-center No obstante, también presenta algunas limitaciones:

    .row.justify-content-center.mb-4
      .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img-38.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C04(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Dependencia del proveedor, ya que si el servicio presenta fallas el acceso a la información puede verse afectado.
      .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img-39.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C04(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Menor nivel de personalización frente a otros modelos de servicio en la nube.
      .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img-40.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C04(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Necesidad de contar con una conexión estable a Internet para su correcto funcionamiento.

    p.mb-4.text-center Actualmente se encuentran aplicaciones ampliamente utilizadas como:

    .row.justify-content-center.mb-4(style="margin-top:2.5rem;")
      .col-lg-10.position-relative
        .avatar
          figure
            img(src="@/assets/curso/tema3/img-41.svg").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema3/img-42.svg").img100
            .col
              p #[b Google Drive y Microsoft 365], que permiten almacenamiento en la nube y edición colaborativa de documentos.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema3/img-43.svg").img100
            .col
              p #[b Spotify y Netflix], que ofrecen servicios de música y video en streaming.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema3/img-44.svg").img100
            .col
              p #[b Zoom y Microsoft Teams], que facilitan la comunicación y el trabajo en equipo en entornos virtuales.

    p.mb-4 En la educación, SaaS resulta especialmente útil porque ofrece herramientas prácticas y fáciles de usar. Por ejemplo:

    .row.justify-content-center
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img-45.png', alt='')
      .col.col-lg-5.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") Aprendices e instructores utilizan Google Workspace o Microsoft 365 para gestionar documentos, presentaciones y videoconferencias sin necesidad de preocuparse por instalaciones o actualizaciones. Esto favorece la colaboración en proyectos y el acceso a los recursos desde cualquier lugar.
        p.mb-4(data-aos="fade-down") En conclusión, SaaS representa la forma más cómoda y cercana para los usuarios de interactuar con la nube, ya que reduce las barreras técnicas y facilita el acceso a servicios digitales de calidad.

    Separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.4 Comparación entre IaaS, PaaS y SaaS

    p.mb-4 Los tres modelos de servicios en la nube representan diferentes niveles de control, responsabilidad y facilidad de uso:

    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-1.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C03")
          .row(titulo="IaaS (Infraestructura como Servicio)")
            .col-12.mb-0.mb-md-0
              p Ofrece la mayor flexibilidad, ya que el usuario controla el sistema operativo, las aplicaciones y la configuración. Es ideal para empresas que necesitan personalizar su infraestructura, aunque requiere mayores conocimientos técnicos.
          .row(titulo="PaaS (Plataforma como Servicio)")
            .col-12.mb-0.mb-md-0
              p Brinda un punto intermedio entre control y simplicidad. El proveedor entrega un entorno listo para crear y probar aplicaciones, lo que acelera el desarrollo. Los usuarios se enfocan en programar sin preocuparse por servidores o bases de datos.
          .row(titulo="SaaS (<em>Software</em> como Servicio)")
            .col-12.mb-0.mb-md-0
              p Es el modelo más accesible. El #[i software] está completamente listo para usar desde cualquier dispositivo con Internet. El proveedor gestiona todo, y el usuario solo debe registrarse o pagar una suscripción.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img-46.png', alt='')

    p.mb-4 Estos modelos pueden representarse de forma jerárquica, donde el nivel de control disminuye a medida que aumenta la facilidad de uso.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Modelos de servicio en la nube

      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema3/figura-1-1v.svg', alt='En la figura 1 se presentan los modelos de servicio en la nube organizados en forma de pirámide. En la base se ubica IaaS, que ofrece el mayor nivel de control técnico. En el nivel intermedio se encuentra PaaS, que equilibra flexibilidad y facilidad de uso. En la cima se representa SaaS, donde predomina la comodidad para el usuario final.', style="width: 1043px").m-auto
      .col-12
        figure.movil
          img(src='@/assets/curso/tema3/figura-1-2v.svg', alt='En la figura 1 se presentan los modelos de servicio en la nube organizados en forma de pirámide. En la base se ubica IaaS, que ofrece el mayor nivel de control técnico. En el nivel intermedio se encuentra PaaS, que equilibra flexibilidad y facilidad de uso. En la cima se representa SaaS, donde predomina la comodidad para el usuario final.', style="width: 1043px").m-auto

    p.mb-4 Para comprender mejor las características de cada modelo, resulta útil compararlos en términos de ventajas, limitaciones, diferencias clave y ejemplos de uso. La siguiente tabla organiza esta información de manera clara.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 3.
          span Comparación entre modelos de servicios en la nube
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 10%; background-color: #FFF7DF;") Servicio
                th(style="width: 20%; background-color: #FFF7DF;") Pros
                th(style="width: 20%; background-color: #FFF7DF;") Contras / Limitaciones
                th(style="width: 20%; background-color: #FFF7DF;") Diferencias clave
                th(style="width: 20%; background-color: #FFF7DF;") Ejemplos
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") IaaS
                td(style="background-color: #F0F8FF;") Gran flexibilidad y escalabilidad, pago por uso, control total.
                td(style="background-color: #F0F8FF;") Requiere conocimientos técnicos, gestión compleja.
                td(style="background-color: #F0F8FF;") Proporciona infraestructura virtual (servidores y almacenamiento).
                td(style="background-color: #F0F8FF;") AWS EC2 y Google Compute Engine.
              tr(data-aos="fade-right")
                td.text-center PaaS
                td Fácil de usar, acelera el desarrollo, fomenta la colaboración.
                td Dependencia del proveedor, limitaciones de personalización e integración.
                td Ofrece herramientas y entornos para desarrollar aplicaciones.
                td Google App Engine y Heroku.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") SaaS
                td(style="background-color: #F0F8FF;") Accesible desde cualquier dispositivo, mantenimiento a cargo del proveedor.
                td.text-center(style="background-color: #F0F8FF;") Dependencia total del proveedor, poca personalización.
                td.text-center(style="background-color: #F0F8FF;") El #[i software] ya está listo para usarse en la nube.
                td.text-center(style="background-color: #F0F8FF;") Gmail, Google Drive y Microsoft 365.

    .row.justify-content-center.mb-4(data-aos="flip-down")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema3/img-47.svg", alt="alt").img80.m-auto
          p En el modelo IaaS, el usuario es responsable de administrar el sistema operativo y las aplicaciones, mientras que el proveedor garantiza el funcionamiento de la infraestructura. Esto ofrece mayor control, pero exige conocimientos técnicos para gestionar y proteger los recursos.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema3/img-48.svg", alt="alt").img80.m-auto
          p En el caso de PaaS, el proveedr gestiona tanto la infraestructura como la plataforma de desarrollo. De esta manera, el usuario puede concentrarse en crear y administrar aplicaciones, reduciendo la complejidad técnica del entorno.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema3/img-49.svg", alt="alt").img80.m-auto
          p En el modelo SaaS, toda la gestión recae en el proveedor. El usuario simplemente accede y utiliza el #[i software], sin necesidad de instalar, configurar o mantener sistemas.

    p En síntesis, cada modelo responde a necesidades diferentes. Un aprendiz interesado en desarrollar aplicaciones puede beneficiarse de PaaS, una organización que requiere control sobre su infraestructura puede optar por IaaS, mientras que los usuarios que buscan herramientas listas para usar encontrarán en SaaS la alternativa más práctica. La computación en la nube, en cualquiera de sus modalidades, facilita el acceso a recursos tecnológicos y promueve la innovación en distintos sectores.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
