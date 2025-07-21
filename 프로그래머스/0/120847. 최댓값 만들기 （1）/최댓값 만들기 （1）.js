function solution(numbers) {
    numbers.sort((a, b) => b - a); // 내림차순 정렬
    return numbers[0] * numbers[1]; // 가장 큰 두 수 곱해서 반환
}
