"use client";
import { IUsersResponse } from "@/types/users";
import { useState } from "react";
import { UserCardFront } from "./UserCardFront";
import { UserCardBack } from "./UserCardBack";

type UserCardProps = {
  user: IUsersResponse;
};

export const UserCard = ({ user }: UserCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-[320px] h-[220px] [perspective:1000px] cursor-pointer"
      onClick={() => setFlipped((prev) => !prev)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <UserCardFront user={user} />
        <UserCardBack user={user} />
      </div>
    </div>
  );
};
