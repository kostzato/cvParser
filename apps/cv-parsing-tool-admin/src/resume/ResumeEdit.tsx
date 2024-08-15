import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ParsedDataTitle } from "../parsedData/ParsedDataTitle";

export const ResumeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
