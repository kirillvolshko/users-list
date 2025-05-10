import { IUsersResponse } from "@/types/users";
import { Building, Earth, Mail, Phone } from "lucide-react";

type UserCardBackProps = {
  user: IUsersResponse;
};

export const UserCardBack = ({ user }: UserCardBackProps) => {
  return (
    <div className="absolute w-full h-full bg-blue-100 rounded-xl shadow-md p-4 [backface-visibility:hidden] [transform:rotateY(180deg)]">
      <h3 className="font-semibold flex items-center">
        <Building size={18} className="text-blue-500" /> {user.company.name}
      </h3>
      <p className="italic text-sm">&quot;{user.company.catchPhrase}&quot;</p>
      <p className="text-xs text-gray-600">{user.company.bs}</p>
      <div className="mt-4 text-sm">
        <p className="flex items-center gap-1">
          <Phone size={16} className="text-red-500" /> {user.phone}
        </p>
        <p className="flex items-center gap-1">
          <Earth size={16} className="text-blue-300" /> {user.website}
        </p>
        <p className="flex items-center gap-1">
          <Mail size={16} className="text-amber-900" /> {user.address.zipcode}
        </p>
      </div>
    </div>
  );
};
