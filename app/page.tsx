import { UsersList } from "@/modules/users/UsersList";

export default function Home() {
  return (
    <div className="p-2.5 md:p-[30px]">
      <UsersList />
    </div>
  );
}
