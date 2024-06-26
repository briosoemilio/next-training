import { getServerSession } from "next-auth";
import FollowClient from "./FollowClient";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface Props {
  targetUserId: string;
}

const FollowButton = async ({ targetUserId }: Props) => {
  const session = await getServerSession(authOptions);
  console.log({ session });

  const currentUserId = await prisma.user
    .findUnique({ where: { email: session?.user?.email! } })
    .then((user) => user?.id!);

  const isFollowing = await prisma.follows.findFirst({
    where: { followerId: currentUserId, followingId: targetUserId },
  });

  return (
    <FollowClient targetUserId={targetUserId} isFollowing={!!isFollowing} />
  );
};

export default FollowButton;
