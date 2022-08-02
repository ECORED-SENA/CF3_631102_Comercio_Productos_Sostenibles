<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Exhibición y planimetría
      
    p Es el proceso donde se seleccionan, ubican y exponen los artículos en el punto de venta, de tal forma que llamen la atención del cliente invitándolo a la compra, la exhibición comercial se selecciona según el tamaño y el tipo de establecimiento condicionando la distribución de los productos a ofertar. 

    p.mb-5 La exposición de los artículos en un almacén o establecimiento se hace mediante el uso de un mobiliario especial, que permite mostrar al cliente la mayor cantidad de productos durante el mayor tiempo posible.

    .row.d-flex.justify-content-center.mb-5
      .col-12.col-md-4
        .bgr.px-5.py-2
          p.mb-0.text-center Los objetivos de la exhibición son:
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta-avatar.pst
        img(src='@/assets/curso/tema1/t1-1.png' alt='AvatarTop')
        .tarjeta
          .p-4.text-center
            p.mb-0 Llamar la atención del cliente para que vea los productos.
      .tarjeta-avatar.pst
        img(src='@/assets/curso/tema1/t1-2.png' alt='AvatarTop')
        .tarjeta
          .p-4.text-center
            p.mb-0 Generar fidelidad hacia el establecimiento.
      .tarjeta-avatar.pst_2
        img(src='@/assets/curso/tema1/t1-3.png' alt='AvatarTop')
        .tarjeta.w-100
          .p-4.text-center
            p.mb-0 Exhibir los productos.
      .tarjeta-avatar.pst_2
        img(src='@/assets/curso/tema1/t1-4.png' alt='AvatarTop')
        .tarjeta.w-100
          .p-4.text-center
            p.mb-0 Ofrecer comodidad al cliente.
      .tarjeta-avatar.pst
        img(src='@/assets/curso/tema1/t1-5.png' alt='AvatarTop')
        .tarjeta
          .p-4.text-center
            p.mb-0 Disponer de pasillos amplios entre los muebles exhibidores.
      .tarjeta-avatar.pst
        img(src='@/assets/curso/tema1/t1-6.png' alt='AvatarTop')
        .tarjeta
          .p-4.text-center
            p.mb-0 Apoyar las promociones de venta (descuentos, ofertas, 2x1, etc.).
      .tarjeta-avatar.pst
        img(src='@/assets/curso/tema1/t1-7.png' alt='AvatarTop')
        .tarjeta
          .p-4.text-center
            p.mb-0 Recordar al cliente la presencia de un producto que pueda estar necesitando.
      .tarjeta-avatar.pst
        img(src='@/assets/curso/tema1/t1-8.png' alt='AvatarTop')
        .tarjeta
          .p-4.text-center
            p.mb-0 Motivar la acción de compra por impulso.
    
    p.mb-5 De acuerdo con la disposición del establecimiento, el administrador que es el responsable del lugar y de la exhibición tiene como objetivo organizarlo según:

    .row.mb-5.d-flex.align-items-center.bgr_1.p-4
      .col-12.col-md-3.mb-3.mb-md-0
        figure
          img(src='@/assets/curso/tema1/t1-9.svg', alt='dibujo de mujer mercando')
      .col-12.col-md-9
        ul.lista-ul--color.mb-0
          li.mb-0 
            i.lista-ul__vineta
            | La situación de las secciones: cantidad de productos en góndola o exhibición adicional.
          li.mb-0 
            i.lista-ul__vineta
            | La circulación: espacio por donde van a circular los clientes.
          li.mb-0 
            i.lista-ul__vineta
            | Lugares y puntos de venta fríos y calientes: en los fríos la venta es baja, los calientes incrementan las ventas.
          li.mb-0 
            i.lista-ul__vineta
            | Elementos en el exterior del punto de venta: elementos que llaman la atención y despiertan el interés del comprador.
          li.mb-0 
            i.lista-ul__vineta
            | Áreas complementarias: bodegaje, servicios adicionales y entretenimiento.
    
    p.mb-5 No importa cuál sea el tipo de exhibición que se elija en el establecimiento, deberá motivar en el cliente la acción de compra, por lo que se deben tener en cuenta las actividades programadas en el punto de venta, lo mismo que la temporada y los objetivos de venta. De esta manera, se puede pensar en tener exhibiciones especiales, secundarias o adicionales. En el siguiente video se presentan los tipos de exhibición más comunes:

    figure.mb-5.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-5 Una exhibición debe tener un grupo de características que avalen su funcionalidad y logren que se cumplan los objetivos del establecimiento, por esta razón, la exhibición debe ser visible y atractiva a los ojos del cliente y, además, debe ser sencilla, visible, atractiva, accesible, comunicativa, rellenable, segura, alegre, limpia, estable y con precio visible.

    .row.mb-5.d-flex.justify-content-center
      .col-12.col-md-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/t1-10.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Se recomienda que la exhibición ambiente en el punto de venta sea con una presentación llamativa de los artículos, además de colorida, imponente y al alcance de los clientes, con precios justos, y cuando sea posible, con degustaciones que hagan que el consumidor conozca de primera mano un producto.

        span.colr.text-bold Las zonas para la exhibición comercial 
        | son los espacios donde se ubican los productos ya sea horizontal o verticalmente, esto facilita una mejor visión de las promociones que realizan los diferentes formatos comerciales, para la exhibición se debe manejar la creatividad de quien ejecuta la función, las zonas se definen como zona caliente y zona fría. Son zonas imaginarias que dividen el espacio en dos partes iguales:  

        .row.mb-5.mt-5
          .col-sm-6.col-xl-6.mb-4.mb-xl-0
            .tarjeta-slide.arriba.bgr_2(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor
                .tarjeta-slide__contenido.p-4.p-xl-5.text-center
                  h4.colr_1 Zona caliente
                  p.mb-0 Área de circulación de forma natural por parte del cliente, su técnica consiste en ubicar productos nuevos o de menor rotación. 
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/t1-11.svg')})`}")
          .col-sm-6.col-xl-6.mb-4.mb-xl-0
            .tarjeta-slide.arriba.bgr_3(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor
                .tarjeta-slide__contenido.p-4.p-xl-5.text-center
                  h4.colr Zona fría
                  p.mb-0 Área de circulación por donde el cliente transita muy poco, su técnica consiste en ubicar productos de mayor rotación y promociones de venta, con el objetivo de hacer transitar a los clientes por todo el lugar. 
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/t1-12.svg')})`}")
        
        span.colr.text-bold En las zonas de acceso 
        | se debe tener en cuenta los productos que se exhiben dependiendo de la puerta de acceso al establecimiento, la persona encargada de la exhibición debe recordar estos aspectos:
      
    .row.mb-5
      .col-md-6.col-lg-3.bgr_4.p-5
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema1/t1-13.svg' alt='AvatarTop')
        span.text-bold Puerta a la derecha: 
        | cuando el lugar de acceso está a la derecha, las zonas resultan de una línea diagonal que nace en el ángulo extremo izquierdo del punto de acceso y va hasta el ángulo extremo derecho más profundo de la superficie del establecimiento.
      .col-md-6.col-lg-3.bgr.p-5
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema1/t1-14.svg' alt='AvatarTop')
        span.text-bold Puerta a la izquierda: 
        | lo contrario a la puerta anterior. La línea diagonal que nace en el ángulo extremo derecho del punto de acceso y va hasta el ángulo extremo izquierdo más profundo de la superficie del establecimiento.
      .col-md-6.col-lg-3.bgr_5.p-5
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema1/t1-15.svg' alt='AvatarTop')
        span.text-bold Puerta en el centro: 
        | se define de acuerdo con la circulación del cliente. Se traza una línea recta vertical hasta el centro del establecimiento y de ahí se traza otra línea recta horizontal hacia el costado izquierdo de la superficie del local. 
      .col-md-6.col-lg-3.bgr_2.p-5
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema1/t1-16.svg' alt='AvatarTop')
        span.text-bold Dos puertas:
        | por teoría, prácticamente carece de zonas frías ya que la circulación fluye de acuerdo con el ingreso de las dos puertas. Por esto, es vital encontrar la localización de las zonas, con el fin de ubicar las secciones de forma estratégica.

    span.colr.text-bold Planograma o planimetría: 
    | es una herramienta necesaria para la gestión eficaz del espacio donde se exhiben los productos en los establecimientos minoristas, teniendo en cuenta que en la actualidad existe un mercado más complejo y competitivo, en el que ha aumentado el tamaño de las tiendas y el número de categorías de productos, esta herramienta tiene como objetivo mejorar la presentación de los artículos y aumentar las ventas. 

    p.mt-3.mb-5 Es un instrumento del merchandising (promoción comercial) en el diseño o croquis (dibujo) a través de un software que describe detalladamente el lugar y diámetro en el que se van a ubicar los productos, el planograma especifica la cantidad de productos y el número de caras con las que van a presentar la oferta, estas son la altura, profundidad y distancia que deben ocupar las distintas referencias. Se entiende por caras o “facing” el número de caras de un mismo producto que se necesitan para que el cliente las visualice.

    .row.d-flex.justify-content-center.mb-5
      .col-12.col-md-6
        .bgr_4.px-3.py-2
          p.mb-0.text-center En el siguiente video se presentan las funciones principales del planograma: 

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    separador

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1  Demostraciones

    p.mb-5 La demostración de productos en el punto de venta se convierte en una estrategia importante para la venta, al realizar esta acción se debe elegir el lugar del evento, los días en los que se hará la demostración, la creatividad con la que se haga la demostración, con el fin de que se convierta en una experiencia satisfactoria para el cliente. 

    .row.d-flex.justify-content-center.bgr_4.p-4.mb-5
      .col-12.col-md-4.mb-3.mb-md-0
        figure
          img(src='@/assets/curso/tema1/t1-17.png', alt='trabajadora en una tienda de ropa mostrando estadisticas')
      .col-12.col-md-6
        p El público objeto de la demostración debe ser tenido en cuenta, no es lo mismo hacer demostraciones para niños que para adultos, para mujeres o para hombres, puesto que cada público objetivo (target) tiene diferentes necesidades y expectativas.
        p Las demostraciones tienen las siguientes ventajas:

        ul.lista-ul--color.mb-0
          li.mb-0 
            i.lista-ul__vineta
            | Mejor posicionamiento del producto en el mercado.
          li.mb-0 
            i.lista-ul__vineta
            | Se aumentan las ventas del producto.
          li.mb-0 
            i.lista-ul__vineta
            | Para los compradores va a ser más fácil recordarlo.
          li.mb-0 
            i.lista-ul__vineta
            | Se impone la marca sobre la competencia.

    p Para lograr una buena demostración es importante tener en cuenta los materiales del diseño con los que contará el evento, los cuales deben ser llamativos y deben atraer al público, para la organización del evento se requiere de algunos recursos tales como el punto de venta en el que se realizará y el material promocional.

    p.mb-5 A la hora de hacer un evento de demostración de productos se debe tener en cuenta lo siguiente:

    .row.mb-5.d-flex.justify-content-center
      .col-12.col-md-10
        figure
          img(src='@/assets/curso/tema1/t1-18.svg', alt='trabajadora en una tienda de ropa mostrando estadisticas')
    
    p.mb-5 Hacer una buena publicidad de la fecha y hora de la demostración ayuda a que la afluencia de clientes sea masiva, las redes sociales pueden ser buenas aliadas para tal fin. Con el ánimo de incentivar a los consumidores se debe realizar distintas acciones como juegos, promociones, rifas, etc.

    .row.d-flex.justify-content-center
      .col-12.col-md-1.bgr_6.mb-3.mb-md-0
        figure.d-flex.justify-content-center
          img.img80(src='@/assets/curso/tema1/t1-19.svg', alt='tabla con e calificaciones')
      .col-12.col-md-9.bgr_7
        p.mb-0 Terminado el evento es importante conocer los resultados y la aceptación del público, que éxito u objeciones hubo, con el fin de poner en conocimiento de la marca para mejorar futuras demostraciones, esto se puede hacer a través de una encuesta de satisfacción. 
    
    separador

    .bg_grad-01
      #t_1_2.titulo-segundo.color-acento-contenido
        h2 1.2 Condiciones comerciales
      
    
      p.mb-5 Consisten en recompensar a los clientes por su comportamiento de compra, se trata del volumen o fidelidad que el cliente tenga en su relación comercial con la empresa, estas condiciones se aplican después y difícilmente son perceptibles antes de la compra, es decir, el cliente recibe los beneficios posteriormente.

      .row.mb-5.d-flex.justify-content-center
        .col-12.col-md-10
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.pst_3
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema1/t1-20.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 También son conocidas como políticas comerciales, son las reglas que las empresas tienen con relación a su funcionamiento y comercialización de productos o servicios, ayudan a lograr que todas las partes de la empresa actúen y tomen decisiones comerciales respecto a las pautas que han sido pactadas con anterioridad.
      
      p.mb-5 Estas políticas consiguen los objetivos marcados, consisten en formalizar las técnicas, tácticas y decisiones tomadas para la comercialización de productos y servicios de la organización, permitiendo a la organización defenderse en circunstancias de crisis del sector económico, donde debe protegerse la empresa y los accionistas, además, sirven de respaldo a los trabajadores a la hora de enfrentar situaciones que requieran de guía y así mejorar los procesos de la empresa y ser más efectivos.

    .row.mb-5
      .col-12.col-md-5.mb-3.mb-md-0
        figure
          img(src='@/assets/curso/tema1/t1-21.svg', alt='dos personas dandose la mano')
      .col-12.col-md-6
        p Las empresas deben tomar muchas decisiones, por lo que se definen las condiciones comerciales con el ánimo de que el equipo de trabajo pueda saber cómo actuar ante diferentes situaciones, ya sea con proveedores o con las negociaciones que se hacen con los clientes.
        p.mb-0 Es por esto que se crean pautas y limitaciones para atender a posibles clientes y demás circunstancias por acciones que se puedan presentar, porque más allá de ser el gerente, administrador o supervisor, es el equipo de trabajo quien debe tener los conocimientos para resolver problemas, y así es como se ve el crecimiento de la empresa.
    
    p.mb-5 La política comercial de una empresa debe basarse en la calidad, el cumplimiento, el  acompañamiento y las garantías, entre otras muchas variables que la empresa debe tener en cuenta en el momento de crear sus políticas comerciales, entre estas debe considerar: 

    .row.d-flex.justify-content-center
      .col-12.col-md-10
        SlyderA.bgr_8.p-4(tipo="b").mb-4
          .row.d-flex.justify-content-evenly
            .col-md-6.mb-4.mb-md-0.d-flex.align-items-center
              div
                p.text-bold Productos o servicios
                p.mb-0 Deben contener información básica, qué se comercializa, tanto para el cliente como para el equipo comercial. 
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/t1-22.png', alt='mujer tomando nota de unos productos')
          .row.d-flex.justify-content-evenly
            .col-md-6.mb-4.mb-md-0.d-flex.align-items-center
              div
                p.text-bold Precios y descuentos
                p.mb-0 Debe tener muy clara la información de los precios y descuentos en cada caso particular, por ejemplo, cotización a minoristas, mayoristas, etc. 
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/t1-23.png', alt='mujer tomando nota de unos productos')
          .row.d-flex.justify-content-evenly
            .col-md-6.mb-4.mb-md-0.d-flex.align-items-center
              div
                p.text-bold Facturación y pagos
                p.mb-0 Este documento explica la forma de pago de facturas de proveedores, debe contener la forma de recepción y el proceso que deben atravesar las mismas.
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/t1-24.png', alt='mujer tomando nota de unos productos')
          .row.d-flex.justify-content-evenly
            .col-md-6.mb-4.mb-md-0.d-flex.align-items-center
              div
                p.text-bold Plazos y forma de entrega
                p.mb-0 Con el fin de que tanto vendedores como clientes tengan claras las políticas de envió y entrega, estas deben quedar muy bien definidas por la empresa.
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/t1-25.png', alt='mujer tomando nota de unos productos')
          .row.d-flex.justify-content-evenly
            .col-md-6.mb-4.mb-md-0.d-flex.align-items-center
              div
                p.text-bold Confidencialidad
                p.mb-0 las empresas deben tener bases de datos confiables para que los clientes se sientan seguros a la hora de tener relaciones comerciales con ellas. 
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/t1-26.png', alt='mujer tomando nota de unos productos')
          .row.d-flex.justify-content-evenly
            .col-md-6.mb-4.mb-md-0.d-flex.align-items-center
              div
                p.text-bold Objetivos comerciales
                span.mb-0 Son una información interna que determina los objetivos   
                  span.colr.text-bold comerciales generales 
                  | a conseguir por el área comercial y también de manera específica los equipos de venta, las condiciones, los canales de comunicación utilizados y la remuneración que obtendrá cada una de las partes.
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/t1-27.png', alt='mujer tomando nota de unos productos')
          .row.d-flex.justify-content-evenly
            .col-md-6.mb-4.mb-md-0.d-flex.align-items-center
              div
                p.text-bold Control de las políticas
                p.mb-0 Todo sistema debe contar con una forma definida de control de sus procesos, como, por ejemplo, procesos de entrega y cumplimiento de garantías. 
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/t1-28.png', alt='mujer tomando nota de unos productos')

        p Las políticas deben contemplar muchos aspectos, por ejemplo, objetivos anuales de ventas, relaciones públicas, productos, precios y condiciones económicas, zonas de ventas, usuarios, etc.         

    


       





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
