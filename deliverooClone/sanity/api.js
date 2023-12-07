import client from "./api";

export const getFeaturedRestaurants = async () => {
  const getFeaturedRestaurants = await client.fetch(`
  *[_type=="featured"]{  
    ...,
    restaurants[]->{
      ...,
        dishes[]->{
          ...,
          
        },
      type->{
      name
      
      }
    }
  }
  `);
  return getFeaturedRestaurants;
};

export const getCategories = async () => {
  const categories = await client.fetch(`*[_type=="category"]`);
  return categories;
};

export const getFeaturedRestaurantById = async (id) => {
  const getFeaturedRestaurantById = client.fetch(
    `*[_type=="feature" && _id == $id ]{
      ...,
      restaurants[] ->{
          ...,
          dishes[]->{
              name
          }
      }
  }`,
{ id }
  )
  return getFeaturedRestaurantById;
};
