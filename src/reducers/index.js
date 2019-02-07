import { combineReducers } from "redux";
import { todoFilter } from "./filter";
import { todoActions } from "./todo";

export const todoReducers = combineReducers({
	todos: todoActions,
	filter: todoFilter
});
