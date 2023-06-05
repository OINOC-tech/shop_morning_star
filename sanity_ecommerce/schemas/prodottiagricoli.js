export default {
    name: 'productagricoli',
    title: 'Prodotti Agricoli',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'name',
        title: 'Nome',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      { 
        name: 'price',
        title: 'Prezzo',
        type: 'number',
      },
      { 
        name: 'details',
        title: 'Dettagli',
        type: 'string',
      }
    ]
  }