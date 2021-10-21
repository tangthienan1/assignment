import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@mui/material/Input";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router";
const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  height: 370px;
  width: 30vw;
`;
const ButtonWrapper = styled.div`
  margin: 0 auto;
  margin-top: 27px;
  width: 50%;
  height: 40px;
  &:hover input {
    transform: translateY(-20%);
  }
`;
const Button = styled.input`
  border-radius: 10px;
  border: none;
  background-color: black;
  color: white;
  height: 100%;
  width: 100%;
  transition: 0.25s;
`;
const Error = styled.p`
  color: red;
`;
const styles = (theme) => ({
  input: {
    borderBottom: "1px solid",
  },
});
const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user, setUser] = useState({});
  const history = useHistory();
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `https://6164054db55edc00175c1cc9.mockapi.io/v1/auth/1`
      );
      setUser(result);
    }
    fetchData();
    console.log("user", user);
  }, []);
  const onSubmit = (data) => {
    if (
      data.account === user.data.username &&
      data.password === user.data.password
    ) {
      history.push(`homepage`);
    } else {
    }
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="account"
          control={control}
          rules={{
            required: true,
          }}
          defaultValue=""
          render={({ field }) => (
            <>
              <p>Account:</p>
              <Input style={styles.input} {...field} />
            </>
          )}
        />
        {errors.account && <Error>This is required.</Error>}
        <Controller
          name="password"
          control={control}
          rules={{
            required: true,
          }}
          defaultValue=""
          render={({ field }) => (
            <>
              <p>Password:</p>
              <Input type="password" style={styles.input} {...field} />
            </>
          )}
        />
        {errors.password && <Error>This is required.</Error>}

        <ButtonWrapper>
          <Button type="submit" value="Submit" />
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};
export default LoginForm;
