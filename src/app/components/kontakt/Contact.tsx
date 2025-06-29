"use client";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <section className="m-auto w-full lg:w-8/12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-auto flex flex-col gap-4 mt-8"
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input
          placeholder="Imię"
          {...register("example")}
          className="rounded-xl bg-gray-200 py-3 px-5 text-black outline-none"
        />

        <input
          placeholder="Nazwisko"
          {...register("example")}
          className="rounded-xl bg-gray-200 py-3 px-5 outline-none"
        />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          {...register("exampleRequired", { required: true })}
          className="rounded-xl bg-gray-200 py-3 px-5 outline-none"
          placeholder="E-mail"
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <input
          {...register("exampleRequired", { required: true })}
          className="rounded-xl bg-gray-200 py-3 px-5 outline-none"
          placeholder="Numer telefonu"
        />
        <textarea
          name="message"
          id=""
          cols={30}
          rows={10}
          placeholder="Twoja wiadomość"
          className="rounded-xl bg-gray-200 py-3 pl-4 resize-none outline-none"
        ></textarea>
        <input
          type="submit"
          className="bg-main rounded-xl py-2 text-lg text-white cursor-pointer hover:scale-105 transition duration-200"
          value={"Wyślij"}
        />
      </form>
    </section>
  );
}
