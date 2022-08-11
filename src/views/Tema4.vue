<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.colr_2
        span 4
      h1 Reportes
    
    p.mb-5(data-aos="fade-up") El reporte en venta es el informe que recopila las actividades comerciales desarrolladas en una empresa, el objetivo del informe es evaluar el desempeño del departamento comercial, las estrategias de ventas y el trabajo de los vendedores, este informe permite identificar las fallas y oportunidades de mejora de los procesos.

    .row.mb-5.d-flex.justify-content-center(data-aos="zoom-in")
      .col-12.col-md-10.mb-5  
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/t4-1.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 Es la compilación de los datos comerciales que se obtienen a partir de los diferentes reportes de ventas u otros sistemas que la empresa utilice en la gestión comercial, se analizan con detalle para identificar el progreso del equipo de ventas y esto ayuda a redirigir el plan estratégico de la empresa.
    
    p.mb-5 Los resultados, los objetivos y las actividades de venta deseadas deben estar en el reporte de ventas mensual, indicando cuál es el resultado deseado, y luego crear un camino estratégico para conseguir el objetivo de venta esperado, se debe evaluar mediante métricas claras, definidas por el departamento comercial, con el fin de evitar inflar el informe con datos que no tienen vínculo alguno con el resultado fijado.

    .row.mb-5.d-flex.justify-content-center
      .col-12.col-md-10
        .row.d-flex.justify-content-center.bgr_4.p-4.mb-3(data-aos="zoom-out")
          .col-12.col-md-7
            p El reporte debe contar con datos por región, por segmento del tipo de producto, datos que midan la actividad de ventas y estadísticas de satisfacción del cliente, datos para analizar la duración de llamadas, los datos de las visitas a clientes, en fin, todos los datos necesarios para presentar un buen reporte.
            p.mb-0 La importancia de los datos comerciales en el reporte de ventas mensual radica en obtenerlos del software de gestión comercial, con este tipo de herramientas se logra obtener la información referente al número de visitas ejecutadas, número de llamadas realizadas a prospectos y clientes, transacciones realizadas, valores y duración promedio del período de ventas.
          .col-12.col-md-5
            figure
              img(src='@/assets/curso/tema4/t4-2.svg', alt='mujer tomando nota de unos productos')
        
        p El mayor inconveniente que se puede encontrar es que se deben ingresar los datos manualmente, no se puede confiar en que el equipo actualice el sistema de forma precisa, por esto, para tener éxito en la estrategia de ventas se recomiendan estos tres tipos de informes:
    
    .row.mb-5(data-aos="fade-right")
      .col-2.col-md-1.bgr_12 
        figure
          img(src='@/assets/curso/tema4/t4-6.svg', alt='Texto que describa la imagen')
      .col-10.col-md-11.bgr_11.d-flex.align-items-center
        h3.mb-0 Reportes de ventas diarias
    
    .bg_grad-10.mb-5
      p El informe diario no se hace sobre las métricas que dependen de los resultados, este reporte debe contener la cantidad de actividades realizadas con los prospectos las últimas 24 horas. 
      p.mb-5 Para el gerente de la empresa es importante conocer el número de llamadas y correos electrónicos enviados por el equipo de ventas cada día, esta es la manera de monitorear su desempeño e identificar cualquier anomalía para solucionar de raíz y mantener un buen nivel de productividad de su equipo de ventas, este reporte le asegura al gerente que su equipo está realizando las actividades diarias planeadas.

      .row.mb-5.justify-content-center
        .col-12.col-md-4(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema4/t4-3.png', alt='Texto que describa la imagen')
        .col-12.col-md-6(data-aos="fade-left")
          .tarjeta.bgr_18.p-4.mb-3
            p Indicadores que se pueden lograr en un reporte de ventas diario:
            ul.lista-ul--color.mb-0
              li.mb-0 
                i.fas.fa-circle.pst_13
                | Número de reuniones/propuestas realizadas por representante.
              li.mb-0 
                i.fas.fa-circle.pst_13
                | Número de conversaciones exitosas por representante.
              li.mb-0 
                i.fas.fa-circle.pst_13
                | Número de nuevos clientes calificados por representante.
              li.mb-0 
                i.fas.fa-circle.pst_13
                | Número de nuevos prospectos creados por cada vendedor.
          
          p Cada uno de los indicadores está enfocado en una etapa del ciclo de vida de la venta, esto garantiza que los vendedores se enfoquen en sostener un volumen de actividades productivas en cada etapa del proceso.

    .row.mb-5(data-aos="fade-right")
      .col-2.col-md-1.bgr_12 
        figure
          img(src='@/assets/curso/tema4/t4-6.svg', alt='Texto que describa la imagen')
      .col-10.col-md-11.bgr_11.d-flex.align-items-center
        h3.mb-0 Análisis de ventas semanal
    
    p Los reportes semanales empiezan a arrojar situaciones que deben abordarse inmediatamente ya sea con el proceso de ventas o con el equipo de ventas, esto contribuye a atenderlos a tiempo y antes de que se conviertan en clientes perdidos.
    p Un reporte semanal es la manera ideal para medir la productividad de los representantes de ventas de la empresa, claro que los reportes de ventas semanales tienen como intención ser el motivo para realizar reuniones del equipo de ventas. 
    p.mb-5 Hacer una reunión semanal para evaluar el reporte de ventas con el equipo tiene los siguientes efectos positivos:     

    .bg_grad-11
      .row.justify-content-center
        .col-12.col-md-10
          ImagenInfografica.color-acento-botones.mb-5(data-aos="zoom-in")
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema4/t4-4.svg', alt='Texto que describa la imagen')
            .tarjeta.bgr_4.p-3(x="23%" y="20%" numero="01")
              p Crea una cultura de ventas enfocada en actividades y mediciones importantes para la empresa, mantiene el equipo en sintonía y trabajando para un objetivo común.
            .tarjeta.bgr_4.p-3(x="41%" y="82%" numero="02")
              p Le permite al equipo la oportunidad de hablar y compartir sus experiencias, en la reunión puede expresar lo positivo y lo negativo que esté viviendo con su plan de trabajo.
            .tarjeta.bgr_4.p-3(x="59%" y="20%" numero="03")
              p Es una manera de fomentar la sana competencia entre los miembros del equipo de ventas.
            .tarjeta.bgr_4.p-3(x="77%" y="82%" numero="04")
              p También fomenta la cultura de la responsabilidad y transparencia del equipo, ya que se mantiene al día la información, esta reunión es la manera de motivarlos a mantener sus quejas y reclamos actualizados y, recibir el crédito por su trabajo.

    .row.mb-5(data-aos="fade-right")
      .col-2.col-md-1.bgr_12 
        figure
          img(src='@/assets/curso/tema4/t4-6.svg', alt='Texto que describa la imagen')
      .col-10.col-md-11.bgr_11.d-flex.align-items-center
        h3.mb-0 Reporte de ventas mensuales
    
    p.mb-5 Este reporte tiene como objetivo identificar cualquier problema que se descubra y que esté afectando a la empresa, proporciona una visión generalizada del desempeño de los representantes de ventas, deja ver cómo estos afectan a los objetivos del equipo de ventas y a la empresa a largo plazo, también ayudan a tener una visión clara sobre el departamento comercial.

    figure(data-aos="flip-down")
      img(src='@/assets/curso/tema4/t4-5.png', alt='Texto que describa la imagen')

 



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
