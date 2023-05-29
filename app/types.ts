export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      businesses: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
      }
      items: {
        Row: {
          business_id: number
          description: string | null
          end_time: string | null
          id: number
          image_link: string | null
          is_halal: boolean
          is_vegetarian: boolean
          location: string
          name: string
          price: number
          quantity_left: number
          start_time: string | null
        }
        Insert: {
          business_id: number
          description?: string | null
          end_time?: string | null
          id?: number
          image_link?: string | null
          is_halal?: boolean
          is_vegetarian?: boolean
          location: string
          name: string
          price: number
          quantity_left: number
          start_time?: string | null
        }
        Update: {
          business_id?: number
          description?: string | null
          end_time?: string | null
          id?: number
          image_link?: string | null
          is_halal?: boolean
          is_vegetarian?: boolean
          location?: string
          name?: string
          price?: number
          quantity_left?: number
          start_time?: string | null
        }
      }
      reservations: {
        Row: {
          id: number
          item_id: number
          user_id: string
        }
        Insert: {
          id?: number
          item_id: number
          user_id: string
        }
        Update: {
          id?: number
          item_id?: number
          user_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Item = Database["public"]["Tables"]["items"]["Row"];

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
