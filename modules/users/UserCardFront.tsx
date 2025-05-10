import { IUsersResponse } from "@/types/users";
import { MapPin } from "lucide-react";

type UserCardFrontProps = {
  user: IUsersResponse;
};

export const UserCardFront = ({ user }: UserCardFrontProps) => {
  return (
    <div className="absolute w-full h-full bg-white rounded-xl shadow-md p-4 [backface-visibility:hidden]">
      <h2 className="text-lg font-bold">{user.name}</h2>
      <p className="text-sm text-gray-600">@{user.username}</p>
      <p className="text-sm text-blue-600">{user.email}</p>
      <p className="text-xs mt-2 text-gray-500 flex items-center">
        <MapPin size={16} className="text-red-600" /> {user.address.city},{" "}
        {user.address.street}
      </p>
      <p className="text-xs text-gray-400 mt-4">Click to flip</p>
    </div>
  );
};
