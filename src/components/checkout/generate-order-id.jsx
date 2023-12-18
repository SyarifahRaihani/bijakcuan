export default function GenerateOrderId(paket) {
	const currentDate = new Date()
	const year = currentDate.getFullYear()
	const month = String(currentDate.getMonth() + 1).padStart(2, "0")
	const day = String(currentDate.getDate()).padStart(2, "0")

	const timestamp = String(currentDate.getTime()).slice(-4)
	const random = Math.floor(Math.random() * 90 + 10)

	return `BC-${paket}-${year}${month}${day}-${timestamp}${random}`
}
