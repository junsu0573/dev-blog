import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/utils/hash";

export async function getUserByEmail(email: string) {
  return await prisma.user.findUnique({
    where: { email },
  });
}

export async function createUserByCredentials(data: {
  name: string;
  email: string;
  password: string;
}) {
  const hashedPassword = await hashPassword(data.password);
  return await prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
    },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
    },
  });
}
