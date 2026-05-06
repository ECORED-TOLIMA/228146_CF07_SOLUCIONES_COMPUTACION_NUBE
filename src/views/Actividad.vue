<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Reto <em>cloud</em>.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos fundamentales de la computación en la nube, incluyendo su evolución, características, modelos de servicio y despliegue, principales plataformas, así como aspectos básicos de infraestructura, seguridad y migración de servicios en entornos <em>cloud.</em>',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es la computación en la nube?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un modelo que permite almacenar archivos únicamente en dispositivos físicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un modelo que permite acceder a recursos informáticos a través de Internet.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un sistema exclusivo para redes locales empresariales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un software que funciona únicamente sin conexión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la computación en la nube, su evolución, sus características y las formas de uso en distintos contextos tecnológicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es una característica principal de la computación en la nube?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Acceso remoto a recursos tecnológicos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Uso exclusivo de servidores locales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Dependencia de equipos personales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitación al almacenamiento físico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la computación en la nube, su evolución, sus características y las formas de uso en distintos contextos tecnológicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál fue uno de los factores que impulsó la evolución de la computación en la nube?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La reducción del uso de Internet.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El aumento de los sistemas aislados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La necesidad de compartir recursos y reducir costos tecnológicos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La eliminación de los centros de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la computación en la nube, su evolución, sus características y las formas de uso en distintos contextos tecnológicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Qué permite la escalabilidad en la computación en la nube?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar todos los servidores físicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ajustar los recursos tecnológicos según la demanda.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el acceso a los usuarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar el uso de aplicaciones en línea.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la computación en la nube, su evolución, sus características y las formas de uso en distintos contextos tecnológicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál era una característica común de los modelos tradicionales de computación?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Infraestructura local instalada en las organizaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Uso exclusivo de servicios virtuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Acceso global inmediato.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Recursos ilimitados en línea.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la computación en la nube, su evolución, sus características y las formas de uso en distintos contextos tecnológicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es una limitación de los modelos tradicionales de infraestructura tecnológica?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Bajo costo de mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alta flexibilidad de recursos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Acceso global permanente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dificultad para escalar recursos rápidamente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la computación en la nube, su evolución, sus características y las formas de uso en distintos contextos tecnológicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Cuál de los siguientes es un modelo de servicio en la nube?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'LAN',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'WAN',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'SaaS',
              esCorrecta: true,
            },
            { id: 'd', texto: 'FTP', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la computación en la nube, su evolución, sus características y las formas de uso en distintos contextos tecnológicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué ofrece el modelo Infraestructura como Servicio (IaaS)?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicaciones listas para el usuario final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Recursos de infraestructura como servidores y almacenamiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Servicios exclusivos de correo electrónico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sistemas operativos preinstalados sin control del usuario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la computación en la nube, su evolución, sus características y las formas de uso en distintos contextos tecnológicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la principal característica del modelo Plataforma como Servicio (PaaS)?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite desarrollar y desplegar aplicaciones sin gestionar infraestructura.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo ofrece almacenamiento de archivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Funciona únicamente en redes privadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se limita a software de oficina.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la computación en la nube, su evolución, sus características y las formas de uso en distintos contextos tecnológicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué modelo de despliegue permite combinar infraestructura local con servicios en la nube?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Nube pública.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Nube privada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Nube híbrida.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Nube local.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la computación en la nube, su evolución, sus características y las formas de uso en distintos contextos tecnológicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Cuál es una característica de la nube pública?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Infraestructura exclusiva para una sola organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Uso exclusivo sin conexión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Instalación en servidores domésticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Recursos compartidos accesibles a través de Internet.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la computación en la nube, su evolución, sus características y las formas de uso en distintos contextos tecnológicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál de las siguientes es una plataforma de servicios en la nube?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Linux Server', esCorrecta: false },
            { id: 'b', texto: 'Oracle Database Local', esCorrecta: false },
            { id: 'c', texto: 'Amazon Web Services', esCorrecta: true },
            { id: 'd', texto: 'Windows Desktop', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la computación en la nube, su evolución, sus características y las formas de uso en distintos contextos tecnológicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué caracteriza a Microsoft Azure dentro del ecosistema cloud?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Integración con servicios y herramientas de Microsoft.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Uso exclusivo para almacenamiento personal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Limitación a dispositivos móviles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ausencia de herramientas empresariales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la computación en la nube, su evolución, sus características y las formas de uso en distintos contextos tecnológicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿En qué área destaca principalmente Google Cloud Platform?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sistemas operativos de escritorio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Inteligencia artificial y análisis de datos.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Fabricación de hardware.', esCorrecta: false },
            { id: 'd', texto: 'Redes domésticas.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la computación en la nube, su evolución, sus características y las formas de uso en distintos contextos tecnológicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es una fortaleza destacada de Oracle Cloud Infrastructure?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desarrollo de videojuegos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sistemas operativos móviles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Redes sociales empresariales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gestión avanzada de bases de datos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la computación en la nube, su evolución, sus características y las formas de uso en distintos contextos tecnológicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es un componente fundamental de la infraestructura en la nube?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Impresoras locales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Servidores físicos y virtuales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Discos externos personales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Software offline.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la computación en la nube, su evolución, sus características y las formas de uso en distintos contextos tecnológicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Cuál es el objetivo del cifrado de datos en la nube?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reducir el almacenamiento.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Facilitar el acceso público.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Proteger la información frente a accesos no autorizados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar la necesidad de contraseñas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la computación en la nube, su evolución, sus características y las formas de uso en distintos contextos tecnológicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué permite la escalabilidad automática en los servicios cloud?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ajustar recursos según la demanda del sistema.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Desactivar servidores automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Limitar el número de usuarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la conectividad a Internet.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la computación en la nube, su evolución, sus características y las formas de uso en distintos contextos tecnológicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué busca la migración de aplicaciones hacia la nube?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar el uso de Internet.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir el acceso a sistemas informáticos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mantener únicamente servidores físicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Trasladar aplicaciones y datos a entornos cloud.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la computación en la nube, su evolución, sus características y las formas de uso en distintos contextos tecnológicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es una buena práctica para el despliegue de servicios en la nube?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar monitorear el rendimiento del sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desactivar controles de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Implementar monitoreo y pruebas antes del despliegue.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Limitar el uso de copias de seguridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con la computación en la nube, su evolución, sus características y las formas de uso en distintos contextos tecnológicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
