import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient';

export async function GET(request: NextRequest) { 
  let { data: items, error } = await supabase
    .from('items')
    .select('*');

  if (error) {
    console.error('Error fetching data:', error.message);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
  return NextResponse.json(items);
}
