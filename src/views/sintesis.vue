<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La computación en la nube se presenta como un modelo tecnológico que permite acceder a recursos informáticos a través de Internet, ofreciendo características como escalabilidad, flexibilidad y disponibilidad de servicios bajo demanda. Su evolución surge como respuesta a las limitaciones de los modelos tradicionales de infraestructura tecnológica, impulsando procesos de transformación digital en organizaciones e instituciones educativas. En este contexto, se analizan los principales servicios #[i cloud] como Infraestructura como Servicio (IaaS), Plataforma como Servicio (PaaS) y Software como Servicio (SaaS), así como los modelos de despliegue en la nube que incluyen la nube pública, privada e híbrida. También se estudian las principales plataformas de #[i cloud computing] como Amazon Web Services, Microsoft Azure, Google Cloud Platform y Oracle Cloud Infrastructure, junto con sus características y diferencias. Finalmente, se abordan los fundamentos de la infraestructura y arquitectura de los servicios en la nube, las consideraciones de seguridad y administración de recursos, así como las estrategias, herramientas y buenas prácticas necesarias para la migración y el despliegue de aplicaciones en entornos #[i cloud].  

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta un esquema general de la computación en la nube, abordando sus características, evolución y formas de acceso a los servicios cloud. También se incluyen los modelos de servicio como IaaS, PaaS y SaaS, los modelos de despliegue en la nube, las principales plataformas de cloud computing y los fundamentos de la infraestructura, seguridad, administración, migración y despliegue de servicios en entornos cloud.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
