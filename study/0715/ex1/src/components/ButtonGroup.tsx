export default function ButtonGroup() {
  return (
    <div className="flex justify-center mt-10 space-x-2">
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">홈</button>
      <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">소개</button>
      <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">연락</button>
    </div>
  )
}