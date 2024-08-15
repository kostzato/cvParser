import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RESUME_TITLE_FIELD } from "../resume/ResumeTitle";

export const ParsedDataList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ParsedDataItems"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="resume" source="resume.id" reference="Resume">
          <TextField source={RESUME_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="workExperience" source="workExperience" />
      </Datagrid>
    </List>
  );
};
