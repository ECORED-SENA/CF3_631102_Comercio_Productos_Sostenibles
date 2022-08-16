<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.colr_2
        span 3
      h1 Venta

    p.mb-5(data-aos="flip-down") <b>La venta en sí misma es una transacción entre dos agentes económicos, es un proceso voluntario donde una empresa o persona ofrece de manera legal productos a otra denominada cliente potencial</b>, buscando que esta pague el precio esperado. De acuerdo con esto, para que se realice una venta debe asegurarse: i. la participación de dos roles (comprador y vendedor), ii. un producto y iii. un valor de intercambio (precio); sin embargo, para realizarla de manera adecuada e influenciar el éxito de la misma, las ventas deben verse de forma integral. Por ello, se han definido tres momentos secuenciales: preventa, venta y postventa, en los cuales se desarrolla el ciclo comercial:

    .row.mb-5.justify-content-center
      .col-12.col-md-3.mb-3.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/t3-1.svg', alt='Texto que describa la imagen')
      .col-12.col-md-7.d-flex.align-items-center(data-aos="fade-left")
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

    .row.mb-5(data-aos="fade-right")
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

      h4.colr Tipos de ventas según el cliente al cual se dirigen los productos 
      p Este concepto de tipos de ventas según el tipo de cliente comenzó con fuerza en el comercio electrónico; sin embargo, actualmente es utilizado también en el contexto offline. Las ventas <em>Business to Business</em> (conocidas como B2B) son aquellas que realiza una empresa a otra empresa, las ventas <em>Business to Consumer</em> (conocidas como B2C) son las que realiza una empresa al consumidor final, las ventas <em>Business to Government</em> (B2G) son aquellas en las que una empresa vende sus productos al gobierno o a entidades públicas. 
      p.mb-5 A modo de ejemplo, se tienen las siguiente situaciones, una empresa de telecomunicaciones vende sus productos a los clientes hogares y a las empresas, en este caso, se indica que dicha compañía vende bajo tipos de ventas B2C y B2B; en un segundo caso, una empresa importadora vende al por mayor equipos de cómputo a distribuidores, por tanto, esta empresa realiza ventas exclusivamente B2B; en un tercer caso, una empresa constructora está dedicada a la construcción de vías, por lo que su cliente es el Estado, en este sentido realiza ventas B2G. 

      figure.mb-5(data-aos="zoom-in-up")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/7M72zaMrfSE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.mb-5(data-aos="fade-right")
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
            hr.pst_4  
            .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
              figure.d-flex.justify-content-center
                img.img90(src='@/assets/curso/tema3/t3-5.svg' alt='AvatarTop')
            .col-12.col-lg-11.d-flex.align-items-center
              p.mb-0 En las características se describe el bien o servicio que se está ofreciendo, aquí se da respuesta al qué.
          .row
            hr.pst_4  
            .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
              figure.d-flex.justify-content-center
                img.img90(src='@/assets/curso/tema3/t3-6.svg' alt='AvatarTop')
            .col-12.col-lg-11.d-flex.align-items-center
              p.mb-0 En las ventajas, consiste en narrar (o demostrar si es posible), siempre desde preceptos éticos, porque el producto que se está ofreciendo es mejor que otras opciones que existen en el mercado, se responde al “por qué es mejor”.
          .row
            hr.pst_4  
            .col-12.col-lg-1.mb-3.mb-lg-0.align-items-center
              figure.d-flex.justify-content-center
                img.img90(src='@/assets/curso/tema3/t3-7.svg' alt='AvatarTop')
            .col-12.col-lg-11.d-flex.align-items-center
              p.mb-0 En beneficios, el interrogante a resolver es el para qué, es decir, qué es aquello (tangible o intangible) que obtendrá la persona o empresa que adquiera el producto.
            hr.pst_4  

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
            .col-12.col-lg-1.mb-3.mb-lg-0
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
              p.mb-0 En la acción, es concretar el proceso, es decir, lograr el cierre de la venta, hacer que el receptor del mensaje (nuestro cliente prospecto) haga lo que espera el vendedor, que no es más que comprar el producto.
            hr.pst_4
    
    .row.mb-5.justify-content-center
      .col-12.col-md-10
        p Ahora, con un ejemplo se analizará cómo el vendedor debe realizar la venta de un seguro de vida, aplicando el modelo AIDA se plantea el siguiente discurso de ventas:

    .row.mb-5.justify-content-center(data-aos="fade-up")
      .col-12.col-md-8
        .tarjeta.bgr_17.p-2.p-md-4.mb-5  
          SlyderA(tipo="b")
            .row.p-4
              .col-md-12.p-3
                p.mb-0.text-bold Atención
                p.mb-0 Señor ¿se ha preguntado si en vez de comprar cada semana sus insumos de cafetería comprará de forma mensual sus elementos?
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
              p.mb-0.text-bold.colr Situación, problema, implicación, necesidad
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
            hr.pst_4

      .row.mb-5.justify-content-center
        .col-12.col-md-10
          p Para dar más claridad al tema se analizará un caso hipotético y se aplicará el modelo SPIN. Este ejercicio se orienta en el caso de un vendedor, cuyo servicio a ofrecer es un servicio de Internet en fibra óptica para conectar todas las sedes de la empresa.
      
      .row.mb-5.justify-content-center(data-aos="fade-up")
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
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema3/t3-20.png')})`}"
            )
            .bloque-texto-g__texto.p-4.p-lg-4
              p.mb-0.text-bold.colr Simple, invaluable, alineado con sus intereses, de prioridad 
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
          hr.pst_4

    .row.mb-5.justify-content-center
      .col-12.col-md-10
        p A partir del siguiente ejemplo quedará más clara la comprensión del modelo SNAP, un vendedor vende tarjetas de crédito y desea aplicar la técnica.
    
    .row.justify-content-center(data-aos="fade-up")
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
    p.mb-5 Existe una serie de características que destacan a un vendedor, a continuación se relacionan las siguientes:

    ImagenInfograficaB.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema3/t3-25.svg', alt='Texto que describa la imagen')

      div(x="11.8%" y="49%" tooltip="1. Capaz de relacionarse" numero="+")
        .row.d-flex.justify-content-center 
          .col-12.col-md-1.mb-3.mb-md-0
            figure.d-flex.justify-content-center
              img.img80(src='@/assets/curso/tema3/t3-26.svg', alt='Texto que describa la imagen')
          .col-12.col-md-9
            span.pst_5.etiqueta_1.text-bold 1 
            span.pst_5.text-bold Capaz de relacionarse
            p.mt-3.mb-0 Es capaz de relacionarse, es amigable y siempre tiene una sonrisa para todos, su actitud es amistosa, tiene buenas relaciones laborales y con los clientes, tiene la capacidad de destacarse en reuniones, ya que tienen la capacidad de captar la atención de los receptores, siempre se muestra atento y guía al cliente con respeto.
      div(x="19.8%" y="49%" tooltip="2. Optimista" numero="+")
        .row.d-flex.justify-content-center 
          .col-12.col-md-1.mb-3.mb-md-0
            figure.d-flex.justify-content-center
              img.img80(src='@/assets/curso/tema3/t3-27.svg', alt='Texto que describa la imagen')
          .col-12.col-md-9
            span.pst_5.etiqueta_1.text-bold 2 
            span.pst_5.text-bold Optimista
            p.mt-3.mb-0 Se es optimista, entendiendo que no es fácil tratar con los diferentes tipos de clientes, ya que cada uno tiene actitudes y formas de ser diferentes, el optimismo impulsa a no bajar la cabeza y seguir su camino a pesar de que haya un mal día. Conoce su realidad y sabe afrontarla con una buena actitud.
      div(x="27.3%" y="49%" tooltip="3. Tiene presencia" numero="+")
        .row.d-flex.justify-content-center 
          .col-12.col-md-1.mb-3.mb-md-0
            figure.d-flex.justify-content-center
              img.img80(src='@/assets/curso/tema3/t3-28.svg', alt='Texto que describa la imagen')
          .col-12.col-md-9
            span.pst_5.etiqueta_1.text-bold 3 
            span.pst_5.text-bold Tiene presencia
            p.mt-3.mb-0 Tiene presencia, irradia simpatía, tiene autoestima alta y seguridad para ofrecer los productos o servicios, esto se lo da los años de experiencia, goza de habilidades comunicativas y no teme hablar en público, su diálogo es agradable, ya que usan las palabras adecuadas, su lenguaje no verbal es agradable y mantiene contacto visual con el cliente.
      div(x="35.2%" y="49%" tooltip="4. Conoce al cliente" numero="+")
        .row.d-flex.justify-content-center 
          .col-12.col-md-1.mb-3.mb-md-0
            figure.d-flex.justify-content-center
              img.img80(src='@/assets/curso/tema3/t3-29.svg', alt='Texto que describa la imagen')
          .col-12.col-md-9
            span.pst_5.etiqueta_1.text-bold 4 
            span.pst_5.text-bold Conoce al cliente
            p.mt-3.mb-0 Conoce al cliente y sabe entenderlo, sabe escuchar al cliente, no habla solo para vender, identifica las necesidades y busca la manera de satisfacerlo, esto genera seguridad en las personas, ya que sienten que las entienden y pueden ayudarlas, son empáticos y se ponen en los zapatos del cliente, se convierten en su amigo y logra ganarse su confianza. 
      div(x="43.4%" y="49%" tooltip="5. Creativo" numero="+")
        .row.d-flex.justify-content-center 
          .col-12.col-md-1.mb-3.mb-md-0
            figure.d-flex.justify-content-center
              img.img80(src='@/assets/curso/tema3/t3-30.svg', alt='Texto que describa la imagen')
          .col-12.col-md-9
            span.pst_5.etiqueta_1.text-bold 5
            span.pst_5.text-bold Creativo
            p.mt-3.mb-0 Es creativo, narra sus anécdotas y experiencias, cuenta maravillosas historias para entretener y hace que los clientes se sientan identificados con ellas, lo que hace que el proceso de venta sea más agradable y divertido, también sabe reinventarse y crea nuevas formas de aprovechar sus habilidades, cuando ve que la estrategia no funciona con su cliente logra cambiar la situación y presenta un plan innovador de venta.
      div(x="50.9%" y="49%" tooltip="6. Aprendizaje" numero="+")
        .row.d-flex.justify-content-center 
          .col-12.col-md-1.mb-3.mb-md-0
            figure.d-flex.justify-content-center
              img.img80(src='@/assets/curso/tema3/t3-31.svg', alt='Texto que describa la imagen')
          .col-12.col-md-9
            span.pst_5.etiqueta_1.text-bold 6
            span.pst_5.text-bold Aprendizaje
            p.mt-3.mb-0 Nunca deja de aprender, está en constante capacitación no solo para conocer los cambios  que sufren los productos o servicios que vende sino también para conocer las nuevas técnicas y formas de vender que ofrece el mercado, asiste a las convenciones, congresos, ferias y cursos más recientes, tiene en cuenta que existe la competitividad y solo el aprendizaje lo puede llevar a conocer nuevas herramientas para estar a la par de otros vendedores. 
      div(x="58.9%" y="49%" tooltip="7. Intuitivo" numero="+")
        .row.d-flex.justify-content-center 
          .col-12.col-md-1.mb-3.mb-md-0
            figure.d-flex.justify-content-center
              img.img80(src='@/assets/curso/tema3/t3-32.svg', alt='Texto que describa la imagen')
          .col-12.col-md-9
            span.pst_5.etiqueta_1.text-bold 7
            span.pst_5.text-bold Intuitivo
            p.mt-3.mb-0 Es intuitivo, conoce las puertas que debe tocar en el momento adecuado, su investigación, análisis y experiencia le permiten estar bien preparado y con propuestas de valor, conoce la importancia de la segmentación del mercado para direccionar sus esfuerzos de ventas, aprende de sus errores y los utiliza para potenciar sus habilidades.
      div(x="66.7%" y="49%" tooltip="8. Manejo de problemas" numero="+")
        .row.d-flex.justify-content-center 
          .col-12.col-md-1.mb-3.mb-md-0
            figure.d-flex.justify-content-center
              img.img80(src='@/assets/curso/tema3/t3-33.svg', alt='Texto que describa la imagen')
          .col-12.col-md-9
            span.pst_5.etiqueta_1.text-bold 8
            span.pst_5.text-bold Manejo de problemas
            p.mt-3.mb-0 Sabe manejar problemas, sabe que vender implica tratar con personas que muchas veces tienen mala actitud y crean dificultades, no se sale de casillas y sabe calmar al cliente inteligentemente, reconoce que una confrontación no es una buena opción y está preparado para salir avante durante todo el proceso, su actitud optimista le ayuda a manejar bien la situación y cambiar la postura del cliente. 
      div(x="74.2%" y="49%" tooltip="9. Aprovecha el momento" numero="+")
        .row.d-flex.justify-content-center 
          .col-12.col-md-1.mb-3.mb-md-0
            figure.d-flex.justify-content-center
              img.img80(src='@/assets/curso/tema3/t3-34.svg', alt='Texto que describa la imagen')
          .col-12.col-md-9
            span.pst_5.etiqueta_1.text-bold 9
            span.pst_5.text-bold Aprovecha el momento
            p.mt-3.mb-0 Aprovecha el momento, cuando identifica desinterés en el cliente piensa rápidamente una estrategia para llamar su atención, también sabe en qué momento el cliente está a punto de tomar una decisión y aprovecha para ofrecerle un incentivo, ya sea un descuento o un regalo para terminar de convencerlo.
      div(x="82.2%" y="50%" tooltip="10. Ama lo que hace" numero="+")
        .row.d-flex.justify-content-center 
          .col-12.col-md-1.mb-3.mb-md-0
            figure.d-flex.justify-content-center
              img.img80(src='@/assets/curso/tema3/t3-35.svg', alt='Texto que describa la imagen')
          .col-12.col-md-9
            span.pst_5.etiqueta_1.text-bold 10
            span.pst_5.text-bold Ama lo que hace
            p.mt-3.mb-0 Ama lo que hace, se mueve a través de corazonadas, conoce y ama lo que vende, ya que cree en el producto o servicio que ofrece lo expone con el convencimiento de que ayudará a los clientes con su venta, logra la aceptación del cliente y cumple con sus expectativas, lo que le permite cumplir con sus objetivos como vendedor. 

    .row.mb-5.d-flex.justify-content-center
      .col-12.col-md-7
        p Para profundizar mejor en este concepto se invita a consultar el siguiente recurso de aprendizaje:
    
    .row.d-flex.justify-content-center(data-aos="flip-down")
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
    
    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.2 Objeciones

    .row.mb-5
      .col-12.col-md-9.d-flex.align-items-center.mb-3.mb-md-0(data-aos="fade-up-right")
        div
          p Para un vendedor es muy importante conocer sobre objeciones, dado que al interactuar con el cliente este probablemente manifieste no entender lo que se le está explicando, tener dudas o incluso, requerir más información, es por ello que surgen las objeciones. Existen muchas interpretaciones de lo que es una objeción en ventas. Algunos autores consideran que hacen parte del proceso normal de ventas; sin embargo, hay otros que indican que la presencia de objeciones puede denotar desconocimiento por parte de alguno de los dos agentes (vendedor o cliente); a pesar de no existir consenso en por qué se dan, sí es claro que es un tema clave que un vendedor debe conocer.
          p.mb-0 A continuación, se enuncian dos definiciones de objeciones de autores y una propia:
      .col-12.col-md-3(data-aos="fade-up-left")
        figure
          img(src='@/assets/curso/tema3/t3-36.png' alt='AvatarTop')
    
    .row.mb-5
      .col-12.col-md-4
        .tarjeta-avatar.pst_6
          img.pst_7.img100(src='@/assets/curso/tema3/t3-37.svg' alt='AvatarTop')
          .tarjeta.bgr_4
            .p-5
              p.mb-0 La Real Academia de la Lengua Española (2021), referencia que la objeción es la “razón que se propone o dificultad que se presenta en contra de una opinión o designio, o para impugnar una proposición”.
      .col-12.col-md-4
        .tarjeta-avatar.pst_6
          img.pst_7.img100(src='@/assets/curso/tema3/t3-38.svg' alt='AvatarTop')
          .tarjeta.bgr
            .p-5
              p.mb-0 Según Ardila (1984), “las objeciones son cualquier acto del comprador que de forma real o aparente interrumpe la labor del vendedor” (p. 9).
      .col-12.col-md-4
        .tarjeta-avatar.pst_6
          img.pst_7.img100(src='@/assets/curso/tema3/t3-39.svg' alt='AvatarTop')
          .tarjeta.bgr_5
            .p-5
              p.mb-0 En sentido práctico, son los “peros” que expone el cliente potencial al vendedor durante el proceso de la venta.
    
    p.mb-5 Las objeciones desde la perspectiva de ventas no tienen una única orientación; sin embargo, hay consenso en que existen a nivel general dos tipos, los cuales se describen a continuación:

    .bg_grad-08
      .row.mb-5.justify-content-center
        .col-12.col-md-6
          ImagenInfografica.color-acento-botones.mb-5.pst_8(data-aos="zoom-out")
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema3/t3-40.svg', alt='Texto que describa la imagen')
            .tarjeta.bgr_19.p-3(x="42%" y="63%" numero="+")
              p <b>Objeciones verdaderas:</b> se presentan cuando el cliente está realmente interesado en el tema a tratar; sin embargo, manifiesta inquietudes o dudas respecto a la información que se le está suministrando y si las respuestas realmente satisfacen las necesidades que él tiene, por lo que busca canalizarlas a través del vendedor.
              p.mb-0 <b>Ejemplo:</b> un cliente desea adquirir un lote de computadores portátiles; sin embargo, le comenta a su vendedor de productos mayoristas que no está seguro de cerrar la negociación porque le preocupan los tiempos de entrega dado que el producto es importado. Esta es una objeción verdadera porque muestra conocimiento del proceso por parte del cliente y porque está haciendo relación a una variable crítica (entrega del producto).
            .tarjeta.bgr_19.p-3(x="92%" y="63%" numero="+")
              p <b>Objeciones falsas:</b> se dan cuando el cliente no está interesado en la información o en el producto, y por ende basa la comunicación en pretextos o cuestionamientos sin racionalidad, con el fin de dispersar la conversación o no manifestar la razón real por la que no desea adquirir los productos de la empresa o no desea tener relación comercial con ella.
              p <b>Ejemplo:</b> un cliente le informa a su vendedor de ventas mayoristas que desea comprarle el lote de mascarillas faciales, pero que no tiene claro si realmente las necesita en su farmacia, esta es una objeción falsa, dado que este es un producto del cual requieren tener inventario este tipo de establecimientos.

    p.mb-5 Asociado al manejo de objeciones es claro mencionar que, si bien existe la teoría, las clasificaciones y los ejemplos, hay dos factores que influyen en la gestión de las mismas: i. la personalidad del vendedor, dado que la esencia de la persona influye mucho en el trato con las demás personas, y ii. la experiencia, cada vez que se tiene mayor contacto con los clientes se van adquiriendo más destrezas para interactuar y manejar situaciones que a simple vista incluso pueden ser inmanejables.

    .row.mb-5(data-aos="fade-right")
      .col-2.col-md-1.bgr_12 
        figure
          img(src='@/assets/curso/tema3/t3-2.svg', alt='Texto que describa la imagen')
      .col-10.col-md-11.bgr_11.d-flex.align-items-center
        h3.mb-0 Resolución de objeciones

    .row.mb-5.d-flex.justify-content-center(data-aos="zoom-in")
      .col-12.col-md-10  
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/t3-41.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 Navarro (2012) en su libro Técnicas de ventas propone un esquema interesante para el manejo de objeciones, comenzando por la escucha como el principio básico de la comunicación, luego a partir de la asertividad anticiparse a posibles alternativas de respuesta o solución, posteriormente a través de un ejercicio de empatía comprender la situación y finalmente si el cliente aún tiene inquietudes y refuta lo expuesto, exponer con argumentos claros y respetuosos la alternativa de solución. Véalo con más detalle a continuación:
    
    .row.mb-5(data-aos="fade-right")
      .col-2.col-md-1.bgr_12 
        figure
          img(src='@/assets/curso/tema3/t3-2.svg', alt='Texto que describa la imagen')
      .col-10.col-md-11.bgr_11.d-flex.align-items-center
        h3.mb-0 Manejo exitoso de la objeción
        
    .row.mb-5.justify-content-center
      .col-12.col-md-10
        .row.justify-content-center.bg_grad-12.p-4
          .col-12.col-md-2.mb-3.mb-md-0
            .bgr_24.px-2
              p.m-0 <b>Escuchar:</b> no emitir juicios apresurados y prestar completa atención a lo que dice.
            figure.d-flex.justify-content-center
              img.img180(src='@/assets/curso/tema3/t3-42.svg' alt='AvatarTop')
          .col-12.col-md-2.mb-3.mb-md-0
            p.pst_11.m-0 <b>Anticiparse:</b> se puede ganar tiempo, si se anticipan las posibles objeciones.
            figure.d-flex.justify-content-center
              img.img180(src='@/assets/curso/tema3/t3-43.svg' alt='AvatarTop')
          .col-12.col-md-2.mb-3.mb-md-0
            .bgr_25.px-2
              p.m-0 <b>Comprender:</b> si el cliente percibe empatía por parte del vendedor, sentirá confianza para continuar el proceso de negociación.
            figure.d-flex.justify-content-center
              img.img180(src='@/assets/curso/tema3/t3-44.svg' alt='AvatarTop')
          .col-12.col-md-2
            p.pst_12.m-0 <b>Refutar:</b> respeto, paciencia, inteligencia y argumentos son la clave para responder objeciones.
            figure.d-flex.justify-content-center
              img.img180(src='@/assets/curso/tema3/t3-45.svg' alt='AvatarTop')

    .row.justify-content-center(data-aos="zoom-in")
      .col-12.col-md-10
        .row.mb-5.bgr_10.p-3
          .col-12.col-md-2
            figure.d-flex.justify-content-center
              img.img100(src='@/assets/curso/tema3/t3-14.png', alt='Texto que describa la imagen')
          .col-12.col-md-8.d-flex.align-items-center
            p.mb-0 Con base en el manejo de objeciones planteado por Navarro, M. (2012) en su libro Técnicas de ventas, p. 63.
          .col-12.col-md-2.d-flex.align-items-center
            a.boton.me-3.indicador__container.bgr_41(
              :href="obtenerLink('downloads/tecnicas_de_venta.pdf')"
              target="_blank"
              type="application/pdf"
              @mouseover="mostrarIndicador = false"
            )
              span Descargar
              i.fas.fa-file-pdf
              .indicador--click(v-if="mostrarIndicador")
    
    p.mb-5 A nivel general, las objeciones más frecuentes que los clientes manifiestan a los vendedores están relacionadas con:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").bgr_16(data-aos="zoom-out-down")
      .row.px-4(titulo="Precio")
        .col-md-4.mb-3.mb-md-0
          figure
            img(src='@/assets/curso/tema3/t3-46.png', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Será siempre la variable de objeción por excelencia, dado que los clientes siempre querrán pagar menos para obtener los bienes y servicios de la empresa. En algunos casos, la cultura también impacta este tipo de objeciones, lo que comúnmente se llama “regatear”. El manejo de esta objeción se da principalmente en contrarrestar con argumentos desde las características, beneficios y ventajas del producto, así se tratará de mostrar una relación costo - beneficio positiva; en otras ocasiones, cuando el vendedor tiene el perfil de negociar también puede acudir a los descuentos comerciales o financieros para tratar de cerrar la venta.
      .row.px-4(titulo="Comparación con la competencia")
        .col-md-4.mb-3.mb-md-0
          figure
            img(src='@/assets/curso/tema3/t3-47.png', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Es frecuente que los clientes acudan a comparar la empresa con los competidores, indicando que ellos hacen las cosas mejor, para ello el mecanismo de argumento frente a esto es conocer muy bien la empresa y su oferta de valor (su diferencial en el mercado), con la finalidad de hacer visible porqué la compañía también tiene muchos puntos a favor.
      .row.px-4(titulo="Tiempos de entrega")
        .col-md-4.mb-3.mb-md-0
          figure
            img(src='@/assets/curso/tema3/t3-48.png', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Esta es una variable crítica para los clientes porque estos esperan tener sus productos a la mayor brevedad posible; sin embargo, en las ventas mayoristas donde el volumen es una característica común, se deben tener muy claro cuáles son los tiempos y las alternativas que se tienen con este tema, dado que siempre va a ser más conveniente informar con claridad desde el comienzo de la negociación cómo es el manejo de las entregas por parte de la empresa, por ejemplo, si se pueden realizar entregas parciales, si se tienen limitaciones en días u horas entre otros aspectos.

    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.3 Argumentos
    
    p.mb-5 Para el proceso de venta es necesario que el vendedor cuente con argumentos acertados, pues así tendrá más posibilidades de cumplir con los resultados comerciales de la empresa; sin embargo, los clientes actuales ya no quieren que les vendan, prefieren que los escuchen, orienten y ayuden a resolver sus necesidades, por lo que las técnicas que se usaban antes ya no son efectivas en la actualidad.

    .row.mb-5.justify-content-center
      .col-12.col-md-10 
        .cajon.bgr_22.p-4
          p.mb-0 Es posible crear buenos argumentos de venta que no promuevan la manipulación, por lo que se recomienda utilizar argumentos de venta orientados a ayudar al comprador, así se trate de ventas de alto costo, al vendedor se le debe notar más el deseo de servicio que la manipulación. 

    .bg_grad-09
      .row.justify-content-center
        .col-12.col-md-10
          p A continuación se presentan los consejos para tener buenos argumentos durante una llamada de ventas:
          
          SlyderA.bgr_8.p-4(tipo="b").mb-4(data-aos="flip-up")
            .row.justify-content-center
              .col-md-6.mb-4.mb-md-0.d-flex.align-items-center
                div
                  p.text-bold Trátelos como personas y no como prospectos
                  p No vea al cliente potencial como si fuera dinero, véalo como una persona con problemas y situaciones que necesita resolver y al que puede colaborarle, incremente las posibilidades de establecer buenas relaciones con el cliente.
                  p.mb-0 Haga preguntas sencillas, indague por qué se ha interesado en el producto o servicio, centre la conversación en el cliente, de este modo puede descubrir quién es y qué es lo realmente importante para él, esto creará una conversación significativa.
              .col-md-4.d-flex.align-items-center
                figure
                  img(src='@/assets/curso/tema3/t3-50.png', alt='mujer tomando nota de unos productos')
            .row.justify-content-center
              .col-md-6.mb-4.mb-md-0.d-flex.align-items-center
                div
                  p.text-bold Anticípese acerca de qué le hablará y cúmplalo
                  p.mb-0 Cuando haga la llamada de contacto anticípese a informarle al cliente los puntos que tocará en la conversación, de esta manera demuestra que es una persona confiable y de palabra, recuerde involucrar al cliente potencial en la conversación, pregunte si está de acuerdo o que si tiene alguna duda o propuesta para llegar a algún acuerdo, lo que demuestra su intención honesta de ayudarle y orientarlo.
              .col-md-4.d-flex.align-items-center
                figure
                  img(src='@/assets/curso/tema3/t3-51.png', alt='mujer tomando nota de unos productos')
            .row.justify-content-center
              .col-md-6.mb-4.mb-md-0.d-flex.align-items-center
                div
                  p.text-bold Sea un investigador en lugar de un actor
                  p.mb-0 Trate de que en las primeras conversaciones pueda lograr la mayor información posible acerca del prospecto, lleve la conversación como si fuera una investigación, haga preguntas inteligentes, recuerde que tiene poco tiempo, ya que está en una llamada telefónica, por ejemplo, puede preguntar, por qué considera que este es el producto que necesita, esta pregunta le arrojará información valiosa y le permitirá identificar si es el tipo de cliente adecuado para su producto o servicio.
              .col-md-4.d-flex.align-items-center
                figure
                  img(src='@/assets/curso/tema3/t3-52.png', alt='mujer tomando nota de unos productos')
            .row.justify-content-center
              .col-md-6.mb-4.mb-md-0.d-flex.align-items-center
                div
                  p.text-bold No asuma que ya está listo
                  p.mb-0 Después de hacer la presentación del producto o servicio al cliente potencial pídale que evalúe su trabajo, infórmele que es importante saber si hizo correctamente la presentación y que si tiene alguna sugerencia para hacerle sobre su desempeño, pregunte también si tiene alguna objeción para aclararla, es ahí cuando se da cuenta que está listo para comprar y pedir el cierre de la venta.
              .col-md-4.d-flex.align-items-center
                figure
                  img(src='@/assets/curso/tema3/t3-53.png', alt='mujer tomando nota de unos productos')
            .row.justify-content-center
              .col-md-6.mb-4.mb-md-0.d-flex.align-items-center
                div
                  p.text-bold Haga la oferta
                  p.mb-0 El error más frecuente en el que incurren los vendedores es solicitar permiso para presentar la oferta, lo ideal es hacerlo naturalmente en medio de la conversación de la venta, muchos vendedores consideran que, si piden permiso al prospecto, se incrementa la probabilidad de que la respuesta sea afirmativa, si ha manejado bien la llamada y ha hecho una buena investigación, lo correcto es presentar la propuesta, no pida permiso, hágalo de una forma fluida y con seguridad de lo que está ofreciendo.
              .col-md-4.d-flex.align-items-center
                figure
                  img(src='@/assets/curso/tema3/t3-54.png', alt='mujer tomando nota de unos productos')
    
    separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.4 Cierre de ventas
    
    p.mb-5 Puede definirse como una ayuda para que los clientes tomen las decisiones que son favorables para ellos, los vendedores ayudan profesionalmente todo el tiempo a que la gente compre, la realidad es que se genera una relación ganar-ganar que dura el tiempo que el vendedor decida.

    .row.mb-5.d-flex.justify-content-center(data-aos="zoom-in")
      .col-12.col-md-10.mb-5  
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/t3-49.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 El objetivo de todo vendedor es cerrar la venta, es decir, lograr un pedido o por lo menos conseguir un compromiso formal, el cierre inicia en la etapa de preparación de la venta, tiene que ver con una buena elaboración de la entrevista de venta, continúa con el contacto con el cliente, se determinan necesidades o motivaciones, las cuales se obtienen de unas buenas preguntas en la entrevista.  Si el vendedor ha argumentado y presentado los beneficios del producto y el cliente ha percibido la utilidad que le ofrece o la satisfacción que le va a proporcionar y, el vendedor ha dado respuesta a las objeciones que le formuló el cliente sobre el producto, la venta está hecha, la mejor arma de un vendedor es saber hacer buenas preguntas.
    
        p.mt-5 Los vendedores deben escuchar dos veces más de lo que hablan, es importante no apresurar el cierre de la venta, existen vendedores que presionan al cliente y lo hacen sin darse cuenta, por ejemplo:

        .row.bgr_23.p-4
          .col-12.col-md-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema3/t3-55.svg', alt='Cliente en llamada con asesora comercial')
          .col-12.col-md-auto.d-flex.align-items-center(data-aos="fade-left")
            ul.lista-ul--color.mb-0
              li.mb-0 
                i.fas.fa-circle.pst_13
                | Este es el mejor producto del mercado.
              li.mb-0 
                i.fas.fa-circle.pst_13
                | Definitivamente esto es lo que necesita.
              li.mb-0 
                i.fas.fa-circle.pst_13
                | Aproveche y llévelo ahora.
              li.mb-0 
                i.fas.fa-circle.pst_13
                | Más vale que se apresure, el producto se va a acabar.
              li.mb-0 
                i.fas.fa-circle.pst_13
                | Los precios van a aumentar.
              li.mb-0 
                i.fas.fa-circle.pst_13
                | Va a perder esta oportunidad.
              li.mb-0 
                i.fas.fa-circle.pst_13
                | Hay otras personas interesadas.
              li.mb-0 
                i.fas.fa-circle.pst_13
                | Esta es la mejor compra que va a hacer.

    p Cuando el vendedor hace esto, el prospecto siente que lo están presionando, pierde el interés y la confianza, lo más probable es que pierda la venta. 
    p Las estrategias que se utilizan para el cierre de la venta tienen como objetivo ayudar al cliente a tomar una decisión, esta etapa suele generar tensión para el cliente y para el vendedor, para el cliente porque puede estar errando en su compra y para el vendedor porque puede perder la venta después de haber hecho un buen trabajo. 
    p.mb-5 Los vendedores en el cierre de la venta deben actuar con actitud positiva, esto demostrará que se ha llegado a un acuerdo con el cliente, se debe fijar la cantidad del producto, el color, la fecha, el lugar, etc.

    .row.justify-content-center(data-aos="fade-down")
      .col-12.col-md-10
        .row.mb-5.bgr.justify-content-center.position-relative
          .col-12.col-md-7.d-flex.align-items-center
            p.mb-0 Una vez el cliente le haya enviado señales de compra, el vendedor debe sintetizar los beneficios pactados con el cliente, se deben hacer preguntas para constatar que los acuerdos quedaron claros, especialmente que sea el cliente quien los mencione, como segunda medida se debe solicitar el pedido, ahí se fija la fecha y lugar de entrega al igual que todas las especificaciones contempladas en el pedido, tales como modelo, color, forma de pago, etc.
          .col-12.col-md-3
            figure.d-flex.justify-content-center
              img.img200(src='@/assets/curso/tema3/t3-56.png', alt='mujer tomando nota de unos productos')
          figure.pst_9
              img.img30.d-none.d-md-flex(src='@/assets/curso/tema3/t3-57.svg', alt='mujer tomando nota de unos productos')
          figure.pst_10
              img.img30.d-none.d-md-flex(src='@/assets/curso/tema3/t3-58.svg', alt='mujer tomando nota de unos productos')
    
    .row.d-flex.justify-content-center
      .col-12.col-md-9.bgr_7.bgr_6
        p.mb-0 Es de suma importancia ofrecerle al cliente dos alternativas para que él elija la que más se ajuste a su necesidad, por ejemplo, color negro o blanco, se le envía 200 unidades o 250 unidades, el pago lo hará de contado o necesita crédito, esto le da la sensación al cliente que tomó la decisión final y que tuvo la última palabra. 

    separador

    .bg_grad-01
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        .h2 3.5 Condiciones de entrega y satisfacción del cliente

      p.mb-5 Son los acuerdos que se hacen con los clientes referentes a la forma de entrega de los productos o servicios, estas condiciones deben incluir lugar, fecha, hora de entrega y las garantías que se le ofrecen por daños o mal funcionamiento del producto o servicio. 

      .row.mb-3.justify-content-center
        .col-12.col-md-3.mb-3.mb-md-0(data-aos="fade-right")
          figure.d-flex.justify-content-center
            img.img300(src='@/assets/curso/tema3/t3-59.svg', alt='mujer tomando nota de unos productos')
        .col-12.col-md-7(data-aos="fade-left")
          p Estas tienen un punto de transmisión, este se refiere al derecho de propiedad legal, en este punto el riesgo pasa del vendedor al comprador.
          .bgr_18.p-4.mb-3
            span La garantía funciona desde el mismo momento en que se hace el contrato y radica en la posibilidad de obligar al vendedor a que haga la entrega del bien o servicio, lo cual está contemplado en el 
            span.colr.text-bold “Estatuto del Consumidor (Ley 1480/11), relacionada con la aptitud para satisfacer las necesidades para las cuales ha sido producido un bien”.
          p La calidad y satisfacción del cliente se basa en la percepción que él tenga acerca del producto o servicio adquirido.
      
      p El proceso final de la venta es la entrega de productos y mercancías de acuerdo con las condiciones establecidas durante el proceso de la compra, algunos aspectos importantes a tener en cuenta a la hora de brindar un buen servicio de entrega de productos son:
    
    SlyderB.mt-5(:datos="datosSlyder")
    

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        texto:
          'La entrega de productos consiste en el despacho de pedidos o paquetes adquiridos por el cliente durante una compra, el vendedor debe garantizar la satisfacción del cliente hasta que el producto llegue a manos del consumidor final en la fecha y hora acordada en las condiciones de entrega.',
        imagen: require('@/assets/curso/tema3/t3-60.png'),
      },
      {
        texto:
          'Notifique al cliente la llegada del pedido, cuando la compra se realiza de forma virtual el comprador desea saber inmediatamente el estado de entrega de su pedido y el momento en el que llegará a sus manos, es por esto que si quiere prestar un buen servicio debe estar en la capacidad de responder las preguntas y dudas del cliente en cuanto a la entrega.',
        imagen: require('@/assets/curso/tema3/t3-61.png'),
      },
      {
        texto:
          'Optimizar los tiempos de entrega es la clave, cuando el servicio de entrega se realiza con rapidez genera una buena experiencia para el cliente, pues espera que se le ahorre tiempo y se le evitan esperas innecesarias, se debe considerar la posibilidad de entregar antes del tiempo pactado, es decir, el producto debe llegar acorde a las características que se le ofrecieron durante la venta, horas o días antes de lo acordado, un pedido entregado a destiempo genera un cliente insatisfecho así el producto llegue en óptimas condiciones.',
        imagen: require('@/assets/curso/tema3/t3-62.png'),
      },
      {
        texto:
          'Pida opinión a los clientes, este aspecto es muy importante porque poder brindar una experiencia satisfactoria en la entrega de los productos contribuye a la fidelización del cliente, un cliente satisfecho vuelve a buscar una relación comercial con la empresa que le cumplió tanto en la entrega como en la garantía de los productos o servicios que adquirió. Mantener una retroalimentación con el cliente contribuye a entender sus necesidades y expectativas, también permite identificar las fallas si existen.',
        imagen: require('@/assets/curso/tema3/t3-63.png'),
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
