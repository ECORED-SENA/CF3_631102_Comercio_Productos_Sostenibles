(function(e){function a(a){for(var o,i,c=a[0],s=a[1],d=a[2],l=0,u=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(a);while(u.length)u.shift()();return t.push.apply(t,d||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(t.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"6d0ff7ef","chunk-0206bfa0":"f62817f9","chunk-0c047e41":"b05fcb6b","chunk-13a6037e":"ad4ec6f5","chunk-18f95272":"fa26c52b","chunk-25b302c8":"73c21de6","chunk-26fc7596":"392ac2ac","chunk-2c06842c":"dfa5fff8","chunk-2d0e96ec":"65c5715f","chunk-2d208d90":"a20d9f32","chunk-2d21d0e2":"7e0a0569","chunk-2d22c123":"aeffe3e2","chunk-2d2747e2":"8b6d05ef","chunk-2e80bb9a":"96790d99","chunk-319206de":"de836a31","chunk-32334cb6":"949df39c","chunk-3c57cd7b":"151f32fc","chunk-3d6834f6":"517c8c61","chunk-4cdd78c0":"5b8e33fb","chunk-4f2d402a":"8e5d4a96","chunk-4fde0a08":"5c2f0975","chunk-515a8379":"3932c1ff","chunk-53ccb27e":"e51b7f26","chunk-55d286b8":"db3cd589","chunk-59974754":"c533b492","chunk-6e1e538a":"91a08a8c","chunk-766a929b":"a6c08b10","chunk-c796899c":"75f31d1d","chunk-e8a7823a":"9a27aa97","chunk-f2df7d2c":"4a579eb7","chunk-fde47172":"7678b05f",comple:"9a261b5b",creditos:"9dedeab7",glosario:"7974deee",intro:"2da1b331",referencias:"9d44ff87",sintesis:"fa837f52",tema1:"fd2362a5",tema2:"2971e5f5",tema3:"9ad96ca1",tema4:"044a9fd1"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"86fc0e2c","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"86fc0e2c","chunk-26fc7596":"86fc0e2c","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"86fc0e2c","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"86fc0e2c","chunk-3c57cd7b":"86fc0e2c","chunk-3d6834f6":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"86fc0e2c","chunk-4fde0a08":"6c748ef3","chunk-515a8379":"84d3cfad","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"0ce1bf55","chunk-6e1e538a":"51f429a3","chunk-766a929b":"d123c3a4","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"86fc0e2c","chunk-fde47172":"31d6cfe0",comple:"0935f015",creditos:"ee58a301",glosario:"323b88dd",intro:"31d6cfe0",referencias:"e2e44711",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",r=s.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var d=t[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===r))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===o||l===r)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var o=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete i[e],f.parentNode.removeChild(f),n(t)},f.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){i[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=r[e]=[a,n]}));a.push(o[2]=t);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}r[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var f=l;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"417a":function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.564accd4.svg"},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=n("2877"),d=Object(s["a"])(c,i,r,!1,null,null,null),l=d.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),f=n("8c4f"),m=n("ae58"),p=n("7e58");u["a"].use(f["a"]);var b=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Exhibición y venta de productos",descripcionCurso:"La exhibición es la herramienta más efectiva para impulsar la venta de productos, en los formatos comerciales se utilizan diferentes técnicas y estas dependen de la estrategia y las necesidades del negocio. Es importante tener claridad de las características de cada producto, pues dependiendo del tipo, tamaño y forma se debe escoger el mueble ideal para exhibirlo, garantizando la preservación de este.",imagenBannerPrincipal:n("74b5"),fondoBannerPrincipal:n("417a"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("71f8")},{clases:["banner-principal-decorativo-2"],imagen:n("8f04")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Exhibición y planimetría",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Demostraciones",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Condiciones comerciales",hash:"t_1_2"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Inclusión",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Discapacidad",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Normativas",hash:"t_2_2"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Venta",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Habilidades en ventas",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Objeciones",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"Argumentos",hash:"t_3_3"},{icono:"far fa-file-alt",numero:"3.4",titulo:"Cierre de ventas",hash:"t_3_4"},{icono:"far fa-file-alt",numero:"3.5",titulo:"Condiciones de entrega y satisfacción del cliente",hash:"t_3_5"}]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Reportes",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis"},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Exhibición y planimetría",referencia:"Ventasideamarket. (2012). ¿Cómo crear una experiencia en el punto de venta?.",tipo:"Video",link:"https://youtu.be/uOhSL2nx9Rs"},{tema:"Demostraciones",referencia:"Espinosa, G. (2019). Demostración de producto en ventas.",tipo:"Video",link:"https://youtu.be/8gWGGq_4PvM"},{tema:"Venta",referencia:"Red Laboral ICH. (2018). Habilidades de un vendedor efectivo.",tipo:"Video",link:"https://youtu.be/L_JbcOKRR74"},{tema:"Argumentos",referencia:"<em>InboundCycle - Marketing</em> y ventas <em>inbound.</em> (2021). Argumentario de ventas - Qué es, cómo crearlo y por qué necesitas uno.",tipo:"Video",link:"https://youtu.be/nvIgid0m8CI"},{tema:"Condiciones de entrega y satisfacción del cliente",referencia:"Universidad Corporativa Farmaenlace. (2020). Aseguramiento de la satisfacción del cliente.",tipo:"Video",link:"https://youtu.be/EY3rMwzQfRs"},{tema:"Exhibición de mercancía",referencia:"<em>Urban Strand.</em> (2001). Reglas básicas para exhibir mercancías. Oficina Internacional del Trabajo, Ginebra.",tipo:"Documento PDF",descarga:"/downloads/wcms_634570.pdf"}],glosario:[{termino:"Argumento",significado:"Expresión escrita de un razonamiento o idea con la cual se prueba o justifica una tesis."},{termino:"Cliente",significado:"Es la razón de ser de la empresa. Es la persona o empresa que paga por los productos de la empresa."},{termino:"Cliente potencial",significado:"Son aquellos clientes potenciales que tienen como características necesitar el producto que ofrece la empresa y tener la capacidad adquisitiva para adquirirlo."},{termino:"Demostraciones",significado:"Acción de mostrar la verdad o falsedad de una cosa, argumentación, evidencia o indicación de una cosa."},{termino:"Exhibición",significado:"Muestra o exposición al público de un producto o servicio."},{termino:"Inclusión",significado:"Actitud, tendencia o política de integrar a todas las personas en la sociedad con el fin de que todas puedan participar y tengan los mismos derechos."},{termino:"Logística",significado:"Medios, métodos e infraestructura para garantizar el almacenamiento, transporte y entrega de productos o servicios."},{termino:"Objeciones",significado:"Argumento u observación que se hace en contra de una opinión o afirmación para negar su validez o deficiencia."},{termino:"Planimetría",significado:"Representación gráfica de un espacio."},{termino:"Prospectar",significado:"Ejercicio que realizan las empresas para seleccionar sus posibles clientes."},{termino:"Reportes",significado:"Documentos que contienen los detalles de un evento específico."},{termino:"Satisfacción del cliente",significado:"Sentimiento o actitud del cliente hacia un producto cuando tiene satisfechas las expectativas."}],referencias:[{referencia:"Aranda, J. (2015). Marketing y promoción en el punto de venta. Editorial Elearning."},{referencia:"Ardila, E. y Sastoque, F. (1984). Técnica de ventas.  SENA.",link:"https://repositorio.sena.edu.co/handle/11404/1896"},{referencia:"Ceupe Blog. (2020). Cierre de la venta. Ceupe Magazine.",link:"https://www.ceupe.com/blog/en-que-consiste-el-cierre-de-la-venta.html"},{referencia:"Cortés, G. (2017). 7 tipos de exhibición en punto de venta. InformaBTL.",link:"https://www.informabtl.com/7-tipos-exhibicion-en-punto-venta/"},{referencia:"Euroinnova. (2022). Aprende qué son las condiciones comerciales de una empresa. Euroinnova.",link:"https://www.euroinnova.co/blog/que-son-las-condiciones-comerciales-de-una-empresa"},{referencia:"Forcemanager. (2021). El reporte de ventas mensual o cómo no perderse entre los datos comerciales. Forcemanager.",link:"https://www.forcemanager.com/es/blog/reporte-de-ventas-mensual/"},{referencia:"Navarro, M. (2012). Técnicas de ventas. Red Tercer Milenio. Academia.edu.",link:"https://www.academia.edu/22896902/T%C3%A9cnicas_de_ventas_MARIANA_ELIZABETH_NAVARRO_MEJIA"},{referencia:"Palacios, D. (2021). ¿Tienes las 10 habilidades de un vendedor exitoso? <em>HubSpot.</em>",link:"https://blog.hubspot.es/sales/vendedor-exitoso"},{referencia:"PMK <em>Digital Learning.</em> (2021). Argumentos de venta: consejos para tener éxito durante la llamada. Pmkvirtual. ",link:"https://pmkvirtual.com/blog/argumentos-de-venta/"},{referencia:"Quadminds. (2021). 3 estrategias para mejorar tu servicio de entrega de productos. Quadminds.",link:"https://www.quadminds.com/blog/servicio-de-entrega-de-producto/"},{referencia:"WDI. (2017). Demostraciones en el punto de venta. Grupowdi.",link:"https://grupowdi.com/2017/03/07/demostraciones-punto-de-venta-presentar-productos/"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Esperanza Cardona Grisales",cargo:"Experta temática",centro:"Centro de Comercio y Servicios - Regional Cauca"},{nombre:"Giovanna Andrea Escobar Ospina",cargo:"Diseñadora instruccional",centro:"Centro de la Industria, la Empresa y los Servicios (CIES) - Regional Norte de Santander"},{nombre:"Silvia Milena Sequeda Cárdenas",cargo:"Asesora metodológica",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Julia Isabel Roberto",cargo:"Correctora de estilo",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Oscar Ivan Uribe Ortiz",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Daniel Ricardo Mutis Gómez",cargo:"Validación Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Carlos Andrés Díaz Pinto",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Andrea Paola Botello De La Rosa",cargo:"Validación de Maquetación",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Luis Gabriel Urueta Alvarez",cargo:"Actividades didácticas",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Yenny Patricia Ulloa Villamizar",cargo:"Validación de contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy María Ruíz Torres",cargo:"Revisión de guion audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"María Carolina Tamayo López",cargo:"Locución",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Lina Marcela Pérez Manchego",cargo:"Ilustración",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Yeimmy Bibiana Barrera Maldonado",cargo:"Ilustración",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Estefani Daniela Gallo Cortés",cargo:"Ilustración",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Validación Ilustración",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Ernesto Navarro Jaimes",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Oleg Litvin",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Pedro Nel Calao Zabala",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Validación audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:g["a"],render:function(e){return e(l)}}).$mount("#app")},"71f8":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.944cd35d.svg"},"74b5":function(e,a,n){e.exports=n.p+"img/banner-princiapal.c09499cb.png"},"8f04":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.d5c94fd2.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"6.3.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"5.3.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){}});
//# sourceMappingURL=app.296f3050.js.map