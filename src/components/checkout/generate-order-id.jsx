export default function GenerateOrderId() {
	const timestamp = new Date().getTime()
	const random = Math.floor(Math.random() * 90 + 10)
	return `ORDER${timestamp}${random}`
}
