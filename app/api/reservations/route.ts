import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient';

export async function POST(request: NextRequest) { 
  const { user_id, item_id } = request.json();
  // console.log(request.json())
  // console.log(user_id, item_id)
  let { error } = await supabase
    .from('reservations')
    .insert([{ user_id, item_id }]);
  
  if (error) {
    console.error('Error making reservation:', error.message);
    return NextResponse.json({ error: 'Error making reservation' }, { status: 500 });
  }
  return NextResponse.json({ message: 'Operation successful' });
}
