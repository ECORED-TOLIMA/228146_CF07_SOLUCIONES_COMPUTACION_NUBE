<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Migración y despliegue de servicios en la nube

    p.mb-4 La migración y el despliegue de servicios en la nube constituyen procesos fundamentales dentro de la transformación digital de las organizaciones. Estos procesos permiten trasladar aplicaciones, bases de datos, sistemas y servicios tecnológicos desde infraestructuras locales o tradicionales hacia entornos #[i cloud], aprovechando las ventajas de escalabilidad, disponibilidad y flexibilidad que ofrece este modelo.

    .row.justify-content-center.mb-4
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema7/img-01.svg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C05.p-4.mb-2
          p.mb-0(data-aos="fade-down") La migración implica analizar los sistemas existentes, evaluar su compatibilidad con la nube y definir estrategias adecuadas para trasladar la información y las aplicaciones sin afectar la continuidad de las operaciones. Por su parte, el despliegue consiste en la configuración y puesta en funcionamiento de los servicios en el entorno #[i cloud], asegurando que operen de manera estable, segura y eficiente.

    .row.justify-content-center
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3.g-0
        figure
          img(src='@/assets/curso/tema7/img-02.png', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p Durante este proceso, las organizaciones deben considerar aspectos técnicos como la arquitectura de las aplicaciones, la seguridad de los datos, la optimización de recursos y la integración con otros sistemas existentes. Además, es importante utilizar herramientas especializadas que faciliten la automatización, el monitoreo y la gestión del proceso de migración.
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") En el contexto educativo y empresarial, la migración a la nube permite modernizar las plataformas tecnológicas, mejorar el acceso a los servicios digitales y optimizar los costos de infraestructura. De esta manera, instituciones como el SENA pueden fortalecer sus entornos de aprendizaje virtual, garantizar la disponibilidad de sus sistemas y ofrecer experiencias tecnológicas más eficientes para aprendices e instructores.

    Separador

    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 7.1 Estrategias de migración de aplicaciones

    p La migración de aplicaciones hacia la nube requiere la definición de estrategias que permitan trasladar los sistemas existentes de manera ordenada, segura y eficiente. Estas estrategias dependen del tipo de aplicación, su arquitectura, el nivel de complejidad y los objetivos tecnológicos de la organización. Elegir el enfoque adecuado permite minimizar riesgos, evitar interrupciones en el servicio y optimizar el aprovechamiento de los recursos en la nube.  
    p.mb-4 Entre las estrategias más utilizadas en procesos de migración se encuentran:

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema7/img-03.svg' alt='AvatarTop')
          h4.text-center Reubicación (Rehost o “lift and shift”)
          p Consiste en trasladar las aplicaciones desde la infraestructura local hacia la nube sin realizar modificaciones significativas en su estructura. Es una de las estrategias más rápidas de implementar, ya que mantiene la arquitectura original del sistema.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema7/img-04.svg' alt='AvatarTop')
          h4.text-center Replataformado (Replatform)
          p Implica realizar ajustes menores en la aplicación para aprovechar algunas funcionalidades de la nube, como bases de datos administradas o servicios de almacenamiento más eficientes, sin modificar completamente el diseño del sistema.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema7/img-05.svg' alt='AvatarTop')
          h4.text-center Refactorización o rediseño (Refactor)
          p Se basa en modificar la arquitectura de la aplicación para adaptarla plenamente al entorno #[i cloud]. Este proceso puede incluir la división del sistema en microservicios, la optimización del código y la adopción de servicios nativos de la nube.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema7/img-06.svg' alt='AvatarTop')
          h4.text-center Recompra (Repurchase)
          p Consiste en reemplazar una aplicación existente por una solución basada en software Como Servicio (SaaS), disponible directamente en la nube. Esta estrategia es común cuando existen plataformas especializadas que cumplen la misma función de manera más eficiente.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema7/img-07.svg' alt='AvatarTop')
          h4.text-center Retiro (Retire)
          p Durante el proceso de migración se identifican aplicaciones que ya no son necesarias o que han quedado obsoletas. En estos casos, el sistema se elimina para reducir costos y simplificar la infraestructura tecnológica.

    p La elección de la estrategia adecuada depende del análisis de cada sistema, considerando factores como costos, tiempo de implementación, complejidad técnica y beneficios esperados. Una planificación adecuada permite que la migración se realice de forma gradual y controlada, asegurando la continuidad de los servicios y el aprovechamiento efectivo de las capacidades que ofrece la computación en la nube.

    Separador

    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 7.2 Herramientas de migración a plataformas #[i cloud]

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/img-08.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p El proceso de migración hacia la nube se apoya en diferentes herramientas especializadas que facilitan el traslado de aplicaciones, bases de datos, servidores y datos desde infraestructuras locales hacia plataformas #[i cloud]. Estas herramientas permiten automatizar tareas, reducir riesgos durante la migración y garantizar la continuidad de los servicios.
        br 
        br
        p Cada proveedor de nube dispone de soluciones propias que simplifican el proceso de traslado y adaptación de los sistemas existentes.

    p.mb-4 A continuación, se presentan algunas de las herramientas más utilizadas para migrar recursos a la nube:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 5.
          span Herramientas de migración a plataformas #[i cloud]
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 10%; background-color: #FFF7DF;") Plataforma
                th(style="width: 20%; background-color: #FFF7DF;") Herramienta de migración
                th(style="width: 20%; background-color: #FFF7DF;") Función principal
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Amazon Web Services
                td(style="background-color: #F0F8FF;") AWS Migration Hub
                td(style="background-color: #F0F8FF;") Permite planificar, ejecutar y monitorear procesos de migración de aplicaciones y servidores hacia la nube de AWS.
              tr(data-aos="fade-right")
                td.text-center Amazon Web Services
                td AWS Database Migration Service (DMS)
                td Facilita la migración de bases de datos hacia AWS sin detener las aplicaciones en funcionamiento.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") Microsoft Azure
                td.text-center(style="background-color: #F0F8FF;") Azure Migrate
                td.text-center(style="background-color: #F0F8FF;") Herramienta centralizada para evaluar servidores, bases de datos y aplicaciones antes de migrarlas a Azure.
              tr(data-aos="fade-right")
                td.text-center Microsoft Azure
                td Azure Database Migration Service
                td Permite trasladar bases de datos desde entornos locales o desde otras nubes hacia Azure.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") Google Cloud
                td.text-center(style="background-color: #F0F8FF;") Google Cloud Migrate
                td.text-center(style="background-color: #F0F8FF;") Facilita la migración de máquinas virtuales, aplicaciones y datos hacia la infraestructura de Google Cloud.
              tr(data-aos="fade-right")
                td.text-center Oracle Cloud
                td Oracle Cloud Migrations
                td Conjunto de herramientas diseñadas para trasladar cargas de trabajo empresariales y bases de datos hacia OCI.

    p Estas herramientas permiten realizar migraciones de forma progresiva y controlada, ya que incluyen funcionalidades de evaluación, monitoreo y automatización. Gracias a estas capacidades, las organizaciones pueden trasladar sus sistemas a la nube minimizando tiempos de inactividad y reduciendo riesgos operativos.

    Separador

    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 7.3 Buenas prácticas para el despliegue de servicios en la nube

    p El despliegue de servicios en la nube requiere una planificación adecuada que garantice estabilidad, seguridad y eficiencia en el funcionamiento de las aplicaciones. Implementar buenas prácticas permite evitar errores durante la puesta en marcha, optimizar el rendimiento de los recursos y asegurar la continuidad del servicio.
    p.mb-4 Entre las prácticas más recomendadas se encuentran las siguientes:

    .tarjeta.tarjeta--BG04.p-md-5.p-4.mb-4(data-aos="flip-down")
      .tarjeta.tarjeta--blanca.p-4.p-md-5
        PasosB.color-acento-botones 
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-2.order-2
              h4 Planificación del entorno
              p Antes del despliegue es necesario definir la arquitectura del sistema, los recursos requeridos y los niveles de disponibilidad esperados. Esto incluye determinar la capacidad de cómputo, almacenamiento y redes que necesitará la aplicación.
            .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema7/img-09.png', alt='')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-2.order-2
              h4 Uso de entornos de prueba
              p Se recomienda implementar entornos de desarrollo y pruebas antes de llevar las aplicaciones al entorno de producción. Esto permite detectar fallos, evaluar el rendimiento y corregir problemas sin afectar a los usuarios finales.
            .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema7/img-10.png', alt='')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-2.order-2
              h4 Automatización del despliegue
              p El uso de herramientas de automatización permite implementar aplicaciones de forma consistente y rápida. Mediante scripts o plantillas de infraestructura se pueden reproducir entornos completos reduciendo errores humanos.
            .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema7/img-11.png', alt='')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-2.order-2
              h4 Gestión de configuraciones
              p Es importante mantener un control organizado de las configuraciones del sistema, versiones de #[i software] y dependencias. Esto facilita la actualización de los servicios y evita inconsistencias entre diferentes entornos.
            .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema7/img-12.png', alt='')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-2.order-2
              h4 Implementación de seguridad desde el inicio
              p La seguridad debe integrarse desde las primeras etapas del despliegue, aplicando controles de acceso, cifrado de datos, segmentación de redes y monitoreo continuo de actividades.
            .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema7/img-13.png', alt='')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-2.order-2
              h4 Monitoreo y registro de actividad
              p Una vez desplegado el servicio, es fundamental supervisar su comportamiento mediante herramientas de monitoreo que registren el consumo de recursos, el rendimiento de la aplicación y posibles incidentes.
            .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema7/img-14.png', alt='')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-2.order-2
              h4 Escalabilidad y alta disponibilidad
              p El diseño del despliegue debe considerar mecanismos de escalabilidad automática y redundancia de servicios, de modo que el sistema pueda responder ante aumentos de demanda o fallos en la infraestructura.
            .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema7/img-15.png', alt='')

    .row.justify-content-center
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema7/img-16.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") En el ámbito educativo, por ejemplo, las plataformas de formación virtual requieren despliegues estables y seguros para garantizar que los aprendices puedan acceder a contenidos, actividades y evaluaciones sin interrupciones. La aplicación de estas buenas prácticas contribuye a mantener la disponibilidad del servicio, optimizar los recursos tecnológicos y ofrecer experiencias de aprendizaje confiables.

    Separador

    #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 7.4 Implementación de un entorno práctico en la nube

    p La implementación de un entorno práctico en la nube permite comprender de manera aplicada cómo se crean, configuran y gestionan recursos tecnológicos en plataformas #[i cloud]. Este proceso facilita a los usuarios experimentar con infraestructura virtual, desplegar aplicaciones y administrar servicios sin necesidad de contar con #[i hardware] físico propio.
    p.mb-4 De manera general, la creación de un entorno práctico en la nube puede desarrollarse a través de las siguientes etapas:

    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-1.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C03")
          .row(titulo="Capa de infraestructura")
            .col-12.mb-0.mb-md-0
              p El primer paso consiste en registrarse en una plataforma de servicios en la nube. La mayoría de proveedores ofrecen cuentas gratuitas o créditos iniciales que permiten explorar las herramientas disponibles y realizar prácticas sin costos iniciales.
          .row(titulo="Capa de virtualización")
            .col-12.mb-0.mb-md-0
              p Una vez dentro de la plataforma, se crea un proyecto o espacio de trabajo donde se organizarán los recursos que se utilizarán durante la práctica, como máquinas virtuales, bases de datos o sistemas de almacenamiento.
          .row(titulo="Capa de plataforma")
            .col-12.mb-0.mb-md-0
              p En esta etapa se seleccionan y configuran los recursos necesarios, como servidores virtuales, redes, almacenamiento o contenedores. Estos elementos constituyen la base sobre la cual se ejecutarán las aplicaciones o servicios.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema7/img-17.png', alt='')

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema7/img-18.png', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C03")
          .row(titulo="Despliegue de aplicaciones o servicios")
            .col-12.mb-0.mb-md-0
              p Posteriormente se implementan aplicaciones, páginas #[i web], sistemas de gestión o herramientas de análisis de datos. Las plataformas #[i cloud] permiten realizar estos despliegues mediante interfaces gráficas, plantillas automatizadas o comandos especializados.
          .row(titulo="Monitoreo y gestión del entorno")
            .col-12.mb-0.mb-md-0
              p Una vez desplegado el servicio, se supervisa su funcionamiento mediante herramientas de monitoreo que permiten revisar el consumo de recursos, el rendimiento del sistema y posibles incidencias.
          .row(titulo="Optimización y cierre del entorno")
            .col-12.mb-0.mb-md-0
              p Finalmente, se pueden ajustar configuraciones para mejorar el rendimiento o reducir costos. En entornos de práctica, también es recomendable eliminar los recursos creados una vez finalizada la actividad, evitando consumos innecesarios.

    p La implementación de entornos prácticos permite a los aprendices desarrollar competencias en la gestión de infraestructura digital, comprender el funcionamiento real de los servicios en la nube y aplicar conocimientos técnicos en escenarios similares a los que encontrarán en el ámbito profesional.

</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({}),
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
