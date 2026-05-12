<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Modelos de despliegue en la nube

    p.mb-4 Los modelos de despliegue en la computación en la nube definen la forma en que se organiza, administra y pone a disposición de los usuarios la infraestructura tecnológica que soporta los servicios digitales. Mientras que los modelos de servicio como IaaS, PaaS y SaaS describen qué tipo de servicio se ofrece, los modelos de despliegue explican dónde y cómo se alojan esos servicios.

    .row.justify-content-center
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img-01v.png', alt='')
      .col.col-lg-6.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Comprender estas modalidades es fundamental, ya que cada una presenta ventajas, limitaciones y aplicaciones específicas según las necesidades de las organizaciones y de los usuarios individuales. Factores como el nivel de seguridad requerido, el grado de control sobre los datos, los costos de infraestructura y la capacidad de escalabilidad influyen en la elección del modelo de despliegue más adecuado.
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") En términos generales, la computación en la nube se puede implementar mediante tres modelos principales: nube pública, nube privada y nube híbrida. Cada uno de estos enfoques ofrece distintas posibilidades de administración, acceso y uso de los recursos tecnológicos, permitiendo a las organizaciones adoptar soluciones adaptadas a sus requerimientos operativos y estratégicos.

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1 Nube pública

    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3.g-0
        figure
          img(src='@/assets/curso/tema4/img-02.svg', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") La nube pública es un entorno en el que los servicios informáticos, como servidores, almacenamiento y aplicaciones, son ofrecidos por proveedores externos a través de Internet. En este modelo, empresas especializadas administran la infraestructura tecnológica, mientras que los usuarios acceden a los recursos sin necesidad de invertir en #[i hardware] propio ni encargarse del mantenimiento de los sistemas.
        p Entre sus ventajas más destacadas se encuentra la facilidad de acceso, ya que cualquier persona con conexión a Internet puede utilizar estos servicios. Además, se caracteriza por su alta flexibilidad y por la posibilidad de ajustar los recursos según las necesidades del momento. Entre los beneficios más importantes de la nube pública se encuentran:

    .row
      .col-12
        .px-5.py-4
          .row.align-items-center.BG02(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-3
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema4/img-03.png", alt="")
            .col-lg-8.p-5.py-4
              SlyderF.custom.color-acento-botones.px-4.py-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.px-3.py-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img-04.svg", alt="").img100.m-auto
                  p Reducción de costos iniciales, al pagar solo por lo que se utiliza.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img-05.svg", alt="").img100.m-auto
                  p Escalabilidad, que permite aumentar o disminuir recursos según la demanda.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img-06.svg", alt="").img100.m-auto
                  p Accesibilidad desde cualquier dispositivo, lo que favorece la colaboración y el trabajo remoto.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img-07.svg", alt="").img100.m-auto
                  p Mantenimiento a cargo del proveedor, que actualiza los sistemas de manera automática.

    p Sin embargo, este modelo también presenta algunas limitaciones que deben considerarse. Entre ellas se encuentran las preocupaciones relacionadas con la seguridad, debido al almacenamiento de información en entornos compartidos, así como el menor control sobre la infraestructura, lo que puede representar un desafío en contextos que requieren configuraciones altamente personalizadas.

    .row.BG01.justify-content-center.px-3.py-5.mb-0
      .col.col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img-08.svg', alt='')
      .col.col-lg-6.col-12.order-lg-1.order-2
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--blanca.p-4(style="border: 1px solid #E6E6E6; box-shadow: 0 2px 6px rgba(0,0,0,0.08); border-radius: 19px;")
              p.text-bold(data-aos="fade-down") Entre las funciones principales del analista de requisitos se destacan:
                ul.lista-ul--color.mt-4(data-aos="fade-down")
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Almacenamiento y respaldo de información.
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Aulas virtuales y entornos de aprendizaje colaborativo.
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Desarrollo y ejecución de aplicaciones en línea.
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Procesamiento de grandes volúmenes de datos e inteligencia artificial.
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Alojamiento de sitios #[i web] y plataformas digitales.

    p.mb-4 A continuación, se presenta un ejemplo que permite comprender cómo funciona la nube pública en un contexto real:

    .row.justify-content-center.align-items-stretch.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          .row.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema4/img-10.svg', alt='')
            .col-lg-10.col-12
              p Una empresa de comercio electrónico que maneja gran cantidad de transacciones diarias, puede utilizar Amazon Web Services (AWS) en la modalidad de nube pública para alojar su página web y gestionar su base de datos de clientes.
          .tarjeta.tarjeta--blanca.p-4.mb-3(style="border: 1px solid #E6E6E6; box-shadow: 0 2px 6px rgba(0,0,0,0.08); border-radius: 19px;")
            p.mb-0 Gracias a esta solución, la empresa evita invertir en servidores propios, que resultarían costosos de adquirir y mantener. Al mismo tiempo, obtiene la posibilidad de escalar rápidamente su capacidad de almacenamiento y procesamiento en temporadas de alta demanda, como promociones o fechas especiales de ventas.
          p El uso de la nube pública también le permite mejorar la seguridad y disponibilidad de su plataforma, ya que los proveedores implementan sistemas de respaldo, balanceo de cargas y monitoreo constante, asegurando la continuidad del servicio sin que la organización tenga que destinar personal técnico especializado para estas tareas.
          p.mb-0 En este caso, la nube pública se convierte en una herramienta estratégica para garantizar la eficiencia operativa y la satisfacción de los clientes, optimizando recursos y asegurando un servicio estable.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema4/img-09v.svg', alt='')

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2 Nube privada

    p La nube privada se caracteriza por ofrecer un entorno exclusivo en el que los recursos y servicios tecnológicos se encuentran dedicados a una sola organización. A diferencia de la nube pública, donde múltiples usuarios comparten la misma infraestructura, este modelo garantiza que los servidores, el almacenamiento y las aplicaciones estén reservados únicamente para la institución que los utiliza.
    p.mb-4 Este tipo de despliegue puede implementarse de dos maneras:

    .row.justify-content-center.mb-4.g-4
      .col-lg-5.mb-lg-0
        .tarjeta.h-100(data-aos="fade-left")(style="border-radius: 16px !important; overflow: hidden;")
          figure(style="margin:0;")
            img(src='@/assets/curso/tema4/img-11.svg', alt='' style="width:100%; display:block; border-top-left-radius:16px; border-top-right-radius:16px;")
          .p-4(style="background-color:#FFE79E; border-bottom-left-radius:16px; border-bottom-right-radius:16px;")
            p.mb-0 En centros de datos propios, administrados directamente por la organización, lo que permite mantener control total sobre la infraestructura tecnológica.
      .col-lg-5
        .tarjeta.h-100(data-aos="fade-right")(style="border-radius: 16px !important; overflow: hidden;")
          figure(style="margin:0;")
            img(src='@/assets/curso/tema4/img-12.svg', alt='' style="width:100%; display:block; border-top-left-radius:16px; border-top-right-radius:16px;")         
          .p-4(style="background-color:#FFE79E; border-bottom-left-radius:16px; border-bottom-right-radius:16px;")
            p.mb-0 A través de proveedores especializados que ofrecen recursos dedicados exclusivamente a una empresa o institución, aunque bajo la gestión técnica del proveedor.

    p La nube privada se destaca por su alto nivel de seguridad y control, ya que la organización define de manera directa las configuraciones, las políticas de acceso y las medidas de protección de la información. Esto resulta especialmente importante en sectores que manejan datos sensibles o regulados.
    p.mb-4 Entre sus principales características se encuentran:

    .row.mb-4
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="fade-right")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema4/img-13.svg' alt="")
        h4.text-center Exclusividad de los recursos, sin compartir infraestructura con otras organizaciones.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="flip-right")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema4/img-14.svg' alt="")
        h4.text-center Mayor control sobre el entorno tecnológico y la gestión de los datos.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="flip-left")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema4/img-15.svg' alt="")
        h4.text-center Posibilidad de personalizar configuraciones, aplicaciones y políticas de seguridad.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="fade-left")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema4/img-16.svg' alt="")
        h4.text-center Cumplimiento más estricto de normativas legales y regulatorias.

    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3.g-0
        figure
          img(src='@/assets/curso/tema4/img-17.svg', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") No obstante, este modelo también presenta algunas limitaciones. Su implementación suele requerir inversiones elevadas en #[i hardware], mantenimiento y personal especializado, lo que puede representar un costo significativo para las organizaciones. Además, su capacidad de escalabilidad es más limitada, ya que depende de los recursos físicos disponibles, a diferencia de la nube pública que permite ampliar servicios bajo demanda.
        p En síntesis, la nube privada resulta adecuada para escenarios en los que se administran datos sensibles, sistemas críticos o aplicaciones que requieren altos niveles de personalización y cumplimiento normativo, aunque implica mayores costos en comparación con otros modelos de despliegue.

    p.mb-4 A continuación, se presenta un ejemplo que permite comprender su funcionamiento en un contexto real:

    .row.justify-content-center.align-items-stretch.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          p.mb-0 Una entidad del sector salud puede implementar una nube privada para gestionar los historiales clínicos electrónicos de sus pacientes. De esta forma, asegura que la información se almacene en un entorno exclusivo, con protocolos de seguridad personalizados y cumpliendo con las regulaciones de protección de datos del sector. Gracias a este modelo, la institución puede controlar de manera estricta quién accede a los registros, reducir los riesgos de filtración de información y garantizar la confidencialidad de los datos médicos.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema4/img-18.png', alt='')

    Separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.3 Nube híbrida

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img-19.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La nube híbrida combina las características más destacadas de la nube pública y la nube privada, ofreciendo a las organizaciones un entorno flexible y equilibrado. Este modelo permite mantener datos y aplicaciones críticas en un espacio seguro y exclusivo, mientras se aprovechan los recursos de la nube pública para gestionar cargas de trabajo menos sensibles o variables.
    
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img-20.svg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p Desde la perspectiva económica, la nube híbrida representa una optimización de costos. Las inversiones en infraestructura propia se limitan a lo esencial, mientras que los incrementos en la demanda se gestionan mediante servicios de la nube pública bajo el esquema de pago por uso. Esto reduce los gastos en #[i hardware] y mantenimiento, al tiempo que ofrece escalabilidad inmediata.
        .tarjeta--C01.p-4.mb-2(style="border-radius: 19px;")
          p.mb-0(data-aos="fade-down") En términos de seguridad, este modelo facilita una segmentación estratégica de la información. Los datos sensibles se almacenan en la nube privada bajo controles estrictos, mientras que la información menos crítica se aloja en la nube pública con niveles de protección acordes a su importancia. De esta manera, las organizaciones pueden cumplir con normativas específicas sin perder la flexibilidad que ofrece la nube pública.

    p.mb-4.text-center Entre las principales ventajas de la nube híbrida se encuentran:

    .row
      .col-12
        .px-5.py-4
          .row.align-items-center.BG02(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-3
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema4/img-21.png", alt="")
            .col-lg-8.p-5.py-4
              SlyderF.custom.color-acento-botones.px-4.py-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.px-3.py-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img-22.svg", alt="").img100.m-auto
                  p Optimización de costos al combinar inversión propia con servicios bajo demanda.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img-23.svg", alt="").img100.m-auto
                  p Escalabilidad flexible, ajustándose a las necesidades en tiempo real.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img-24.svg", alt="").img100.m-auto
                  p Segmentación de datos, diferenciando entre información crítica y no crítica.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img-25.svg", alt="").img100.m-auto
                  p Continuidad del negocio, con mayor capacidad de recuperación y redundancia en caso de fallos.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema4/img-27.svg", alt="").img100.m-auto
                  p Adaptación estratégica, al permitir mover cargas de trabajo entre entornos según los objetivos de la organización.

    p.mb-4 No obstante, su implementación requiere una gestión cuidadosa y personal especializado, ya que la integración entre entornos públicos y privados puede generar desafíos técnicos relacionados con la interoperabilidad, la seguridad o la administración de los sistemas.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0 En conclusión, la nube híbrida se ha convertido en una de las alternativas más adoptadas en la actualidad, ya que ofrece un equilibrio entre seguridad, eficiencia en costos y escalabilidad, adaptándose a las dinámicas cambiantes del entorno empresarial y educativo.

    p.mb-4 A continuación, se presenta un ejemplo que permite comprender su funcionamiento:

    .row.justify-content-center.align-items-stretch.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          p.mb-0 El SENA podría implementar una nube híbrida para alojar sus plataformas de formación virtual. En este modelo, los datos sensibles relacionados con la gestión académica, matrículas y evaluaciones se mantendrían en una nube privada, garantizando control y seguridad. Al mismo tiempo, los contenidos de aprendizaje, como videos, foros o actividades interactivas, podrían alojarse en una nube pública, permitiendo un acceso masivo y flexible con menores costos de almacenamiento. De esta manera, la institución optimizaría sus recursos, protegería la información confidencial de los aprendices y aseguraría la continuidad de sus servicios educativos en todo el país.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema4/img-26.png', alt='')


</template>

<script>
export default {
  name: 'Tema4',
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
