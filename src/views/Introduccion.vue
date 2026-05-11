<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4 La computación en la nube se ha convertido en una de las tecnologías fundamentales para el desarrollo y la operación de sistemas informáticos en la actualidad. Gracias a este modelo, las organizaciones pueden acceder a recursos tecnológicos como almacenamiento, procesamiento y aplicaciones a través de Internet, sin necesidad de contar con infraestructuras físicas propias.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/introduccion/img-01.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-2
          p.mb-0(data-aos="fade-down") A lo largo del tiempo, la evolución de las tecnologías de virtualización, redes y centros de datos ha permitido el surgimiento de diversas plataformas de computación en la nube, las cuales ofrecen servicios flexibles, escalables y accesibles desde diferentes dispositivos. Estas plataformas han transformado la manera en que las empresas desarrollan, implementan y administran sus soluciones tecnológicas.
        p En este contexto, comprender los fundamentos de la computación en la nube, los modelos de servicio, las características de las plataformas #[i cloud] y las estrategias de migración hacia estos entornos resulta esencial para el desarrollo de soluciones tecnológicas modernas. Además, el conocimiento de la arquitectura y de las buenas prácticas para el despliegue de servicios en la nube permite optimizar el uso de los recursos y garantizar la disponibilidad, seguridad y eficiencia de los sistemas.
        .row.mb-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/introduccion/img-02.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 De esta manera, el estudio de las plataformas de computación en la nube contribuye a fortalecer las competencias necesarias para implementar y administrar entornos tecnológicos acordes con las demandas actuales de la transformación digital. 

    p.mb-4 Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Qiky1PUtxhU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
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
