"use client"
import React from "react";
import {Form, Input, Select, SelectItem, Checkbox, Button, Textarea} from "@nextui-org/react";
import { CiMail } from "react-icons/ci";
export default function ContactForm() {
  
  const [submitted, setSubmitted] = React.useState(null);
  const [errors, setErrors] = React.useState({});



  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    // Custom validation checks
    const newErrors = {};

    
    


    // Username validation
    if (data.name === "admin") {
      newErrors.name = "Nice try! Choose a different username";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }

    if (data.terms !== "true") {
      setErrors({terms: "Please accept the terms"});

      return;
    }

    // Clear errors and submit
    setErrors({});
    setSubmitted(data);
  };

  return (
    <Form
      className="xl:w-[500px]  w-full justify-center items-center max-xl:mx-auto  space-y-4"
      validationBehavior="native"
      validationErrors={errors}
      onReset={() => setSubmitted(null)}
      onSubmit={onSubmit}
    >
      <div className="flex w-full flex-col gap-7  max-xl:items-center">
        <Input
          isRequired
          errorMessage={({validationDetails}) => {
            if (validationDetails.valueMissing) {
              return "Please enter your name";
            }

            return errors.name;
          }}
          label="Your Name"
          labelPlacement="outside"
          name="name"
          placeholder="Enter your name"
          className=""
        />

        <Input
          isRequired
          errorMessage={({validationDetails}) => {
            if (validationDetails.valueMissing) {
              return "Please enter your email";
            }
            if (validationDetails.typeMismatch) {
              return "Please enter a valid email address";
            }
          }}
         
          label="Your E-mail"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
        />

       

         {/* Budget */}
         <Select
           
            label="Your Budget"
            labelPlacement="outside"
            placeholder="Select your budget"
            name="budget"
          >
            <SelectItem key="1k-3k" value="1k-3k">
              1k-3k
            </SelectItem>
            <SelectItem key="3k-5k" value="3k-5k">
              3k-5k
            </SelectItem>
            <SelectItem key="5k+" value="5k+">
              5k+
            </SelectItem>
          </Select>

          <Textarea className="w-full" label="Tell me a bit more what you are looking for?"  labelPlacement="outside"  />


        <div className="flex gap-4">
          <Button className="px-6 py-4 h-full text-lg font-semibold text-BlackPrimary bg-Gradient rounded-full"  type="submit">
          Sumbit now
          </Button>
         
        </div>
      </div>

      {submitted && (
        <div className="text-small text-default-500 mt-4">
          Submitted data: <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </Form>
  );
}

