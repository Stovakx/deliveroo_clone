import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurants',
  title: 'Restaurants',
  type: 'document',
  fields: [
    {
      name: "name",
      type: 'string',
      title: 'Restaurants Name',
      validation: rule=> rule.required()
    },
    {
      name: "description",
      type: 'string',
      title: 'Restaurants Description',
      validation: rule=> rule.required(200)
    },
    {
      name: "image",
      type:"image",
      title:"Image of the restaurants",
    },
    {
        name: "lat",
        type: "string",
        title: "Latitude of the restaurant",
    },
    {
        name: "lng",
        type: "string",
        title: "Longitude of the restaurant",
    },
    {
        name: "adress",
        type: "string",
        title: "Restaurant adress",
        validation: rule=> rule.required(),
    },
    {
        name: "rating",
        type: "number",
        title: "Enter a number between 1 to 5",
        validation: rule=>rule.required().min(1).max(5).error('Please enter a rating.')
    },
    {
        name: "reviews",
        type: "string",
        title: "Reviews",
    },
    {
        name:"type",
        title:"Category",
        validation:rule=> rule.required(),
        type:"reference",
        to: [{type: 'category'}],
    },
    {
        name:"dishes",
        type:"array",
        title:"Dishes",
        of:[{type:'reference', to: [{type:"dish"}]}],
    },
  ],
})
