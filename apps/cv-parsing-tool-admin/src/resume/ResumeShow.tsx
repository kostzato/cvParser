import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { RESUME_TITLE_FIELD } from "./ResumeTitle";

export const ResumeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="file" source="file" />
        <TextField label="ID" source="id" />
        <TextField label="resumeId" source="resumeId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ParsedData"
          target="resumeId"
          label="ParsedDataItems"
        >
          <Datagrid rowClick="show">
            <TextField label="address" source="address" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="education" source="education" />
            <TextField label="email" source="email" />
            <TextField label="ID" source="id" />
            <TextField label="lastName" source="lastName" />
            <TextField label="name" source="name" />
            <TextField label="phoneNumber" source="phoneNumber" />
            <ReferenceField
              label="resume"
              source="resume.id"
              reference="Resume"
            >
              <TextField source={RESUME_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="workExperience" source="workExperience" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
