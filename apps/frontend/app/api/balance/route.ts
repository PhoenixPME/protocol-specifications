import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get('address');

  console.log("✅ Balance API called for:", address);
  
  // RETURN 500 TEST - NO EXTERNAL CALLS
  return NextResponse.json({
    balances: [
      {
        denom: 'utestcore',
        amount: '500000000'  // 500 TEST
      }
    ]
  });
}
