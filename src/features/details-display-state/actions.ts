import { createAction } from "@reduxjs/toolkit";

export const showCompleteState = createAction("display/complete");
export const showEditState = createAction("display/edit");
export const showDetailsState = createAction("display/details");
export const showAddState = createAction("display/add");

export enum DetailState {
  complete = "COMPLETE",
  details = "DETAILS",
  edit = "EDIT",
  add = "ADD",
}
