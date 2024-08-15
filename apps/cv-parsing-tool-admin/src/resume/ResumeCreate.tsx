import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ParsedDataTitle } from "../parsedData/ParsedDataTitle";

export const ResumeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceArrayInput
          source="parsedDataItems"
          reference="ParsedData"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ParsedDataTitle} />
        </ReferenceArrayInput>
        <TextInput label="resumeId" source="resumeId" />
      </SimpleForm>
    </Create>
  );
};
