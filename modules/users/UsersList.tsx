"use client";
import { Spinner } from "@/components/common/ui/Spinner";
import { useGetUsersQuery } from "@/store/users/usersService";
import { UserCard } from "./UserCard";
import FilterForm from "./FilterForm";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const UsersList = () => {
  const filter = useSelector((state: RootState) => state.filter.filter);
  const { data, isLoading } = useGetUsersQuery(filter, {});

  console.log(data);
  if (isLoading) return <Spinner />;
  return (
    <div>
      <div>
        <p className="text-[25px] font-semibold">Users</p>
        <FilterForm users={data ?? []} />
      </div>

      <div className="flex flex-col gap-5 md:flex-row md:flex-wrap">
        {data?.map((item) => (
          <UserCard user={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
