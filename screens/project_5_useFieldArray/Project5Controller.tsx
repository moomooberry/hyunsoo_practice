import ViewFive from "./Project5View";
import { useFieldArray, useForm } from "react-hook-form";

export interface IItemPrice {
  item: {
    product: string;
    price: number | null;
  }[];
}

const ControllerFive = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<IItemPrice>({
    defaultValues: {
      item: [{ product: "", price: null }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "item",
  });
  const onClickAdd = () => append({ product: "", price: null });

  const onValid = (data: IItemPrice) => {
    console.log(data.item);
  };

  const inValid = () => {
    console.log("recheck the form");
  };

  const onRemove = (index: number) => {
    remove(index);
  };

  console.log(errors.item);
  return (
    <ViewFive
      fields={fields}
      register={register}
      onClickAdd={onClickAdd}
      handleSubmit={() => handleSubmit(onValid, inValid)}
      onValid={onValid}
      inValid={inValid}
      onRemove={onRemove}
      errors={errors}
    />
  );
};

export default ControllerFive;
