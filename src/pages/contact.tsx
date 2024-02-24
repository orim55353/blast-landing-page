"use client";

import { FieldErrors, useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import { Input, TextArea } from "@/components/Input";
import { sf } from "@/pages/index";
import Button from "@/components/Button";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

function displayErrorMessage(
  errors: FieldErrors<FormData>,
  name: "name" | "email" | "message"
) {
  if (!errors[name]) return;
  return <ErrorMessage>{errors[name]?.message}</ErrorMessage>;
}

function isEmailValid(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetFormValues,
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    resetFormValues();
  }

  return (
    <Main className={sf.className}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Full Name</label>
          <Input
            type="text"
            placeholder="Full Name"
            {...register("name", { required: "Please add your full name" })}
          />
          {displayErrorMessage(errors, "name")}
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <Input
            type="email"
            placeholder="example@domain.com"
            {...register("email", {
              required: "Please enter a valid email",
              validate: {
                validEmail: (value) =>
                  isEmailValid(value) || "Invalid email format",
              },
            })}
          />
          {displayErrorMessage(errors, "email")}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <TextArea
            rows={4}
            placeholder="Your message..."
            {...register("message", { required: "Please add a message" })}
          ></TextArea>
          {displayErrorMessage(errors, "message")}
        </div>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Main>
  );
}

const Main = styled.main`
  padding: 160px 64px 64px;

  ${({ theme }) => css`
    @media ${theme.breakpoints.minTablet} {
      min-height: calc(100vh - 365px);
    }
  `}

  > form {
    max-width: ${({ theme }) => theme.pageOptions.maxWidth};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

const ErrorMessage = styled.span`
  display: block;
  color: #e8115f;
  padding-top: 4px;
`;
