<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Modelos tradicionales y transición a la nube
    
    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema2/img-01.png', alt='')

    p Los modelos tradicionales de computación representan la forma clásica en que han operado muchos sistemas informáticos. En este enfoque, el #[i hardware], el #[i software] y los datos se encuentran concentrados en un único lugar, generalmente en el computador del usuario o en servidores locales administrados directamente por la organización. Durante décadas, este modelo predominó en empresas e instituciones, permitiendo el desarrollo de los sistemas actuales y sentando las bases de la infraestructura tecnológica moderna.

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Infraestructura de modelos tradicionales de computación

    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3.g-0
        figure
          img(src='@/assets/curso/tema2/img-02.svg', alt='')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p La infraestructura de los modelos tradicionales de computación se basa en el uso de equipos y recursos físicos instalados de manera local, generalmente dentro de las instalaciones de una organización, institución educativa o incluso en los hogares. Durante muchos años, este modelo constituyó la base del funcionamiento de los sistemas informáticos, ya que permite a los usuarios tener control directo sobre los dispositivos y la información que gestionan.
        .cajon.cajon.C02.p-4.mb-3
          p.mb-0(data-aos="fade-down") En este esquema, los recursos tecnológicos dependen de la adquisición, instalación y mantenimiento de #[i hardware], así como de la actualización constante de #[i software]. Cada equipo cuenta con componentes esenciales que garantizan su funcionamiento:

    .row.justify-content-center.mb-4.g-4
      .col-lg-5.mb-lg-0
        .tarjeta.h-100(data-aos="fade-left")(style="border-radius: 16px !important; overflow: hidden;")
          figure(style="margin:0;")
            img(src='@/assets/curso/tema2/img-03.svg', alt='' style="width:100%; display:block; border-top-left-radius:16px; border-top-right-radius:16px;")
          .p-4(style="background-color:#FFE79E; border-bottom-left-radius:16px; border-bottom-right-radius:16px;")
            p.mb-0 #[b Procesador], encargado de ejecutar instrucciones y operaciones, siendo el núcleo que determina la velocidad y capacidad de respuesta del sistema.
      .col-lg-5
        .tarjeta.h-100(data-aos="fade-right")(style="border-radius: 16px !important; overflow: hidden;")
          figure(style="margin:0;")
            img(src='@/assets/curso/tema2/img-04.svg', alt='' style="width:100%; display:block; border-top-left-radius:16px; border-top-right-radius:16px;")         
          .p-4(style="background-color:#FFE79E; border-bottom-left-radius:16px; border-bottom-right-radius:16px;")
            p.mb-0 #[b Memoria], utilizada para almacenar temporalmente datos y programas en ejecución, lo que permite que las aplicaciones funcionen de manera fluida.
      .col-lg-5.mb-lg-0
        .tarjeta.h-100(data-aos="fade-left")(style="border-radius: 16px !important; overflow: hidden;")
          figure(style="margin:0;")
            img(src='@/assets/curso/tema2/img-03.svg', alt='' style="width:100%; display:block; border-top-left-radius:16px; border-top-right-radius:16px;")  
          .p-4(style="background-color:#FFE79E; border-bottom-left-radius:16px; border-bottom-right-radius:16px;")
            p.mb-0 #[b Disco duro], destinado al almacenamiento permanente de información y software, permitiendo acceder a archivos y programas incluso después de apagar el equipo.
      .col-lg-5
        .tarjeta.h-100(data-aos="fade-right")(style="border-radius: 16px !important; overflow: hidden;")
          figure(style="margin:0;")
            img(src='@/assets/curso/tema2/img-04.svg', alt='' style="width:100%; display:block; border-top-left-radius:16px; border-top-right-radius:16px;")          
          .p-4(style="background-color:#FFE79E; border-bottom-left-radius:16px; border-bottom-right-radius:16px;")
            p.mb-0 #[b Dispositivos de entrada y salida], como teclado, monitor, impresora o escáner, que facilitan la interacción directa con el sistema y el aprovechamiento de sus funciones.

    .row.justify-content-center
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema2/img-07.svg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C05.p-4.mb-2
          p.mb-0(data-aos="fade-down") Este modelo, aunque garantiza control total sobre los recursos, implica costos elevados en adquisición, mantenimiento, consumo energético y actualización tecnológica. Además, su escalabilidad es limitada, ya que para ampliar la capacidad se requiere invertir en nuevos equipos o infraestructura física.
        p Estas características explican por qué los modelos tradicionales, si bien fueron fundamentales para el desarrollo inicial de la informática, han ido evolucionando hacia esquemas más flexibles y económicos, como la computación en la nube.

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Limitaciones de los modelos tradicionales

    p.mb-4 Aunque los modelos tradicionales de computación han sido fundamentales para el desarrollo de la informática, presentan diversas limitaciones que han impulsado la búsqueda de soluciones más flexibles y eficientes. Entre las principales se encuentran:

    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-1.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C03")
          .row(titulo="Altos costos de infraestructura")
            .col-12.mb-0.mb-md-0
              p Requieren inversiones significativas en la compra de hardware, licencias de software, mantenimiento de equipos y actualización tecnológica.
          .row(titulo="Escalabilidad limitada")
            .col-12.mb-0.mb-md-0
              p Para aumentar la capacidad de almacenamiento o procesamiento es necesario adquirir nuevos equipos o ampliar la infraestructura física, lo que implica tiempo y recursos adicionales.
          .row(titulo="Acceso restringido a la información")
            .col-12.mb-0.mb-md-0
              p En muchos casos los datos solo pueden consultarse desde equipos conectados a la red local, lo que dificulta el trabajo remoto y la colaboración entre usuarios ubicados en diferentes lugares.
          .row(titulo="Mantenimiento y gestión técnica constante")
            .col-12.mb-0.mb-md-0
              p Las organizaciones deben contar con personal especializado encargado de instalar, actualizar y supervisar los sistemas informáticos.
          .row(titulo="Riesgo de pérdida de información")
            .col-12.mb-0.mb-md-0
              p Si se presentan fallas en los equipos o no existen sistemas de respaldo adecuados, la recuperación de datos puede ser compleja y costosa.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img-08.png', alt='')

    .row.justify-content-center
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema2/img-09.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-3
          p.mb-0(data-aos="fade-down") Estas limitaciones han impulsado la transición hacia modelos más modernos, como la computación en la nube, que ofrecen mayor flexibilidad, escalabilidad y acceso a los recursos tecnológicos bajo demanda.

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3 Ventajas y desventajas frente a la computación en la nube

    p.mb-4 Los modelos tradicionales de computación presentan una serie de beneficios que los hicieron dominantes durante décadas y que aún hoy resultan útiles en ciertos contextos:

    .desktop
      .row.mb-4
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img-10v1.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Control total
                p.mb-0 El usuario o la empresa tienen dominio absoluto sobre el hardware, el software y los datos. Esto significa que pueden decidir cómo configurar sus equipos, qué programas instalar y cómo administrar la información, sin depender de terceros.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img-11v1.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Mayor seguridad local
                p.mb-0 Al no estar conectados de forma obligatoria a Internet ni utilizar servicios de proveedores externos, los datos sensibles permanecen bajo resguardo interno, reduciendo riesgos asociados al acceso remoto o a vulneraciones en la nube.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img-12v1.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Rendimiento estable
                p.mb-0 El desempeño del sistema no se ve condicionado por la velocidad o calidad de la conexión a Internet, ya que todo el procesamiento ocurre de manera interna en el equipo o red local.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img-13v1.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Disponibilidad sin conexión
                p.mb-0 Los programas y archivos pueden utilizarse incluso sin acceso a la red, lo que resulta práctico en zonas con conectividad limitada o inestable.

    .movil
      .row.justify-content-center.align-items-center.mb-4
        .col-md-10.col-12
          .tarjeta.tarjeta--BG07.p-4
            figure.mb-3
              img(src='@/assets/curso/tema2/img-10v2.png', alt='')
            h4 Control total
            p.mb-0 El usuario o la empresa tienen dominio absoluto sobre el hardware, el software y los datos. Esto significa que pueden decidir cómo configurar sus equipos, qué programas instalar y cómo administrar la información, sin depender de terceros.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--BG07.p-4
            figure.mb-3
              img(src='@/assets/curso/tema2/img-11v2.png', alt='')
            h4 Mayor seguridad local
            p.mb-0 Al no estar conectados de forma obligatoria a Internet ni utilizar servicios de proveedores externos, los datos sensibles permanecen bajo resguardo interno, reduciendo riesgos asociados al acceso remoto o a vulneraciones en la nube.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--BG07.p-4
            figure.mb-3
              img(src='@/assets/curso/tema2/img-12v2.png', alt='')
            h4 Rendimiento estable
            p.mb-0 El desempeño del sistema no se ve condicionado por la velocidad o calidad de la conexión a Internet, ya que todo el procesamiento ocurre de manera interna en el equipo o red local.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--BG07.p-4
            figure.mb-3
              img(src='@/assets/curso/tema2/img-13v2.png', alt='')
            h4 Disponibilidad sin conexión
            p.mb-0 Los programas y archivos pueden utilizarse incluso sin acceso a la red, lo que resulta práctico en zonas con conectividad limitada o inestable.

    p.mb-4 No obstante, los modelos tradicionales también presentan limitaciones que afectan su uso en la actualidad:

    .row.justify-content-center.mb-4
      .col.col-lg-6.mb-4.mb-lg-0.g-4(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema2/img-14.svg' alt="")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Acceso restringido
              p.mb-0 La información solo puede consultarse desde el dispositivo físico o red local donde está almacenada, lo que limita la movilidad y la posibilidad de trabajar desde diferentes lugares.
      .col.col-lg-6.mb-4.mb-lg-0.g-4(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema2/img-15.svg' alt="")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Altos costos
              p.mb-0 Mantener esta infraestructura requiere una inversión considerable en la compra de equipos, licencias de software y en la contratación de personal técnico para realizar mantenimientos y actualizaciones.
      .col.col-lg-6.mb-4.mb-lg-0.g-4(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema2/img-14.svg' alt="")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Escalabilidad limitada
              p.mb-0 Ampliar la capacidad de almacenamiento o procesamiento implica adquirir nuevo hardware o instalar servidores adicionales, procesos que resultan costosos, lentos y poco flexibles.
      .col.col-lg-6.mb-4.mb-lg-0.g-4(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema2/img-15.svg' alt="")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Menor colaboración
              p.mb-0 Dificulta el trabajo en equipo, ya que los archivos y programas no se pueden compartir de manera ágil en entornos remotos, lo que restringe la cooperación en proyectos conjuntos.

    p.mb-4 En términos prácticos, este modelo resulta útil en escenarios donde la seguridad local es prioritaria, como instituciones gubernamentales, bancos o pequeñas empresas que no requieren movilidad ni un crecimiento acelerado. Sin embargo, para organizaciones que buscan flexibilidad, acceso remoto y expansión rápida, los modelos tradicionales se convierten en un obstáculo. Estas limitaciones explican la creciente migración hacia la computación en la nube, que ofrece alternativas más escalables, colaborativas y económicas.

    .row.cajon.C01.justify-content-center.p-4(data-aos="flip-up")
      .col-lg-7.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        .col.col-12
          .tarjeta.tarjeta--C06.p-4.mb-2
            .row
              .col-lg-auto.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema2/img-18.svg', alt='')
              .col-lg-8.col-12
                p.mb-0 En la práctica, el modelo tradicional se manifiesta en distintos escenarios cotidianos. A continuación, se presenta un ejemplo que describe cómo funciona este enfoque y cuáles son sus implicaciones en el trabajo diario:
        p.mb-0(data-aos="fade-down") Una pequeña empresa de diseño gráfico decide trabajar con un modelo tradicional de computación. Cada diseñador tiene un computador de escritorio potente con programas instalados de manera local y los archivos se almacenan en el servidor de la oficina. Esto les permite mantener control total sobre sus proyectos y trabajar sin necesidad de Internet. Sin embargo, cuando un diseñador necesita trabajar desde casa o compartir un archivo con un cliente, se vuelve complicado, ya que la información no está disponible de manera remota y deben recurrir a dispositivos externos como memorias USB o discos portátiles.
      .col-lg-5.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img-19.png', alt='')

    Separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.4 Transformación digital y adopción de servicios #[i cloud]

    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema2/img-20.png', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p La transformación digital se refiere al proceso mediante el cual las organizaciones incorporan tecnologías digitales para mejorar sus procesos, servicios y formas de trabajo. En este contexto, la computación en la nube se ha convertido en una de las herramientas más importantes para impulsar este cambio, ya que permite acceder a recursos tecnológicos de manera flexible, segura y escalable.
        .cajon.cajon.C01.color-primario.p-4.mb-2
          p.mb-0(data-aos="fade-down") La adopción de servicios #[i cloud] facilita que empresas, instituciones educativas y entidades públicas puedan almacenar información, ejecutar aplicaciones y gestionar datos sin necesidad de invertir en infraestructura física propia. Gracias a este modelo, las organizaciones pueden reducir costos, optimizar sus operaciones y responder con mayor rapidez a los cambios del entorno digital.
        .row.mb-4
          .col-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img-21.svg', alt='')
          .col-lg-11
            p.mb-0 Además, la nube favorece el trabajo colaborativo y el acceso remoto a la información, permitiendo que equipos de trabajo interactúen en tiempo real desde diferentes lugares y dispositivos. Esta característica resulta especialmente valiosa en contextos donde la movilidad y la comunicación digital son esenciales para el desarrollo de proyectos y la prestación de servicios.

    p En la actualidad, la adopción de servicios #[i cloud] se ha convertido en un elemento clave de la transformación digital, ya que permite integrar tecnologías emergentes como la inteligencia artificial, el análisis de datos y el Internet de las cosas. De esta manera, la computación en la nube no solo optimiza la gestión de la información, sino que también impulsa la innovación y la competitividad en diversos sectores de la economía y la sociedad.


</template>

<script>
export default {
  name: 'Tema2',
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
