import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ResumeTitle } from "../resume/ResumeTitle";

export const ParsedDataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <div />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="name" source="name" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <ReferenceInput source="resume.id" reference="Resume" label="resume">
          <SelectInput optionText={ResumeTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Edit>
  );
};
