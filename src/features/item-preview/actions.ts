import { createAction } from "@reduxjs/toolkit";
import { ShopItem } from "../content";

export const addItemToPreview = createAction<ShopItem>("preview/add");
