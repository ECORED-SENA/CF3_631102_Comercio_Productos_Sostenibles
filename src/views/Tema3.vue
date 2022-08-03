<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Venta

    p.mb-5 <b>La venta en sí misma es una transacción entre dos agentes económicos, es un proceso voluntario donde una empresa o persona ofrece de manera legal productos a otra denominada cliente potencial</b>, buscando que esta pague el precio esperado. De acuerdo con esto, para que se realice una venta debe asegurarse: i. la participación de dos roles (comprador y vendedor), ii. un producto y iii. un valor de intercambio (precio); sin embargo, para realizarla de manera adecuada e influenciar el éxito de la misma, las ventas deben verse de forma integral. Por ello, se han definido tres momentos secuenciales: preventa, venta y postventa, en los cuales se desarrolla el ciclo comercial:

    .row.mb-5.justify-content-center
      .col-12.col-md-3.mb-3.mb-md-0
        figure
          img(src='@/assets/curso/tema3/t3-1.svg', alt='Texto que describa la imagen')
      .col-12.col-md-7.d-flex.align-items-center
        .tarjeta.bgr_17.p-2.p-md-4.mb-5
          SlyderA(tipo="b")
            .row
              .col-md-12.px-4
                span.mb-0.text-bold Venta
                p Es el más grande momento de verdad, es decir, allí se tiene el contacto con el cliente (a través de cualquier medio presencial o virtual), se realiza la presentación del portafolio a ofrecer, se resuelve sus inquietudes y se espera que el vendedor llegue al objetivo de esta etapa: el cierre de la venta, es decir, cuando el cliente acepta adquirir el bien/servicio. En la venta se aplican las técnicas de ventas, se debaten objeciones se implementan modelos de negociación según como se vaya desarrollando el proceso y se realizan todos los esfuerzos comerciales para que el prospecto diga “sí” voy a comprar el producto.
            .row
              .col-md-12.px-4
                span.mb-0.text-bold Preventa
                p Es el momento previo a la venta. En esta etapa el vendedor define quiénes son sus clientes potenciales, de allí extrae aquellos con mayor probabilidad de éxito (llamados clientes prospectos), los contacta, genera el acercamiento, detecta su necesidad y prepara el tipo de oferta (portafolio) a presentar. Una buena preventa tiene gran componente de trabajo previo al contacto con el cliente prospecto, dado que se debe tener buen conocimiento del portafolio de productos, se debe investigar sobre el perfil del cliente y se debe propender por generar un acercamiento muy asertivo y respetuoso.
            .row
              .col-md-12.px-4
                span.mb-0.text-bold Postventa
                p Es la última etapa del proceso comercial, pero no la menos importante. En este momento del ciclo es donde se crean verdaderos vínculos con el cliente, fidelizarlo e incluso convertirlo en apóstol de la empresa (es decir, aspirar a que el cliente que no solo compre, sino que también recomiende a terceros la marca o producto. Si bien esta fase ha estado atribuida más al proceso de servicio al cliente, todos los puntos de contactos son importantes para generar una experiencia positiva con el cliente después de haber realizado la compra.

    p.mb-5 De acuerdo con lo anterior, a continuación se describen cada una de las fases que conforman el ciclo de venta y que de acuerdo con la estructura deben darse secuencialmente: preventa (primer momento), venta (segundo momento) y postventa (tercer momento).

    .row.mb-5
      .col-2.col-md-1.bgr_12 
        figure
          img(src='@/assets/curso/tema3/t3-2.svg', alt='Texto que describa la imagen')
      .col-10.col-md-11.bgr_11.d-flex.align-items-center
        h3.mb-0 Tipos
    
    .bg_grad-05
      .row.mb-5
        .col-12.col-md-8.mb-3.mb-md-0(data-aos="fade-up-right")
          p Existen diferentes tipos de ventas; sin embargo, para un vendedor de ventas mayoristas es importante conocer dos tipologías, la clasificación asociada al medio por el cual se realizan y las ventas según el tipo de cliente al cual se realiza la venta.
          p.mb-0.text-bold Tipos de ventas según el medio
          p.mb-0 según el medio a través del cual se realice la venta se encuentran: las ventas presenciales, que son aquellas que se realizan con presencia física del vendedor, son las llamadas ventas tradicionales; ventas telefónicas, son aquellas que se hacen a través de los <em>call center</em> (centros de llamadas) y las ventas en canales digitales, que son aquellas que se realizan a través de plataformas tecnológicas, tales como redes sociales, <em>marketplace</em> (tiendas virtuales) o <em>bot</em> (robots).
        .col-12.col-md-4(data-aos="fade-up-left")
          figure
            img(src='@/assets/curso/tema3/t3-3.png', alt='Texto que describa la imagen')
        
      .row.justify-content-center(data-aos="zoom-out-down")
        .col-12.col-md-10
          .titulo-sexto.color-acento-botones.mb-5
            h5 Tabla 
            span Ventajas y desventajas de las ventas según el medio 
          .tabla-a.color-acento-botones.mb-5.modif_24
            table.bgr_11   
              thead
                tr
                  th(style="width:24%") Medio a través del cual se realiza la venta
                  th(style="width:40%")  Ventaja
                  th(style="width:40%")  Desventaja
              tbody
                tr
                  td.bgr.text-bold.text-center 
                    p.mb-0.text-bold Venta presencial
                  td.ps-3.ps-md-4.bgr_18 Generar mayor cercanía con el cliente
                  td.bgr_19.text-bold
                    p.mb-0 Representan mayores costos para la empresa
                tr
                  td.bgr.text-bold.text-center 
                    p.mb-0.text-bold Venta telefónica
                  td.ps-3.ps-md-4.bgr_18 Tienen un tiempo rápido de cierre
                  td.bgr_19.text-bold 
                    p.mb-0 En ocasiones generan desconfianza entre los clientes
                tr
                  td.bgr.text-bold.text-center 
                    p.mb-0.text-bold Venta en canales digitales
                  td.ps-3.ps-md-4.bgr_18 Tienen los menores costos frente a las ventas presenciales y telefónicas
                  td.bgr_19.text-bold 
                    p.mb-0 No aplican para todo tipo de clientes, dada la brecha digital (clientes que no tienen el conocimiento o la confianza para comprar en medios digitales)

      p.text-bold.colr Tipos de ventas según el cliente al cual se dirigen los productos 
      p Este concepto de tipos de ventas según el tipo de cliente comenzó con fuerza en el comercio electrónico; sin embargo, actualmente es utilizado también en el contexto offline. Las ventas <em>Business to Business</em> (conocidas como B2B) son aquellas que realiza una empresa a otra empresa, las ventas <em>Business to Consumer</em> (conocidas como B2C) son las que realiza una empresa al consumidor final, las ventas <em>Business to Government</em> (B2G) son aquellas en las que una empresa vende sus productos al gobierno o a entidades públicas. 
      p.mb-5 A modo de ejemplo, se tienen las siguiente situaciones, una empresa de telecomunicaciones vende sus productos a los clientes hogares y a las empresas, en este caso, se indica que dicha compañía vende bajo tipos de ventas B2C y B2B; en un segundo caso, una empresa importadora vende al por mayor equipos de cómputo a distribuidores, por tanto, esta empresa realiza ventas exclusivamente B2B; en un tercer caso, una empresa constructora está dedicada a la construcción de vías, por lo que su cliente es el Estado, en este sentido realiza ventas B2G. 

      figure.mb-5(data-aos="zoom-in-up")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/7M72zaMrfSE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.mb-5
      .col-2.col-md-1.bgr_12 
        figure
          img(src='@/assets/curso/tema3/t3-2.svg', alt='Texto que describa la imagen')
      .col-10.col-md-11.bgr_11.d-flex.align-items-center
        h3.mb-0 Técnicas
    
    .row.mb-5
      .col-12.col-md-8.mb-3.mb-md-0(data-aos="fade-up-right")
        p Existen muchos tipos de técnicas de ventas, no hay una mejor que otra, ya que la selección de la más idónea a utilizar debe realizarse teniendo en cuenta cómo es el modelo comercial de la empresa, con qué tipo de clientes se está tratando y cuál es el tipo de portafolio a ofrecer. Las técnicas con mayor usabilidad en el mercado son:
        p.mb-0.text-bold Técnica de características, beneficios y ventajas
        p.mb-0 Este modelo conocido como CBV en español o FAB (<em>features, advantages and benefits</em> en inglés), es conocido por ser una de las técnicas más sencillas y más prácticas. Dicho modelo consiste en aplicar con el cliente cada una de las variables del acrónimo, ya que de esta manera podrá dar el vendedor un panorama muy amplio, iniciando con el producto y terminando con la descripción de las necesidades que satisface, a continuación se muestran algunos elementos importantes en este modelo.
      .col-12.col-md-4(data-aos="fade-up-left")
        figure
          img(src='@/assets/curso/tema3/t3-4.png', alt='Texto que describa la imagen')
    
    .bg_grad-06
      .row.mb-5.justify-content-center(data-aos="zoom-in-up")
        .col-12.col-md-10
          .row
            hr.modif_11
            .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
              figure.d-flex.justify-content-center
                img.img90(src='@/assets/curso/tema3/t3-5.svg' alt='AvatarTop')
            .col-12.col-lg-11.d-flex.align-items-center
              p.mb-0 En las características se describe el bien o servicio que se está ofreciendo, aquí se da respuesta al qué.
          .row
            hr.modif_11
            .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
              figure.d-flex.justify-content-center
                img.img90(src='@/assets/curso/tema3/t3-6.svg' alt='AvatarTop')
            .col-12.col-lg-11.d-flex.align-items-center
              p.mb-0 En las ventajas, consiste en narrar (o demostrar si es posible), siempre desde preceptos éticos, porque el producto que se está ofreciendo es mejor que otras opciones que existen en el mercado, se responde al “por qué es mejor”.
          .row
            hr.modif_11
            .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
              figure.d-flex.justify-content-center
                img.img90(src='@/assets/curso/tema3/t3-7.svg' alt='AvatarTop')
            .col-12.col-lg-11.d-flex.align-items-center
              p.mb-0 En beneficios, el interrogante a resolver es el para qué, es decir, qué es aquello (tangible o intangible) que obtendrá la persona o empresa que adquiera el producto.

      .row.mb-5.justify-content-center
        .col-12.col-md-3.mb-3.mb-md-0
          figure
            img(src='@/assets/curso/tema3/t3-8.svg' alt='AvatarTop')
        .col-12.col-md-7
          p La técnica de ventas de características, ventajas y beneficios se sugiere que sea utilizada en situaciones donde el producto que se está ofreciendo tiene mucha competencia en el mercado. Asimismo, el uso de este modelo implica que el vendedor tenga un conocimiento detallado del portafolio de la empresa, conocer lo que ofrece la competencia y lograr identificar cuáles son las necesidades del cliente.
          p.text-bold.mb-0 A continuación se plantea un ejemplo de la aplicación del modelo. El vendedor tiene por fin venderle un celular a un cliente aplicando el modelo CVB, entonces tendría:

      .row.mb-5.justify-content-center
        .col-12.col-md-4.mb-5.mb-md-0
          .bgr_20.p-4.h-100.text-white
            p.text-bold Características
            p.mb-0 Es un celular de la marca XXX, de 14 pulgadas, con dos cámaras de 10 megapíxeles cada una, almacenamiento de 5 gigas y conexión WI-FI.
        .col-12.col-md-4.mb-5.mb-md-0
          .bgr_20.p-4.h-100.text-white
            p.text-bold Ventajas
            p.mb-0 Tiene la cámara con mayor resolución del mercado, tiene garantía de un año (que otros no tienen), tiene un seguro antirrobo por seis meses, tiene aplicaciones de chat y música incluidas sin costo adicional.
        .col-12.col-md-4
          .bgr_20.p-4.h-100.text-white
            p.text-bold Beneficios
            p.mb-0 Podrá tomar las mejores fotos que se pueda imaginar, tiene tanta memoria que no tendrá que borrar fotos, podrá reproducir la música de sus cantantes favoritos y tener acceso al <em>chat</em> cuando quiera.

      .row.justify-center.mb-5(data-aos="zoom-out-up").justify-content-center
        .col-12.col-lg-10
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema3/t3-9.png')})`}"
            )
            .bloque-texto-g__texto.p-4.p-lg-4.modif_12
              p.mb-0.text-bold Atención, interés, deseo, acción
              br
              p.mb-0 El modelo conocido como AIDA en español o (<em>attention, interest, desire and action</em> en inglés), también se ha denominado la técnica de los “estados mentales”, ya que acude a la emocionalidad en su discurso. Al igual que en el modelo anterior, el acróstico define cuál es la estructura del modelo, a continuación se describe cada uno de ellos. 
      
      .row.mb-5.justify-content-center(data-aos="zoom-in-up")
        .col-12.col-md-10
          .row
            hr.pst_4
            .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
              figure.d-flex.justify-content-center
                img.img90(src='@/assets/curso/tema3/t3-10.svg' alt='AvatarTop')
            .col-12.col-lg-11.d-flex.align-items-center
              p.mb-0 En la atención se deben realizar las tácticas o actividades necesarias para lograr que la marca y el producto sean visibles para el cliente potencial. Acá, la clave es la comunicación, es decir, sentar las condiciones para que se cree el canal con el prospecto.
          .row
            hr.pst_4
            .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
              figure.d-flex.justify-content-center
                img.img90(src='@/assets/curso/tema3/t3-11.svg' alt='AvatarTop')
            .col-12.col-lg-11.d-flex.align-items-center
              p.mb-0 En el interés, el objetivo es despertar en el cliente potencial la conciencia sobre el producto que se está ofreciendo, que él quiera saber más.
          .row
            hr.pst_4
            .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
              figure.d-flex.justify-content-center
                img.img90(src='@/assets/curso/tema3/t3-12.svg' alt='AvatarTop')
            .col-12.col-lg-11.d-flex.align-items-center
              p.mb-0 En el deseo, el reto del vendedor se centra en convertir en necesario y/o aspiracional el producto, alentar al cliente a que quiera adquirir el portafolio que se está ofreciendo.
          .row
            hr.pst_4
            .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
              figure.d-flex.justify-content-center
                img.img90(src='@/assets/curso/tema3/t3-13.svg' alt='AvatarTop')
            .col-12.col-lg-11.d-flex.align-items-center
              p.mb-0 En la acción, es concretar el proceso, es decir, lograr el cierre de la venta, hacer que el receptor del mensaje (nuestro cliente prospecto) haga lo que espera el vendedor, que no es má s que comprar el producto.
    
    .row.mb-5.justify-content-center
      .col-12.col-md-10
        p Ahora, con un ejemplo se analizará cómo el vendedor debe realizar la venta de un seguro de vida, aplicando el modelo AIDA se plantea el siguiente discurso de ventas:

    .row.mb-5.justify-content-center
      .col-12.col-md-8
        .tarjeta.bgr_17.p-2.p-md-4.mb-5  
          SlyderA(tipo="b")
            .row.p-4
              .col-md-12.p-3
                p.mb-0.text-bold Atención
                p.mb-0 Señor ¿se ha preguntado si en vez de comprar cada mes sus insumos de cafetería comprará de forma mensual sus elementos?
            .row.p-4
              .col-md-12.p-3
                p.mb-0.text-bold Interés
                p.mb-0 Podría generar ahorros importantes para su empresa, si realiza esta compra al por mayor.
            .row.p-4
              .col-md-12.p-3
                p.mb-0.text-bold Deseo
                p.mb-0 Y ¿si le digo que además del ahorro que representa comprar al por mayor, le podría dar 30 días de pago?
            .row.p-4
              .col-md-12.p-3
                p.mb-0.text-bold Acción
                p.mb-0 Indíqueme si está de acuerdo con esta oferta y si a partir del próximo pedido lo dimensionamos como una compra al por mayor para que genere los ahorros que le estoy mencionando.
    
    .row.justify-content-center
      .col-12.col-md-10
        .row.mb-5.bgr_10.p-3
          .col-12.col-md-2
            figure.d-flex.justify-content-center
              img.img100(src='@/assets/curso/tema3/t3-14.png', alt='Texto que describa la imagen')
          .col-12.col-md-10
            p.mb-0.text-bold Para recordar
            p.mb-0 En el ejemplo anterior se evidencia cómo el vendedor logró captar la atención del cliente potencial con una pregunta que lo puso a pensar y a partir de ahí establece un discurso de interés, deseo y acción centrada en los ahorros que le supone comprar al por mayor de forma mensual, en vez de comprar semanal. 
    
    .bg_grad-07
      .row.mb-5(data-aos="zoom-out-up").justify-content-center
        .col-12.col-lg-10
          .bloque-texto-g.color-acento-contenido.pst_3.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema3/t3-15.png')})`}"
            )
            .bloque-texto-g__texto.p-4.p-lg-4
              p.mb-0.text-bold Situación, problema, implicación, necesidad
              br
              p.mb-0 El modelo más conocido como SPIN (o de <em>situation, problem, implication y need pay off</em> por sus siglas en inglés) es una táctica de ventas interesante porque se basa en la resolución de problemas al cliente, y esto es bastante lógico si se parte del concepto que las necesidades están creadas y que justamente el rol del mercadeo y las ventas es satisfacerlas. Nuevamente, las preguntas aparecen como la clave para la buena aplicación del modelo, conozca a continuación la descripción de cada una de las etapas.

      .row.mb-5.justify-content-center(data-aos="zoom-in-up")
        .col-12.col-md-10
          .row
            hr.pst_4
            .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
              figure.d-flex.justify-content-center
                img.img90(src='@/assets/curso/tema3/t3-16.svg' alt='AvatarTop')
            .col-12.col-lg-11.d-flex.align-items-center
              p.mb-0 <b>En la situación:</b> se debe obtener información del cliente para determinar las condiciones que lo rodean.
          .row
            hr.pst_4
            .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
              figure.d-flex.justify-content-center
                img.img90(src='@/assets/curso/tema3/t3-17.svg' alt='AvatarTop')
            .col-12.col-lg-11.d-flex.align-items-center
              p.mb-0 <b>En el problema:</b> el centro de este momento es identificar cuál es la dificultad que el cliente afronta, es decir, cuál es la situación que está presentando.
          .row
            hr.pst_4
            .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
              figure.d-flex.justify-content-center
                img.img90(src='@/assets/curso/tema3/t3-18.svg' alt='AvatarTop')
            .col-12.col-lg-11.d-flex.align-items-center
              p.mb-0 <b>En la implicación:</b> el foco de este momento es indagar sobre la importancia que tiene para el cliente este acontecimiento, qué pasa si se resuelve y qué efectos tendría si no se da respuesta al problema que enfrenta. Un buen <em>tip</em> para este momento es preguntar por las consecuencias, esta palabra llevará al cliente a pensar con detenimiento sobre la necesidad de dar solución.
          .row
            hr.pst_4
            .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
              figure.d-flex.justify-content-center
                img.img90(src='@/assets/curso/tema3/t3-19.svg' alt='AvatarTop')
            .col-12.col-lg-11.d-flex.align-items-center
              p.mb-0 <b>Necesidad de solución:</b> se deberán formular preguntas que sugieran al cliente cómo el producto que se está ofreciendo puede satisfacer la necesidad que se tiene en el momento. Se  debe presentar el producto como la solución.

      .row.mb-5.justify-content-center
        .col-12.col-md-10
          p Para dar más claridad al tema se analizará un caso hipotético y se aplicará el modelo SPIN. Este ejercicio se orienta en el caso de un vendedor, cuyo servicio a ofrecer es un servicio de Internet en fibra óptica para conectar todas las sedes de la empresa.
      
      .row.mb-5.justify-content-center
        .col-12.col-md-8
          .tarjeta.bgr_17.p-2.p-md-4.mb-5  
            SlyderA(tipo="b")
              .row.p-4
                .col-md-12.p-3
                  p.mb-0 En la situación actual, el cliente tiene un servicio de internet en cobre en cada sede, una tecnología un tanto obsoleta y que no ofrece anchos de banda superiores a 30 Mbps. Preguntas que haría el vendedor... observe cómo utiliza las preguntas para conocer al cliente, ¿cómo mejorar Internet en las sedes de la empresa?
              .row.p-4
                .col-md-12.p-3
                  p.mb-0 El problema es que actualmente el servicio presenta lentitud según los colaboradores de varias sedes. Preguntas que haría el vendedor: ¿ha fallado su servicio de Internet con frecuencia?, ¿cree que la poca disponibilidad del servicio de Internet impacta negativamente la productividad?
              .row.p-4
                .col-md-12.p-3
                  p.mb-0 La implicación es que si el señor no resuelve su situación, imagínese ¿qué pasaría si no tuvieran Internet un día en la empresa?, ¿cómo se vería impactado el servicio al cliente?, ¿qué harían los colaboradores todo el día sin conectividad?
              .row.p-4
                .col-md-12.p-3
                  p.mb-0 La necesidad para solucionar está enfocada en adquirir un servicio de Internet en fibra óptica que le ofrezca mayor estabilidad en el servicio, a través de mayores anchos de banda. ¿Y si adquiere el servicio de Internet en fibra, con el que no volverá a tener caídas del servicio de forma inesperada? 
      
      .row.justify-center.mb-5(data-aos="zoom-out-up").justify-content-center
        .col-12.col-lg-10
          .bloque-texto-g.bgr_10.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema3/t3-20.png')})`}"
            )
            .bloque-texto-g__texto.p-4.p-lg-4
              p.mb-0.text-bold Simple, invaluable, alineado con sus intereses, de prioridad 
              p.mb-0 la técnica de ventas más conocida como SNAP (en inglés <em>simple, invaluable, align and priority</em>) es un modelo que se enfoca en la efectividad, ya que se centra en “ponerse en la camiseta del cliente” y está dirigido principalmente a las personas que tienen la facultad de decidir si hacen la compra, observe a continuación los elementos importantes: 
    
    .row.mb-5.justify-content-center(data-aos="zoom-in-up")
      .col-12.col-md-10
        .row
          hr.pst_4
          .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
             figure.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema3/t3-21.svg' alt='AvatarTop')
          .col-12.col-lg-11.d-flex.align-items-center
            p.mb-0 <b>Simple:</b> hace referencia a buscar la forma de que todos los procesos asociados a la venta sean claros y fáciles.
        .row
          hr.pst_4
          .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
             figure.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema3/t3-22.svg' alt='AvatarTop')
          .col-12.col-lg-11.d-flex.align-items-center
            p.mb-0 <b>Invaluable:</b> entregarles algo que los clientes valoran mucho, puede ser el servicio o los procesos.
        .row
          hr.pst_4
          .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
             figure.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema3/t3-23.svg' alt='AvatarTop')
          .col-12.col-lg-11.d-flex.align-items-center
            p.mb-0 <b>Alineado con sus intereses:</b> este punto debe asegurar un claro conocimiento del cliente y de sus necesidades, saber que lo que se está ofreciendo es lo que el cliente necesita.
        .row
          hr.pst_4
          .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
             figure.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema3/t3-24.svg' alt='AvatarTop')
          .col-12.col-lg-11.d-flex.align-items-center
            p.mb-0 <b>Prioridad:</b> consiste en hacer comparaciones con el cliente, ayudarle a diferenciar entre lo importante y lo prioritario asociado a las características que requiere y que necesita del servicio. En este proceso se valoran la sinceridad y la flexibilidad del vendedor. 
    
    .row.mb-5.justify-content-center
      .col-12.col-md-10
        p A partir del siguiente ejemplo quedará más clara la comprensión del modelo SNAP, un vendedor vende tarjetas de crédito y desea aplicar la técnica.
    
    .row.justify-content-center
      .col-12.col-md-8
        .tarjeta.bgr_17.p-2.p-md-4.mb-5  
          SlyderA(tipo="b")
            .row.p-4
              .col-md-12.p-3
                span.mb-0.text-bold Relacionado con lo simple: 
                | el vendedor le pregunta al cliente potencial ¿cuál es su profesión?, al escuchar que es docente de música plantea cómo abordar la venta, sin centrarse en los temas financieros y enfocándose en los beneficios que para esta persona traerá tener una tarjeta de crédito.
            .row.p-4
              .col-md-12.p-3
                span.mb-0.text-bold Descuentos: 
                | en este sentido, para hacerlo invaluable, el vendedor le comenta al prospecto que con esa tarjeta puede acceder a descuentos preferenciales a la mayoría de los eventos artísticos y musicales que se realizan en su ciudad, por lo que este argumento sensibiliza bastante al cliente.
            .row.p-4
              .col-md-12.p-3
                span.mb-0.text-bold Alineado con los intereses: 
                | el vendedor le indica que tendrá débito automático de su cuota de manejo y que tendrá filas preferenciales en los bancos de la entidad.
            .row.p-4
              .col-md-12.p-3
                span.mb-0.text-bold Prioridad: 
                | el vendedor le indica al cliente que la mejor opción para él es la tarjeta clásica donde el cupo es bajito, por lo que no le afectará mucho su capacidad de endeudamiento. Además, como entiende los horarios debido a su labor docente le informa que le recogerán los documentos donde él indique para gestionar el proceso de adquisición.
    
    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        .h2 3.1 Habilidades en ventas 
    
    p Para ser un vendedor exitoso se requiere tener poder de convencimiento, puesto que actualmente los vendedores se han visto en la obligación de evolucionar en sus tácticas de ventas, esto se debe a que la tecnología ha cambiado la forma de vender; pero a pesar de todo las habilidades siguen presentes y deben reforzarse constantemente.
    p.mb-5 Existe una serie de características que destacan a un vendedor a continuación se relacionan las siguientes:

    ImagenInfograficaB.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema3/t3-25.svg', alt='Texto que describa la imagen')

      div(x="11.8%" y="49%" tooltip="1. Capaz de relacionarse" numero="+")
        .row.d-flex.justify-content-center 
          .col-12.col-md-1
            figure
              img(src='@/assets/curso/tema3/t3-26.svg', alt='Texto que describa la imagen')
          .col-12.col-md-9
            span.pst_5.etiqueta_1.text-bold 1 
            span.pst_5.text-bold Capaz de relacionarse
            p.mt-3.mb-0 Es capaz de relacionarse, es amigable y siempre tiene una sonrisa para todos, su actitud es amistosa, tiene buenas relaciones laborales y con los clientes, tiene la capacidad de destacarse en reuniones, ya que tienen la capacidad de captar la atención de los receptores, siempre se muestra atento y guía al cliente con respeto.
      div(x="19.8%" y="49%" tooltip="2. Optimista" numero="+")
        .row.d-flex.justify-content-center 
          .col-12.col-md-1
            figure
              img(src='@/assets/curso/tema3/t3-27.svg', alt='Texto que describa la imagen')
          .col-12.col-md-9
            span.pst_5.etiqueta_1.text-bold 2 
            span.pst_5.text-bold Optimista
            p.mt-3.mb-0 Se es optimista, entendiendo que no es fácil tratar con los diferentes tipos de clientes, ya que cada uno tiene actitudes y formas de ser diferentes, el optimismo impulsa a no bajar la cabeza y seguir su camino a pesar de que haya un mal día. Conoce su realidad y sabe afrontarla con una buena actitud.
      div(x="27.3%" y="49%" tooltip="3. Tiene presencia" numero="+")
        .row.d-flex.justify-content-center 
          .col-12.col-md-1
            figure
              img(src='@/assets/curso/tema3/t3-28.svg', alt='Texto que describa la imagen')
          .col-12.col-md-9
            span.pst_5.etiqueta_1.text-bold 3 
            span.pst_5.text-bold Tiene presencia
            p.mt-3.mb-0 Tiene presencia, irradia simpatía, tiene autoestima alta y seguridad para ofrecer los productos o servicios, esto se lo da los años de experiencia, goza de habilidades comunicativas y no teme hablar en público, su diálogo es agradable, ya que usan las palabras adecuadas, su lenguaje no verbal es agradable y mantiene contacto visual con el cliente.
      div(x="35.2%" y="49%" tooltip="4. Conoce al cliente" numero="+")
        .row.d-flex.justify-content-center 
          .col-12.col-md-1
            figure
              img(src='@/assets/curso/tema3/t3-29.svg', alt='Texto que describa la imagen')
          .col-12.col-md-9
            span.pst_5.etiqueta_1.text-bold 4 
            span.pst_5.text-bold Conoce al cliente
            p.mt-3.mb-0 Conoce al cliente y sabe entenderlo, sabe escuchar al cliente, no habla solo para vender, identifica las necesidades y busca la manera de satisfacerlo, esto genera seguridad en las personas, ya que sienten que las entienden y pueden ayudarlas, son empáticos y se ponen en los zapatos del cliente, se convierten en su amigo y logra ganarse su confianza. 
      div(x="43.4%" y="49%" tooltip="5. Creativo" numero="+")
        .row.d-flex.justify-content-center 
          .col-12.col-md-1
            figure
              img(src='@/assets/curso/tema3/t3-30.svg', alt='Texto que describa la imagen')
          .col-12.col-md-9
            span.pst_5.etiqueta_1.text-bold 5
            span.pst_5.text-bold Creativo
            p.mt-3.mb-0 Es creativo, narra sus anécdotas y experiencias, cuenta maravillosas historias para entretener y hace que los clientes se sientan identificados con ellas, lo que hace que el proceso de venta sea más agradable y divertido, también sabe reinventarse y crea nuevas formas de aprovechar sus habilidades, cuando ve que la estrategia no funciona con su cliente logra cambiar la situación y presenta un plan innovador de venta.
      div(x="50.9%" y="49%" tooltip="6. Aprendizaje" numero="+")
        .row.d-flex.justify-content-center 
          .col-12.col-md-1
            figure
              img(src='@/assets/curso/tema3/t3-31.svg', alt='Texto que describa la imagen')
          .col-12.col-md-9
            span.pst_5.etiqueta_1.text-bold 6
            span.pst_5.text-bold Aprendizaje
            p.mt-3.mb-0 Nunca deja de aprender, está en constante capacitación no solo para conocer los cambios  que sufren los productos o servicios que vende sino también para conocer las nuevas técnicas y formas de vender que ofrece el mercado, asiste a las convenciones, congresos, ferias y cursos más recientes, tiene en cuenta que existe la competitividad y solo el aprendizaje lo puede llevar a conocer nuevas herramientas para estar a la par de otros vendedores. 
      div(x="58.9%" y="49%" tooltip="7. Intuitivo" numero="+")
        .row.d-flex.justify-content-center 
          .col-12.col-md-1
            figure
              img(src='@/assets/curso/tema3/t3-32.svg', alt='Texto que describa la imagen')
          .col-12.col-md-9
            span.pst_5.etiqueta_1.text-bold 7
            span.pst_5.text-bold Intuitivo
            p.mt-3.mb-0 Es intuitivo, conoce las puertas que debe tocar en el momento adecuado, su investigación, análisis y experiencia le permiten estar bien preparado y con propuestas de valor, conoce la importancia de la segmentación del mercado para direccionar sus esfuerzos de ventas, aprende de sus errores y los utiliza para potenciar sus habilidades.
      div(x="66.7%" y="49%" tooltip="8. Manejo de problemas" numero="+")
        .row.d-flex.justify-content-center 
          .col-12.col-md-1
            figure
              img(src='@/assets/curso/tema3/t3-33.svg', alt='Texto que describa la imagen')
          .col-12.col-md-9
            span.pst_5.etiqueta_1.text-bold 8
            span.pst_5.text-bold Manejo de problemas
            p.mt-3.mb-0 Sabe manejar problemas, sabe que vender implica tratar con personas que muchas veces tienen mala actitud y crean dificultades, no se sale de casillas y sabe calmar al cliente inteligentemente, reconoce que una confrontación no es una buena opción y está preparado para salir avante durante todo el proceso, su actitud optimista le ayuda a manejar bien la situación y cambiar la postura del cliente. 
      div(x="74.2%" y="49%" tooltip="9. Aprovecha el momento" numero="+")
        .row.d-flex.justify-content-center 
          .col-12.col-md-1
            figure
              img(src='@/assets/curso/tema3/t3-34.svg', alt='Texto que describa la imagen')
          .col-12.col-md-9
            span.pst_5.etiqueta_1.text-bold 9
            span.pst_5.text-bold Aprovecha el momento
            p.mt-3.mb-0 Aprovecha el momento, cuando identifica desinterés en el cliente piensa rápidamente una estrategia para llamar su atención, también sabe en qué momento el cliente está a punto de tomar una decisión y aprovecha para ofrecerle un incentivo, ya sea un descuento o un regalo para terminar de convencerlo.
      div(x="82.2%" y="50%" tooltip="10. Ama lo que hace" numero="+")
        .row.d-flex.justify-content-center 
          .col-12.col-md-1
            figure
              img(src='@/assets/curso/tema3/t3-35.svg', alt='Texto que describa la imagen')
          .col-12.col-md-9
            span.pst_5.etiqueta_1.text-bold 10
            span.pst_5.text-bold Ama lo que hace
            p.mt-3.mb-0 Ama lo que hace, se mueve a través de corazonadas, conoce y ama lo que vende, ya que cree en el producto o servicio que ofrece lo expone con el convencimiento de que ayudará a los clientes con su venta, logra la aceptación del cliente y cumple con sus expectativas, lo que le permite cumplir con sus objetivos como vendedor. 

    .row.mb-5.d-flex.justify-content-center
      .col-12.col-md-7
        p Para profundizar mejor en este concepto se invita a consultar el siguiente recurso de aprendizaje:
    
    .row.d-flex.justify-content-center
      .col-12.col-md-10
        .tarjeta.bgr_10.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.d-flex.justify-content-center
              img.img100(src="@/assets/curso/tema3/t3-14.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Libro <b>Técnicas de venta</b>, en este podrá afianzar las habilidades y técnicas de ventas, además de profundizar en el seguimiento y fidelización de los clientes. 
                  p.mb-0 Arenal, C. (2017). Técnicas de venta: UF0031. Editorial Tutor Formación. 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/44231?page=1" target="_blank")
                    span Enlace web
                    i.fas.fa-link

 

 






    

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
