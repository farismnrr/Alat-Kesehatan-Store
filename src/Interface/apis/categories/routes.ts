import type { ServerRoute } from "@hapi/hapi";
import CategoryHandler from "./handler";

const routes = (handler: CategoryHandler): ServerRoute[] => [
	{
		method: "POST",
		path: "/categories",
		handler: handler.postCategoryHandler
	},
	{
		method: "GET",
		path: "/categories",
		handler: handler.getCategoriesHandler
	},
	{
		method: "GET",
		path: "/categories/{id}",
		handler: handler.getCategoryByIdHandler
	},
	{
		method: "PUT",
		path: "/categories/{id}",
		handler: handler.putCategoryHandler
	},
	{
		method: "DELETE",
		path: "/categories/{id}",
		handler: handler.deleteCategoryHandler
	}
];

export default routes;
