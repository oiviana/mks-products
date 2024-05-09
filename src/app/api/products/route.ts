import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"
    );
    const data = await response.json();
    return NextResponse.json({ data: data });
  } catch (error) {
    return NextResponse.json({ message: "error", error: error });
  }
}
