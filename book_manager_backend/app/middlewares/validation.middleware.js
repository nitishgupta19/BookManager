// Validation Middleware
export default function validation(schema) {
	return async function (req, res, next) {
		try {
			let result;
			if (req.method === "POST") {
				result = await schema.validateAsync(req.body);
			} else if (req.method === "GET") {
				result = await schema.validateAsync(req.query);
			} else if (req.method === "PUT") {
				result = await schema.validateAsync(req.body);
			}
			next();
		} catch (error) {
			console.log("Error", error);
			res.status(400).json({
				success: 0,
				message: "error",
				error: "Validation failed",
			});
		}
	};
}
