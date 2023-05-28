import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient';

export async function GET(request: NextRequest) { 
  let { data: items } = await supabase
    .from('items')
    .select('*')

  return NextResponse.json(items)
}
