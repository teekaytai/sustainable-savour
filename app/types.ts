export type Item = {
  id: number, 
  name: string,
  business_id: number,
  location: string, 
  start_time: string, 
  end_time: string, 
  price: number, 
  quantity_left: number, 
  description: string, 
  image_link: string, 
  is_halal: boolean, 
  is_vegetarian: boolean, 
}

export const SampleItem: Item = {
  id: 1, 
  name: "Cwason",
  business_id: 123,
  location: "Location blah", 
  start_time: "5pm", 
  end_time: "7pm", 
  price: 5.99, 
  quantity_left: 10, 
  description: "lorem ipsum", 
  image_link: "https://plus.unsplash.com/premium_photo-1667797527523-fd1574038753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80", 
  is_halal: true, 
  is_vegetarian: true, 
}