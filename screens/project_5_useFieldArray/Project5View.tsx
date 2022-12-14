import {
  FieldErrorsImpl,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import styled from "styled-components";
import { IItemPrice } from "./Project5Controller";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 50px;
  width: 600px;
  background-color: rgb(181, 237, 208);
  margin-bottom: 20px;
  text-align: center;
  border-radius: 30px;
`;
const InputContainer = styled.div`
  width: 600px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #92ceee;
`;
const InputItem = styled.input`
  width: 200px;
  height: 30px;
  margin-left: 5px;
  margin-right: 5px;
`;
const InputPrice = styled.input`
  width: 200px;
  height: 30px;
  margin-left: 5px;
  margin-right: 5px;
`;

const DeleteButton = styled.div`
  width: 50px;
  height: 30px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const RegSubButtonContainer = styled.div`
  display: flex;
  justify-content: right;
`;
const RegisterButton = styled.div`
  width: 50px;
  height: 30px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const SubmitButton = styled.button`
  width: 50px;
  height: 30px;
  background-color: #2a8bd6;
  cursor: pointer;
`;

const ViewFive = ({
  fields,
  register,
  onClickAdd,
  handleSubmit,
  onValid,
  inValid,
  onRemove,
  errors,
}: {
  fields: Record<"id", string>[];
  register: UseFormRegister<IItemPrice>;
  onClickAdd: () => void;
  handleSubmit: UseFormHandleSubmit<IItemPrice>;
  onValid: (data: IItemPrice) => void;
  inValid: () => void;
  onRemove: (index: number) => void;
  errors: Partial<
    FieldErrorsImpl<{
      item: {
        product: string;
        price: number;
      }[];
    }>
  >;
}) => {
  return (
    <div>
      <Container>
        <Title>Item and Price register</Title>
        <form onSubmit={handleSubmit(onValid, inValid)}>
          {fields.map((field, index) => {
            return (
              <>
                <InputContainer key={field.id}>
                  ??????:
                  <InputItem
                    placeholder="?????????"
                    {...register(`item.${index}.product`, {
                      required: {
                        message: "???????????? ???????????????.",
                        value: true,
                      },
                    })}
                  />
                  ??????:
                  <InputPrice
                    type="number"
                    placeholder="??????"
                    {...register(`item.${index}.price`, {
                      required: {
                        message: "????????? ???????????????.",
                        value: true,
                      },
                      min: {
                        message: "1000??? ????????? ???????????????.",
                        value: 1000,
                      },
                      // 10?????????, 1000??? ??????, ?????? ????????? ?????? ?????? ??????????????? ?????????, max 10??????
                      // ??? ????????? ??? ???????????? submit?????? ?????????
                      // ????????? ??? ?????????!!
                    })}
                  />
                  <DeleteButton onClick={() => onRemove(index)}>-</DeleteButton>
                </InputContainer>
                <span>{}</span>
              </>
            );
          })}
          <RegSubButtonContainer>
            <RegisterButton onClick={onClickAdd}>+</RegisterButton>
            <SubmitButton type="submit">Sub</SubmitButton>
          </RegSubButtonContainer>
        </form>
      </Container>
    </div>
  );
};

export default ViewFive;
