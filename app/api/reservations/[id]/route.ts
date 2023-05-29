import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabaseClient';

type Props = {
  params: Record<string, string>
};

export async function GET(request: NextRequest, { params }: Props) { 
  let { data: reservations, error } = await supabase
    .from('reservations')
    .select('items(*)')
    .eq('user_id', params.id);
  
  if (error) {
    console.error('Error fetching data:', error.message);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
  const res = NextResponse.json(reservations?.map(reservation => reservation.items));
  res.headers.set('Cache-Control', 'no-store, max-age=0');
  return res;
}
