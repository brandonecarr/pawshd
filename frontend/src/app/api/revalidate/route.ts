import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await request.json();

    if (body.post_type === "post") {
      revalidatePath("/blog");
      if (body.slug) {
        revalidatePath(`/blog/${body.slug}`);
      }
    } else if (body.post_type === "page") {
      if (body.slug) {
        revalidatePath(`/${body.slug}`);
      }
    } else {
      // Custom post types — revalidate home page
      revalidatePath("/");
    }

    return NextResponse.json({ revalidated: true });
  } catch {
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
