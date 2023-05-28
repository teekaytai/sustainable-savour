import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabaseClient';

type Props = {
  params: Record<string, string>
}

export async function GET(request: NextRequest, { params }: Props) { 
  let { data: items } = await supabase
    .from('items')
    .select('*')
    .eq('id', params.id);
  
  if (items?.length) {
    return NextResponse.json(items[0])
  } else {
    return NextResponse.json({ error: 'Resource not found' }, { status: 404 });
  }
}
