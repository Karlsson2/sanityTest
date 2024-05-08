export const Brand = {
  name: 'brand',
  title: 'Brand',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {name: 'logo', title: 'Logo', type: 'image'},
  ],
}
export default Brand
