import { supabase } from '../../../lib/supabaseClient';

export async function GET(request: Request) { 
  let { data: items } = await supabase.from('items').select('*')
  
  return new Response(JSON.stringify(items), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 200,
    statusText: 'OK'
  })
}
