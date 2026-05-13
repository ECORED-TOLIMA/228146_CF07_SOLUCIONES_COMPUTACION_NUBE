<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Plataformas de #[i cloud computing]

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Las plataformas de #[i cloud computing] son entornos tecnológicos que permiten a las organizaciones y a los usuarios acceder a servicios de computación a través de Internet, sin necesidad de instalar o mantener infraestructura física propia. Estas plataformas ofrecen recursos como almacenamiento, servidores virtuales, bases de datos, herramientas de desarrollo, análisis de datos e inteligencia artificial, disponibles bajo modelos de pago por uso y con alta escalabilidad.

    p.mb-4 A través de estas soluciones, las empresas pueden crear, implementar y administrar aplicaciones de manera más eficiente, reduciendo costos de infraestructura y facilitando la innovación tecnológica. Además, las plataformas #[i cloud] integran servicios que permiten automatizar procesos, mejorar la seguridad de la información y garantizar la disponibilidad de los sistemas desde cualquier lugar con conexión a Internet.

    .row.justify-content-center
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3.g-0
        figure
          img(src='@/assets/curso/tema5/img-02.svg', alt='')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p.mb-0(data-aos="fade-down") En la actualidad, diversas compañías tecnológicas ofrecen servicios de computación en la nube con características y herramientas especializadas. Entre las más reconocidas se encuentran Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform y Oracle Cloud Infrastructure, las cuales proporcionan soluciones adaptadas a diferentes necesidades empresariales, educativas y tecnológicas.
        p Comprender el funcionamiento y las características de estas plataformas permite identificar cuál se ajusta mejor a los requerimientos de cada proyecto, favoreciendo la toma de decisiones informadas en la adopción de tecnologías basadas en la nube.

    Separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.1 Amazon Web Services (AWS)

    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3.g-0
        figure
          img(src='@/assets/curso/tema5/img-03.png', alt='')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p Amazon Web Services es una de las plataformas de computación en la nube más utilizadas a nivel mundial, reconocida por su robustez, escalabilidad y amplia oferta de servicios tecnológicos. Esta plataforma está orientada a organizaciones de todos los tamaños, desde pequeñas empresas y emprendimientos tecnológicos hasta grandes corporaciones e instituciones públicas.
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") AWS proporciona más de doscientos servicios en la nube que incluyen capacidad de cómputo, almacenamiento, bases de datos, redes, análisis de datos, inteligencia artificial y herramientas de desarrollo, disponibles bajo un modelo de pago por uso.
        
    p.mb-4 Entre sus principales características se destacan:

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img-04.svg' alt='AvatarTop')
          h4.text-center Amplia oferta de servicios
          p Que incluye almacenamiento como Amazon S3, cómputo elástico como Amazon EC2, bases de datos como Amazon RDS y herramientas de distribución de contenido como CloudFront.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img-05.svg' alt='AvatarTop')
          h4.text-center Modelo de pago bajo demanda
          p Que permite a las organizaciones pagar únicamente por los recursos que utilizan, evitando inversiones iniciales en infraestructura.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img-06.svg' alt='AvatarTop')
          h4.text-center Alta disponibilidad y confiabilidad
          p Gracias a su red global de centros de datos distribuidos en diferentes regiones del mundo.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img-07.svg' alt='AvatarTop')
          h4.text-center Escalabilidad automática
          p Que permite aumentar o reducir recursos de manera rápida según las necesidades de cada aplicación o proyecto.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img-08.svg' alt='AvatarTop')
          h4.text-center Seguridad avanzada
          p Con herramientas de gestión de identidades, control de accesos y cumplimiento de múltiples estándares internacionales.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img-09.svg' alt='AvatarTop')
          h4.text-center Servicios de inteligencia artificial y aprendizaje automático
          p Como SageMaker, que permiten desarrollar soluciones avanzadas de análisis de datos y automatización.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema5/img-10.svg' alt='AvatarTop')
          h4.text-center Amplio ecosistema tecnológico
          p Que incluye certificaciones, comunidades de desarrolladores, documentación técnica y programas de formación especializados.

    p AWS representa una de las plataformas #[i cloud] más completas y maduras del mercado, siendo pionera en la adopción de la computación en la nube y un referente global en el desarrollo de soluciones tecnológicas escalables e innovadoras.

    Separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.2 Microsoft Azure

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img-11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Microsoft Azure es la plataforma de computación en la nube desarrollada por Microsoft y una de las más utilizadas en el ámbito empresarial. Su principal fortaleza radica en la integración con el ecosistema tecnológico de Microsoft, lo que resulta especialmente conveniente para organizaciones que ya utilizan herramientas como Microsoft 365, Windows Server o Microsoft SQL Server.

    p.mb-4 Entre sus características más destacadas se encuentran:

    .row.BG03.justify-content-center.px-3.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Portal <em>web</em> amigable")
            .col-12.mb-4.mb-md-0
              p.mb-0 Antes de recopilar requisitos, es importante conocer el entorno organizacional, los procesos existentes y las necesidades reales del negocio.
          .row(numero="2" titulo="Amplia gama de servicios")
            .col-12.mb-4.mb-md-0
              p.mb-0 Que incluye almacenamiento en la nube, redes virtuales, bases de datos, análisis de datos y aplicaciones empresariales.
          .row(numero="3" titulo="Herramientas de desarrollo")
            .col-12.mb-4.mb-md-0
              p.mb-0 Con integración directa con entornos como Microsoft Visual Studio y servicios DevOps que permiten gestionar proyectos de #[i software] desde el desarrollo hasta su implementación.
          .row(numero="4" titulo="Capacidades de inteligencia artificial y análisis de datos")
            .col-12.mb-4.mb-md-0
              p.mb-0 Que ofrecen soluciones avanzadas para aprendizaje automático, análisis de grandes volúmenes de información y automatización de procesos.
          .row(numero="5" titulo="Escalabilidad y flexibilidad")
            .col-12.mb-4.mb-md-0
              p.mb-0 Permitiendo ajustar los recursos de manera dinámica según la demanda, optimizando el rendimiento y los costos operativos.
          .row(numero="6" titulo="Programas de apoyo para desarrolladores y estudiantes")
            .col-12.mb-4.mb-md-0
              p.mb-0 Que incluyen créditos gratuitos, documentación técnica y laboratorios de aprendizaje para experimentar con la plataforma.
          .row(numero="7" titulo="Seguridad y cumplimiento normativo")
            .col-12.mb-4.mb-md-0
              p.mb-0 Con herramientas de gestión de identidades, control de accesos y cumplimiento de estándares internacionales de protección de datos.
      .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/img-12.svg', alt='')

    p Gracias a estas capacidades, Azure se ha consolidado como una plataforma clave para organizaciones que buscan impulsar procesos de transformación digital. En el ámbito educativo, también representa una herramienta valiosa, ya que permite a los aprendices acceder a entornos de programación, desarrollar proyectos colaborativos y experimentar con tecnologías emergentes en escenarios reales.

    Separador

    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.3 Google Cloud Platform

    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema5/img-13.png', alt='')

    p Google Cloud Platform es la propuesta de servicios en la nube de Google, diseñada para facilitar tanto a usuarios principiantes como a empresas avanzadas el acceso a infraestructura tecnológica sin necesidad de adquirir equipos propios. Su enfoque se centra en la innovación, la escalabilidad y la integración con otros servicios del ecosistema de Google.
    p.mb-4 Entre sus características principales se destacan:
    
    .row.justify-content-center.mb-4
      .col.col-lg-6.mb-4.mb-lg-0.g-4(data-aos="fade-left")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema5/img-14.svg' alt="")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Facilidad de uso
              p.mb-0 Dispone de una interfaz gráfica intuitiva accesible desde cualquier navegador #[i web].
      .col.col-lg-6.mb-4.mb-lg-0.g-4(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema5/img-15.svg' alt="")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Análisis de datos
              p.mb-0 Incluye herramientas como Google BigQuery, orientadas al procesamiento de grandes volúmenes de información en tiempo real.
      .col.col-lg-6.mb-4.mb-lg-0.g-4(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema5/img-16.svg' alt="")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Computación escalable
              p.mb-0 Con Google Compute Engine permite crear y administrar máquinas virtuales de alto rendimiento adaptadas a las necesidades de cada proyecto.stosos, lentos y poco flexibles.
      .col.col-lg-6.mb-4.mb-lg-0.g-4(data-aos="fade-left")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema5/img-17.svg' alt="")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Inteligencia artificial y aprendizaje automático
              p.mb-0 Ofrece servicios avanzados para desarrollar modelos predictivos y procesos de automatización, incluso sin conocimientos profundos de programación.
      .col.col-lg-6.mb-4.mb-lg-0.g-4(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema5/img-18.svg' alt="")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Trabajo colaborativo
              p.mb-0 Integración con Google Workspace, que incluye herramientas como Drive, Docs y Meet, favoreciendo la productividad en entornos educativos y corporativos.
      .col.col-lg-6.mb-4.mb-lg-0.g-4(data-aos="fade-left")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema5/img-19.svg' alt="")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Seguridad y cumplimiento
              p.mb-0 Garantiza la protección de datos mediante cifrado, controles de acceso y certificaciones internacionales.

    p En la práctica, Google Cloud facilita procesos como la creación de servidores virtuales, el almacenamiento de información, la ejecución de aplicaciones en línea y la colaboración entre equipos distribuidos. Gracias a estas funcionalidades, se posiciona como una de las plataformas más utilizadas tanto en proyectos académicos como en iniciativas empresariales orientadas a la innovación tecnológica.

    Separador

    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.4 Oracle Cloud Infrastructure

    p Es la propuesta de servicios en la nube de Oracle Corporation, con un enfoque especializado en bases de datos empresariales, infraestructura robusta y seguridad avanzada. Está diseñada principalmente para organizaciones que gestionan grandes volúmenes de información y requieren alto rendimiento en entornos críticos. 
    p.mb-4 Entre sus principales características se encuentran:

    .row.BG03.justify-content-center.px-3.mb-4(data-aos="flip-up")
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema5/img-20.svg', alt='')
      .col.col-lg-6.col-12.order-lg-2.order-2
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Fortaleza en bases de datos")
            .col-12.mb-4.mb-md-0
              p.mb-0 Integra de manera nativa Oracle Database y soluciones avanzadas como Oracle Autonomous Database, que optimiza la administración y reduce la intervención manual mediante procesos automatizados.
          .row(numero="2" titulo="Alto rendimiento en infraestructura")
            .col-12.mb-4.mb-md-0
              p.mb-0 Ofrece máquinas virtuales, almacenamiento de baja latencia y redes de alta velocidad diseñadas para aplicaciones empresariales exigentes.
          .row(numero="3" titulo="Enfoque en seguridad empresarial")
            .col-12.mb-4.mb-md-0
              p.mb-0 Incorpora controles estrictos de acceso, cifrado de datos y cumplimiento de normativas internacionales para proteger la información organizacional.
          .row(numero="4" titulo="Opciones híbridas y multicloud")
            .col-12.mb-4.mb-md-0
              p.mb-0 Permite integrar OCI con otras nubes públicas o privadas, facilitando la interoperabilidad entre diferentes entornos tecnológicos.
          .row(numero="5" titulo="Herramientas de analítica e inteligencia artificial")
            .col-12.mb-4.mb-md-0
              p.mb-0 Proporciona servicios orientados al análisis de grandes volúmenes de datos y al desarrollo de soluciones basadas en inteligencia artificial.
          .row(numero="6" titulo="Soporte corporativo especializado")
            .col-12.mb-4.mb-md-0
              p.mb-0 Incluye asistencia técnica y asesoría profesional para empresas que requieren estabilidad operativa y acompañamiento constante.
          .row(numero="7" titulo="Documentación y recursos de aprendizaje")
            .col-12.mb-4.mb-md-0
              p.mb-0 Ofrece tutoriales, guías técnicas y programas de certificación, generalmente orientados a usuarios con perfiles técnicos o experiencia previa en infraestructura de nube.

    p En el contexto empresarial, Oracle Cloud Infrastructure se posiciona como una alternativa sólida dentro del mercado de la computación en la nube, destacándose por su capacidad para gestionar datos de misión crítica y ofrecer soluciones confiables a organizaciones que dependen intensivamente de sus sistemas de información.  

    Separador

    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.5 Comparación entre plataformas de nube

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img-21.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Las plataformas de computación en la nube comparten principios de funcionamiento similares, ya que ofrecen entornos accesibles mediante portales #[i web] que permiten crear proyectos, desplegar servicios, configurar recursos y supervisar el consumo de infraestructura tecnológica. Estos paneles de administración facilitan la gestión de servidores, bases de datos, almacenamiento y aplicaciones desde cualquier navegador.

    p.mb-4 Además de las interfaces gráficas, muchas plataformas también ofrecen herramientas de línea de comandos y APIs que permiten automatizar procesos y administrar los recursos de manera más avanzada. Esto resulta especialmente útil para desarrolladores y administradores de sistemas que requieren mayor control sobre la infraestructura.

    .row.justify-content-center.mb-4
      .col.col-lg-6.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3.g-0
        figure
          img(src='@/assets/curso/tema5/img-22.svg', alt='')
      .col.col-lg-6.col-12.order-lg-1.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") Otro elemento común es la disponibilidad de recursos de aprendizaje, como tutoriales, documentación técnica, laboratorios virtuales y créditos gratuitos. Estas facilidades permiten que tanto principiantes como usuarios avanzados experimenten con los servicios en la nube sin realizar grandes inversiones iniciales.
        p Aunque comparten características similares, cada proveedor posee fortalezas específicas. Google Cloud Platform se destaca en análisis de datos, inteligencia artificial y aprendizaje automático. Microsoft Azure sobresale por su integración con herramientas empresariales y el ecosistema Microsoft. Amazon Web Services mantiene liderazgo en el mercado gracias a la gran variedad de servicios disponibles. Por su parte, Oracle Cloud Infrastructure se orienta principalmente a la gestión avanzada de bases de datos y soluciones corporativas de alto rendimiento.

    .row.justify-content-center.mb-4
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema5/img-23.svg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C05.p-4.mb-2
          p.mb-0(data-aos="fade-down") Estas diferencias permiten que cada plataforma responda a necesidades tecnológicas particulares, lo que facilita a las organizaciones seleccionar el proveedor que mejor se adapte a sus requerimientos de infraestructura, desarrollo y gestión de información.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 4.
          span Comparación de plataformas en la nube
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #FFF7DF;") Característica
                th(style="width: 20%; background-color: #FFF7DF;") Google Cloud
                th(style="width: 20%; background-color: #FFF7DF;") Microsoft Azure
                th(style="width: 20%; background-color: #FFF7DF;") Amazon Web Services (AWS)
                th(style="width: 20%; background-color: #FFF7DF;") Oracle Cloud Infrastructure (OCI)
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F0F8FF;") Popularidad / Mercado.
                td(style="background-color: #F0F8FF;") Destacado en inteligencia artificial, #[i machine learning] y #[i big data].
                td(style="background-color: #F0F8FF;") Muy usado en empresas, fuerte integración con Windows y Microsoft 365.
                td(style="background-color: #F0F8FF;") Líder de mercado, con la oferta más amplia y madura.
                td(style="background-color: #F0F8FF;") Menor cuota de mercado, enfocado en bases de datos y grandes empresas.
              tr(data-aos="fade-right")
                td.text-center Oferta de servicios.
                td Amplia, con énfasis en análisis de datos y aprendizaje automático.
                td Muy amplia, fuerte en soluciones híbridas y empresariales.
                td Extremadamente amplia, cubriendo casi todas las necesidades #[i cloud].
                td Especializado en bases de datos, almacenamiento y redes seguras.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") Interfaz y uso.
                td.text-center(style="background-color: #F0F8FF;") Intuitiva y accesible para principiantes.
                td.text-center(style="background-color: #F0F8FF;") Integración fluida con entornos Microsoft e interfaz amigable.
                td.text-center(style="background-color: #F0F8FF;") Consola con gran funcionalidad, aunque puede resultar compleja para novatos.
                td.text-center(style="background-color: #F0F8FF;") Interfaz orientada a la gestión empresarial, más técnica.
              tr(data-aos="fade-right")
                td.text-center Precios y planes.
                td Competitivos, especialmente en IA y almacenamiento.
                td Competitivos, con ventajas para empresas con licencias Microsoft.
                td Reconocido por precios bajos y variedad de planes.
                td Enfocados en grandes empresas y servicios especializados.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") Seguridad.
                td.text-center(style="background-color: #F0F8FF;") Cumple con normas internacionales y ofrece opciones de despliegue en varias regiones.
                td.text-center(style="background-color: #F0F8FF;") Alto enfoque en seguridad y cumplimiento normativo empresarial.
                td.text-center(style="background-color: #F0F8FF;") Amplias certificaciones y opciones avanzadas de seguridad.
                td.text-center(style="background-color: #F0F8FF;") Seguridad robusta con un enfoque empresarial.
              tr(data-aos="fade-right")
                td.text-center Facilidades para desarrolladores.
                td APIs potentes e integración con herramientas #[i open source].
                td Excelente soporte para lenguajes Microsoft y herramientas DevOps.
                td Amplio soporte para diversos lenguajes y entornos de desarrollo.
                td Herramientas avanzadas para gestión de bases de datos y desarrollo empresarial.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F0F8FF;") Integración con #[i software].
                td.text-center(style="background-color: #F0F8FF;") Óptima con productos Google y herramientas #[i open source].
                td.text-center(style="background-color: #F0F8FF;") Ideal para el ecosistema Microsoft y aplicaciones empresariales.
                td.text-center(style="background-color: #F0F8FF;") Compatible con prácticamente todo el ecosistema tecnológico.
                td.text-center(style="background-color: #F0F8FF;") Integración fuerte con bases de datos Oracle y aplicaciones corporativas.



</template>

<script>
export default {
  name: 'Tema5',
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
