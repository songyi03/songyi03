export default function CardGrid() {
    return (
    <div className="grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="p-4 border rounded shadow bg-white">
        <div className="text-3xl">🌱</div>
        <h3 className="text-lg font-bold mt-2">식물 가꾸기</h3>
        <p className="text-sm text-gray-600">매일 물을 주세요.</p>
      </div>
      <div className="p-4 border rounded shadow bg-white">
        <div className="text-3xl">📅</div>
        <h3 className="text-lg font-bold mt-2">캘린더</h3>
        <p className="text-sm text-gray-600">일정을 기록해요.</p>
      </div>
      <div className="p-4 border rounded shadow bg-white">
        <div className="text-3xl">💬</div>
        <h3 className="text-lg font-bold mt-2">커뮤니티</h3>
        <p className="text-sm text-gray-600">자유롭게 이야기 나눠요.</p>
      </div>
    </div>
  );
}