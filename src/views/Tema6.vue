<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Infraestructura y arquitectura de servicios en la nube

    p.mb-4 La infraestructura y arquitectura de servicios en la nube constituyen la base tecnológica que permite ofrecer recursos informáticos a través de Internet de manera flexible, escalable y bajo demanda. En lugar de depender de equipos físicos instalados localmente, las organizaciones pueden acceder a servidores, almacenamiento, redes y plataformas de desarrollo alojados en centros de datos distribuidos geográficamente.

    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema6/img-01v.png', alt='')
      .col.col-lg-6.col-12.order-lg-1.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") Este modelo se sustenta en infraestructuras altamente virtualizadas que permiten dividir los recursos físicos en múltiples entornos virtuales. Gracias a esta virtualización, es posible crear máquinas virtuales, contenedores, bases de datos y aplicaciones que funcionan de forma independiente, pero que comparten la misma infraestructura física de manera eficiente.
        p.mb-4(data-aos="fade-down") Las plataformas de computación en la nube, como Amazon Web Services, Microsoft Azure, Google Cloud Platform y Oracle Cloud Infrastructure, implementan arquitecturas complejas que integran redes de alta disponibilidad, almacenamiento distribuido, sistemas de seguridad y herramientas de gestión automatizada.

    .row.justify-content-center
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema6/img-02v.png', alt='')
      .col.col-lg-6.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Dentro de esta arquitectura, los servicios se organizan en diferentes capas que permiten separar la infraestructura física, las plataformas de desarrollo y las aplicaciones utilizadas por los usuarios. Esta estructura facilita la administración de los recursos, optimiza el rendimiento de los sistemas y garantiza la disponibilidad continua de los servicios.
        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p.mb-0(data-aos="fade-down") Comprender la infraestructura y la arquitectura de la nube permite identificar cómo se diseñan, despliegan y administran los servicios tecnológicos que soportan aplicaciones modernas, entornos de desarrollo y soluciones empresariales en entornos digitales.
    
    Separador

    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.1 Requisitos técnicos básicos para implementar servicios #[i cloud]

    p La implementación de servicios en la nube requiere una serie de condiciones técnicas que permiten garantizar el acceso adecuado a los recursos, la estabilidad de las aplicaciones y la seguridad de la información. Estos requisitos constituyen la base para que usuarios, organizaciones o desarrolladores puedan aprovechar de manera eficiente las capacidades de la computación en la nube.
    p.mb-4.text-center Entre los principales requisitos técnicos se encuentran:

    .cajon.cajon.C06.p-5.mb-4
      SlyderB(:datos="datosSlyder")

    p El cumplimiento de estos requisitos permite iniciar la implementación de soluciones en la nube de manera organizada, garantizando que los recursos tecnológicos puedan ser desplegados, configurados y administrados correctamente dentro de los entornos #[i cloud].

    Separador

    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.2 Componentes de la infraestructura en la nube

    p La infraestructura en la nube está compuesta por un conjunto de recursos físicos y virtuales que trabajan de manera integrada para garantizar el funcionamiento continuo, seguro y escalable de los servicios digitales. Estos componentes permiten ejecutar aplicaciones, almacenar información y ofrecer servicios accesibles desde cualquier lugar a través de Internet. 
    p.mb-4 Entre los principales componentes de la infraestructura #[i cloud] se encuentran:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        .contenido-interno
          PasosA.color-primario.mb-5(tipo="l")
            .row.justify-content-center
              .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
                h3 Servidores físicos y virtuales
                p.mb-0 Constituyen la base del procesamiento de datos, la ejecución de aplicaciones y la gestión de bases de datos. A través de la virtualización es posible crear múltiples servidores virtuales dentro de un mismo equipo físico, optimizando el uso de los recursos.
              .col-lg-2.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema6/img-09.svg', alt="")
            .row.justify-content-center
              .col-lg-2.col-8.mb-lg-0.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema6/img-10.svg', alt="")
              .col-lg-8(data-aos="fade-left")
                h3 Redes
                p.mb-0 Incluyen dispositivos como routers, switches y redes definidas por software, que permiten establecer conexiones seguras, rápidas y administrables entre usuarios, aplicaciones y centros de datos ubicados en diferentes regiones.
            .row.justify-content-center
              .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
                h3 Sistemas de almacenamiento
                p.mb-0 Ofrecen diversas modalidades como almacenamiento en bloques, en archivos y en objetos, lo que facilita guardar grandes volúmenes de información con altos niveles de disponibilidad y escalabilidad.
              .col-lg-2.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema6/img-11.svg', alt="")
            .row.justify-content-center
              .col-lg-2.col-8.mb-lg-0.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema6/img-12.svg', alt="")
              .col-lg-8(data-aos="fade-left")
                h3 Plataformas de gestión y automatización
                p.mb-0 Herramientas que permiten monitorear, administrar y desplegar recursos en la nube de manera centralizada. Estas plataformas facilitan la automatización de procesos, reduciendo tiempos de operación y posibles errores humanos.
            .row.justify-content-center
              .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
                h3 Infraestructura del centro de datos
                p.mb-0 Incluye sistemas de seguridad física, control de acceso, protección contra incendios, refrigeración especializada y suministro eléctrico redundante. Estos elementos garantizan la continuidad operativa y la estabilidad de los servicios.
              .col-lg-2.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema6/img-13.svg', alt="")

    p.mb-4 En conjunto, estos componentes crean un entorno confiable, flexible y escalable que soporta el crecimiento de las organizaciones, garantizando disponibilidad, rendimiento y seguridad en los servicios ofrecidos.

    .row.justify-content-center
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema6/img-14.svg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C05.p-4.mb-2
          p.mb-0(data-aos="fade-down") En el ámbito educativo, por ejemplo, instituciones como el SENA requieren de esta infraestructura para sostener plataformas de formación virtual, videoconferencias, sistemas de gestión del aprendizaje y simuladores especializados, asegurando que los aprendices accedan sin interrupciones a los contenidos y herramientas de aprendizaje.

    Separador

    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.3 Arquitectura base de servicios en la nube

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img-15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La arquitectura de servicios en la nube se refiere a la forma en que se organizan, estructuran e interconectan los distintos componentes tecnológicos que permiten ofrecer aplicaciones, almacenamiento y procesamiento de datos a través de Internet. Esta arquitectura se diseña con el objetivo de garantizar escalabilidad, disponibilidad, seguridad y eficiencia en el uso de los recursos.

    p.mb-4 En términos generales, la arquitectura base de los servicios #[i cloud] se construye mediante varias capas que trabajan de manera integrada:

    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-1.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C03")
          .row(titulo="Capa de infraestructura")
            .col-12.mb-0.mb-md-0
              p Corresponde al nivel más fundamental y está conformado por los centros de datos, servidores físicos, sistemas de almacenamiento y redes de comunicación. Esta capa proporciona los recursos de hardware que soportan todo el funcionamiento de la nube.
          .row(titulo="Capa de virtualización")
            .col-12.mb-0.mb-md-0
              p Permite dividir los recursos físicos en múltiples recursos virtuales, como máquinas virtuales o contenedores. Gracias a esta tecnología es posible optimizar el uso del hardware y ejecutar diferentes aplicaciones de manera simultánea en un mismo servidor.
          .row(titulo="Capa de plataforma")
            .col-12.mb-0.mb-md-0
              p Incluye herramientas, entornos de desarrollo, bases de datos y servicios que facilitan la creación, prueba y despliegue de aplicaciones sin que los desarrolladores deban gestionar directamente la infraestructura subyacente.
          .row(titulo="Capa de aplicaciones o servicios")
            .col-12.mb-0.mb-md-0
              p Es el nivel visible para los usuarios finales. Aquí se encuentran las aplicaciones web, sistemas de información, plataformas educativas, sistemas empresariales o cualquier servicio que se utilice a través de Internet.
          .row(titulo="Capa de gestión y seguridad")
            .col-12.mb-0.mb-md-0
              p Integra los mecanismos de monitoreo, control de acceso, autenticación, copias de seguridad y administración de recursos. Esta capa permite garantizar la protección de los datos y el funcionamiento estable de los servicios.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/img-16.png', alt='')

    p.mb-4 El diseño de esta arquitectura suele apoyarse en principios como la escalabilidad, que permite aumentar o disminuir recursos según la demanda; la alta disponibilidad, que asegura que los servicios permanezcan activos incluso ante fallos; y la distribución geográfica, que utiliza centros de datos ubicados en diferentes regiones para mejorar el rendimiento y la confiabilidad.

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0 Gracias a esta estructura, las organizaciones pueden implementar soluciones tecnológicas flexibles y eficientes. En el ámbito educativo, instituciones como el Servicio Nacional de Aprendizaje aprovechan arquitecturas cloud para soportar plataformas de aprendizaje virtual, almacenamiento de contenidos digitales y herramientas colaborativas que facilitan la formación a distancia.

    Separador

    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.4 Consideraciones de seguridad en entornos #[i cloud]

    p.mb-4 La seguridad constituye uno de los pilares más relevantes en la adopción de la computación en la nube, ya que busca garantizar la confidencialidad, integridad y disponibilidad de los datos. Las organizaciones deben aplicar un conjunto de medidas preventivas y correctivas que minimicen riesgos y aseguren la continuidad de los servicios. Entre las prácticas más comunes se encuentran:

    .row
      .col-12
        .px-5.py-4
          .row.align-items-center.BG02(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-3
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema6/img-17.png", alt="")
            .col-lg-8.p-5.py-4
              SlyderF.custom.color-acento-botones.px-4.py-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.px-3.py-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img-18.svg", alt="").img100.m-auto
                  p Cifrado de datos, tanto en tránsito como en reposo, para proteger la información frente a accesos no autorizados.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img-19.svg", alt="").img100.m-auto
                  p #[i Firewalls] virtuales y segmentación de redes, que permiten controlar el tráfico y evitar accesos indebidos entre los diferentes recursos en la nube.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img-20.svg", alt="").img100.m-auto
                  p Gestión de identidades y accesos (IAM), acompañada de mecanismos de autenticación multifactor para reforzar la verificación de los usuarios.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img-21.svg", alt="").img100.m-auto
                  p Principio de privilegio mínimo, mediante el cual cada usuario accede únicamente a los recursos estrictamente necesarios para realizar sus funciones.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img-22.svg", alt="").img100.m-auto
                  p Modelo de confianza cero (Zero Trust), que parte de la premisa de que ningún sistema o usuario es confiable por defecto y requiere verificación continua.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img-23.svg", alt="").img100.m-auto
                  p Planes de respuesta a incidentes y auditorías periódicas, que permiten detectar, contener y corregir posibles vulnerabilidades.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema6/img-24.svg", alt="").img100.m-auto
                  p Cumplimiento de estándares internacionales de seguridad, como ISO 27001 o NIST, que establecen buenas prácticas para la protección de la información

    p.mb-4 Más allá de estas prácticas, es fundamental que las organizaciones implementen un proceso estructurado de gestión de seguridad en la nube. Este proceso puede desarrollarse a través de las siguientes etapas:

    .row.BG03.justify-content-center.px-3.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Evaluación de riesgos y requisitos")
            .col-12.mb-4.mb-md-0
              p.mb-0 Consiste en identificar los datos y aplicaciones que se trasladarán a la nube, clasificar la información según su nivel de sensibilidad y analizar las posibles amenazas.
          .row(numero="2" titulo="Definición de políticas y controles de seguridad")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se establecen reglas claras de acceso, responsabilidades compartidas entre el proveedor y la organización, así como lineamientos de cumplimiento normativo.
          .row(numero="3" titulo="Implementación de medidas de protección")
            .col-12.mb-4.mb-md-0
              p.mb-0 Incluye la aplicación de cifrado, segmentación de redes, firewalls, gestión de identidades y mecanismos de autenticación segura.
          .row(numero="4" titulo="Monitoreo y auditoría continua")
            .col-12.mb-4.mb-md-0
              p.mb-0 Implica supervisar accesos y tráfico de red en tiempo real, detectar comportamientos anómalos y responder oportunamente ante incidentes.
          .row(numero="5" titulo="Capacitación y concienciación")
            .col-12.mb-4.mb-md-0
              p.mb-0 Busca formar a usuarios y administradores en buenas prácticas de ciberseguridad, reduciendo riesgos asociados al factor humano.
          .row(numero="6" titulo="Mejora continua")
            .col-12.mb-4.mb-md-0
              p.mb-0 Consiste en actualizar políticas, procesos y controles de seguridad de acuerdo con nuevas amenazas, vulnerabilidades y lecciones aprendidas.
      .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/img-25.png', alt='')

    .row.justify-content-center.align-items-stretch.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          p.mb-0 Como ejemplo, en instituciones educativas como el SENA, la implementación de servicios en la nube implica proteger datos académicos, resultados de evidencias y la información personal de aprendices e instructores. Para ello se aplican controles de acceso con autenticación multifactor, políticas de privilegio mínimo en las plataformas educativas y planes de recuperación ante incidentes, garantizando la continuidad del aprendizaje virtual y la protección de la información institucional.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema6/img-26.png', alt='')

    Separador

    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.5 Administración y optimización de recursos

    p La administración eficiente de los recursos en la nube resulta esencial para garantizar la continuidad de los servicios, optimizar costos y asegurar un uso adecuado de la infraestructura tecnológica. La optimización no solo implica gestionar de forma adecuada la capacidad de procesamiento, la memoria y el almacenamiento, sino también implementar políticas y herramientas que permitan responder de manera flexible a las demandas cambiantes de los usuarios.
    p.mb-4 Entre las estrategias más utilizadas se destacan:

    .tarjeta.tarjeta--C02.p-4.mb-4
      LineaTiempoC.color-acento-botones(text-small)(data-aos="flip-up")
        .row.py-5.px-4(titulo="a.")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Monitoreo constante del rendimiento
            p.mb-0 Mediante la supervisión de CPU, memoria, almacenamiento y tráfico de red, con el fin de detectar anomalías y realizar ajustes oportunos que mantengan la estabilidad del sistema.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema6/img-27.png', alt='')
        .row.py-5.px-4(titulo="b.")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Escalabilidad automática 
            p.mb-0 Que permite aumentar o disminuir la capacidad de los recursos según la demanda, evitando tanto la saturación de los servicios como el uso innecesario de infraestructura.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema6/img-28.png', alt='')
        .row.py-5.px-4(titulo="c.")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Políticas de respaldo y recuperación
            p.mb-0 Diseñadas para garantizar la continuidad operativa frente a fallos, incidentes o desastres que puedan afectar la disponibilidad de la información.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema6/img-29.png', alt='')
        .row.py-5.px-4(titulo="d.")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Auditoría y control de costos
            p.mb-0 Especialmente en modelos de pago por uso (#[i pay-as-you-go]), donde se monitorea el consumo de servicios para optimizar el gasto tecnológico.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema6/img-30.png', alt='')
        .row.py-5.px-4(titulo="e.")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Herramientas de automatización y orquestación
            p.mb-0 Que facilitan la implementación, configuración y administración de los servicios, reduciendo la carga operativa y minimizando posibles errores humanos.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema6/img-31.png', alt='')

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        p En el ámbito educativo, la correcta administración y optimización de los servicios en la nube permite que plataformas de formación virtual, aulas en línea y sistemas administrativos funcionen de manera estable, incluso en momentos de alta demanda.

    .row.align-items-center.justify-content-center
      .col-lg-12  
        .row.justify-content-center.mt-2
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-c1(data-aos="fade-right")             
              .col-lg.p-4
                p.mb-0 Por ejemplo, durante los procesos de inscripción en el SENA, miles de aprendices acceden simultáneamente a las plataformas virtuales. Gracias al monitoreo constante del sistema y a la escalabilidad automática de los servicios, es posible evitar caídas de la plataforma y garantizar un acceso continuo. Además, mediante políticas de respaldo y control del consumo de recursos, se optimizan los costos operativos y se asegura la disponibilidad de la infraestructura tecnológica cuando más se necesita.
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema6/img-32.png', alt='', class="w-100 h-100 object-fit-cover")






</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Conectividad a Internet estable',
        texto:
          'Es indispensable contar con una conexión confiable y de buena velocidad, ya que todos los servicios cloud se gestionan y utilizan a través de Internet.',
        imagen: require('@/assets/curso/tema6/img-03.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Dispositivos compatibles',
        texto:
          'Computadores, servidores o dispositivos móviles que permitan acceder a los servicios mediante navegadores web o aplicaciones especializadas.',
        imagen: require('@/assets/curso/tema6/img-04.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Sistema operativo actualizado',
        texto:
          'Plataformas como Windows, Linux o macOS deben mantenerse actualizadas para garantizar compatibilidad con herramientas y servicios en la nube.',
        imagen: require('@/assets/curso/tema6/img-05.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Navegador web moderno',
        texto:
          'Navegadores como Google Chrome, Mozilla Firefox o Microsoft Edge facilitan el acceso a los portales de administración de las plataformas cloud.',
        imagen: require('@/assets/curso/tema6/img-06.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Cuenta en una plataforma de nube',
        texto:
          'Es necesario registrarse en proveedores como Amazon Web Services, Microsoft Azure o Google Cloud Platform para crear proyectos, administrar recursos y desplegar servicios.',
        imagen: require('@/assets/curso/tema6/img-07.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Conocimientos básicos de administración tecnológica',
        texto:
          'Nociones sobre redes, almacenamiento, seguridad informática y gestión de recursos digitales facilitan la configuración y el uso adecuado de los servicios.',
        imagen: require('@/assets/curso/tema6/img-08.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
    ],
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
