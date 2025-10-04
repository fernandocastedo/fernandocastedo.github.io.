// Fuente de datos estática de productos (sin fetch/BD)
// id = slug del nombre; debe coincidir con los enlaces generados

window.PRODUCTS = [
    {
        id: "collar-labubu",
        name: "Collar Labubu",
        price: 60,
        mainImage: "imagenes/Productos/Collar labubu green.png",
        type: "Collar",
        size: { length: "45 cm" },
        description: "Cadena plateada con dije de Labubu al centro.",
        variants: [
            {
                key: "green",
                name: "Verde",
                images: ["imagenes/Productos/Collar labubu green.png"],
                size: { length: "45 cm" },
                description: "Cadena plateada con dije de Labubu color verde."
            },
            {
                key: "pink",
                name: "Rosado",
                images: ["imagenes/Productos/collar labubu pink.png"],
                size: { length: "45 cm" },
                description: "Cadena plateada con dije de Labubu color rosado."
            }
        ]
    },
    {
        id: "nck-yasashi",
        name: "NCK Yasashi",
        price: 70,
        mainImage: "imagenes/Productos/NCK Yasashi.PNG",
        type: "Collar",
        size: { length: "40 cm" },
        images: [
            "imagenes/Productos/NCK Yasashi.PNG"
        ],
        description: "Uno de nuestros diseños más tiernos y maximalistas con perlas blancas, cristales colgantes rosados y dije de cruz con detalles rosados.",
        soldOut: true
    },
    {
        id: "nck-intaresu",
        name: "NCK Intaresu",
        price: 60,
        mainImage: "imagenes/Productos/NCK Intaresu.PNG",
        type: "Collar",
        size: { length: "40 cm" },
        images: [
            "imagenes/Productos/NCK Intaresu.PNG"
        ],
        description: "Perlas blancas entrelazadas con detalle de perlas rosadas y dije de cruz plateado combinado."
    },
    {
        id: "nck-heart",
        name: "NCK Heart",
        price: 60,
        mainImage: "imagenes/Productos/NCK Heart Gold.png",
        type: "Collar",
        size: { length: "45 cm" },
        description: "Colgante corazón con acabado espejo en dos variantes.",
        variants: [
            {
                key: "gold",
                name: "Gold",
                images: ["imagenes/Productos/NCK Heart Gold.png"],
                size: { length: "45 cm" },
                description: "Corazón dorado con cadena ajustable."
            },
            {
                key: "silver",
                name: "Silver",
                images: ["imagenes/Productos/NCK Heart Silver.png"],
                size: { length: "45 cm" },
                description: "Corazón plateado de estilo versátil para uso diario."
            }
        ]
    },
    {
        id: "nck-garasu",
        name: "NCK Garasu",
        price: 120,
        mainImage: "imagenes/Productos/NCK Garasu.PNG",
        type: "Collar",
        size: { length: "40 cm" },
        images: [
            "imagenes/Productos/NCK Garasu.PNG",
            "imagenes/Productos/NCK Garasu Foto 2.jpg"
        ],
        description: "Uno de nuestros collares más complejos: tejido de perlas con colgantes de cristal y dije de cruz al centro."
    },
    {
        id: "nck-barbed-spider",
        name: "NCK Barbed Spider",
        price: 70,
        mainImage: "imagenes/Productos/NCK Barbed Spider.png",
        type: "Collar",
        size: { length: "40 cm" },
        images: [
            "imagenes/Productos/NCK Barbed Spider.png"
        ],
        description: "Tu araña favorita en un collar con perlas blancas y transparentes, más púas para un look atrevido."
    },
    {
        id: "nck-spilled-blood",
        name: "NCK Spilled Blood",
        price: 70,
        mainImage: "imagenes/Productos/NCK Spilled Blood.png",
        type: "Collar",
        size: { length: "45 cm" },
        images: [
            "imagenes/Productos/NCK Spilled Blood.png"
        ],
        description: "Inspirado en la ‘sangre derramada’: dos filas de perlas con detalles rojos en caída y cruz central."
    },
    {
        id: "nck-hard-spikes",
        name: "NCK Hard Spikes",
        price: 55,
        mainImage: "imagenes/Productos/NCK Hard Spikes.png",
        type: "Collar",
        size: { length: "45 cm" },
        description: "Collar de picos en acero con variantes.",
        variants: [
            { key: "classic", name: "Clásico", price: 55, images: ["imagenes/Productos/NCK Hard Spikes.png"], size: { length: "45 cm" }, description: "Versión clásica con picos definidos en acero." },
            { key: "small-1", name: "Pequeñas A", price: 70, images: ["imagenes/Productos/NCK Hard Spikes Pequeñas.png"], size: { length: "45 cm" }, description: "Variante con picos pequeños en distribución uniforme." },
            { key: "small-2", name: "Pequeñas B", price: 70, images: ["imagenes/Productos/NCK Hard Spikes Pequeñas 2.png"], size: { length: "45 cm" }, description: "Variante con picos pequeños y acentos minimalistas." },
            { key: "inox", name: "Acero Inoxidable", price: 100, images: ["imagenes/Productos/NCK Hard Spikes Acero Inoxidable.png"], size: { length: "45 cm" }, description: "Acero inoxidable para mayor durabilidad y brillo." }
        ]
    },
    {
        id: "nck-milky-halo",
        name: "NCK Milky Halo",
        price: 65,
        mainImage: "imagenes/Productos/NCK Milky Halo.png",
        type: "Collar",
        size: { length: "40 cm" },
        images: [
            "imagenes/Productos/NCK Milky Halo.png"
        ],
        description: "Halo lechoso con matices suaves y acabado delicado."
    },
    {
        id: "nck-tejido-de-perlas",
        name: "NCK Tejido de Perlas",
        price: 65,
        mainImage: "imagenes/Productos/NCK tejido de perlas.png",
        type: "Collar",
        size: { length: "40 cm" },
        images: [
            "imagenes/Productos/NCK tejido de perlas.png"
        ],
        description: "Tejido a mano con perlas seleccionadas; elegante y artesanal."
    },
    {
        id: "arete-cruces-2",
        name: "Arete Cruces 2",
        price: 45,
        mainImage: "imagenes/Productos/Aretes cruces 2.png",
        type: "Aretes",
        images: [
            "imagenes/Productos/Aretes cruces 2.png"
        ],
        description: "Aretes de cruces con diseño estilizado en acabado brillante."
    },
    {
        id: "clips-orquideas",
        name: "Clips de Orquídeas",
        price: 35,
        mainImage: "imagenes/Productos/Clip de orquideas mediano.png",
        type: "Clip",
        description: "Clips con motivo de orquídeas en diferentes tamaños.",
        variants: [
            { key: "mediano", name: "Mediano", images: ["imagenes/Productos/Clip de orquideas mediano.png"], description: "Clip mediano con motivo de orquídeas." },
            { key: "pequenas", name: "Pequeñas", images: ["imagenes/Productos/Clips de orquideas pequeñas.png"], description: "Juego de clips pequeños con orquídeas." }
        ]
    },
    {
        id: "llavero-corazon",
        name: "Llavero con Corazón",
        price: 35,
        mainImage: "imagenes/Productos/Llavero con Corazon.png",
        type: "Llavero",
        images: [
            "imagenes/Productos/Llavero con Corazon.png"
        ],
        description: "Llavero con dije de corazón y acabado pulido."
    },
    {
        id: "llavero-lazo-doble",
        name: "Llavero Lazo Doble",
        price: 35,
        mainImage: "imagenes/Productos/Llavero Lazo Doble Plateado.png",
        type: "Llavero",
        description: "Llavero de lazo doble con dos acabados.",
        variants: [
            { key: "plateado", name: "Plateado", images: ["imagenes/Productos/Llavero Lazo Doble Plateado.png"], description: "Acabado plateado con brillo sutil." },
            { key: "blanco", name: "Blanco", images: ["imagenes/Productos/Llavero Lazo doble Blanco.png"], description: "Acabado blanco limpio y elegante." }
        ]
    }
];


