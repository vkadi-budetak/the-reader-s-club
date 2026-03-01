import { getServerSession } from "next-auth";
import Image from "next/image";

const Profile = async () => {
  const session = await getServerSession();
  if (!session) {
    return <div>Please Sign In</div>;
  }
  return (
    <div>
      <h1>{session.user?.name}</h1>
      <p>{session.user?.email}</p>
      <Image
        src={session.user?.image || ""}
        alt={session.user?.name || ""}
        width={24}
        height={24}
        unoptimized
        className="rounded-full"
      />
    </div>
  );
};

export default Profile;
