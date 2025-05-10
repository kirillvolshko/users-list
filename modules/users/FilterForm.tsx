"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import SelectField from "@/components/common/fields/SelectField";
import filterSchema from "./schema/filterSchema";
import { IUsersResponse } from "@/types/users";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserFilter, resetUserFilter } from "@/store/filter/filterSlice";

type FormValues = z.infer<typeof filterSchema>;

const FilterForm = ({ users }: { users: IUsersResponse[] }) => {
  const dispatch = useDispatch();

  const form = useForm<FormValues>({
    resolver: zodResolver(filterSchema),
    defaultValues: { name: "" },
  });

  const value = form.watch("name");

  useEffect(() => {
    if (value) {
      dispatch(setUserFilter({ name: value }));
    } else {
      dispatch(setUserFilter({}));
    }
  }, [value, dispatch]);

  const handleReset = () => {
    dispatch(resetUserFilter());
    form.reset({ name: "" });
  };

  const usersOptions =
    users?.map((user) => ({
      label: user.name,
      value: user.name,
    })) ?? [];

  return (
    <div>
      <Form {...form}>
        <form className="flex gap-5 items-end">
          <SelectField
            control={form.control}
            name="name"
            label="User name"
            placeholder="Select user name"
            options={usersOptions}
          />
          <Button
            type="button"
            onClick={handleReset}
            className="mb-2 hover:cursor-pointer"
          >
            Reset Filter
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FilterForm;
