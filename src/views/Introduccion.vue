<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.colr_2
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade-up") En este componente formativo se abordarán los conceptos para realizar una correcta exhibición y venta de productos, teniendo las demostraciones, condiciones comerciales, aspectos de inclusión, con el fin de realizar la venta con la satisfacción del cliente. Por tanto, se invita a observar el siguiente video:

    figure.mb-5.mt-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/hlc_U6x1Ndo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
