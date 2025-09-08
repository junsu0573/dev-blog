import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { signupSchema } from "@/utils/validation";
import { createUserByCredentials, getUserByEmail } from "@/lib/user";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password } = signupSchema.parse(body);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return NextResponse.json(
        { error: "해당 이메일은 이미 사용 중입니다." },
        { status: 400 }
      );
    }

    const user = await createUserByCredentials({ name, email, password });

    return NextResponse.json(
      {
        message: "회원가입이 완료되었습니다.",
        user,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0].message },
        { status: 400 }
      );
    }

    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
